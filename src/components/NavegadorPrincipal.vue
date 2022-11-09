<template>
  <div class="navBar">
    <h3>Controle</h3>
    <div class="carteira">
      <CarteiraVirtual/>
    </div>
  </div>
</template>

<script>
import CarteiraVirtual from './CarteiraVirtual.vue'
export default {
  name: "NavegadorPrincipal",

  components:{
    CarteiraVirtual
  }
};
</script>

<style scoped>
.navBar {
  height: 980px;
  background-color: #222222;
  text-align: center;
}

.navBar h3{
  padding: 1rem;
  color: aliceblue;
  border-bottom: solid 3px #2e2e2e;
}

.navBar a{
  color: aliceblue;
  font-size: 14px;
}

.navBar a:hover{
  color: blueviolet;
  background-color: #3e3e3e;
}

</style>