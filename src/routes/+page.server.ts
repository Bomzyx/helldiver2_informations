
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = (async (event) => {
    const response = await event.fetch(
        `https://api-hellhub-collective.koyeb.app/api/statistics/galaxy`
    );
    const data_json = await response.json();
    return {
        galaxies: data_json
    };
}) satisfies PageServerLoad;