<template>
  <Nuxt />
</template>

<script>
export default {
  middleware: 'auth',
  data() {
    return {};
  },
};
</script>
