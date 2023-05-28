<template>
  <div>
    <h1 class="fw-light text-white m-0">Анонимные статьи</h1>
    <div class="full-height gradient-background">
      <div class="d-flex auth-buttons">
        <router-link class="auth-button" to="/login">Войти</router-link>
        <router-link class="auth-button" to="/register">Регистрация</router-link>
      </div>
    </div>
  </div>
</template>

<style>
.full-height {
  height: auto;
  min-height: 100vh;
}

.gradient-background {
  background: #494d5f;
  background-size: 400% 400%;
  height: auto;
  min-height: 100vh;
}

@keyframes gradient {
  0% {
    background-position: 0 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0 50%;
  }
}

.d-flex {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

h1 {
font-family: Arial, sans-serif;
font-weight: bold;
background: #a0d2eb;
font-size: 100px;
margin: 0;
padding: 0;
display: flex;
justify-content: left;
white-space: nowrap;
text-indent: 10%;
color: #e5eaf5;
}

@media screen and (max-width: 600px) {
h1 {
  font-size: 8vw; 
  text-indent: 0;
}
}

.auth-buttons {
position: fixed;
top: 50%;
left: 50%;
transform: translate(-50%, -50%);
text-align: center;
display: flex;
flex-direction: column;
align-items: center;
}

.auth-button {
display: inline-block;
padding: 40px 80px;
background-color: #8458B3;
color: #FFFFFF;
font-size: 30px;
text-decoration: none;
border: none;
border-radius: 10px;
cursor: pointer;
margin: 10px;
width: 60%;
max-width: 300px;
}

.auth-button:hover {
background-color: #00DDFF;
}
</style>