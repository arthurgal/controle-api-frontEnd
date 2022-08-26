<template>
  <div class="navBar">
    <h3>Controle</h3>
    <ul class="nav flex-column">
      
      <li class="nav-item">
        <a class="nav-link" href="#">Despesas</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Receita</a>
      </li>
      
    </ul>
  </div>
</template>

<script>
export default {
  name: "NavegadorPrincipal",
};
</script>

<style scoped>
.navBar {
  background-color: #222222;
  text-align: center;
  min-height: 737px;
}

.navBar h3{
  padding: 1rem;
  color: aliceblue;
  border-bottom: solid 3px #2e2e2e;
}

.navBar a{
  color: aliceblue;
}

.navBar a:hover{
  color: blueviolet;
}
</style>