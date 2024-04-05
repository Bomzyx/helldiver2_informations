import type { PageServerLoad } from './$types';

export const load: PageServerLoad = (async (event) => {
    const response = await event.fetch(
        `https://helldiverstrainingmanual.com/api/v1/war/news`
    );
    const data_json = await response.json();
    return {
        news: data_json
    };

}) satisfies PageServerLoad;