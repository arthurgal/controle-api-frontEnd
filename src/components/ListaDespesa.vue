<template>
  <div class="div-tabela">
    <table class="table table-striped">
      <thead>
        <tr>
          <th></th>
          <th>Nome</th>
          <th>Data de Cadastro</th>
          <th>Descrição</th>
          <th>Valor</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="despesa of despesas" :key="despesa.id">
          <div>
            <td><div v-if="despesa.tipoDespesa === 'Lazer'" :class="despesaLazer"></div></td>
            <td><div v-if="despesa.tipoDespesa === 'Alimentacao'" :class="despesaAlimentacao"></div></td>
            <td><div v-if="despesa.tipoDespesa === 'Emergencia'" :class="despesaEmergencia"></div></td>
            <td><div v-if="despesa.tipoDespesa === 'Despesas Fixas'" :class="despesaFixa"></div></td>
          </div>
          <td>{{ despesa.nome }}</td>
          <td>{{ despesa.dataDeCadastro }}</td>
          <td>{{ despesa.observacao }}</td>
          <td>{{ despesa.valor.toFixed(2) }} R$</td>
          <td>
            <button @click="deletar(despesa)" class="btn btn-sm">Apagar</button>
          </td>
        </tr>
      </tbody>
    </table>
    <div class="conteudo-total div-tabela">
      <p :class="{'conteudo-total-g': classVar, 'conteudo-total-p': !classVar}">Total = {{ soma }} R$</p>
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
      despesaLazer: 'style-lazer',
      despesaFixa: 'style-despesas-fixa',
      despesaEmergencia: 'style-emergencia',
      despesaAlimentacao: 'style-alimentacao',
      soma: 0,
      classVar:'conteudo-total-p'
    };
  },
  methods: {
    async listar() {
      const resposta = await Despesa.listar()
      this.despesas = resposta.data;
      await this.total();
      const a = this.soma === 500
      //console.log(this.soma)
      //console.log('this.soma === 500 = ', a)
      this.classVar = a
      // .then((resposta) => {
      //   this.despesas = resposta.data;
      //   await this.total();
      //   this.classVar = this.soma.toFixed(2) === 500
      // });
    },

    async total() {
      const resp = await Despesa.total()
      this.soma = resp.data;
      this.trocaCor();
      // Despesa.total().then((resposta) => {
      //   this.soma = resposta.data;
      //   this.trocaCor();
        
      // });
    },

    deletar(despesa) {
      Despesa.deletar(despesa.id).then(() => {
        this.listar();
      });
    },

    trocaCor(){
      console.log('teste')
      console.log(this.classVar)
      console.log(this.soma)
      if(this.soma === 500){
        this.classVar === 'conteudo-total-g';
        console.log(this.classVar)
      }
    }
  },
  mounted() {
    this.listar();
  },
};
</script>

<style scoped>
.div-tabela {
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

.conteudo-total-p {
  border-radius:10px;
  font-size: 16px;
  padding: 5px;
  background-color: blueviolet;
  color: #fff;
}

.conteudo-total-g {
  border-radius:10px;
  font-size: 16px;
  padding: 5px;
  background-color: rgb(21, 160, 9);
  color: #fff;
}

.style-lazer{
  color: whitesmoke;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: red;
}

.style-despesas-fixa{
  color: whitesmoke;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: blue;
}

.style-emergencia{
  color: whitesmoke;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: green;
}

.style-alimentacao{
  color: whitesmoke;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: yellow;
}
</style>