<template>
  <SearchBar @termChange="onTermChange"></SearchBar>
</template>

<script>
import SearchBar from "./components/SearchBar";
import axios from "axios";
const API_KEY = "AIzaSyBS1FgoMwdOQM_fHTvbKXKcP2MfFj4zN-8";

export default {
  name: "App",
  components: {
    SearchBar
  },
  methods: {
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
        .then(res => console.log(res));
    }
  }
};
</script>

<style lang="scss">
</style>