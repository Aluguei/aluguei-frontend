<template>
  <div class="d-flex align-center justify-center container-box">
    <div class="content-box">
      <h2>Anunciar Produto</h2>
      <v-form ref="form" v-model="valid" lazy-validation>
        <v-card class="bs-none py-5 bg-gray mx-8">
          <v-icon>mdi-attachment</v-icon>
          <v-file-input prepend-icon clear-icon hide-details hide-input multiple label="+"></v-file-input>
        </v-card>
        <v-text-field v-model="name" :rules="nameRules" label="Nome" required></v-text-field>
        <v-text-field v-model="description" :rules="descriptionRules" label="Descrição" required></v-text-field>
        <v-btn class="mr-4 btn mt-10 color-white" type="submit"> Anunciar </v-btn>
      </v-form>
    </div>
  </div>
</template>
<script>
export default {
  data: () => ({
    name: null,
    description: null,
    emailConfirm: null,
  }),
};
</script>
