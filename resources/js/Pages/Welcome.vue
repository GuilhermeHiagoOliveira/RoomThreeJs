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
        <canvas class="experience-canvas">

        </canvas>
    </div>
</template>
