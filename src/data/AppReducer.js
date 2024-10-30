export default function AppReducer(state, action) {
  console.log("Current state:", state);
  console.log("Action received:", action);
  console.log("Action received:", action);

  switch (action.type) {
    case "edit":
      return state;
    case "rate":
      return {
        ...state,
        rating: action.rating,
      };
    case "delete":
      return state;
    default:
      return state;
  }
}
