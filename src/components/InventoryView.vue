<template>
  <DashboardLayout>
    <InventoryManager />
  </DashboardLayout>
</template>

<script>
import InventoryManager from '../components/InventoryManager.vue';
import DashboardLayout from '../components/DashboardLayout.vue';

export default {
  components: {
    InventoryManager,
    DashboardLayout,
  },
};
</script>
