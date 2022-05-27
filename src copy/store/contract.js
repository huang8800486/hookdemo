export default {
  state: {
    name: "Alan",
  },
  reducer(state, action) {
    return {
      CHNAGENAME: this.changeName(state, action),
    };
  },
  changeName(state, action) {
    console.log("changeName", action);
    let name = state.name === "Alan" ? "Tao" : "Alan";
    return {
      ...state,
      name: action.name,
    };
  },
};
