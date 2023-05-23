export interface Conference {
	id: string
	title: string
	date: {
		start: Date
		end: Date
	}
	location: string
	website: URL
	illustration?: {
		src: string
		description: string
	}
}
