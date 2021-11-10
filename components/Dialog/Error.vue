<template>
  <div class="text-center">
    <v-dialog v-model="dialog" width="400">
      <v-card>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="primary" text @click="dialog = false">
            <v-icon style="color: black; font-size: 35px">mdi-close</v-icon>
          </v-btn>
        </v-card-actions>
        <v-card-title class="text-center" style="padding-top: 0">
          <div style="margin-left: auto; margin-right: auto">
            <v-icon style="color: #f00; font-size: 42px"
              >mdi-close-circle</v-icon
            >
          </div>
        </v-card-title>
        <v-card-text>
          <h3
            class="text-center"
            style="
              font-size: 35px;
              margin-bottom: 20px;
              margin-top: 10px;
              font-weight: bold;
              text-transform: uppercase;
              color: #f00;
            "
          >
            Erro
          </h3>
          <p class="text-center" style="font-size: 18px; color: #7d7d7d">
            Me desculpe, não foi possível ser executado.
          </p>
        </v-card-text>

        <v-divider></v-divider>
      </v-card>
    </v-dialog>
  </div>
</template>
<script>
export default {
  data() {
    return {
      dialog: true
    }
  }
}
</script>
