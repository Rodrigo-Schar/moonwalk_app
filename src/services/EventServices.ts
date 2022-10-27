import { Constants } from "@/shared"

export function getEvents() {
    return fetch(`${Constants.API_URL}event/upcoming?limit=10`)
        .then(data => data.json())
}