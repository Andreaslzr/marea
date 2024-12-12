<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import Menu from './components/Menu.vue';
</script>

<template>
  <div id="app">
    <Menu /> <!-- Aqui está o novo menu -->
  <RouterView />
  </div>
</template>


<style scoped lang="scss">

#card-app{
  height: 90%;
  width: 80%;
  background-color: var(--app-card-background);
  border-radius: 1.5rem;
  box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
}

#content-app{
  height: calc(100% - 10rem);
}

footer {
  width: 100%;
  height: 20%;
  max-height: 10rem;
  background-color: var(--app-footer-background);
  border-radius: 0 0 1.5rem 1.5rem;

  .footer-bots{
    width: 80%;
    margin: auto;    
  }

  #circle{
    height: 100%;
    margin-right: 1.5rem;
  }
}

@media (max-height: 880px){
  #content-app{
    height: 80%;
  }
}

</style>
