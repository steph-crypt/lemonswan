//../resources/js/components/Posts.vue

<template>
    <div>
        <h4 class="text-center font-weight-bold">Posts</h4>
        <table class="table table-striped">
            <thead>
            <tr>
                <th scope="col">Title</th>
                <th scope="col">Content</th>
                <th scope="col">Actions</th>
            </tr>
            </thead>
            <tbody>
            <tr v-for="post in posts">
                <td>{{post.title}}</td>
                <td>{{post.content}}</td>
                <td>
                    <button class="btn btn-danger" @click="fetchUsers(users)"><i style="color:white" class="fa fa-trash"></i></button>
                </td>
            </tr>
            </tbody>
        </table>
    </div>

</template>

<script>
import {mapGetters} from 'vuex'

export default {
    name: "Users",
    mounted() {
        this.$store.dispatch('fetchUsers')
    },
    methods: {
        fetchUsers(user) {
            this.$store.dispatch('fetchUsers', user)
        }
    },
    computed: {
        ...mapGetters([
            'users'
        ]),
        isValid() {
            return this.user.email !== '' && this.user.password !== ''
        }
    }
}
</script>

<style scoped>

</style>
