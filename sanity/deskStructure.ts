export const myStructure = (S) =>
  S.list()
    .title("Base")
    .items([...S.documentTypeListItems().reverse()]);
