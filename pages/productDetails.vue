<template>
  <div>
    <TopBar />
    <HeaderMain />
    <ProductDetails :id="$route.params.id" />
  </div>
</template>
