import { Launch } from "./Launch";

export type Event = {
    id: string;
    url: string;
    slug: string;
    name: string;
    type: TypeEvent;
    description: string;
    location: string;
    news_url: string;
    feature_image: string;
    date: string;
    launches: [Launch];
    expeditions: [];
    spacestations: [];
    program: [];
}

type TypeEvent = {
    id: string;
    name: string;
}