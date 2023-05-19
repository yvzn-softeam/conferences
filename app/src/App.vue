<script setup lang="ts">
import { ref } from 'vue'
import ConferenceCard from './components/ConferenceCard.vue'
import type { Conference } from './Conference';

const conferences: Conference[] = [
	{
		id: Math.random(),
		title: 'Web2day',
		date: {
			start: new Date('2023-05-31'),
			end: new Date('2023-06-02'),
		},
		location: 'Nantes, France',
		website: new URL('https://web2day.co/'),
		illustration: {
			src: new URL('./assets/web2day.webp', import.meta.url),
			description: "un éléphant géant en bois sous un hall vintage industriel métallique rouillé, de grands écrans de télévision sur la gauche avec des gens qui regardent une conférence, dans le style d'une capture d'écran de World of Warcraft"
		}
	},
	{
		id: Math.random(),
		title: 'DevFest Nantes',
		date: {
			start: new Date('2023-10-19'),
			end: new Date('2023-10-20'),
		},
		location: 'Nantes, France',
		website: new URL('https://devfest2023.gdgnantes.com/'),
		illustration: {
			src: new URL('./assets/devfest.webp', import.meta.url),
			description: "plan d'ensemble du grand hall d'un centre de conférence, rempli de participants, escalator sur le côté droit, pont supérieur sur le côté opposé avec de grands écrans de télévision et des cabines de conférence, angle élevé, isométrique, dans le style d'un écran de World of Warcraft"
		}
	},
	{
		id: Math.random(),
		title: 'AgileTour Nantes',
		date: {
			start: new Date('2023-11-02'),
			end: new Date('2023-11-03'),
		},
		location: 'Nantes, France',
		website: new URL('https://agilenantes.org/evenements/agile-tour-nantes/agile-tour-nantais-2023/'),
		illustration: {
			src: new URL('./assets/agiletour.webp', import.meta.url),
			description: ""
		}
	},
	{
		id: Math.random(),
		title: 'BreizhCamp',
		date: {
			start: new Date('2023-06-28'),
			end: new Date('2023-06-30'),
		},
		location: 'Rennes, France',
		website: new URL('https://www.breizhcamp.org/'),
		illustration: {
			src: new URL('./assets/breizhcamp.webp', import.meta.url),
			description: 'un auditorium rempli de participants, un orateur sur scène, isométrique, pixel art'
		}
	}
].sort((a, b) => a.date.start.getTime() - b.date.start.getTime())

const conferenceList = ref(conferences)
</script>

<template>
	<header>
		<h1>Conferences</h1>
	</header>
	<main>
		<ConferenceCard v-for="conference in conferenceList" :conference="conference" :key="conference.id" />
	</main>
</template>
