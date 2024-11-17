const TableDataReducer = (state, action) => {
  switch (action.type) {
    case "userSortASC":
      return [...state].sort((a, b) => {
        const nameA = a.user.name;
        const nameB = b.user.name;
        return nameA.localeCompare(nameB);
      });
    case "userSortDESC":
      return [...state].sort((a, b) => {
        const nameA = a.user.name;
        const nameB = b.user.name;
        return nameB.localeCompare(nameA);
      });
    case "titleSortASC":
      return [...state].sort((a, b) => {
        const titleA = a.post.title;
        const titleB = b.post.title;
        return titleA.localeCompare(titleB);
      });
    case "titleSortDESC":
      return [...state].sort((a, b) => {
        const titleA = a.post.title;
        const titleB = b.post.title;
        return titleB.localeCompare(titleA);
      });
    case "commentsSortASC":
      return [...state].sort((a, b) => a.comments.length - b.comments.length);
    case "commentsSortDESC":
      return [...state].sort((a, b) => b.comments.length - a.comments.length);

    case "sortNATURAL":
      return action.payload;

    default:
      return state;
  }
};

export default TableDataReducer;
