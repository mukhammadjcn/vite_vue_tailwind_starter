import { createStore } from "vuex";

// Create a new store instance.
const store = createStore({
  state() {
    return {
      count: 0,
    };
  },
  getters: {
    getCount: (state) => {
      return state.count;
    },
  },
  mutations: {
    increment(state) {
      state.count++;
    },
  },
  actions: {
    incrementCount(context) {
      context.commit("increment");
    },
  },
});

export default store;
