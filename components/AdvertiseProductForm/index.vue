<template>
  <div class="px-14">
    <h2 class="text-center">Anunciar Produto</h2>
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
        Anunciar
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
        return this.$store.state.formProductAdvertise.name
      },
      set(value) {
        this.$store.commit('formProductAdvertise/updateName', value)
      }
    },
    description: {
      get() {
        return this.$store.state.formProductAdvertise.description
      },
      set(value) {
        this.$store.commit('formProductAdvertise/updateDescription', value)
      }
    },
    price: {
      get() {
        return this.$store.state.formProductAdvertise.price
      },
      set(value) {
        this.$store.commit('formProductAdvertise/updatePrice', value)
      }
    },
    category: {
      get() {
        return this.$store.state.formProductAdvertise.category
      },
      set(value) {
        this.$store.commit('formProductAdvertise/updateCategory', value)
      }
    },
    timeUnit: {
      get() {
        return this.$store.state.formProductAdvertise.timeUnit
      },
      set(value) {
        this.$store.commit('formProductAdvertise/updateTimeUnit', value)
      }
    },
    timeQuantity: {
      get() {
        return this.$store.state.formProductAdvertise.timeQuantity
      },
      set(value) {
        this.$store.commit('formProductAdvertise/updateTimeQuantity', value)
      }
    },
    itemsTimeUnit: {
      get() {
        return this.$store.state.formProductAdvertise.itemsTimeUnit
      }
    },
    itemsCategory: {
      get() {
        return this.$store.state.formProductAdvertise.itemsCategory
      }
    },
    money: {
      get() {
        return this.$store.state.formProductAdvertise.money
      }
    }
  },

  async mounted() {
    this.products = await this.getOwnedProducts()
  },

  methods: {
    ...mapActions({
      getOwnedProducts: 'products/getOwnedProducts',
      setProduct: 'formProductAdvertise/setProduct',
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
