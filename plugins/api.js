const axios = require('axios')

export default class Api {
  static http = axios.create({
    baseURL: 'https://aluguei-backend.herokuapp.com/api',
    headers: {
      device: 'mobile'
    }
  })

  static async _call({ path, method = 'get', headers = {}, query = {} }) {
    const authorization = window.localStorage.getItem('auth._token.local')

    return await this.http[method](path, {
      headers: { ...headers, authorization },
      params: query
    })
  }

  static async getAvailableProducts(query = {}) {
    const { data } = await this._call({ path: '/products/available', query })
    return data
  }
}
