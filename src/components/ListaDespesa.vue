<template>
  <div class="div-tabela">
    <table class="table table-striped">
      <thead>
        <tr>
          <th>Tipo Despesa</th>
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
      <div v-if="this.soma >= 0 && this.soma < 1700" :class="podeGastar"><p>Total = {{ soma }} R$</p></div>
      <div v-if="this.soma === 1700" :class="naoPodeGastar"><p>Total = {{ soma }} R$</p></div>
      <div v-if="this.soma > 1700 " :class="passouDoLimite"><p>Total = {{ soma }} R$</p></div>
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
      podeGastar:'conteudo-total-r',
      naoPodeGastar: 'conteudo-total-l',
      passouDoLimite: 'conteudo-total-v'
    };
  },
  methods: {
    async listar() {
      const resposta = await Despesa.listar()
      this.despesas = resposta.data;
      await this.total();
      //const a = this.soma === 500
      //console.log(this.soma)
      //console.log('this.soma === 500 = ', a)
      //this.classVar = a
      // .then((resposta) => {
      //   this.despesas = resposta.data;
      //   await this.total();
      //   this.classVar = this.soma.toFixed(2) === 500
      // });
    },

    async total() {
      const resp = await Despesa.total()
      this.soma = resp.data;
      //this.trocaCor();
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

    //trocaCor(){
      //console.log('teste')
      //console.log(this.classVar)
      //console.log(this.soma)
      //if(this.soma <= 500){
        //this.classVar === 'conteudo-total-r'
        //console.log('to no if')
     // }
    //}
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

.conteudo-total-l {
  border-radius:10px;
  font-size: 16px;
  padding: 1px;
  background-color: rgb(250, 88, 29);
  color: #fff;
  height: 30px;
}

.conteudo-total-r {
  border-radius:10px;
  font-size: 16px;
  padding: 1px;
  background-color: blueviolet;
  color: #fff;
  height: 30px;
}

.conteudo-total-v {
  border-radius:10px;
  font-size: 16px;
  padding: 1px;
  background-color: red;
  color: #fff;
  height: 30px;
}

.style-lazer{
  color: whitesmoke;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: rgb(186, 251, 136);
}

.style-despesas-fixa{
  color: whitesmoke;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: rgb(251, 213, 132);
}

.style-emergencia{
  color: whitesmoke;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: rgb(251, 131, 131);
}

.style-alimentacao{
  color: whitesmoke;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: rgb(127, 230, 251);
}
</style>