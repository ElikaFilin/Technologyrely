<template>
  <div class="card" id="Table">
    <div>
      <div class="form-group">
        <router-link :to="{name: 'createUser'}" class="btn btn-success">Create new user</router-link>
      </div>
    </div>
    <div class="card-header">Users list</div>

    <div class="card-body">
      <table class="table table-bordered table-striped">
        <thead>
        <tr>
          <th>First name</th>
          <th>Last name</th>
          <th>Sex</th>
          <th>Age</th>
          <th>Bio</th>
          <th></th>
        </tr>
        </thead>
        <tbody>
        <tr v-for="user, index in users">
          <td>{{ user.firstName }}</td>
          <td>{{ user.lastName }}</td>
          <td>{{ user.sex }}</td>
          <td>{{ user.age }}</td>
          <td>{{ user.bio }}</td>
          <td>
            <router-link :to="{name: 'editUser', params: {id: user.id}}" class="btn btn-xs btn-secondary">
              Edit
            </router-link>
            <a href="#"
               class="btn btn-xs btn-danger"
               v-on:click="deleteEntry(users.id, index)">
              Delete
            </a>
          </td>
        </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
  import {serverData} from '../router/index';

  export default ({
    data: function () {
      return {
        users: serverData
      }
    },
    mounted() {
      let app = this;
      const imitatefetch = new Promise((resolve, reject) => {
        return resolve(serverData)
      });
      imitatefetch
        .then(function (resp) {
          app.userss = resp.data;
        })
        .catch(function (resp) {
          console.log(resp);
          alert("Could not load companies");
        });
    },
    methods: {
      deleteEntry(id, index) {
        if (confirm("Do you really want to delete it?")) {
          let app = this;
          const imitatedelete = new Promise((resolve, reject) => {
            return resolve(1)
          });
          imitatedelete
            .then(function (resp) {
              app.users.splice(index, 1);
            })
            .catch(function (resp) {
              alert("Could not delete company");
            });
        }
      }
    }
  })
</script>

<style scoped>

</style>
