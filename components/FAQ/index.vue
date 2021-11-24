<template>
  <div class="content-layout">
    <div class="bg-white rounded-xl my-16 fade-in-animation">
      <h2 class="text-center color-black">Dúvidas Frequentes</h2>
      <v-expansion-panels v-model="panel" multiple>
        <v-expansion-panel v-for="(item, i) in items" :key="i">
          <v-expansion-panel-header
            style="background-color: #3385d9; color: white; font-size: 17px"
            >{{ item.question }}</v-expansion-panel-header
          >
          <v-expansion-panel-content style="margin-top: 15px">
            {{ item.answer }}
          </v-expansion-panel-content>
        </v-expansion-panel>
      </v-expansion-panels>
    </div>
  </div>
</template>
<script>
export default {
  layout: 'main',
  data() {
    return {
      panel: [],
      items: [
        {
          question: 'O que é o Aluguei e o que oferece?',
          answer:
            'O Projeto Aluguei é uma plataforma capaz de gerenciar negociações de aluguel de produtos entre locatários e clientes. Para que essa demanda seja atendida, desenvolvemos um projeto na versão Web e Mobile e temos como missão conectar pessoas que possuem objetos das quais não utilizam mais ou então que são utilizados com pouca frequência, assim ajudamos pessoas que tem interesse em alugar esses bens para utilização momentânea, levando ao proprietário do produto uma renda extra adquirindo através dos seus equipamentos e também para quem tem interesse em utilizar por um periodo de tempo determinado. Com essa idéia acreditamos que conseguimos contribuir muito com milhares de pessoas.'
        },
        {
          question: 'Como consigo entrar em contato com o Anunciante?',
          answer:
            'Para entrar em contato com anunciante, no detalhe do produto que estiver interesse estará aparecendo o telefone da pessoa que criou o anúncio.'
        },
        {
          question: 'Como denunciar um anúncio?',
          answer:
            'Para denunciar um anúncio você irá precisar entrar em contato com nossa equipe técnica e explicar o motivo da denûncia para tomarmos a ação da situação.'
        },
        {
          question: 'Em caso de devolução, como funciona?',
          answer:
            'Para devolução, você entrará em contato com anunciante para marcar como deseja devolver.'
        },
        {
          question: 'Como eu fecho minha conta?',
          answer:
            'Para fechar sua contavocê irá precisar entrar em contato com nossa equipe técnica que realizaremos o encerramento da sua conta.'
        }
      ]
    }
  },
  methods: {
    all() {
      this.panel = [...Array(this.items).keys()].map((k, i) => i)
    },
    none() {
      this.panel = []
    }
  }
}
</script>
<style>
.v-expansion-panel-header__icon i {
  color: white !important;
}
</style>
