<script setup lang="ts">
defineProps<{
	src: URL
	description: string
}>()
</script>

<template>
	<img :src="src.toString()" :alt="description" width="256" height="256" />
</template>
