<template>
    <ProductList>
      <!-- Aquí, DashboardLayout tiene la funcionalidad de gestionar el inventario -->
    </ProductList>
  </template>
  
  <script>
  import ProductList from '@/components/ProductList.vue'; // Importa DashboardLayout
  
  export default {
    name: 'InventoryView',
    components: {
      ProductList,
    },
  };
  </script>
  