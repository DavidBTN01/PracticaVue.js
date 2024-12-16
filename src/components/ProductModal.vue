<template>
    <v-dialog v-model="modalVisible" max-width="600px" persistent>
      <v-card>
        <v-card-title>
          <span class="text-h6">
            {{ editingProduct ? "Editar Producto" : "Añadir Producto" }}
          </span>
        </v-card-title>
        <v-card-text>
          <v-form ref="form" v-model="formValid">
            <v-container>
              <v-row>
                <v-col cols="12" sm="6">
                  <v-text-field
                    v-model="productData.name"
                    label="Nombre"
                    :rules="[rules.required]"
                  />
                </v-col>
                <v-col cols="12" sm="6">
                  <v-text-field
                    v-model="productData.price"
                    label="Precio"
                    type="number"
                    :rules="[rules.required, rules.isNumber]"
                  />
                </v-col>
                <v-col cols="12">
                  <v-textarea
                    v-model="productData.description"
                    label="Descripción"
                    :rules="[rules.required]"
                  />
                </v-col>
                <v-col cols="12" sm="6">
                  <v-text-field
                    v-model="productData.stock_quantity"
                    label="Cantidad en Stock"
                    type="number"
                    :rules="[rules.required, rules.isNumber]"
                  />
                </v-col>
                <v-col cols="12" sm="6">
                  <v-select
                    v-model="productData.category"
                    :items="categories"
                    label="Categoría"
                    :rules="[rules.required]"
                    item-text="name"
                    item-value="id"
                  />
                </v-col>
              </v-row>
            </v-container>
          </v-form>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="blue darken-1" text @click="closeModal">Cancelar</v-btn>
          <v-btn
            color="green darken-1"
            text
            :disabled="!formValid"
            @click="handleSave"
          >
            Guardar
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </template>
  
  <script>
  export default {
    props: {
      product: {
        type: Object,
        default: () => ({}),
      },
      categories: {
        type: Array,
        required: true,
      },
      editingProduct: {
        type: Object,
        default: null,
      },
    },
    data() {
      return {
        productData: { ...this.product },
        modalVisible: true,
        formValid: false,
        rules: {
          required: (value) => !!value || "Campo requerido",
          isNumber: (value) => !isNaN(value) || "Debe ser un número",
        },
      };
    },
    watch: {
      product(newValue) {
        this.productData = { ...newValue };
      },
    },
    methods: {
      closeModal() {
        this.$emit("close");
        this.modalVisible = false;
      },
      handleSave() {
        if (this.$refs.form.validate()) {
          this.$emit("save", this.productData);
          this.modalVisible = false;
        }
      },
    },
  };
  </script>
  
  <style scoped>
  </style>
  