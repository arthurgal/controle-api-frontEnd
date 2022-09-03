import {http} from './config.js'

export default {

    listar: () => {
        return http.get('despesa');
    },

    salvar: (despesa) => {
        return http.post('despesa', despesa)
    },

    deletar: (id) => {
        return http.delete('despesa?id='+ id, {data: id})
    },

    total: () => {
        return http.get('despesa/soma');
    }

}