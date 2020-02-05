/* eslint-disable vue/valid-v-for */
<template>
  <ul class="list-group col-md-4">
    <VideoListItem
      v-for="video in videos"
      :key="video.key"
      :video="video"
      @videoSelect="onVideoSelect"
    ></VideoListItem>
  </ul>
</template>

<script>
import VideoListItem from "./VideoListItem";

export default {
  name: "VideoList",
  components: {
    VideoListItem
  },
  props: ["videos"],
  methods: {
    onVideoSelect(data) {
      this.$emit("videoSelect", data);
    }
  }
};
</script>

<style>
</style>