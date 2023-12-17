import type { RequestHandler } from './$types';

export const POST: RequestHandler = async ({request}) => {
    const data =  request.formData();
    console.log(data);
    return new Response();
};