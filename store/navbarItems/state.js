const INIT_ITEMS = [
  { text: 'Home', link: '/', isActive: true },
  { text: 'Sobre Nós', link: 'sobre-nos' },
  { text: 'Meus Produtos', link: '/anunciar-produto' },
  { text: 'FAQ', link: '/faq' },
  { text: 'Fale Conosco', link: '/fale-conosco' }
]

export default () => ({
  items: INIT_ITEMS
})
