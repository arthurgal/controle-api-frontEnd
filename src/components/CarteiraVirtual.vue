<template>
  <div>
    <h4 class="titulo-carteira">Carteira Virtual</h4>
    <p class="border border-success rounded">R$ = 100,00</p>
  </div>
</template>

<script>
export default {
    name:"CarteiraVirtual",

}
</script>

<style scoped>
    div{
        color: aliceblue;
        margin-top: 600px;
    }

    .titulo-carteira{
        padding: 10px;
        font-size: 18px;
        margin-bottom: 10px;
    }

    p{
        width: 80%;
        margin: auto;
        padding-bottom: 3px;
        padding-top: 3px;
    }
</style>