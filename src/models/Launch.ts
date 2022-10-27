export type Launch = {
    id: string;
    url: string;
    launch_library_id: string;
    slug: string;
    name: string;
    status: LaunchStatus;
    net: string;
    window_end: string;
    window_start: string;
    inhold: boolean;
    tbdtime: boolean;
    tbddate: boolean;
    probability: number | null;
    holdreason: string | null;
    failreason: string | null;
    hashtag: string | null;
    launch_service_provider: LaunchServiceProvide;
    rocket: Rocket;
    mission: Mission;
    pad: Pad;
    webcast_live: boolean;
    image: string;
    infographic: string | null;
    program: [];
}

type LaunchStatus = {
    id: number;
    name: string;
    abbrev: string;
    description: string;
}

type LaunchServiceProvide = {
    id: number;
    url: string;
    name: string;
    type: string;
}

type Rocket = {
    id: number;
    configuration: RocketConfiguration;
}

type RocketConfiguration = {
    id: number;
    launch_library_id: number | null;
    url: string;
    name: string;
    family: string;
    full_name: string;
    variant: string;
}

type Mission = {
    id: number;
    launch_library_id: number;
    name: string;
    description: string;
    launch_designator: string | null;
    type: string;
    orbit: MissionOrbit;
}

type MissionOrbit = {
    id: number;
    name: string;
    abbrev: string;
}

type Pad = {
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

type PadLocation = {
    id: number;
    url: string;
    name: string;
    country_code: string;
    map_image: string;
    total_launch_count: number;
    total_landing_count: number;
}