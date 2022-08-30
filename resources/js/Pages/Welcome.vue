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
                        <h1 class="hero-main-title">Lorem Ipsum</h1>
                        <p class="hero-main-description">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corrupti exercitationem cum ratione? Ducimus natus odit earum veritatis voluptas nostrum, quibusdam illo, fugit reiciendis incidunt explicabo placeat laborum impedit tenetur. Quo.</p>
                    </div>

                    <div class="hero-second">
                        <h1 class="hero-second-subheading">Lorem Ipsum</h1>
                        <p class="hero-second-subheading">Lorem</p>
                    </div>

                </div>
            </section>

        </div>

    </div>

</template>
