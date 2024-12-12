<script setup lang="ts">
import { useRouter } from 'vue-router';


const router = useRouter();
</script>

<template>
  <main class="content">
    
    <section class="intro flex flex-column align-items-center">
      <h1 class="main-title">
        Somos especialistas em fazer sonhos em 2 rodas, 
        <br />
        venha conferir conosco as maravilhas da Indústria 4.0!
      </h1>
    </section>

    
    <section class="description flex flex-column align-items-center">
      <p>
        Estamos desde 1984 inovando conceitos e criando tendências no mercado motociclista.
      </p>
      <p>
        Contando com nosso arsenal tecnológico, você pode criar a motocicleta que tem a sua cara!
      </p>
    </section>

    <!-- Seção das Imagens das Motos -->
    <div class="bike-gallery flex justify-content-center">
      <section class="bike-item">
        <img src="/src/assets/Group-40.png" alt="Cross Rider 400">
        <h3>Cross Rider 400</h3>
      </section>

      <section class="bike-item">
        <img src="/src/assets/Group-41.png" alt="Nimbus 1000">
        <h3>Nimbus 1000</h3>
      </section>

      <section class="bike-item">
        <img src="/src/assets/Group-42.png" alt="Traveler 600">
        <h3>Traveler 600</h3>
      </section>
    </div>
    <section>
    <button id="order" @click="router.push('/login')" class="mt-4 app-dark-button">
      QUERO A MINHA!
    </button>
  </section>
  </main>
</template>

<style scoped lang="scss">

.content {
  max-width: 1000px;
  margin: 0 auto;
  padding: 1.5rem;
  text-align: center;
  font-family: Arial, sans-serif;
  color: #333;
}


.main-title {
  font-size: 1.8rem;
  font-weight: bold;
  color: #333;
  margin-bottom: 1rem;
}


.description {
  font-size: 1rem;
  color: #666;
  line-height: 1.5;
  margin-bottom: 2rem;
}


.bike-gallery {
  display: flex;
  justify-content: space-around;
  gap: 1rem;
  margin-top: 2rem;
}

.bike-item {
  text-align: center;
  font-size: 0.9rem;
}

.bike-item img {
  width: 150px; 
  height: auto;
  margin-bottom: 0.5rem;
}


#order {
  height: 3.2rem;
  width: 20rem;
  border-radius: 2.5rem;
  background-color: #e63946;
  color: #fff;
  font-size: 1.2rem;
  border: none;
  cursor: pointer;
  margin-top: 2rem;
}

#order:hover {
  background-color: #d62828;
}
</style>
