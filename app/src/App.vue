<script setup lang="ts">
import { ref } from 'vue'
import ConferenceCard from './components/ConferenceCard.vue'
import { getConferences } from './services/conference.service';

const conferences = getConferences()

const conferenceList = ref(conferences)
</script>

<template>
	<header>
		<h1>Agenda Conférences Tech</h1>
	</header>
	<main>
		<ConferenceCard
			v-for="conference in conferenceList"
			:conference="conference"
			:key="conference.id"
		/>
	</main>
</template>
