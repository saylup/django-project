<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header>
  
    <div class="wrapper">
      
      <nav>
        <RouterLink to="/">Домашняя</RouterLink>
         <RouterLink to="/teachers">Преподаватели</RouterLink>
         <RouterLink to="/students">Обучающиеся</RouterLink>
         <RouterLink to="/schools">Образовательные организации</RouterLink>
         <RouterLink to="/reports">Отчеты</RouterLink>
        <RouterLink to="/about">О приложении</RouterLink>
        <RouterLink to="/about">Выход</RouterLink>
      </nav>
    </div>
  </header>

  <RouterView />
</template>

<style>

</style>
