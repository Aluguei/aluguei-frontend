<template>
  <v-app>
    <TopBar />
    <HeaderMain />
    <ProductDetails :id="$route.params.id" />
  </v-app>
</template>
