/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createMessage = /* GraphQL */ `
  mutation CreateMessage(
    $input: CreateMessageInput!
    $condition: ModelMessageConditionInput
  ) {
    createMessage(input: $input, condition: $condition) {
      id
      messageCd
      content
      createdAt
      updatedAt
    }
  }
`;
export const updateMessage = /* GraphQL */ `
  mutation UpdateMessage(
    $input: UpdateMessageInput!
    $condition: ModelMessageConditionInput
  ) {
    updateMessage(input: $input, condition: $condition) {
      id
      messageCd
      content
      createdAt
      updatedAt
    }
  }
`;
export const deleteMessage = /* GraphQL */ `
  mutation DeleteMessage(
    $input: DeleteMessageInput!
    $condition: ModelMessageConditionInput
  ) {
    deleteMessage(input: $input, condition: $condition) {
      id
      messageCd
      content
      createdAt
      updatedAt
    }
  }
`;
export const createInk = /* GraphQL */ `
  mutation CreateInk(
    $input: CreateInkInput!
    $condition: ModelInkConditionInput
  ) {
    createInk(input: $input, condition: $condition) {
      id
      colorCd
      order
      toolbarID
      createdAt
      updatedAt
    }
  }
`;
export const updateInk = /* GraphQL */ `
  mutation UpdateInk(
    $input: UpdateInkInput!
    $condition: ModelInkConditionInput
  ) {
    updateInk(input: $input, condition: $condition) {
      id
      colorCd
      order
      toolbarID
      createdAt
      updatedAt
    }
  }
`;
export const deleteInk = /* GraphQL */ `
  mutation DeleteInk(
    $input: DeleteInkInput!
    $condition: ModelInkConditionInput
  ) {
    deleteInk(input: $input, condition: $condition) {
      id
      colorCd
      order
      toolbarID
      createdAt
      updatedAt
    }
  }
`;
export const createToolBar = /* GraphQL */ `
  mutation CreateToolBar(
    $input: CreateToolBarInput!
    $condition: ModelToolBarConditionInput
  ) {
    createToolBar(input: $input, condition: $condition) {
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
export const updateToolBar = /* GraphQL */ `
  mutation UpdateToolBar(
    $input: UpdateToolBarInput!
    $condition: ModelToolBarConditionInput
  ) {
    updateToolBar(input: $input, condition: $condition) {
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
export const deleteToolBar = /* GraphQL */ `
  mutation DeleteToolBar(
    $input: DeleteToolBarInput!
    $condition: ModelToolBarConditionInput
  ) {
    deleteToolBar(input: $input, condition: $condition) {
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
export const createNotePen = /* GraphQL */ `
  mutation CreateNotePen(
    $input: CreateNotePenInput!
    $condition: ModelNotePenConditionInput
  ) {
    createNotePen(input: $input, condition: $condition) {
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
export const updateNotePen = /* GraphQL */ `
  mutation UpdateNotePen(
    $input: UpdateNotePenInput!
    $condition: ModelNotePenConditionInput
  ) {
    updateNotePen(input: $input, condition: $condition) {
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
export const deleteNotePen = /* GraphQL */ `
  mutation DeleteNotePen(
    $input: DeleteNotePenInput!
    $condition: ModelNotePenConditionInput
  ) {
    deleteNotePen(input: $input, condition: $condition) {
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
export const createNoteText = /* GraphQL */ `
  mutation CreateNoteText(
    $input: CreateNoteTextInput!
    $condition: ModelNoteTextConditionInput
  ) {
    createNoteText(input: $input, condition: $condition) {
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
export const updateNoteText = /* GraphQL */ `
  mutation UpdateNoteText(
    $input: UpdateNoteTextInput!
    $condition: ModelNoteTextConditionInput
  ) {
    updateNoteText(input: $input, condition: $condition) {
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
export const deleteNoteText = /* GraphQL */ `
  mutation DeleteNoteText(
    $input: DeleteNoteTextInput!
    $condition: ModelNoteTextConditionInput
  ) {
    deleteNoteText(input: $input, condition: $condition) {
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
export const createNoteItem = /* GraphQL */ `
  mutation CreateNoteItem(
    $input: CreateNoteItemInput!
    $condition: ModelNoteItemConditionInput
  ) {
    createNoteItem(input: $input, condition: $condition) {
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
export const updateNoteItem = /* GraphQL */ `
  mutation UpdateNoteItem(
    $input: UpdateNoteItemInput!
    $condition: ModelNoteItemConditionInput
  ) {
    updateNoteItem(input: $input, condition: $condition) {
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
export const deleteNoteItem = /* GraphQL */ `
  mutation DeleteNoteItem(
    $input: DeleteNoteItemInput!
    $condition: ModelNoteItemConditionInput
  ) {
    deleteNoteItem(input: $input, condition: $condition) {
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
export const createAccount = /* GraphQL */ `
  mutation CreateAccount(
    $input: CreateAccountInput!
    $condition: ModelAccountConditionInput
  ) {
    createAccount(input: $input, condition: $condition) {
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
export const updateAccount = /* GraphQL */ `
  mutation UpdateAccount(
    $input: UpdateAccountInput!
    $condition: ModelAccountConditionInput
  ) {
    updateAccount(input: $input, condition: $condition) {
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
export const deleteAccount = /* GraphQL */ `
  mutation DeleteAccount(
    $input: DeleteAccountInput!
    $condition: ModelAccountConditionInput
  ) {
    deleteAccount(input: $input, condition: $condition) {
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
