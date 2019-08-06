<template>
  <div>
    <div class="card ">
      <h3 class="card-header ">Edit user</h3>
      <div class=" col-form-label">
        <router-link to="/" class="btn btn-secondary text-right">Back</router-link>
      </div>
    </div>
    <div class="card-header">
      <form v-on:submit="saveForm()" class="row">
        <div class=" card-body">
          <div class="col-xs-12 col-form-label">
            <label class="col-form-label">User First Name</label>
            <input type="text" v-model="user.firstName" class="form-control">
          </div>
        </div>
        <div class="card-body">
          <div class="col-xs-12 col-form-label">
            <label class="col-form-label">User Last Name</label>
            <input type="text" v-model="user.lastName" class="form-control">
          </div>
        </div>
        <div class=" card-body">
          <div class="col-xs-12 col-form-label">
            <label class="col-form-label">User sex</label>
            <input type="text" v-model="user.sex" class="form-control">
          </div>
        </div>
        <div class=" card-body">
          <div class="col-xs-12 col-form-label">
            <label class="col-form-label">User age</label>
            <input type="text" v-model="user.age" class="form-control">
          </div>
        </div>
        <div class=" card-body">
          <div class="col-xs-12 col-form-label">
            <label class="col-form-label">User bio</label>
            <input type="text" v-model="user.bio" class="form-control">
          </div>
        </div>
        <div class="row card-body">
          <div class="col-xs-12 col-form-label">
            <label class="col-form-label">Save change</label>
            <button class="btn btn-success btn-block">Edit</button>
          </div>
        </div>

      </form>
    </div>
  </div>
</template>

<script>
  import {serverData} from '@/router/index';

  export default {
    name: "usersEdit",
    mounted() {
      let app = this;
      let id = app.$route.params.id;
      app.userId = id;
      const mountedFetch = new Promise((resolve, reject) => {
        const record = {...serverData[id]};
        resolve(record);
      });
      mountedFetch
        .then(function (resp) {
          app.user = resp;
          app.userId = id;

        })
        .catch(function () {
          alert("Could not load your company")
        });
    },
    data: function () {
      return {
        userId: null,
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
        event.preventDefault();
        let app = this;
        let newUser = app.user;
        const editFetch = new Promise((resolve, reject) => {
          serverData[app.userId] = newUser;
          resolve(serverData[app.userId])
        });
        editFetch
          .then(function (resp) {
            app.$router.push({path: '/'});
          })
          .catch(function (resp) {
            alert("Could not create your company");
          });
      }
    }
  }
</script>

<style scoped>

</style>
