<script setup>
import { ref, onMounted } from 'vue';
import Experience from '@/Experience/Experience.js';

defineProps({
    canLogin: Boolean,
    canRegister: Boolean,
    laravelVersion: String,
    phpVersion: String,
})

onMounted(() => {
    const experience = new Experience(document.querySelector(".experience-canvas"));
})

</script>

<template>
    <Head title="Welcome" />

    <div class="experience">
        <canvas class="experience-canvas"></canvas>
    </div>

    <div class="page">
        <div class="page-wrapper">

            <section class="hero">
                <div class="hero-wrapper">

                    <div class="hero-main">
                        <h1 class="hero-main-title">CZ Brains</h1>
                        <p class="hero-main-description">AGÊNCIA DE PUBLICIDADE</p>
                        <p class="hero-main-description">E WEB EM CAMPINAS • SP</p>
                    </div>

                    <div class="hero-second">
                        <p class="hero-second-subheading">Nossa missão é fazer a</p>
                        <h1 class="hero-second-subheading">DIFERENÇA</h1>
                        <p class="hero-second-subheading">nos seus sonhos</p>
                    </div>
                </div>
            </section>

        </div>

    </div>

</template>
