<template>
  <div>
    <div class="cadastra-saldo">
      <form class="formulario" @submit.prevent="salvar">
        <div class="form-group">
          <label for="exampleInputPassword1">Diga seu Saldo</label>
          <div class="saldo-botao">
            <input
              type="text"
              class="form-control border border-success rounded"
              id="exampleInputPassword1"
              v-model="saldo.valor"
            />
            <button class="btn btn-outline-success btn-sm " type="submit" value="Submit">
              Enviar
            </button>
          </div>
        </div>
      </form>
    </div>
    <div class="carteira">
      <h4 class="titulo-carteira">Carteira Virtual</h4>
      <p class="border border-success rounded">R$ = {{ total }}</p>
    </div>
  </div>
</template>

<script>
import Receita from "@/services/Receita";
export default {
  name: "CarteiraVirtual",
  data() {
    return {
      saldo: {
        valor: 0.0,

      },
      total: 0.0,
    };
  },

  methods: {
    salvar() {
      Receita.salvar(this.saldo).then(() => {
        window.location.reload();
      });
    },

    somaTotal() {
      Receita.total().then((resposta) => {
        this.total = resposta.data;
      });
    },
  },

  mounted(){
    this.somaTotal();
  }
};
</script>

<style scoped>
.cadastra-saldo {
  margin: 50px auto 5px auto;
  color: aliceblue;
  width: 70%;
  height: 50%;
}

.saldo-botao {
  display: flex;
  justify-content: space-around;
}

.carteira {
  margin-top: 30px;
}

.titulo-carteira {
  color: aliceblue;
  padding: 10px;
  font-size: 18px;
  margin-bottom: 10px;
}

p {
  color: aliceblue;
  width: 80%;
  margin: auto;
  padding-bottom: 3px;
  padding-top: 3px;
}
</style>