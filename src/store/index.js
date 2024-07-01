import Vue from 'vue';
import Vuex from 'vuex';
import { fetchToken, fetchAnimeContent } from '../services/apiService';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    token: '',
    animeContent: null,
    error: null
  },
  mutations: {
    setToken(state, token) {
      state.token = token;
    },
    setAnimeContent(state, content) {
      state.animeContent = content;
    },
    setError(state, error) {
      state.error = error;
    },
    clearError(state) {
      state.error = null;
    }
  },
  actions: {
    async getToken({ commit }, email) {
      try {
        commit('clearError');
        const token = await fetchToken(email);
        commit('setToken', token);
      } catch (error) {
        commit('setError', error.message);
      }
    },
    async getAnimeContent({ commit, state }) {
      if (!state.token) {
        commit('setError', 'Token not available');
        return;
      }
      try {
        commit('clearError');
        const content = await fetchAnimeContent(state.token);
        commit('setAnimeContent', content);
      } catch (error) {
        commit('setError', error.message);
      }
    }
  }
});
