<script setup lang="ts">
import { computed } from 'vue';

const props = defineProps<{
	src: string
	description: string
}>()

const imagePath = computed(() => `${import.meta.env.BASE_URL}${props.src}`)
</script>

<template>
	<img :src="imagePath" :alt="description" width="256" height="256" />
</template>
