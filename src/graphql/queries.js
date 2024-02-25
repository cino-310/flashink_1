/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getMessage = /* GraphQL */ `
  query GetMessage($id: ID!) {
    getMessage(id: $id) {
      id
      messageCd
      content
      createdAt
      updatedAt
    }
  }
`;
export const listMessages = /* GraphQL */ `
  query ListMessages(
    $filter: ModelMessageFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listMessages(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        messageCd
        content
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getInk = /* GraphQL */ `
  query GetInk($id: ID!) {
    getInk(id: $id) {
      id
      colorCd
      order
      toolbarID
      createdAt
      updatedAt
    }
  }
`;
export const listInks = /* GraphQL */ `
  query ListInks(
    $filter: ModelInkFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listInks(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        colorCd
        order
        toolbarID
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const inksByToolbarID = /* GraphQL */ `
  query InksByToolbarID(
    $toolbarID: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelInkFilterInput
    $limit: Int
    $nextToken: String
  ) {
    inksByToolbarID(
      toolbarID: $toolbarID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        colorCd
        order
        toolbarID
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getToolBar = /* GraphQL */ `
  query GetToolBar($id: ID!) {
    getToolBar(id: $id) {
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
export const listToolBars = /* GraphQL */ `
  query ListToolBars(
    $filter: ModelToolBarFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listToolBars(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
    }
  }
`;
export const getNotePen = /* GraphQL */ `
  query GetNotePen($id: ID!) {
    getNotePen(id: $id) {
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
export const listNotePens = /* GraphQL */ `
  query ListNotePens(
    $filter: ModelNotePenFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listNotePens(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
    }
  }
`;
export const notePensByNoteitemID = /* GraphQL */ `
  query NotePensByNoteitemID(
    $noteitemID: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelNotePenFilterInput
    $limit: Int
    $nextToken: String
  ) {
    notePensByNoteitemID(
      noteitemID: $noteitemID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
      nextToken
    }
  }
`;
export const getNoteText = /* GraphQL */ `
  query GetNoteText($id: ID!) {
    getNoteText(id: $id) {
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
export const listNoteTexts = /* GraphQL */ `
  query ListNoteTexts(
    $filter: ModelNoteTextFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listNoteTexts(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
    }
  }
`;
export const noteTextsByNoteitemID = /* GraphQL */ `
  query NoteTextsByNoteitemID(
    $noteitemID: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelNoteTextFilterInput
    $limit: Int
    $nextToken: String
  ) {
    noteTextsByNoteitemID(
      noteitemID: $noteitemID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
      nextToken
    }
  }
`;
export const getNoteItem = /* GraphQL */ `
  query GetNoteItem($id: ID!) {
    getNoteItem(id: $id) {
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
export const listNoteItems = /* GraphQL */ `
  query ListNoteItems(
    $filter: ModelNoteItemFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listNoteItems(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        title
        createDate
        createTime
        updateDate
        updateTime
        accountID
        createdAt
        updatedAt
        noteItemToolBarId
      }
      nextToken
    }
  }
`;
export const noteItemsByAccountID = /* GraphQL */ `
  query NoteItemsByAccountID(
    $accountID: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelNoteItemFilterInput
    $limit: Int
    $nextToken: String
  ) {
    noteItemsByAccountID(
      accountID: $accountID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        title
        createDate
        createTime
        updateDate
        updateTime
        accountID
        createdAt
        updatedAt
        noteItemToolBarId
      }
      nextToken
    }
  }
`;
export const getAccount = /* GraphQL */ `
  query GetAccount($id: ID!) {
    getAccount(id: $id) {
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
export const listAccounts = /* GraphQL */ `
  query ListAccounts(
    $filter: ModelAccountFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listAccounts(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        mailAddress
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
