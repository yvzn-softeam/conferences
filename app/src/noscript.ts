import type { Conference } from './Conference'
import { getConferences, isExpired } from './services/conference.service'

const dateTimeFormat = new Intl.DateTimeFormat('fr-FR', {
	day: 'numeric',
	month: 'long',
	year: 'numeric'
})

export function generateNoScriptContent(): string {
	const conferences = getConferences()
	return conferences.map(generateHtml).join('')
}

function generateHtml(conf: Conference): string {
	return (
		'<article>' +
		`<h2><a href=${conf.website} target=_blank rel=noopener>${conf.title}</a></h2>` +
		`<p>${dateTimeFormat.format(conf.date.start)}` +
		(conf.date.end ? ` / ${dateTimeFormat.format(conf.date.end)}` : '') +
		(isExpired(conf) ? '<p>(terminée)' : '') +
		`<p>${conf.location}` +
		'</article>'
	)
}
