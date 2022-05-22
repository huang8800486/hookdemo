export default {
  state: {
    count: 0,
  },
  reducer(state, action) {
    switch (action.type) {
      case "increment":
        return { count: this.state.count + 1 };
      case "decrement":
        return { count: this.state.count - 1 };
      default:
        throw new Error();
    }
  },
};
// const Context = createContext();

// function useStore() {
//   return useContext(Context);
// }

// function StoreProvider({ children }) {
//   const [state, dispatch] = useReducer(reducer, initialState);

//   return (
//     <Context.Provider value={[state, dispatch]}>
//       {children}
//     </Context.Provider>
//   );
// }

// export { useStore, StoreProvider };
