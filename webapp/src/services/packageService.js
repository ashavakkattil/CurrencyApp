import Api from '../router/Api'

export default {

    getPackages() {
        return Api().get('/packages/')
    },

    addPackage(params){
       return Api().post('/packages/', params)
    }
}