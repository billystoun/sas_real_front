<template>
    <div id="app">
        <div v-if="!auth">
            <Auth @trueAuth="auth = $event"/>
        </div>
        <div v-if="auth">
            <Menu/>
            <Header/>
            <div class="wrapper">
                <router-view @trueAuth="auth = $event"/>
            </div>
        </div>
    </div>
</template>

<script>
import Menu from '@/components/Menu';
import Header from '@/components/Header';
import Auth from '@/components/Auth';
export default {
    components: {
        Menu,
        Header,
        Auth
    },
    data() {
        return {
            auth: localStorage.getItem("token") || false
        }
    }
};
</script>