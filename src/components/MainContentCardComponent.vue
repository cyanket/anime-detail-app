<template>
  <b-card class="content-card pointer">
    <b-img class="main-img" :src="animeContent.thumbNailImage" @click="openContent" fluid></b-img>
    <!-- Row containing logo, title, subtitle, and refresh button -->
    <b-row class="align-items-center mt-3 px-3">
      <b-col @click="openContent" cols="auto">
        <b-img class="logo-img" :src="animeContent.logo"></b-img>
      </b-col>
      <b-col @click="openContent">
        <b-card-title>{{ animeContent.title }}</b-card-title>
        <b-card-text>{{ animeContent.subTitle }}</b-card-text>
      </b-col>
      <b-col cols="auto" class="in-app">
        <b-button pill class="refresh-button" @click="handleRefreshClick">REFRESH</b-button>
        <b-card-text class="in-app-text">In-App Purchases</b-card-text>
      </b-col>
    </b-row>
  </b-card>
</template>

<script>
export default {
  // Props received from the parent component
  props: ['animeContent'],
  methods: {
    // Emit event to expand the view when the main image is clicked
    openContent() {
      this.$emit('expand', this.animeContent);
    },
    // Emit event to refresh the content
    handleRefreshClick() {
      this.$emit('refresh');
    }
  }
};
</script>

<style scoped>
.content-card {
  border-radius: 20px;
  box-shadow: 1px 12px 8px rgba(0, 0, 0, 0.1), 0px 14px 30px rgba(0, 0, 0, 0.1), 0px -4px 6px rgba(0, 0, 0, 0);
}

.content-card .card-body {
  padding-inline: 0;
  padding-top: 0;
}

.main-img {
  height: 370px;
  width: 100%;
  object-fit: cover;
  border-radius: 20px 20px 0 0;
}
</style>
