import { getUserListApi } from "@/api";
export default {
  namespaced: true,
  state: {
    list: []
  },
  mutations: {
    updateList(state, data) {
      state.list = data;
    }
  },
  actions: {
    getList({ commit }) {
      return getUserListApi().then(res => {
        commit("updateList", res.data);
      });
    }
  },
  getters: {}
};
