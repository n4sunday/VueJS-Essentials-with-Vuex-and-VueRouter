/* eslint-disable vue/valid-v-for */
<template>
  <ul>
    <VideoListItem v-for="video in videos" :key="video.key" :video="video"></VideoListItem>
  </ul>
</template>

<script>
import VideoListItem from "./VideoListItem";

export default {
  name: "VideoList",
  components: {
    VideoListItem
  },
  props: ["videos"]
};
</script>

<style>
</style>