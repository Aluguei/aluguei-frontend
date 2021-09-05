<template>
  <v-app-bar color='#1b6dc1' dark prominent style='position: relative;'>
    <v-app-bar-nav-icon @click='drawer = !drawer'></v-app-bar-nav-icon>

    <v-toolbar-title>Aluguei</v-toolbar-title>

    <v-spacer></v-spacer>

    <div>
<!--      <v-toolbar absolute style='top: 65%;left: 50%; transform: translateX(-50%)'>-->
<!--        <v-toolbar-items>-->
<!--&lt;!&ndash;          <v-btn v-for='link in links' :key='link.title' :to='link.url' text>&ndash;&gt;-->
<!--&lt;!&ndash;            <v-icon left>{{ link.icon }}</v-icon>&ndash;&gt;-->
<!--&lt;!&ndash;            {{ link.title }}&ndash;&gt;-->
<!--&lt;!&ndash;          </v-btn>&ndash;&gt;-->
<!--        </v-toolbar-items>-->
<!--      </v-toolbar>-->
    </div>
  </v-app-bar>
</template>

<script>
export default {
  name: 'Header'
}
</script>
