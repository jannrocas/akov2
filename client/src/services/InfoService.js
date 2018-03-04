import Api from '@/services/Api'

export default {
  fetchInfo () {
    return Api().get('info')
  }
}
