import { createOpenRouter } from '@openrouter/ai-sdk-provider';

if (!process.env.OPENROUTER_API_KEY) {
    throw new Error('OPENROUTER_API_KEY is not defined in the environment variables.');
}

const openrouter = createOpenRouter({
    apiKey: process.env.OPENROUTER_API_KEY,
});