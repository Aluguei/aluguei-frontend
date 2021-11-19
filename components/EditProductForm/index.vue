<template>
  <div class="px-14">
    <h2 class="text-center">Editar Produto</h2>
    <v-form
      v-model="valid"
      @submit.prevent="
        submitForm({
          name,
          description,
          price,
          category,
          timeUnit,
          timeQuantity
        })
      "
    >
      <v-row>
        <v-col cols="12" sm="12" md="12">
          <v-text-field
            v-model="name"
            label="Nome"
            required
            :rules="nomeRules"
          />
        </v-col>
        <v-col cols="12" sm="12" md="12">
          <v-textarea
            v-model="description"
            label="Descrição"
            required
            :rules="descricaoRules"
          />
        </v-col>
        <v-col cols="12" sm="6" md="6">
          <v-select
            v-model="category"
            item-value="value"
            item-text="label"
            :items="itemsCategory"
            label="Categoria"
            required
          />
        </v-col>
        <v-col cols="12" sm="6" md="6">
          <v-text-field
            v-model="price"
            label="Valor"
            required
            :rules="valorRules"
          />
        </v-col>
        <v-col cols="12" sm="6" md="6">
          <v-text-field
            v-model="timeQuantity"
            label="Tempo"
            required
            :rules="tempoRules"
          />
        </v-col>
        <v-col cols="12" sm="6" md="6">
          <v-select
            v-model="timeUnit"
            item-value="value"
            item-text="label"
            :items="itemsTimeUnit"
            label="Por"
            required
          />
        </v-col>
      </v-row>
      <v-btn
        :loading="loading"
        :disabled="loading"
        class="btn color-white"
        type="submit"
      >
        Editar
      </v-btn>
    </v-form>
  </div>
</template>
<script>
import { mask } from 'vue-the-mask'
import { mapActions, mapGetters } from 'vuex'

export default {
  directives: { mask },
  data() {
    return {
      loading: false,
      valid: false,
      nomeRules: [(v) => !!v || 'Nome é obrigatório'],
      descricaoRules: [(v) => !!v || 'Descrição é obrigatório'],
      valorRules: [(v) => !!v || 'Valor é obrigatório'],
      tempoRules: [(v) => !!v || 'Tempo é obrigatório']
    }
  },
  computed: {
    ...mapGetters({
      isOwnedProductsLoading: 'products/getIsOwnedProductsLoading'
    }),
    name: {
      get() {
        return this.$store.state.formEditProduct.name
      },
      set(value) {
        this.$store.commit('formEditProduct/updateName', value)
      }
    },
    description: {
      get() {
        return this.$store.state.formEditProduct.description
      },
      set(value) {
        this.$store.commit('formEditProduct/updateDescription', value)
      }
    },
    price: {
      get() {
        return this.$store.state.formEditProduct.price
      },
      set(value) {
        this.$store.commit('formEditProduct/updatePrice', value)
      }
    },
    category: {
      get() {
        return this.$store.state.formEditProduct.category
      },
      set(value) {
        this.$store.commit('formEditProduct/updateCategory', value)
      }
    },
    timeUnit: {
      get() {
        return this.$store.state.formEditProduct.timeUnit
      },
      set(value) {
        this.$store.commit('formEditProduct/updateTimeUnit', value)
      }
    },
    timeQuantity: {
      get() {
        return this.$store.state.formEditProduct.timeQuantity
      },
      set(value) {
        this.$store.commit('formEditProduct/updateTimeQuantity', value)
      }
    },
    itemsTimeUnit: {
      get() {
        return this.$store.state.formEditProduct.itemsTimeUnit
      }
    },
    itemsCategory: {
      get() {
        return this.$store.state.formEditProduct.itemsCategory
      }
    },
    money: {
      get() {
        return this.$store.state.formEditProduct.money
      }
    }
  },

  async mounted() {
    this.products = await this.getOwnedProducts()
  },

  methods: {
    ...mapActions({
      getOwnedProducts: 'products/getOwnedProducts',
      setProduct: 'formEditProduct/setProduct',
      setSnackbar: 'snackbars/setSnackbar'
    }),

    async submitForm(form) {
      Object.assign(this, { loading: true })

      const body = {
        name: form.name,
        price: parseInt(form.price),
        category: form.category,
        description: form.description,
        timeQuantity: parseInt(form.timeQuantity),
        timeUnit: form.timeUnit
      }
      try {
        await this.$axios.post(
          'https://aluguei-backend.herokuapp.com/api/products',
          body
        )
        location.reload()
      } catch (error) {
        console.log(error)
      }
    }
  }
}
</script>
