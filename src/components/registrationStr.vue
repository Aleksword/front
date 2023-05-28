<template>
    <h1 class="fw-light text-white m-0">Регистрация</h1>
    <div class="full-height gradient-background">
          <div class="d-flex">
      <form @submit.prevent="register" class="registration-form">
      <input type="email" v-model="registerBody.email" placeholder="Email" required class="input-field">
      <input type="fullName" v-model="registerBody.fullName" placeholder="FullName" required class="input-field">
      <input type="password" v-model="registerBody.password" placeholder="Password" required class="input-field">
        <button class="regis-button">Регистрация</button>
      </form>
          </div>
    </div>
    </template>

    <script>
    import axios from 'axios';
  
    export default {
      data() {
        return {
          registerBody: {email:'', fullName:'', password:''}
        };
      },
      methods: {
        register(){
        axios.post('http://localhost:8888/auth/register',this.registerBody)   
        .then((response) => {
              localStorage.setItem('token', response.data.token); 
              if (response.status === 200) {
              this.$router.push('/EditorThreads');
           }
          })
          .catch((error) => {
            console.log(error);
          });
      }
    }
  };
    </script>
    <style>
  
    .d-flex {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }
    
  
    .btn-group {
    margin-top: 20px;
    justify-content: center;
    align-items: center;
    display: flex;
  }
  
  .regis-button {
      margin-right: 10px;
      margin-left: 10px;
      border: none;
      border-radius: 5px;
      padding: 10px;
      font-size: 16px;
      font-weight: bold;
      background:#8458B3;
      color: #e5eaf5;
      cursor: pointer;
      transition: all 0.3s ease;
  }
  .registration-form {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
  }
  
  .input-field {
    margin-bottom: 10px;
    padding: 10px;
    width: 300px;
  }
    </style>