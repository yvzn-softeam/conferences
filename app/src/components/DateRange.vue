<script setup lang="ts">
import { computed } from 'vue'

const props = defineProps<{
	start: Date
	end?: Date
}>()

const dateTimeFormat = new Intl.DateTimeFormat(undefined, { day: 'numeric', month: 'long' })

const startDate = computed(() => dateTimeFormat.format(props.start))
const endDate = computed(() => Boolean(props.end) && dateTimeFormat.format(props.end))
const year = computed(() => props.start.getFullYear())
</script>

<template>
	<p v-if="end">
		Du {{ startDate }} au <br />
		{{ endDate }} {{ year }}
	</p>
	<p v-else>
		Le {{ startDate }} {{ year }}
	</p>
</template>

<style scoped>
p {
	color: var(--text4);
}
</style>
