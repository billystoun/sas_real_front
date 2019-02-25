<template>
</template>

<script>
export default {
    mounted() {
        if (localStorage.getItem("token")) {
            this.$router.push("search");
        }
    }
}
</script>