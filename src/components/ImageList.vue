<template>
  <div class="container">
    <img v-for="image in allImages" :src="image.link" :key="image.key" />
  </div>
</template>
<script>
import { mapActions, mapGetters } from "vuex";

export default {
  name: "ImageList",
  computed: mapGetters(["allImages"]),
  methods: mapActions(["fetchImages"]),
  created() {
    this.fetchImages();
  }
};
</script>

<style scoped>
.container {
  width: 100%;
  display: flex;
  justify-content: center;
}
img {
  height: 500px;
}
</style>