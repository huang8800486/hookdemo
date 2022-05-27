export const optionsState = {
  count: 0,
  name: "Alan",
};
export function optionsReducer(state, action) {
  switch (action.type) {
    case "increment":
      return (() => {
        return {
          ...state,
          count: state.count + 1,
        };
      })();
    case "decrement":
      return (() => {
        return {
          ...state,
          count: state.count - 1,
        };
      })();
    default:
      throw new Error();
  }
}
