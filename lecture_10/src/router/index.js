import Vue from 'vue'
import Router from 'vue-router'
import Table from "@/components/Table";
import Hello from "@/components/HelloWorld2";
import usersEdit from "@/components/editUser";
import usersCreate from '@/components/usersCreate';

export const serverData = [
  {
    id: 0,
    firstName: 'Adam',
    lastName: 'Smith',
    sex: 'Male',
    age: 38,
    bio: '',
    tempValue: null,
    editing: false
  },
  {
    id: 1,
    firstName: 'Michael',
    lastName: 'Smith',
    sex: 'female',
    age: 34,
    bio: '',
    tempValue: null,
    editing: false
  },
  {
    id: 2,
    firstName: 'Robert',
    lastName: 'Smith',
    sex: 'male',
    age: 34,
    bio: ''
  },
  {
    id: 3,
    firstName: 'David',
    lastName: 'Smith',
    sex: 'male',
    age: 31,
    bio: ''
  },
  {
    id: 4,
    firstName: 'Maria',
    lastName: 'Garcia',
    sex: 'female',
    age: 32,
    bio: ''
  },
  {
    id: 5,
    firstName: 'Maria',
    lastName: 'Rodriguez',
    sex: 'female',
    age: 30,
    bio: ''
  },
  {
    id: 6,
    firstName: 'Mary',
    lastName: 'Smith',
    sex: 'female',
    age: 28,
    bio: ''
  },
  {
    id: 7,
    firstName: 'Maria',
    lastName: 'Hernandez',
    sex: 'female',
    age: 27,
    bio: ''
  },
  {
    id: 8,
    firstName: 'Maria',
    lastName: 'Martinez',
    sex: 'female',
    age: 26,
    bio: ''
  },
  {
    id: 9,
    firstName: 'James',
    lastName: 'Johnson',
    sex: 'male',
    age: 26,
    bio: ''
  }
];

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Table',
      component: Table
    },
    {
      path: '/hw/:id',
      name: 'HelloWorld3',
      component: Hello

    },
    {path: '/users/create', component: usersCreate, name: 'createUser'},
    {path: '/users/edit/:id', component: usersEdit, name: 'editUser'},
  ]
})

