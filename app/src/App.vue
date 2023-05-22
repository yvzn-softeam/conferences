<script setup lang="ts">
import { ref } from 'vue'
import ConferenceCard from './components/ConferenceCard.vue'
import type { Conference } from './Conference'

const conferences: Conference[] = [
	{
		id: `conf-${Math.random().toString().substring(2)}`,
		title: 'Web2day',
		date: {
			start: new Date('2023-05-31'),
			end: new Date('2023-06-02')
		},
		location: 'Nantes, France',
		website: new URL('https://web2day.co/'),
		illustration: {
			src: new URL('./assets/web2day.webp', import.meta.url),
			description: 'un éléphant géant en bois supporte un écran géant qui présente une conférence'
		}
	},
	{
		id: `conf-${Math.random().toString().substring(2)}`,
		title: 'DevFest Nantes',
		date: {
			start: new Date('2023-10-19'),
			end: new Date('2023-10-20')
		},
		location: 'Nantes, France',
		website: new URL('https://devfest2023.gdgnantes.com/'),
		illustration: {
			src: new URL('./assets/devfest.webp', import.meta.url),
			description: "le grand hall d'un centre de conférence"
		}
	},
	{
		id: `conf-${Math.random().toString().substring(2)}`,
		title: 'AgileTour Nantes',
		date: {
			start: new Date('2023-11-02'),
			end: new Date('2023-11-03')
		},
		location: 'Nantes, France',
		website: new URL(
			'https://agilenantes.org/evenements/agile-tour-nantes/agile-tour-nantais-2023/'
		),
		illustration: {
			src: new URL('./assets/agiletour.webp', import.meta.url),
			description: 'un équipe fièrement debout devant un tableau kanban'
		}
	},
	{
		id: `conf-${Math.random().toString().substring(2)}`,
		title: 'BreizhCamp',
		date: {
			start: new Date('2023-06-28'),
			end: new Date('2023-06-30')
		},
		location: 'Rennes, France',
		website: new URL('https://www.breizhcamp.org/'),
		illustration: {
			src: new URL('./assets/breizhcamp.webp', import.meta.url),
			description: 'un auditorium rempli de participants'
		}
	}
].sort((a, b) => a.date.start.getTime() - b.date.start.getTime())

const conferenceList = ref(conferences)
</script>

<template>
	<header>
		<h1>Conférences</h1>
	</header>
	<main>
		<ConferenceCard
			v-for="conference in conferenceList"
			:conference="conference"
			:key="conference.id"
		/>
	</main>
</template>
