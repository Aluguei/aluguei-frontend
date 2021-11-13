<template>
  <div v-if="isVisible" class="d-flex align-center justify-center">
    <div class="overlay">
      <img class="loadingImage" src="@/assets/img/logo/loading-logo.gif" />
    </div>
  </div>
</template>
<script>
import { mapGetters } from 'vuex'

export default {
  computed: {
    ...mapGetters({
      isVisible: 'loading/getIsVisible'
    })
  }
}
</script>

<style>
.overlay {
  background-color: #8080807a;
  height: 100%;
  width: 100%;
  z-index: 100;
  top: 0;
  left: 0;
  position: absolute;
}

.loadingImage {
  position: absolute;
  z-index: 100;
  top: 50vh;
  left: 50%;
  margin-top: -100px;
  margin-left: -50px;
  height: 100px;
  width: 100px;
  border-radius: 50%;
  border: 5px solid #fff;
}
</style>
