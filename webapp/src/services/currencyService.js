import Api from '../router/Api'

export default {
    addCurrencyRate(params){
        return Api().post('/currencyrate/', params)
    },
    getCurrencyRate(){
        return Api().get('/currencyrate/')
    }
}