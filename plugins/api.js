const axios = require('axios')

export default class Api {
  static http = axios.create({
    baseURL: 'https://aluguei-backend.herokuapp.com/api',
    headers: {
      device: 'mobile'
    }
  })

  static removeEmptyValues(q) {
    return Object.fromEntries(Object.entries(q).filter(([_, v]) => !!v))
  }

  static async _call({ path, method = 'get', headers = {}, query = {} }) {
    const authorization = window.localStorage.getItem('auth._token.local')

    const sanatizedHeaders = this.removeEmptyValues(headers)
    const sanatizedQuery = this.removeEmptyValues(query)

    if (['post', 'put'].includes(method))
      return await this.http[method](
        path,
        {},
        {
          headers: { ...sanatizedHeaders, authorization },
          params: sanatizedQuery
        }
      )
    else
      return await this.http[method](path, {
        headers: { ...sanatizedHeaders, authorization },
        params: sanatizedQuery
      })
  }

  static async getAvailableProducts(query = {}) {
    const { data } = await this._call({ path: '/products/available', query })
    return data
  }

  static async getOwnedProducts(query = {}) {
    const { data } = await this._call({ path: '/products/owned', query })
    return data
  }

  static async setOwnedProducts() {
    const { data } = await this._call({ path: '/products/owned' })
    return data
  }

  static async rentProduct(id) {
    const { data } = await this._call({
      path: `/products/${id}/rent`,
      method: 'post'
    })
    return data
  }

  static async setProduct(form) {
    const { data } = await this._call({
      path: '/products',
      method: 'post',
      headers,
      query: form
    })
    return data
  }
}
