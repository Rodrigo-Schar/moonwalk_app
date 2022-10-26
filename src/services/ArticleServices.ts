import { Constants } from "@/shared"

export function getArticleList() {
    return fetch(`${Constants.NEWS_API_URL}articles`)
        .then(data => data.json())
}

export function searchArticleByTitle(title: string) {
    return fetch(`${Constants.NEWS_API_URL}articles?title_contains=${title}`)
        .then(data => data.json())
}