<template>
  <div>
    <div class="form-group">
      <router-link to="/" class="btn btn-secondary">Back</router-link>
    </div>
    <form v-on:submit="saveForm()">
      <div class="container">
        <div class="row justify-content-center mt-3">
          <label for="inputFirstName" class="col-sm-2 col-form-label">User First Name</label>
          <div class="col-sm-5">
            <input type="text" v-model="user.firstName" class="form-control " id="inputFirstName" required>
          </div>
        </div>
        <div class="row justify-content-center mt-3">
          <label for="inputLastName" class="col-sm-2 col-form-label">User Last Name</label>
          <div class="col-sm-5">
            <input type="text" v-model="user.lastName" class="form-control" id="inputLastName" required>
          </div>
        </div>
        <div class="row justify-content-center mt-3">
          <label for="inputSex" class="col-sm-2 col-form-label">User sex</label>
          <div class="col-sm-5">
            <input type="text" v-model="user.sex" class="form-control" id="inputSex" required>
          </div>
        </div>
        <div class="row justify-content-center mt-3">
          <label for="inputAge" class="col-sm-2 col-form-label">User age</label>
          <div class="col-sm-5">
            <input type="text" v-model="user.age" class="form-control" id="inputAge" required value="">
          </div>
        </div>
        <div class="row justify-content-center mt-3">
          <label for="inputBio" class="col-sm-2 col-form-label">User bio</label>
          <div class="col-sm-5">
            <input type="text" v-model="user.bio" class="form-control" id="inputBio" required>
          </div>
        </div>
        <button class="btn btn-success mt-3">Create</button>
      </div>
    </form>
  </div>
</template>

<script>
  import {serverData} from '@/router/index';

  export default {
    name: "usersCreate",
    data: function () {
      return {
        user: {
          firstName: '',
          lastName: '',
          sex: '',
          age: '',
          bio: '',
        }
      }
    },
    methods: {
      saveForm() {
        let valueAge=document.getElementById('inputAge').value;
        if(valueAge)
        if(valueAge<18){
          alert('Age must be more than 18')
        }

        event.preventDefault();
        let app = this;
        let newUser = app.user;
        const createFetch = new Promise((resolve, reject) => {
          resolve(serverData.push(newUser))
        });
        createFetch
          .then(function (resp) {
            app.$router.push({path: '/'});
          })
          .catch(function (resp) {
            console.log(resp);
            alert("Could not create your company");
          });
      }
    }
  }
</script>

<style scoped>
  input:invalid {
    border: 1px solid #dc3545;
  }

  input:valid {
    border: 1px solid #495057;
  }
</style>
