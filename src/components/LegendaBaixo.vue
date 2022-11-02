<template>
  <div class="legenda">
    <div class="legenda-itens">
      <div class="style-lazer"></div>
      <span>LAZER</span>
    </div>
    <div class="legenda-itens">
      <div class="style-alimentacao"></div>
      ALIMENTAÇÃO
    </div>
    <div class="legenda-itens">
      <div class="style-despesa-fixa"></div>
      DESPESA FIXA
    </div>
    <div class="legenda-itens">
      <div class="style-emergencia"></div>
      EMERGENCIA
    </div>
  </div>
</template>

<script>
export default {
  name: "LegendaBaixo",
};
</script>

<style>

.style-lazer{
  color: whitesmoke;
  margin-right: 20px;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: rgb(186, 251, 136);
}

.style-despesa-fixa{
  color: whitesmoke;
  margin-right: 20px;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: rgb(251, 213, 132);
}

.style-emergencia{
  color: whitesmoke;
  margin-right: 20px;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: rgb(251, 131, 131);
}

.style-alimentacao{
  color: whitesmoke;
  margin-right: 20px;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: rgb(127, 230, 251);
}

.legenda {
  display: flex;
  justify-content: center;
}
.legenda-itens {
  display: flex;
  margin: 30px;
}
</style>