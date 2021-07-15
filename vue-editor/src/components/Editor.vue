<template>
  <div class="container">
    <nav class="toolbar-box"></nav>
    <textarea v-model="message" class="get-input"></textarea>
    <div class="output">
      {{ message }}
    </div>
  </div>
</template>

<script>
export default {
  name: "Editor",
  data() {
    return {
      message:
        "# This is h1\n## This is h2\n### This is h3\n>This is Quote\nThis is plain text",
    };
  },
};
</script>
