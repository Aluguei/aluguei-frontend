export const state = () => ({
    products: [],

})

export const actions = {
    async loadAll() {
        try {
            const products = await this.$axios.get('/products/available')
            products.map((product) => {
                return this.state.products.push(product)
            })
        } catch (error) {
            // eslint-disable-next-line no-console
            console.log(error)
        }
    }
}