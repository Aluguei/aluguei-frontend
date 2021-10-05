<template>
  <div>
    <!-- <div v-if="$auth.loggedIn">
      {{$auth.user.email}}
    </div>
     <div v-else>
      <p class="color-white">Não logado</p>
    </div> -->
    <Nuxt />
  </div>
</template>

<script>
export default {
  // middleware: 'auth',
  data() {
    return {};
  },
};
</script>
