import { ApifyClient } from 'apify-client';

// Initialize the ApifyClient with API token
const apifyClient = new ApifyClient({
    token: `${process.env.NEXT_PUBLIC_APIFYCLEINT_API_TOKEN}`,
});

export default apifyClient;