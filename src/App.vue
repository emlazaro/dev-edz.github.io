<template>
    <div class="bg-img w3-grayscale w3-dark-grey w3-display-container" style="height: 100vh;">
        <div class="w3-bar w3-card w3-animate-top">
            <router-link 
                class="w3-button w3-text-white"
                to="/">
                Dev Edz
            </router-link>
            <div class="w3-right">
                <router-link 
                    v-for="(link, index) in links" :key="index"
                    class="w3-button w3-text-white"
                    :to="link.path"
                    > {{ link.text }} </router-link>
            </div>
        </div>
        <router-view></router-view>
        <div class="w3-small w3-bar w3-container w3-center w3-text-white"
            style="bottom: 0px; position: absolute;">
            Dev Edz Portfolio - Powered by Vue.js and w3.css
        </div>
    </div>
  
</template>
<script>
    export default {
        data(){
            return {
                links: [
                    {path: '/projects', text: 'My Projects'},
                    {path: '/aboutme', text: 'About Me'},
                    {path: '/contactme', text: 'Contact Me'},
                ],
            }
        }   
    }
</script>
<style>
    body,h1,h2,h3,h4,h5,h6 {font-family: "Raleway", sans-serif}
    html, body
    {
        height: 100%;
    }

    .router-link-exact-active {
        background-color:#f1f1f1!important;
        color: black!important;
    }

    .bg-img {
        background-position: center;
        background-size: cover;
        /* background-image: url("./assets/dev-bg.jpg"); */
        min-height: 100%;
    }
</style>