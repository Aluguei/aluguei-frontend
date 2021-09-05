<template>
  <v-footer  class='d-flex flex-column justify-center align-center'>
    <div  class='footer-card text-justify d-flex flex-column justify-center align-center'>
      Mussum Ipsum, cacilds vidis litro abertis. Interessantiss quisso pudia ce receita de bolis, mais bolis eu num
      gostis. Diuretics paradis num copo é motivis de denguis. Posuere libero varius. Nullam a nisl ut ante blandit
      hendrerit. Aenean sit amet nisi. Interagi no mé, cursus quis, vehicula ac nisi.

      Suco de cevadiss, é um leite divinis, qui tem lupuliz, matis, aguis e fermentis. Mauris nec dolor in eros commodo
      tempor. Aenean aliquam molestie leo, vitae iaculis nisl. Suco de cevadiss deixa as pessoas mais interessantis. Per
      aumento de cachacis, eu reclamis.
      <strong>{{ new Date().getFullYear() }} — Aluguei</strong>
    </div>
  </v-footer>
</template>

<script>
export default {
  name: 'Footer'
}
</script>

<style scoped>
.footer-card {
  padding: 2em 0;
  max-width: 1000px;
}
</style>
