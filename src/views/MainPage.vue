<template>
  <div>
    <MainContentCardComponent
      v-if="animeContent"
      :animeContent="animeContent"
      @expand="expandView"
      @refresh="fetchNewContent"
    />
    <ExpandedViewComponent
      v-if="isExpanded"
      :animeContent="animeContent"
      @close="closeView"
    />
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';
import MainContentCardComponent from '../components/MainContentCardComponent.vue';
import ExpandedViewComponent from '../components/ExpandedViewComponent.vue';

export default {
  name: 'MainPage',
  components: {
    MainContentCardComponent,
    ExpandedViewComponent
  },
  data() {
    return {
      isExpanded: false
    };
  },
  computed: {
    ...mapState(['animeContent'])
  },
  methods: {
    ...mapActions(['getToken', 'getAnimeContent']),
    async fetchNewContent() {
      await this.getAnimeContent();
    },
    // eslint-disable-next-line
    expandView(content) {
      this.isExpanded = true;
    },
    closeView() {
      this.isExpanded = false;
    }
  },
  async created() {
    await this.getToken('sanketk092@gmail.com');
    await this.fetchNewContent();
  }
};
</script>

<style scoped>
/* Add your styles here */
</style>
