<script setup lang="ts">
import { computed } from 'vue'

import type { Conference } from '@/Conference'
import DateRange from './DateRange.vue'
import IllustrationImage from './IllustrationImage.vue'

const props = defineProps<{
	conference: Conference
}>()

const labelId = computed(() => `${props.conference.id}-label`)
</script>

<template>
	<a
		:href="conference.website.toString()"
		target="_blank"
		rel="noopener"
		:aria-labelledby="labelId"
	>
		<article>
			<IllustrationImage
				v-if="conference.illustration"
				:src="conference.illustration?.src"
				:description="conference.illustration?.description"
			/>
			<div :id="labelId">
				<h2>{{ conference.title }}</h2>
				<DateRange :start="conference.date.start" :end="conference.date.end" />
				<p>{{ conference.location }}</p>
			</div>
		</article>
	</a>
</template>

<style scoped>
* {
	--width: 256px;
}

article {
	background-color: var(--surface3);
	border-radius: 0.5rem;
	box-shadow: var(--shadow);
	color: var(--text1);
	outline-offset: 0.25rem;
	overflow: hidden;
	width: var(--width);
}

article:hover {
	background-color: var(--surface4);
	box-shadow: var(--shadow-elevated);
}

a {
	color: inherit;
	text-decoration: none;
}

div {
	padding: var(--space-small) var(--space-medium) var(--space-medium) var(--space-medium);
}

h2 {
	color: var(--text3);
	font-weight: normal;
	letter-spacing: -0.05em;
}

img {
	aspect-ratio: 1;
	width: var(--width);
}
</style>
