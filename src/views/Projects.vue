<template>
    <div class="w3-display-container" style="height: 80%; width: 100%;">
        <div class="w3-display-middle w3-margin"
            style="width: 80%">
            <div class="skill-box w3-third w3-row-padding w3-display-container"
                v-for="(link, index) in links"
                :key="index">
                <div class="w3-card w3-padding w3-btn w3-block"
                    style="height: 300px;">
                    <div class="w3-xlarge w3-panel w3-green w3-round"><strong>{{ link.title }}</strong></div>
                    <div class="w3-container w3-margin-top">
                        <p class="skill-description">{{ link.description }}</p>
                    </div>
                    <router-link 
                        class="w3-display-position w3-button w3-round w3-light-blue w3-text-white "
                        style="bottom: 10px; right: 20px;"
                        :to="link.path">
                        <strong>View Projects</strong>
                    </router-link>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data(){
            return {
                links: [
                    {
                        path: '/projects/hardware', 
                        title: 'Hardware Interfacing', 
                        description: 'As a graduate of BS Electronics Engineering, I am adept in developing firmware for microcontrollers like Arduino and Gizduino. And also, python scripts for Raspberry Pi.',
                    },
                    {
                        path: '/vbnet', 
                        title: 'VB.Net Windows Application',
                        description: 'VB.Net is the first programming language I learn thru self study. Together with my Hardware Interfacing skill, I can develop windows application that can be interfaced with microcontrollers.',
                    },
                    {
                        path: '/webdev', 
                        title: 'Fullstack Web Development',
                        description: 'I\'m currently working on improving my programming skills by developing web applications using VueJS as front-end and Laravel PHP Framework as back-end.',
                    },
                ]
            }
        }
    }
</script>

<style>

    div.skill-box {
        opacity: 0.8;
    }

    .skill-description {
        white-space: normal;
        text-align: center;
        text-justify: inter-word;
    }
</style>
