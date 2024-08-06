<template>
  <form ref="form" @submit.prevent="saveProduct" class="ma-auto mt-4">
    <v-text-field
      v-model="product.name"
      :rules="[(v) => !!v || 'Please enter the product name']"
      type="text"
      label="Product Name"
      variant="outlined"
      required
    ></v-text-field>

    <v-text-field
      v-model="product.price"
      :rules="[(v) => !!v || 'Please enter the product price']"
      type="number"
      label="Product Price"
      variant="outlined"
      required
    ></v-text-field>

    <v-file-input
      v-model="image"
      label="Product Image"
      accept="image/*"
      variant="outlined"
      prepend-icon=""
      prepend-inner-icon="mdi-paperclip"
      @change="onFileChange"
    ></v-file-input>

    <p>Product Description</p>
    <ckeditor
      v-model="product.description"
      id="description"
      :editor="editor"
      :config="editorConfig"
      ref="ckeditor"
    ></ckeditor>

    <v-btn
      type="submit"
      :loading="loading"
      :disabled="loading"
      class="d-flex align-center mt-4 mb-4"
      style="
        width: 100%;
        padding: 20px;
        letter-spacing: normal;
        font-weight: bold;
        font-size: 19px;
        background: var(--main-color);
        color: #fff;
      "
    >
      Save Product
    </v-btn>
  </form>
</template>

<script>
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import CKEditor from "@ckeditor/ckeditor5-vue";

export default {
  data() {
    return {
      product: {
        name: "",
        price: "",
        image: "",
        description: "",
      },
      image: null,
      loading: false,
      editor: ClassicEditor,
      charCount: 0,
      maxChars: 150,
      editorConfig: {
        language: {
          ui: "en",
          content: "en",
        },
      },
    };
  },
  methods: {
    saveProduct() {
      this.loading = true;
      // Generate a unique ID for the new product
      const newId = Date.now(); // or use another method to generate unique IDs

      // Add the new product with the generated ID
      const productWithId = { ...this.product, id: newId };

      // Get existing products from local storage
      let products = JSON.parse(localStorage.getItem("products")) || [];

      // Add the new product to the array
      products.push(productWithId);

      // Save back to local storage
      localStorage.setItem("products", JSON.stringify(products));

      // Reset form and close dialog
      this.resetForm();
      this.$emit("CloseDialog"); // Emit event to close dialog in parent
      this.loading = false;
    },
    resetForm() {
      this.product = {
        name: "",
        price: "",
        image: "",
        description: "",
      };
      this.$refs.form.reset();
    },
    async onFileChange(event) {
      const file = event.target.files[0];
      if (file) {
        this.product.image = this.image;
        // Convert file to a URL that can be used as an image source
        this.product.image = URL.createObjectURL(file);
        console.log(this.product.image);
      } else {
        this.product.image = null;
      }
    },
    updateCharCount() {
      this.charCount = this.product.description.length;

      // Limit the text length
      if (this.charCount > this.maxChars) {
        this.product.description = this.product.description.substring(
          0,
          this.maxChars
        );
        this.charCount = this.maxChars;
        this.$refs.ckeditor.editor.setData(this.product.description); // Update CKEditor content
      }
    },
  },
  watch: {
    "product.description": function (newValue) {
      if (newValue.length > this.maxChars) {
        this.product.description = newValue.substring(0, this.maxChars);
        this.charCount = this.maxChars;
        this.$refs.ckeditor.editor.setData(this.product.description); // Update CKEditor content
      } else {
        this.charCount = newValue.length;
      }
    },
  },
  components: {
    ckeditor: CKEditor.component,
  },
};
</script>
