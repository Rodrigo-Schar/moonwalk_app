export type Article = {
    id: number;
    featured: boolean;
    title: string;
    url: string;
    imageUrl: string;
    newsSite: string;
    summary: string;
    publishedAt: string;
    updatedAt: string;
    launches: [Provider];
    events: [Provider];
}

export type Provider = {
    id: string;
    provide: string;
}