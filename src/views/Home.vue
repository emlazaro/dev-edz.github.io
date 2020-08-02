<template>
    <div class="w3-display-container" style="height: 80%; width: 100%;">
        <div class="w3-display-position w3-margin" 
            style="top: 20%; left: 30px;">
            <div class="w3-text-white w3-jumbo w3-animate-left">
                EDUARDO M. LAZARO III
            </div>
        </div>

        <div class="w3-display-position w3-margin w3-animate-zoom" 
            style="top: 35%; left: 30px;">
            <div class="w3-text-white w3-xlarge">
                Electronics Engineer ,
                Computer Programmer ,
                Fullstack Web Developer
            </div>
        </div>

        <div class="w3-display-position w3-margin w3-animate-zoom" 
            style="top: 45%; left: 30px;">
            <router-link 
                class="w3-btn w3-round w3-light-blue w3-text-white w3-xlarge"
                to="/projects">
                My Projects
            </router-link>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style>
    .content {
        position: absolute;
        top: 60px;
        width: 100%;
    }
</style>