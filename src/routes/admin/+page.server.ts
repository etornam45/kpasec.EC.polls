import { client } from '$lib';
import type { PageServerLoad, Actions } from './$types';

export const load = (async () => {
    const AcademicYear = await client.academicYear.findMany();
    return { AcademicYear };
}) satisfies PageServerLoad;

export const actions = {
    year: async ({ request }) => {
        const data = await request.formData()
        const start = data.get("start")
        const end = data.get("end")
        console.log(start, end);
        if (!start || !end) {
            return {
                success: false,
                message: "Invalid Year Input"
            };
        }
        await client.academicYear.create({
            data: {
                startYear: Number(start),
                endYear: Number(end)
            }
        })
        return {
            success: true,
            message: "Accademic year successfully created"
        };
    }
} satisfies Actions;