<template>
  <div class="app-content py-3" id="app">
    <b-container>
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
    ...mapState(['animeContent']),
    currentDate() {
      const date = new Date();
      const options = { weekday: 'long', day: 'numeric', month: 'long' };
      return date.toLocaleDateString('en-GB', options).toUpperCase();
    }
  },
  methods: {
    ...mapActions(['getToken', 'getAnimeContent']),
    async fetchNewContent() {
      await this.getAnimeContent();
    },
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
