import {http} from './config.js'

export default {

    listar: () => {
        return http.get('receita');
    },

    salvar: (receita) => {
        return http.post('receita', receita)
    },

    deletar: (id) => {
        return http.delete('receita?id='+ id, {data: id})
    },

    total: () => {
        return http.get('receita/soma');
    }

}