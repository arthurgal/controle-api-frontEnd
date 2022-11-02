<template>
  <div class=".container-fluid">
    <div class="row no-gutters">
      <div class="col-2 ">
        <NavegadorPrincipal/>
      </div>
      <div class="col-10">
        <div>
          <FormularioDespesas/>
        </div>
        <div>
          <ListaDespesa/>
        </div>
        <div>
          <LegendaBaixo/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import NavegadorPrincipal from "./components/NavegadorPrincipal.vue";
import FormularioDespesas from "./components/FormularioDespesas.vue";
import ListaDespesa from "./components/ListaDespesa.vue";
import LegendaBaixo from "./components/LegendaBaixo.vue";

export default {
  components: {
    NavegadorPrincipal,
    FormularioDespesas,
    ListaDespesa,
    LegendaBaixo
    
  },
  methods: {
    listarDespesas() {
      console.log("opa");
    },
  },
};
</script>

<style>
</style>
