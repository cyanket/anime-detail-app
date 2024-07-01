<template>
  <b-card class="content-card">
    <b-img class="main-img" :src="animeContent.thumbNailImage" @click="handleImageClick" fluid></b-img>
    <b-row class="align-items-center mt-3 px-3">
      <b-col cols="auto">
        <b-img class="logo-img" :src="animeContent.logo"></b-img>
      </b-col>
      <b-col>
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
  props: ['animeContent'],
  methods: {
    handleImageClick() {
      this.$emit('expand', this.animeContent);
    },
    handleRefreshClick() {
      this.$emit('refresh');
    }
  }
};
</script>

<style scoped>
.content-card {
  height: 500px;
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
