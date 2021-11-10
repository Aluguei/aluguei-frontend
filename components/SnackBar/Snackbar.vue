<template>
  <v-snackbar v-model="$props.snackbar" color="error">
    Erro. Tente Novamente! Não foi possível realizar o acesso.
    <template #action="{ attrs }">
      <v-btn text v-bind="attrs" @click="$props.snackbar = false">
        Fechar
      </v-btn>
    </template>
  </v-snackbar>
</template>
<script>
export default {
  props: ['snackbar']
}
</script>
