<template>
  <div>
    <table class="table table-striped">
      <thead>
        <tr>
          <th>Nome</th>
          <th>Data de Cadastro</th>
          <th>Descrição</th>
          <th>Valor</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="despesa of despesas" :key="despesa.id">
          <td>{{ despesa.nome }}</td>
          <td>{{ despesa.dataDeCadastro }}</td>
          <td>{{ despesa.observacao }}</td>
          <td>{{ despesa.valor }}</td>
          <td>
            <button @click="deletar(despesa)" class="btn btn-outline-danger btn-sm">
              Apagar
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import Despesa from "../services/Despesas";
export default {
  name: "ListaDespesa",
  data() {
    return {
      despesas: [],
    };
  },
  methods: {
    listar() {
      Despesa.listar().then((resposta) => {
        this.despesas = resposta.data;
      });
    },

    deletar(despesa) {
      Despesa.deletar(despesa.id).then(() => {
        this.listar();
      });
    },
  },
  mounted() {
    this.listar();
  },
};
</script>

<style scoped>
div {
  width: 70%;
  padding-top: 2rem;
  margin: auto;
}

table {
  text-align: center;
}

</style>