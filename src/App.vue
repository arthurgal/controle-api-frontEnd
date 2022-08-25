<template>
  <div>
    <header>
      <NavegadorPrincipal />
    </header>
  </div>
  <div>
    <FormularioDespesas @despesaSalva="listarDespesas"/>
  </div>
  <div>
    <ListaDespesa/>
  </div>
  <div>
    <FooterBar/>
  </div>
</template>

<script>
import NavegadorPrincipal from "./components/NavegadorPrincipal.vue";
import FormularioDespesas from "./components/FormularioDespesas.vue";
import FooterBar from "./components/FooterBar.vue";
import ListaDespesa from "./components/ListaDespesa.vue";

export default {
  components: {
    NavegadorPrincipal,
    FormularioDespesas,
    FooterBar,
    ListaDespesa
  },
  methods:{
    listarDespesas(){
      console.log('opa')
    }
  }
};
</script>

<style>
</style>
