import { useEffect, useState } from 'react';

import ActionButtonLogout from './customed-ui/ActionButtonLogout';
import ActionButtonNew from './customed-ui/ActionButtonNew';
import ActionButtonSetting from './customed-ui/ActionButtonSetting';
import CurrentInk from './customed-ui/CurrentInk';
import CurrentInkInput from './customed-ui/CurrentInkInput';
import CurrentDrawingModeInput from './customed-ui/CurrentDrawingModeInput';
import CurrentSizeInput from './customed-ui/CurrentSizeInput';
import FlashingInks from './customed-ui/FlashingInks';
import NoteItem from './customed-ui/NoteItem';
import NoteList from './customed-ui/NoteList';
import NoteView from './customed-ui/NoteView';
import SiteTitle from './customed-ui/SiteTitle';
import Switches from './customed-ui/Switches';
import TitleBar from './customed-ui/TitleBar';
import ToolBarBody from './customed-ui/ToolBarBody';
import ToolBarTitle from './customed-ui/ToolBarTitle';
import ErrorMessage from './customed-ui/ErrorMessage';
import WarningMessage from './customed-ui/WarningMessage';
import SuccessMessage from './customed-ui/SuccessMessage';

import { InkOrder } from './object/InkOrder';
import { TextOrder } from './object/TextOrder';
import { DefaultNoteItem } from './object/DefaultNoteItem';
import { DefaultNoteTexts } from './object/DefaultNoteTexts';
import { DefaultToolBar } from './object/DefaultToolBar';
import { DefaultInks } from './object/DefaultInks';

import { log } from './script/Logger';
import { fetchAccount } from './script/GetAccount';
import { fetchNoteItems, fetchNoteTexts, fetchToolBar, fetchInks } from './script/GetNoteInfo';
import { postNoteItem, postNoteTexts, postToolBar, postInks } from './script/PostNoteInfo';
import { putNoteItem, putNoteTexts, putToolBar, putInks } from './script/PutNoteInfo';
import { removeNoteItem, removeNoteTexts, removeToolBar, removeInks } from './script/DeleteNoteInfo';

import './css/App.css';

import { withAuthenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';

/* eslint  react-hooks/exhaustive-deps: 0 */
function App({ signOut, user }) {
  const mailAddress = user.attributes.email
  const [accountId, setAccountId] = useState("")
  const [notes, setNotes] = useState([])

  useEffect(() => {
    const initialize = async () => {
      fetchAccount(mailAddress).then((accountId) => {
        if (!accountId) return;

        fetchNoteItems(accountId).then((noteItems) => {
          setAccountId(accountId)
          setNotes(noteItems)
        });
      });
    };
    initialize()
  }, []);

  const [selectedNote, setSelectedNote] = useState(DefaultNoteItem)
  const setSelectedNoteHelper = (note) => {
    setSelectedNote({
      ...selectedNote,
      id: note.id,
      title: note.title,
      createDate: note.createDate,
      createTime: note.createTime,
      updateDate: note.updateDate,
      updateTime: note.updateTime,
      accountID: note.accountID
    })
  };

  const [selectedNoteTexts, setSelectedNoteTexts] = useState(DefaultNoteTexts)
  const getText = (text) => {
    return {
      id: text.id,
      xPosition: text.xPosition,
      yPosition: text.yPosition,
      fontSize: text.fontSize,
      colorCd: text.colorCd,
      content: text.content,
      order: text.order,
      noteitemID: text.noteitemID
    };
  };
  const setSelectedNoteTextHelper = (text) => {
    const key = TextOrder[text.order]
    selectedNoteTexts[key] = getText({ ...text, order: text.order })

    setSelectedNoteTexts([
      selectedNoteTexts[TextOrder.FIRST],
      selectedNoteTexts[TextOrder.SECOND],
      selectedNoteTexts[TextOrder.THIRD],
    ])
  };
  const setSelectedNoteTextsHelper = (texts) => {
    const firstText = getText(texts.filter(text => text.order === 'FIRST').at(0))
    const secondText = getText(texts.filter(text => text.order === 'SECOND').at(0))
    const thirdText = getText(texts.filter(text => text.order === 'THIRD').at(0))

    setSelectedNoteTexts([
      firstText,
      secondText,
      thirdText,
    ])
  };

  const [selectedToolBar, setSelectedToolBar] = useState(DefaultToolBar)
  const setSelectedToolBarHelper = (tool) => {
    setSelectedToolBar({
      ...selectedToolBar,
      id: tool.id,
      isInk1Visible: tool.isInk1Visible,
      isInk2Visible: tool.isInk2Visible,
      isInk3Visible: tool.isInk3Visible,
      currentFontSize: tool.currentFontSize,
      currentColorCd: tool.currentColorCd,
      currentDrawingMode: tool.currentDrawingMode,
    })
  };

  const [selectedInks, setSelectedInks] = useState(DefaultInks)
  const getInk = (ink) => {
    return {
      id: ink.id,
      colorCd: ink.colorCd,
      order: ink.order,
      toolbarID: ink.toolbarID
    };
  };
  const setSelectedInkHelper = (ink) => {
    const key = InkOrder[ink.order]
    selectedInks[key] = getInk({ ...ink, order: ink.order })

    setSelectedInks([
      selectedInks[InkOrder.FIRST],
      selectedInks[InkOrder.SECOND],
      selectedInks[InkOrder.THIRD]
    ])
  };
  const setSelectedInksHelper = (inks) => {
    const firstInk = getInk(inks.filter(ink => ink.order === 'FIRST').at(0))
    const secondInk = getInk(inks.filter(ink => ink.order === 'SECOND').at(0))
    const thirdInk = getInk(inks.filter(ink => ink.order === 'THIRD').at(0))

    setSelectedInks([
      firstInk,
      secondInk,
      thirdInk
    ])
  };

  const focusNoteItem = async (noteId) => {
    const noteItem = notes.find(note => note.id === noteId)
    if (!noteItem) {
      alert('NoteItem selecting failed')
      return;
    }

    await fetchNoteTexts(noteId).then(async (noteTexts) => {
      if (!noteTexts) return;

      await fetchToolBar(noteItem.noteItemToolBarId).then(async (toolBar) => {
        if (!toolBar) return;

        await fetchInks(noteItem.noteItemToolBarId).then((inks) => {
          if (!inks) return;

          setSelectedNoteHelper(noteItem)
          setSelectedNoteTextsHelper(noteTexts)
          setSelectedToolBarHelper(toolBar)
          setSelectedInksHelper(inks)
        });
      });
    });
  };

  const blurNoteInfo = () => {
    setSelectedNoteHelper(DefaultNoteItem)
    setSelectedNoteTextsHelper(DefaultNoteTexts)
    setSelectedToolBarHelper(DefaultToolBar)
    setSelectedInksHelper(DefaultInks)
  }

  const createNewNote = () => {
    blurNoteInfo()
  };

  const saveNoteInfo = async (noteInfo) => {
    // saveNoteInfo(noteItem/noteTexts/toolBar)
    if (noteInfo.noteItem.id) {
      putNoteInfo(noteInfo)
    } else {
      postNoteInfo(noteInfo)
    }
  }

  const postNoteInfo = async (noteInfo) => {
    // the order of saving is important because of generating ids of added tool/note 
    await postToolBar(noteInfo.toolBar).then(async (toolBar) => {
      await postNoteItem({
        title: noteInfo.noteItem.title,
        toolBarId: toolBar.id,
        accountID: accountId
      }).then(async (noteItem) => {
        if (!noteItem) return;

        await postNoteTexts({
          texts: selectedNoteTexts,
          noteId: noteItem.id,
        }).then(async (noteTexts) => {
          if (!noteTexts) return;

          await postInks(
            noteInfo.inks,
            toolBar.id
          ).then(async (inks) => {
            if (!inks) return;

            log(`noteInfo added`)
            setSelectedNoteHelper(noteItem)
            setNotes([...notes, noteItem])
            setSelectedNoteTextsHelper(noteTexts)
            setSelectedToolBarHelper(toolBar)
            setSelectedInksHelper(inks)
          });
        });
      });
    });
  };

  const putNoteInfo = async (noteInfo) => {
    await putNoteItem(noteInfo.noteItem).then(async (noteItem) => {
      if (!noteItem) return;

      await putNoteTexts(noteInfo.noteTexts).then(async (noteTexts) => {
        if (!noteTexts) return;

        await putToolBar(noteInfo.toolBar).then(async (toolBar) => {
          if (!toolBar) return;

          await putInks(noteInfo.inks).then((inks) => {
            if (!inks) return;

            log('noteInfo updated')
            const filteredNotes = notes.filter((note) => note.id !== noteItem.id)
            setNotes([...filteredNotes, noteItem])
            setSelectedInksHelper(inks)
          });
        });
      });
    });
  };

  const removeNoteInfo = async (noteInfo) => {
    await removeNoteItem(noteInfo.noteId).then(async (noteItemId) => {
      if (!noteItemId) return;

      await removeNoteTexts(noteInfo.textIds).then(async (noteTexts) => {
        if (!noteTexts) return;

        await removeToolBar(noteInfo.toolId).then(async (toolBar) => {
          if (!toolBar) return;

          await removeInks(noteInfo.inkIds).then((inks) => {
            if (!inks) return;

            const filteredNotes = notes.filter((note) => note.id !== noteInfo.noteId)
            setNotes(filteredNotes)
            blurNoteInfo()
          });
        });
      });
    });
  };

  return (
    <div className="App">
      <div className="AppSideBar">
        <SiteTitle />
        <div className='ActionButtonWrapper'>
          <ActionButtonLogout signOut={signOut} />
          <ActionButtonSetting />
          <ActionButtonNew
            onCreate={createNewNote}
          />
        </div>
        <div className='NoteListWrapper'>
          <NoteList
            className='note-list'
          />
          {notes.map((note) => (
            <NoteItem
              key={note.id}
              id={note.id}
              title={note.title}
              toolId={note.noteItemToolBarId}
              updateTime={`${note.updateDate} ${note.updateTime}`}
              onDelete={removeNoteInfo}
              onFocus={focusNoteItem}
            />
          ))}
        </div>
      </div>
      <div className='NoteViewerWrapper'>
        <TitleBar
          className='titlebar'
          noteInfo={selectedNote}
          textsInfo={selectedNoteTexts}
          toolInfo={selectedToolBar}
          inkInfo={selectedInks}
          onSaveNoteItem={saveNoteInfo}
        />
        <NoteView
          textsInfo={selectedNoteTexts}
          toolInfo={selectedToolBar}
          inkColors={selectedInks.map(ink => [ink.colorCd]).reduce((a, b) => a.concat(b))}
          setContent={setSelectedNoteTextHelper}
        />
        <ErrorMessage />
        <WarningMessage />
        <SuccessMessage />
      </div>
      <div className='ToolBarWrapper'>
        <ToolBarTitle />
        <ToolBarBody />
        <CurrentInk />
        <FlashingInks />
        <Switches
          ink1={selectedInks[InkOrder.FIRST]}
          ink2={selectedInks[InkOrder.SECOND]}
          ink3={selectedInks[InkOrder.THIRD]}
          tool={selectedToolBar}
          setTool={setSelectedToolBarHelper}
        />
        <CurrentInkInput
          tool={selectedToolBar}
          setToolInfo={setSelectedToolBarHelper}
          inks={selectedInks}
          setInkInfo={setSelectedInkHelper}
          texts={selectedNoteTexts}
          setTextInfo={setSelectedNoteTextHelper}
        />
        <CurrentSizeInput
          tool={selectedToolBar}
          setToolInfo={setSelectedToolBarHelper}
          currentText={selectedNoteTexts.filter(text => text.colorCd === selectedToolBar.currentColorCd).at(0)}
          setTextInfo={setSelectedNoteTextHelper}
        />
        <CurrentDrawingModeInput
          drawingMode={selectedToolBar.currentDrawingMode}
        />
      </div>
    </div>
  );
};

export default withAuthenticator(App)
