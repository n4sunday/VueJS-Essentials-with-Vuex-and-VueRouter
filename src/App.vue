<template>
  <SearchBar @termChange="onTermChange"></SearchBar>
</template>

<script>
import SearchBar from "./components/SearchBar";
export default {
  name: "App",
  components: {
    SearchBar
  },
  methods: {
    onTermChange(searchTerm) {
      console.log(searchTerm);
    }
  }
};
</script>

<style lang="scss">
</style>