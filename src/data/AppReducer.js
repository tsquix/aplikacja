export default function AppReducer(state, action) {
  console.log("Current state:", state);
  console.log("Action received:", action);

  switch (action.type) {
    case "add":
      return [
        ...(Array.isArray(state) ? state : []),
        {
          id: state.length + 1,
          name: action.payload.name,
          year: action.payload.year,
          registrationNumber: action.payload.registrationNumber,
          rating: action.payload.rating,
        },
      ];
    case "edit":
      return state.map((item) =>
        item.id === action.id
          ? {
              ...item,
              name: action.name,
              year: action.year,
              registrationNumber: action.registrationNumber,
              rating: action.rating,
            }
          : item
      );
    case "rate":
      return state.map((item) =>
        item.id === action.id ? { ...item, rating: action.rating } : item
      );
    case "delete":
      return state.filter((item) => item.id !== action.id);

    default:
      return state;
  }
}
