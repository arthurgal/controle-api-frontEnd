<template>
  <h1>Cadastre Sua Despesa</h1>
  <form class="formulario" @submit.prevent="salvar">
    <div class="form-group">
      <label for="exampleFormControlInput1">Nome da Despesa</label>
      <input
        type="text"
        class="form-control"
        id="exampleFormControlInput1"
        placeholder="Nome"
        v-model="despesa.nome"
      />
    </div>

    <div class="form-group">
      <label for="exampleFormControlInput1">Descrição da Despesa</label>
      <input
        type="text"
        class="form-control"
        id="exampleFormControlInput1"
        placeholder="Academia"
        v-model="despesa.observacao"
      />
    </div>

    <div class="form-group">
      <label for="exampleFormControlInput1">Valor da Despesa</label>
      <input
        type="text"
        class="form-control"
        id="exampleFormControlInput1"
        placeholder="100,00"
        v-model="despesa.valor"
      />
    </div>

    <div class="input-group mb-3">
      <div class="input-group-prepend">
        <label class="input-group-text" for="inputGroupSelect01"
          >Tipo de despesa</label
        >
      </div>
      <select
        class="custom-select"
        id="inputGroupSelect01"
        v-model="despesa.tipoDespesa"
      >

        <option value="Lazer">Lazer</option>
        <option value="Comida">Comida</option>
        <option value="Emergencia">Emergencia</option>
      </select>
    </div>

    <div>
      <BotaoDespesa />
    </div>
  </form>
</template>

<script>
import Despesas from "@/services/Despesas";
import BotaoDespesa from "./BotaoDespesa.vue";
export default {
  name: "FormularioDespesas",

  emits: ["despesaSalva"],

  data() {
    return {
      despesa: {
        nome: "",
        observacao: "",
        valor: 0,
        tipoDespesa: "Lazer",
      },
    };
  },

  components: {
    BotaoDespesa,
  },

  methods: {
    salvar() {
      if (
        this.despesa.valor <= 0 ||
        this.despesa.nome == "" ||
        this.despesa.observacao == "" || this.despesa.tipoDespesa == ""
      ) {
        alert("Valor invalido!");
      } else {
        Despesas.salvar(this.despesa).then(() => {
          window.location.reload();
        });
      }
    },
  },
};
</script>

<style scoped>
h1 {
  color: blueviolet;
  padding: 2rem;
  border-bottom: solid 3px rgb(237, 237, 237);
  text-align: center;
}
.formulario {
  align-items: center;
  padding-top: 1.5rem;
  padding-bottom: 30px;
  margin: auto;
  width: 45%;
}

label {
  border-left: solid 5px blueviolet;
  padding-left: 10px;
}

input {
  margin-top: 10px;
  margin-bottom: 20px;
}

textarea {
  margin-top: 10px;
  margin-bottom: 20px;
}
</style>