export default {
  isVisible: false,
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
}
