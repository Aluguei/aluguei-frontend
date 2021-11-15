export const state = () => ({
  name: '',
  description: '',
  price: '',
  category: '',
  timeUnit: '',
  timeQuantity: '',
  itemsTimeUnit: [
    { label: 'Hora', value: 'hourly' },
    { label: 'Dia', value: 'daily' },
    { label: 'Semana', value: 'weekly' },
  ],
  itemsCategory: [
    { label: 'Veiculos', value: 'vehicle' },
    { label: 'Tecnologia', value: 'technology' },
    { label: 'Ferramenta', value: 'tools' },
    { label: 'Esportes', value: 'sports' },
    { label: 'Moda', value: 'fashion' },
  ],
  money: {
    decimal: ',',
    thousands: '.',
    prefix: 'R$ ',
    suffix: ' #',
    precision: 2,
    masked: false,
  },
});

export const actions = {
  async setProduct(form) {
    const body = {
      name: form.state.name,
      price: parseInt(form.state.price),
      category: form.state.category,
      description: form.state.description,
      timeQuantity: parseInt(form.state.timeQuantity),
      timeUnit: form.state.timeUnit,
    };
    try {
      await this.$axios.post(
        'https://aluguei-backend.herokuapp.com/api/products',
        body
      );
      location.reload();
    } catch (error) {
      console.log(error);
    }
  },
};

export const mutations = {
  updateName(state, name) {
    state.name = name;
  },
  updateDescription(state, description) {
    state.description = description;
  },
  updatePrice(state, price) {
    state.price = price;
  },
  updateCategory(state, category) {
    state.category = category;
  },
  updateTimeUnit(state, timeUnit) {
    state.timeUnit = timeUnit;
  },
  updateTimeQuantity(state, timeQuantity) {
    state.timeQuantity = timeQuantity;
  },
};
