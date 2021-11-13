const axios = require('axios')

export default class Api {
  static http = axios.create({
    baseURL: 'https://aluguei-backend.herokuapp.com/api',
    headers: {
      device: 'mobile'
    }
  })

  static async _call({ path, headers = {} }) {
    const authorization = window.localStorage.getItem('auth._token.local')

    return await this.http.get(path, {
      headers: { ...headers, authorization }
    })
  }

  static async getAvailableProducts() {
    const { data } = await this._call({ path: '/products/available' })
    return data
  }
}
