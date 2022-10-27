import { Article, Provider } from '@/models/Article';
import { Launch } from '@/models/Launch';

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
/*
export const launchObj: Launch = {
	id: "string",
    url: "string",
    launch_library_id: "string",
    slug: "string",
    name: "string",
    status: "LaunchStatus",
    net: "string",
    window_end: "string",
    window_start: "string",
    inhold: false,
    tbdtime: false,
    tbddate: false,
    probability: 0,
    holdreason: "string",
    failreason: "string",
    hashtag: "string",
    launch_service_provider: LaunchServiceProvide;
    rocket: Rocket;
    mission: Mission;
    pad: Pad;
    webcast_live: false,
    image: "string",
    infographic: "string",
    program: [],
}

export type LaunchStatus = {
    id: number;
    name: string;
    abbrev: string;
    description: string;
}

export type LaunchServiceProvide = {
    id: number;
    url: string;
    name: string;
    type: string;
}

export type Rocket = {
    id: number;
    configuration: RocketConfiguration;
}

export type RocketConfiguration = {
    id: number;
    launch_library_id: number | null;
    url: string;
    name: string;
    family: string;
    full_name: string;
    variant: string;
}

export type Mission = {
    id: number;
    launch_library_id: number;
    name: string;
    description: string;
    launch_designator: string | null;
    type: string;
    orbit: MissionOrbit;
}

export type MissionOrbit = {
    id: number;
    name: string;
    abbrev: string;
}

export type Pad = {
    id:  number;
    url: string;
    agency_id: number | null;
    name: string;
    info_url: string | null;
    wiki_url: string;
    map_url: string;
    latitude: string;
    longitude: string;
    location: PadLocation;
    map_image: string;
    total_launch_count: number;
}

const padLocation: PadLocation = {
    id: 0,
    url: "string",
    name: "string",
    country_code: "string",
    map_image: "string",
    total_launch_count: 0,
    total_landing_count: 0,
}*/