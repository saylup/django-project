<script>
export default {
  components: {
    Modal
  },
  data() {
    return {
      showModal: false
    }
  }
}
</script>
<script setup>
import { storeToRefs } from 'pinia';
import {computed, onBeforeMount, ref} from 'vue';
import {useLessonsStore} from '../stores/lessons';
import StudentRow from '@/components/StudentRow.vue';
import _ from 'lodash';
import Modal from '../components/modal-window.vue'



const lessonsStore = useLessonsStore(); 
const {students} = storeToRefs(lessonsStore);
let sortFiled = ref("name");
let inputText = ref("");

let surname = ref("");
let name = ref("");
let patr = ref("");
let school = ref("");

const studentsStored = computed(() =>{
    return _(students.value)
        .orderBy(x => x[sortFiled.value])
        .value();
});

function toggleSort(fildeName){
    sortFiled.value = fildeName
}

function onSurnameClick(student){
    console.log(student.surname)
}

function onNameClick(student){
    console.log(student.name)
}

function onDeleteClick(student){
    lessonsStore.deleteStudent(student.id)
}

function onFormSumbit(){
    lessonsStore.addStudent(surname.value, name.value, patr.value, school.value)
}

function onUpdateClick(id, event){
   // console.log(id)
   // console.log(event)
    lessonsStore.updStudent(id,  event.surname, event.name)
}


onBeforeMount( () => {
    lessonsStore.fetchStudents();
})


</script>

<template>
<h1>Главная страница</h1>
    <!-- <input type="text" v-model ="inputText">
    <div>Вы ввели: {{inputText}}</div> -->
    <button @click="toggleSort('name')">По имени</button>
    <button @click="toggleSort('surname')">По фамилии</button>
    <StudentRow 
        v-for="s in studentsStored" 
        :name = "s.name" 
        :surname = "s.surname"
        :patr = "s.patr" 
        :schoolId = "s.school_id"
        @surname-click = "onSurnameClick(s)"
        @name-click = "onNameClick(s)"
        @delete = "onDeleteClick(s)"
        @update = "onUpdateClick(s.id, $event)"
    />
    <hr> 
    <!-- <form action="" @submit.prevent.stop="onFormSumbit">
        <input type="text" v-model="surname" placeholder="Фамилия"/>
        <input type="text" v-model="name" placeholder="Имя"/>
        <input type="text" v-model="patr" placeholder="Отчество"/>
        <input type="text" v-model="school" placeholder="Школа"/>
        <button>Добавить</button>
    </form> -->
<button id="show-modal" @click="showModal = true">Добавить</button>

  <Teleport to="body">
    <!-- use the modal component, pass in the prop -->
    <modal :show="showModal" @close="showModal = false">
      <template #header>
        <h3>Добавить обучающегося</h3>
      </template>
      <template #body>
       
        <h3>Данные обучающегося</h3>
        
         <input type="text" v-model="surname" placeholder="Фамилия"/>
        <input type="text" v-model="name" placeholder="Имя"/>
        <input type="text" v-model="patr" placeholder="Отчество"/>
        <input type="text" v-model="school" placeholder="Школа"/>
        </template>
       
        <template #footer> 
        </template>
    </modal>
  </Teleport>

</template>


<style>

</style>