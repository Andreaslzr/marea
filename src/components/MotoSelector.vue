<!-- MotoMontagem.vue -->
<script setup>

  
  const frontalImages = [
    require('@/assets/Frente-1.png'),
    require('@/assets/Frente-2.png'),
    require('@/assets/Frente-3.png'),
  ];
  
  const centralImages = [
    require('@/assets/Motor-1.png'),
    require('@/assets/Motor-2.png'),
    require('@/assets/Motor-3.png'),
  ];
  
  const traseiraImages = [
    require('@/assets/RodaTraseira-1.png'),
    require('@/assets/RodaTraseira-2.png'),
    require('@/assets/RodaTraseira-3.png'),
  ];
  </script>


<template>
    <div class="moto-montagem">
      <MotoSection :images="frontalImages" />
      <MotoSection :images="centralImages" />
      <MotoSection :images="traseiraImages" />
    </div>
  </template>
  
  
  
  <style scoped>
  .moto-montagem {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
  }
  </style>
  