import axios from 'axios'

const baseURL = process.env.NODE_ENV === 'production' ? 
  'https://api.operatebsv.org' :
  'http://localhost:4000';

const api = axios.create({ baseURL })

export default {
  getOps() {
    return api.get('/ops')
  },

  getOp(ref) {
    return api.get(`/ops/${ ref }`, { params: { fn: true } })
  },

  getVersions(ref, config = {}) {
    return api.get(`/ops/${ ref }/versions`, config)
  },

  execTape(txid, config = {}) {
    return api.get(`/tapes/${ txid }`, config)
  }
}