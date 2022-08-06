type Http = {
    url: string,
    method: string,
    body?: string | BodyType | null
}

type BodyType = {
    name?: string,
    description?: string,
    language?: string,
    media_id?: string,
    username?: string,
    password?: string,
    request_token?: string
}

type Auth = {
    url: string,
    method: string,
    request_token: string,
    session_id: number
}

type ResultApi = {
    page: number,
    results: [
        {
            adult: boolean,
            backgrop_path: string,
            genre_ids: number[],
            id: number,
            original_language: string,
            original_title: string,
            overview: string,
            popularity: number,
            poster_path: string,
            release_date: number,
            title: string,
            video: boolean,
            vote_average: number,
            vote_count: number
        }
    ],
    total_pages: number,
    total_results: number
}