<template>
    <div class="dash-board">
        <nav>
            <router-link to="/">LogOut</router-link>
        </nav>
        <router-view/>
    </div>
</template>

<script>
export default {
    name:'dash-board',
    mounted() {
        console.log('DashBoard mounted.')
    }
};
</script>
