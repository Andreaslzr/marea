<script setup lang="ts">
import { useRouter } from 'vue-router';
import { ref } from "vue";

const router = useRouter();
  

const frente = [
  {id:1, src: 'src/assets/Frente-5.png'},
  {id:2, src: 'src/assets/Frente-6.png'}
];
  
const motor = [
  {id:1, src: 'src/assets/Motor-1.png'},
  {id:2, src: 'src/assets/Motor-2.png'},
];
  
const roda_frente = [
  {id:1, src: 'src/assets/RodaFrente-5.png'},
  {id:2, src: 'src/assets/RodaFrente-6.png'}
];

const roda_tras = [
  {id:1,src: 'src/assets/RodaTraseira-2.png'}
];
  
const selectedFrenteIndex = ref(0);
const selectedMotorIndex = ref(0);
const selectedRodaFrenteIndex = ref(0);
const selectedRodaTrasIndex = ref(0);
  
const changePart = (part, isNext) => {
  const partData = {
    frente: { index: selectedFrenteIndex, items: frente },
    motor: { index: selectedMotorIndex, items: motor },
    roda_frente: { index: selectedRodaFrenteIndex, items: roda_frente },
    roda_tras: { index: selectedRodaTrasIndex, items: roda_tras },
  };
  const { index, items } = partData[part];
  const newIndex = isNext ? index.value + 1 : index.value - 1;
  index.value = (newIndex + items.length) % items.length;
};



</script>


<template>
  <div id="moto-customizer" class="grid-container">
    <!-- Frente -->
    <div class="customizer-box">
      <h3>Frente</h3>
      <img :src="frente[selectedFrenteIndex].src" alt="Frente da moto" />
      <div class="controls">
        <button @click="changePart('frente', false)">Anterior</button>
        <button @click="changePart('frente', true)">Próximo</button>
      </div>
    </div>

    <!-- Motor -->
    <div class="customizer-box">
      <h3>Motor</h3>
      <img :src="motor[selectedMotorIndex].src" alt="Motor da moto" />
      <div class="controls">
        <button @click="changePart('motor', false)">Anterior</button>
        <button @click="changePart('motor', true)">Próximo</button>
      </div>
    </div>

    <!-- Roda Frente -->
    <div class="customizer-box">
      <h3>Roda da Frente</h3>
      <img :src="roda_frente[selectedRodaFrenteIndex].src" alt="Roda da frente" />
      <div class="controls">
        <button @click="changePart('roda_frente', false)">Anterior</button>
        <button @click="changePart('roda_frente', true)">Próximo</button>
      </div>
    </div>

    <!-- Roda Traseira -->
    <div class="customizer-box">
      <h3>Roda Traseira</h3>
      <img :src="roda_tras[selectedRodaTrasIndex].src" alt="Roda traseira" />
      <div class="controls">
        <button @click="changePart('roda_tras', false)">Anterior</button>
        <button @click="changePart('roda_tras', true)">Próximo</button>
      </div>
    </div>
  </div>
</template>



<style scoped lang="scss">
#moto-customizer {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
}

.customizer-box {
  text-align: center;
  border: 1px solid #ccc;
  padding: 20px;
  border-radius: 8px;
  
}

.customizer-box img {
  max-width: 100%;
  height: 100px;
}

.controls {
  margin-top: 10px;
}

button {
  margin: 0 5px;
  padding: 10px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

button:hover {
  background-color: #0056b3;
}
</style>