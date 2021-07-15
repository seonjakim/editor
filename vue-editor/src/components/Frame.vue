<template>
  <div class="web-frame">
    <div class="frame-inner-container">
      <h1>Editor-vue</h1>
      <Editor />
    </div>
  </div>
</template>

<script>
import Editor from "./Editor.vue";
export default {
  name: "Frame",
  components: {
    Editor,
  },
};
</script>
