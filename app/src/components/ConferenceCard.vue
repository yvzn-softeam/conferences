<script setup lang="ts">
import { computed } from 'vue'

import type { Conference } from '@/Conference'
import DateRange from './DateRange.vue'
import IllustrationImage from './IllustrationImage.vue'
import { isExpired } from '@/services/conference.service'

const props = defineProps<{
	conference: Conference
}>()

const hasLongTitle = computed(() => props.conference.title.length > 17)
const hasExpired = computed(() => isExpired(props.conference))
const labelId = computed(() => `${props.conference.id}-label`)
</script>

<template>
	<a :href="conference.website.toString()" target="_blank" rel="noopener" :aria-labelledby="labelId">
		<article :class="{ expired: hasExpired }">
			<IllustrationImage v-if="conference.illustration" :src="conference.illustration?.src"
				:description="conference.illustration?.description" />
			<div :id="labelId">
				<h2 :class="{ smaller: hasLongTitle }">{{ conference.title }}</h2>
				<del v-if="hasExpired">
					<DateRange :start="conference.date.start" :end="conference.date.end" />
				</del>
				<DateRange v-else :start="conference.date.start" :end="conference.date.end" />
				<p v-if="hasExpired">(terminée)</p>
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
	transition-duration: 0.05s;
	transition-property: transform, box-shadow, background-color, filter;
	transition-timing-function: ease-out;
	width: var(--width);
}

article:hover {
	background-color: var(--surface4);
	box-shadow: var(--shadow-elevated);
	transform: translateY(calc(var(--space-small) * -.5)) scale(1.05);
}

@media (prefers-reduced-motion) {
	article {
		transition-property: none;
	}
}

article.expired {
	filter: grayscale(1) contrast(.7) brightness(1.2);
	transform: scale(.8);
}

@media (prefers-color-scheme: dark) {
	article.expired {
		filter: grayscale(1) contrast(.7);
	}
}

article.expired:hover {
	filter: none;
	transform: translateY(calc(var(--space-small) * -.5)) scale(.85);
}

a {
	color: inherit;
	text-decoration: none;
}

div {
	min-height: 144px;
	padding: var(--space-small) var(--space-medium) var(--space-medium) var(--space-medium);
}

h2 {
	color: var(--text3);
	font-weight: normal;
	letter-spacing: -0.05em;
}

h2.smaller {
	font-size: 1.1rem;
	line-height: 1.5rem;
}

img {
	aspect-ratio: 1;
	display: inline-block;
	width: var(--width);
}
</style>
