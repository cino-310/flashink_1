/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateMessage = /* GraphQL */ `
  subscription OnCreateMessage($filter: ModelSubscriptionMessageFilterInput) {
    onCreateMessage(filter: $filter) {
      id
      messageCd
      content
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateMessage = /* GraphQL */ `
  subscription OnUpdateMessage($filter: ModelSubscriptionMessageFilterInput) {
    onUpdateMessage(filter: $filter) {
      id
      messageCd
      content
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteMessage = /* GraphQL */ `
  subscription OnDeleteMessage($filter: ModelSubscriptionMessageFilterInput) {
    onDeleteMessage(filter: $filter) {
      id
      messageCd
      content
      createdAt
      updatedAt
    }
  }
`;
export const onCreateInk = /* GraphQL */ `
  subscription OnCreateInk($filter: ModelSubscriptionInkFilterInput) {
    onCreateInk(filter: $filter) {
      id
      colorCd
      order
      toolbarID
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateInk = /* GraphQL */ `
  subscription OnUpdateInk($filter: ModelSubscriptionInkFilterInput) {
    onUpdateInk(filter: $filter) {
      id
      colorCd
      order
      toolbarID
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteInk = /* GraphQL */ `
  subscription OnDeleteInk($filter: ModelSubscriptionInkFilterInput) {
    onDeleteInk(filter: $filter) {
      id
      colorCd
      order
      toolbarID
      createdAt
      updatedAt
    }
  }
`;
export const onCreateToolBar = /* GraphQL */ `
  subscription OnCreateToolBar($filter: ModelSubscriptionToolBarFilterInput) {
    onCreateToolBar(filter: $filter) {
      id
      isInk1Visible
      isInk2Visible
      isInk3Visible
      currentFontSize
      currentColorCd
      currentDrawingMode
      Inks {
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateToolBar = /* GraphQL */ `
  subscription OnUpdateToolBar($filter: ModelSubscriptionToolBarFilterInput) {
    onUpdateToolBar(filter: $filter) {
      id
      isInk1Visible
      isInk2Visible
      isInk3Visible
      currentFontSize
      currentColorCd
      currentDrawingMode
      Inks {
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteToolBar = /* GraphQL */ `
  subscription OnDeleteToolBar($filter: ModelSubscriptionToolBarFilterInput) {
    onDeleteToolBar(filter: $filter) {
      id
      isInk1Visible
      isInk2Visible
      isInk3Visible
      currentFontSize
      currentColorCd
      currentDrawingMode
      Inks {
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const onCreateNotePen = /* GraphQL */ `
  subscription OnCreateNotePen($filter: ModelSubscriptionNotePenFilterInput) {
    onCreateNotePen(filter: $filter) {
      id
      xPosition
      yPosition
      penSize
      colorCd
      contentID
      noteitemID
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateNotePen = /* GraphQL */ `
  subscription OnUpdateNotePen($filter: ModelSubscriptionNotePenFilterInput) {
    onUpdateNotePen(filter: $filter) {
      id
      xPosition
      yPosition
      penSize
      colorCd
      contentID
      noteitemID
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteNotePen = /* GraphQL */ `
  subscription OnDeleteNotePen($filter: ModelSubscriptionNotePenFilterInput) {
    onDeleteNotePen(filter: $filter) {
      id
      xPosition
      yPosition
      penSize
      colorCd
      contentID
      noteitemID
      createdAt
      updatedAt
    }
  }
`;
export const onCreateNoteText = /* GraphQL */ `
  subscription OnCreateNoteText($filter: ModelSubscriptionNoteTextFilterInput) {
    onCreateNoteText(filter: $filter) {
      id
      xPosition
      yPosition
      fontSize
      colorCd
      content
      order
      noteitemID
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateNoteText = /* GraphQL */ `
  subscription OnUpdateNoteText($filter: ModelSubscriptionNoteTextFilterInput) {
    onUpdateNoteText(filter: $filter) {
      id
      xPosition
      yPosition
      fontSize
      colorCd
      content
      order
      noteitemID
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteNoteText = /* GraphQL */ `
  subscription OnDeleteNoteText($filter: ModelSubscriptionNoteTextFilterInput) {
    onDeleteNoteText(filter: $filter) {
      id
      xPosition
      yPosition
      fontSize
      colorCd
      content
      order
      noteitemID
      createdAt
      updatedAt
    }
  }
`;
export const onCreateNoteItem = /* GraphQL */ `
  subscription OnCreateNoteItem($filter: ModelSubscriptionNoteItemFilterInput) {
    onCreateNoteItem(filter: $filter) {
      id
      title
      createDate
      createTime
      updateDate
      updateTime
      accountID
      NoteTexts {
        nextToken
      }
      NotePens {
        nextToken
      }
      ToolBar {
        id
        isInk1Visible
        isInk2Visible
        isInk3Visible
        currentFontSize
        currentColorCd
        currentDrawingMode
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
      noteItemToolBarId
    }
  }
`;
export const onUpdateNoteItem = /* GraphQL */ `
  subscription OnUpdateNoteItem($filter: ModelSubscriptionNoteItemFilterInput) {
    onUpdateNoteItem(filter: $filter) {
      id
      title
      createDate
      createTime
      updateDate
      updateTime
      accountID
      NoteTexts {
        nextToken
      }
      NotePens {
        nextToken
      }
      ToolBar {
        id
        isInk1Visible
        isInk2Visible
        isInk3Visible
        currentFontSize
        currentColorCd
        currentDrawingMode
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
      noteItemToolBarId
    }
  }
`;
export const onDeleteNoteItem = /* GraphQL */ `
  subscription OnDeleteNoteItem($filter: ModelSubscriptionNoteItemFilterInput) {
    onDeleteNoteItem(filter: $filter) {
      id
      title
      createDate
      createTime
      updateDate
      updateTime
      accountID
      NoteTexts {
        nextToken
      }
      NotePens {
        nextToken
      }
      ToolBar {
        id
        isInk1Visible
        isInk2Visible
        isInk3Visible
        currentFontSize
        currentColorCd
        currentDrawingMode
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
      noteItemToolBarId
    }
  }
`;
export const onCreateAccount = /* GraphQL */ `
  subscription OnCreateAccount($filter: ModelSubscriptionAccountFilterInput) {
    onCreateAccount(filter: $filter) {
      id
      mailAddress
      NoteItems {
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateAccount = /* GraphQL */ `
  subscription OnUpdateAccount($filter: ModelSubscriptionAccountFilterInput) {
    onUpdateAccount(filter: $filter) {
      id
      mailAddress
      NoteItems {
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteAccount = /* GraphQL */ `
  subscription OnDeleteAccount($filter: ModelSubscriptionAccountFilterInput) {
    onDeleteAccount(filter: $filter) {
      id
      mailAddress
      NoteItems {
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
