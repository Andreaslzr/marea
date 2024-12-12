<script setup lang="ts">
import { ref } from 'vue';
import axios from 'axios';
import { useRouter } from 'vue-router';

const email = ref('');
const password = ref('');
const errorMessage = ref('');
const router = useRouter();

const handleLogin = async () => {
  try {

    const response = await axios.get('http://localhost:3000/login', {
      params: {
        email: email.value,
        password: password.value
      }
    });

    if (response.data.length > 0) {
      console.log('Login bem-sucedido:', response.data[0]);

      
      router.push('/escolha');
    } else {
      errorMessage.value = 'Email ou senha incorretos';
    }
  } catch (error) {
    console.error('Erro ao fazer login:', error);
    errorMessage.value = 'Erro ao conectar ao servidor';
  }
};
</script>

<template>
    <div class="login-container">
      <h2>Login</h2>
      <form @submit.prevent="handleLogin">
        <!-- Campo de Email -->
        <div class="form-group">
          <label for="email">Email:</label>
          <input
            type="email"
            id="email"
            v-model="email"
            required
            placeholder="Digite seu email"
          />
        </div>
  
        <!-- Campo de Senha -->
        <div class="form-group">
          <label for="password">Senha:</label>
          <input
            type="password"
            id="password"
            v-model="password"
            required
            placeholder="Digite sua senha"
          />
        </div>
  
       
        <button type="submit" class="login-button">Entrar</button>
  
       
        <p v-if="errorMessage" class="error-message">{{ errorMessage }}</p>
      </form>
    </div>
  </template>
  

  
  <style scoped lang="scss">
  .login-container {
    max-width: 400px;
    margin: 0 auto;
    padding: 2rem;
    text-align: center;
    background-color: #f9f9f9;
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  }
  
  h2 {
    font-size: 1.8rem;
    margin-bottom: 1rem;
    color: #333;
  }
  
  .form-group {
    margin-bottom: 1.5rem;
    text-align: left;
  }
  
  label {
    display: block;
    margin-bottom: 0.5rem;
    font-weight: bold;
    color: #666;
  }
  
  input[type="email"],
  input[type="password"] {
    width: 100%;
    padding: 0.8rem;
    border: 1px solid #ddd;
    border-radius: 4px;
    font-size: 1rem;
  }
  
  .login-button {
    width: 100%;
    padding: 0.8rem;
    background-color: #4CAF50;
    color: #fff;
    font-size: 1rem;
    border: none;
    border-radius: 4px;
    cursor: pointer;
  }
  
  .login-button:hover {
    background-color: #45a049;
  }
  
  .error-message {
    color: #d9534f;
    margin-top: 1rem;
  }
  </style>
  