<template>
  <div class="navBar ">
    <ul class="nav justify-content-center">
      <li class="nav-item">
        <a class="nav-link active" href="#">Despesas</a>
      </li>
      <li class="nav-item">
        <a class="nav-link active" href="#">Receitas</a>
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
  .navBar{
    background-color: rgb(227, 227, 227);
    padding: 10px;
  }
</style>