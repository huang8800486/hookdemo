export default {
  state: {
    count: 0,
  },
  reducer(state) {
    return {
      INCREMENT: this.increment(state),
      DECREMENT: this.decrement(state),
    };
  },
  increment(state) {
    let value = state.count + 100;
    if (value > 1000) {
      value = 1000;
    }
    return {
      ...state,
      count: value,
    };
  },
  decrement(state) {
    let value = state.count - 100;
    if (value < 0) {
      value = 0;
    }
    return {
      ...state,
      count: value,
    };
  },
};
