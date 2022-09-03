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
          <td>{{ despesa.valor }} R$</td>
          <td>
            <button @click="deletar(despesa)" class="btn btn-sm">Apagar</button>
          </td>
        </tr>
      </tbody>
    </table>
    <div class="conteudo-total">
      <p>Total = {{ soma }} R$</p>
    </div>
  </div>
</template>

<script>
import Despesa from "../services/Despesas";
export default {
  name: "ListaDespesa",
  data() {
    return {
      despesas: [],
      soma: 0,
    };
  },
  methods: {
    listar() {
      Despesa.listar().then((resposta) => {
        this.despesas = resposta.data;
        this.total();
      });
    },

    total() {
      Despesa.total().then((resposta) => {
        this.soma = resposta.data;
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
  padding-top: 1rem;
  margin: auto;
}

table {
  text-align: center;
}

.btn {
  background-color: blueviolet;
  color: #fff;
  border: solid 1px rgb(101, 25, 173);
}

.btn:hover {
  color: #fff;
  background-color: rgb(101, 25, 173);
}

.conteudo-total {
  width: 40%;
  text-align: center;
  margin-bottom: 30px;
}

.conteudo-total p {
  border-radius:10px;
  font-size: 16px;
  padding: 5px;
  background-color: blueviolet;
  color: #fff;
}
</style>