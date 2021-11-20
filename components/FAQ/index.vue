<template>
  <div class="content-layout">
    <div class="bg-white rounded-xl my-16 fade-in-animation">
      <h2 class="text-center color-black">Dúvidas Frequentes</h2>
      <v-expansion-panels v-model="panel" multiple>
        <v-expansion-panel v-for="(item, i) in items" :key="i">
          <v-expansion-panel-header>Header {{ item }}</v-expansion-panel-header>
          <v-expansion-panel-content>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </v-expansion-panel-content>
        </v-expansion-panel>
      </v-expansion-panels>
    </div>
  </div>
</template>
<script>
export default {
  layout: 'main',
  data() {
    return {
      panel: [],
      items: 5
    }
  },
  methods: {
    all() {
      this.panel = [...Array(this.items).keys()].map((k, i) => i)
    },
    none() {
      this.panel = []
    }
  }
}
</script>
