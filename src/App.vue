<template>
  <div class="container">
    <SearchBar @termChange="onTermChange"></SearchBar>
    <VideoList :videos="videos" @videoSelect="onVideoSelect"></VideoList>
  </div>
</template>

<script>
import axios from "axios";
import SearchBar from "./components/SearchBar";
import VideoList from "./components/VideoList";
const API_KEY = "AIzaSyBS1FgoMwdOQM_fHTvbKXKcP2MfFj4zN-8";

export default {
  name: "App",
  components: {
    SearchBar,
    VideoList
  },
  data() {
    return {
      videos: []
    };
  },
  methods: {
    onVideoSelect(video) {
      console.log("Video:", video);
    },
    onTermChange(searchTerm) {
      axios
        .get("https://www.googleapis.com/youtube/v3/search", {
          params: {
            key: API_KEY,
            type: "video",
            part: "snippet",
            q: searchTerm
          }
        })
        .then(res => {
          this.videos = res.data.items;
        });
    }
  }
};
</script>

<style lang="scss">
</style>