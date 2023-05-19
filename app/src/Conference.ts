export interface Conference {
	id: number
	title: string
	date: {
		start: Date
		end: Date
	}
	location: string
	website: URL
	illustration?: {
		src: URL
		description: string
	}
}
