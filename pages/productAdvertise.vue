<template>
  <div class="content-layout">
    <div class="d-flex mb-7 mt-9">
      <div class="fb-80">
        <h3>Sua lista de produtos</h3>
      </div>
      <div class="fb-20">
        <AdvertiseProductModal />
      </div>
    </div>
    <ProductListOwned />
  </div>
</template>
<script>
export default {
  layout: 'main',
};
</script>
