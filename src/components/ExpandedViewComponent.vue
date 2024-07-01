<template>
  <div>
    <b-modal v-model="localIsExpanded" @hidden="handleModalHidden" hide-footer hide-header>
      <div class="image-container mb-3 text-center position-relative">
        <b-img :src="animeContent.mainImage" fluid class="expanded-img"></b-img>
        <span class="update-text">MAJOR UPDATE</span>
        <b-card-title class="anime-content-title">{{ animeContent.title }}</b-card-title>
      </div>
      <!-- Row containing logo, title, subtitle, and refresh button -->
      <b-row class="align-items-center px-3">
        <b-col cols="auto">
          <b-img class="logo-img" :src="animeContent.logo"></b-img>
        </b-col>
        <b-col>
          <b-card-title class="anime-title">{{ animeContent.title }}</b-card-title>
          <b-card-text class="anime-subtitle">{{ animeContent.subTitle }}</b-card-text>
        </b-col>
        <b-col cols="auto" class="in-app">
          <b-button pill class="refresh-button" @click="handleRefreshClick">REFRESH</b-button>
          <b-card-text class="in-app-text">In-App Purchases</b-card-text>
        </b-col>
      </b-row>
      <hr class="hr-line"/>
      <div>
        <!-- Anime content text -->
        <div class="mx-3" v-html="animeContent.text"></div>
        <!-- Footer section with additional logo, title, subtitle, and refresh button -->
        <div class="footer-section text-center py-4">
          <b-img class="footer-logo-img mb-2" :src="animeContent.logo"></b-img>
          <b-card-title class="anime-title mb-2">{{ animeContent.title }}</b-card-title>
          <b-card-text class="anime-subtitle mb-4">{{ animeContent.subTitle }}</b-card-text>
          <b-button pill class="refresh-content-btn mb-1" @click="handleRefreshClick">REFRESH</b-button>
          <b-card-text class="in-app-text">In-App Purchases</b-card-text>
        </div>
        <!-- Share options section -->
        <div class="text-center my-5">
          <div v-if="showShareOptions" class="share-options mb-2">
            <b-button class="share-option" @click="shareOnWhatsApp">
              <b-icon icon="whatsapp" class="mr-2"></b-icon> WhatsApp
            </b-button>
            <b-button class="share-option" @click="shareByEmail">
              <b-icon icon="envelope-fill" class="mr-2"></b-icon> Email
            </b-button>
            <b-button class="share-option" @click="shareOnTwitter">
              <b-icon icon="twitter" class="mr-2"></b-icon> Twitter
            </b-button>
            <b-button class="share-option" @click="shareOnFacebook">
              <b-icon icon="facebook" class="mr-2"></b-icon> Facebook
            </b-button>
          </div>
          <b-button size="sm" class="share-story-btn" @click="toggleShareOptions">
            <b-icon icon="upload"/>
            <span class="ms-2">Share Story</span>
          </b-button>
        </div>
      </div>
      <b-icon icon="x-circle-fill" font-scale="2.3" class="x-btn" @click="handleCloseClick"></b-icon>
    </b-modal>
  </div>
</template>

<script>
export default {
  props: ['animeContent', 'isExpanded'],
  data() {
    return {
      localIsExpanded: this.isExpanded,
      showShareOptions: false
    };
  },
  watch: {
    // Watcher to update local state when prop changes
    isExpanded(newVal) {
      this.localIsExpanded = newVal;
    }
  },
  methods: {
    // Method to handle modal close button click
    handleCloseClick() {
      this.localIsExpanded = false;
    },
    // Emit close event when modal is hidden
    handleModalHidden() {
      this.$emit('close');
    },
    // Emit refresh event to refresh content
    handleRefreshClick() {
      this.$emit('refresh');
    },
    // Toggle the visibility of share options
    toggleShareOptions() {
      this.showShareOptions = !this.showShareOptions;
    },
    shareByEmail() {
      const subject = encodeURIComponent(`Check out this anime: ${this.animeContent.title}`);
      const body = encodeURIComponent(`Hey,\n\nI wanted to share this anime with you: ${this.animeContent.title}\n\n${this.animeContent.subTitle}\n\n${this.animeContent.text}\n\nBest,\n[Your Name]`);
      window.location.href = `mailto:?subject=${subject}&body=${body}`;
    },
    shareOnWhatsApp() {
      const text = encodeURIComponent(`Check out this anime: ${this.animeContent.title} - ${this.animeContent.subTitle}`);
      window.open(`https://wa.me/?text=${text}`, '_blank');
    },
    shareOnTwitter() {
      const text = encodeURIComponent(`Check out this anime: ${this.animeContent.title} - ${this.animeContent.subTitle}`);
      window.open(`https://twitter.com/intent/tweet?text=${text}`, '_blank');
    },
    shareOnFacebook() {
      const url = encodeURIComponent(window.location.href);
      const text = encodeURIComponent(`Check out this anime: ${this.animeContent.title}`);
      window.open(`https://www.facebook.com/sharer/sharer.php?u=${url}&quote=${text}`, '_blank');
    }
  }
};
</script>

<style scoped>
.image-container {
  width: 100%;
  position: relative;
  @media screen and (min-width: 1000px) {
    width: 50%;
    margin-top: 1rem !important;
    margin: 0 auto;
  }
}

.expanded-img {
  width: 100%;
  max-height: 60vh;
  object-fit: cover;
  @media screen and (min-width: 1000px) {
    border-radius: 20px;
  }
}

.hr-line {
  border: 1px solid black !important;
}

.x-btn {
  color: white;
  background: black;
  border-radius: 40px;
  position: fixed;
  top: 10px;
  right: 20px;
}

.update-text {
  color: #e4e4e4e3;
  font-size: 18px;
  font-weight: 500;
  position: absolute;
  top: 20px;
  left: 20px;
}

.anime-content-title {
  color: #fefefe;
  font-size: 36px;
  position: absolute;
  top: 40px;
  left: 20px;
}

.footer-section {
  background: #e3e3e3cf;
}

.refresh-content-btn {
  background-color: #0000ffcc;
  color: #e8e8e8ef;
  font-weight: 700;
  border: none;
}

.refresh-content-btn:hover, .refresh-content-btn:active {
  background-color: #0000c5cc !important;
  color: #ccccccef !important;
  font-weight: 700;
  border: none;
}

.footer-logo-img {
  height: 100px;
  width: 100px;
  object-fit: cover;
  border-radius: 15px;
}

.share-story-btn {
  background-color: #e3e3e3cf;
  color: #0000ffcc;
  font-weight: 700;
  border: none;
  padding: 16px 24px;
}

.share-story-btn:hover, .share-story-btn:active {
  background-color: #c2c2c2cf !important;
  color: #0000e3cc !important;
}

.share-options {
  display: flex;
  justify-content: center;
  gap: 10px;
  margin-top: 10px;
}

.share-option {
  background-color: #f0f0f0;
  color: #333;
  border: none;
}

.share-option:hover, .share-option:active {
  background-color: #e0e0e0 !important;
}
</style>
