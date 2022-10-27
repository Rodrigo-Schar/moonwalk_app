import { Article, Provider } from '@/models/Article';

export const StorageConstants = {
    isSignedIn: 'isSignedIn',
};

export const Constants = {
    API_URL: 'https://ll.thespacedevs.com/2.1.0/',
    NEWS_API_URL: 'https://api.spaceflightnewsapi.net/v3/',
    monthNames: ["Jan", "Feb", "Mar", "Apr", "May", "June",
    "July", "Aug", "Sep", "Oct", "Nov", "Dec"],
}

const listProvider: Provider[] = [];
export const articleObj: Article = {
	id: 0,
	featured: false,
	title: "string",
	url: "string",
	imageUrl: "string",
	newsSite: "string",
	summary: "string",
	publishedAt: "string",
	updatedAt: "string",
	launches: listProvider,
	events: listProvider,
}