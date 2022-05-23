export default {
  state: {
    instance: null,
  },
  reducer(state, action) {
    switch (action.type) {
      case "instance":
        return { instance: (state.instance = "12") };
      default:
        throw new Error();
    }
  },
};
