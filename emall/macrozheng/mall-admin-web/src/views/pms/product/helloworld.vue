<template>
  <!-- <product-detail :is-edit="false"></product-detail> -->
  <div>helloworld place holder</div>
</template>

<script>
import ProductDetail from "./components/ProductDetail";

export default {
  name: "showProduct",
  components: { ProductDetail }
};
</script>

<style scoped>
div {
  padding-top: 3rem;
  text-align: center;
  height: 100%;
}
</style>
