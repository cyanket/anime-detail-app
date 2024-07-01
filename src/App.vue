<template>
  <div class="app-content py-3" id="app">
    <b-container>
      <!-- Row for displaying the current date and labels -->
      <b-row>
        <b-col>
          <div class="current-date">{{ currentDate }}</div>
          <div class="d-flex mb-1 justify-content-between">
            <div class="today-label">Today</div>
            <div class="vs-label">VS</div>
          </div>
        </b-col>
      </b-row>
      <b-row>
        <b-col>
          <b-alert v-if="error" variant="danger" show>{{ error }}</b-alert>
          <MainContentCardComponent
            v-if="animeContent"
            :animeContent="animeContent"
            @expand="expandView"
            @refresh="fetchNewContent"
          />
          <ExpandedViewComponent
            v-if="animeContent"
            :animeContent="animeContent"
            :isExpanded="isExpanded"
            @close="closeView"
            @refresh="fetchNewContent"
          />
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';
import MainContentCardComponent from './components/MainContentCardComponent.vue';
import ExpandedViewComponent from './components/ExpandedViewComponent.vue';

export default {
  name: 'App',
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
    // Map animeContent state from Vuex store to local computed property
    ...mapState(['animeContent', 'error']),
    // Computed property to format the current date
    currentDate() {
      const date = new Date();
      const options = { weekday: 'long', day: 'numeric', month: 'long' };
      return date.toLocaleDateString('en-GB', options).toUpperCase();
    }
  },
  methods: {
    // Map Vuex actions to local methods
    ...mapActions(['getToken', 'getAnimeContent']),
    // Method to fetch new content by calling the getAnimeContent action
    async fetchNewContent() {
      await this.getAnimeContent();
    },
    // Method to expand the view by setting isExpanded to true
    expandView(content) {
      this.isExpanded = true;
    },
    // Method to close the expanded view by setting isExpanded to false
    closeView() {
      this.isExpanded = false;
    }
  },
  // Lifecycle hook to fetch the token and initial content when the component is created
  async created() {
    await this.getToken('sanketk092@gmail.com');
    await this.fetchNewContent();
  }
};
</script>

<style scoped>
@media screen and (min-width: 1150px) {
  .app-content {
    padding-inline: 30%;
  }
}

.current-date {
  font-size: 1.2rem;
  font-family: system-ui;
  font-weight: 500;
  color: #707070;
}

.today-label {
  font-size: 2.3rem;
  font-weight: 700;
}

.vs-label {
  border-radius: 40px;
  background: #d5d5d5;
  padding: 6px;
  height: 50px;
  width: 50px;
  text-align: center;
  font-size: 25px;
  font-weight: 700;
}
</style>
