const axios = require('axios')

export default class Api {
  static http = axios.create({
    baseURL: 'https://aluguei-backend.herokuapp.com/api',
    headers: {
      device: 'mobile'
    }
  })

  static removeEmptyValues(q) {
    return Object.fromEntries(Object.entries(q).filter(([_, v]) => v != null))
  }

  static async _call({ path, method = 'get', headers = {}, query = {} }) {
    const authorization = window.localStorage.getItem('auth._token.local')

    const sanatizedHeaders = this.removeEmptyValues(headers)
    const sanatizedQuery = this.removeEmptyValues(query)

    return await this.http[method](path, {
      headers: { ...sanatizedHeaders, authorization },
      params: sanatizedQuery
    })
  }

  static async getAvailableProducts(query = {}) {
    const { data } = await this._call({ path: '/products/available', query })
    return data
  }

  static async getOwnedProducts() {
    const { data } = await this._call({ path: '/products/owned' })
    return data
  }

  static async setOwnedProducts() {
    const { data } = await this._call({ path: '/products/owned' })
    return data
  }
}
