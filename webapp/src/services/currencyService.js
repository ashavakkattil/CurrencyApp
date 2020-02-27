import Api from '../router/Api'

export default {
    addCurrencyRate(params){
        return Api().post('/currencyrate/', params)
    }
}