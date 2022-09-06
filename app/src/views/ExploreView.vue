<template>
  <div class="my-container">
    <div class="field has-addons">
      <div class="control is-expanded">
        <input
          class="input"
          type="text"
          placeholder="Search"
          @input="handleSearch"
        />
      </div>
      <div class="control">
        <a class="button is-info"> Search </a>
      </div>
    </div>
    <div class="user-container">
      <UserCard v-for="user in filterUsers" :user="user" />
    </div>
  </div>
</template>

<script>
import { getAllUsers } from '../services/users'
import UserCard from '../components/UserCard.vue'
export default {
  data() {
    return {
      allUsers: [],
      search: '',
    }
  },
  methods: {
    handleSearch(e) {
      this.search = e.target.value
    },
  },
  computed: {
    filterUsers() {
      const regex = new RegExp(this.search, 'gi')
      return this.allUsers.filter((user) => user.name.match(regex))
    },
  },
  created() {
    getAllUsers().then((res) => {
      this.allUsers = res
    })
  },
  components: { UserCard },
}
</script>

<style scoped>
.my-container {
  width: 600px;
  margin: 30px auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 50px;
}
.field {
  width: 100%;
}
.user-container {
  width: 100%;
}
</style>
