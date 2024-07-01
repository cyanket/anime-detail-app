import Vue from 'vue';
import Vuex from 'vuex';
import { fetchToken, fetchAnimeContent } from '../services/apiService';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    token: '',
    animeContent: null
  },
  mutations: {
    setToken(state, token) {
      state.token = token;
    },
    setAnimeContent(state, content) {
      state.animeContent = content;
    }
  },
  actions: {
    async getToken({ commit }, email) {
      const token = await fetchToken(email);
      commit('setToken', token);
    },
    async getAnimeContent({ commit, state }) {
      if (!state.token) {
        throw new Error('Token not available');
      }
      const content = await fetchAnimeContent(state.token);
      commit('setAnimeContent', content);
    }
  }
});
