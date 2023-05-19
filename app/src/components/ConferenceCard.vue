<script setup lang="ts">
import type { Conference } from '@/Conference';
import DateRange from './DateRange.vue';
import IllustrationImage from './IllustrationImage.vue';

defineProps<{
	conference: Conference
}>()
</script>

<template>
	<a :href="conference.website.toString()" target="_blank" rel="noopener">
		<article>
			<IllustrationImage v-if="conference.illustration" :src="conference.illustration?.src"
				:description="conference.illustration?.description" />
			<div>
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
	border-radius: .5rem;
	box-shadow: var(--shadow);
	color: var(--text1);
	outline-offset: .25rem;
	overflow: hidden;
	width: var(--width);
}

article:hover {
	box-shadow: var(--shadow-elevated);
}

a {
	color: inherit;
	text-decoration: none;
}

div {
	padding: var(--space-small) var(--space-medium) var(--space-medium) var(--space-medium)
}

article div *+* {
	/* padding-top: var(--space-small); */
}

h2 {
	color: var(--text3);
	font-weight: normal;
	letter-spacing: -.05em;
}

img {
	aspect-ratio: 1;
	width: var(--width);
}
</style>
