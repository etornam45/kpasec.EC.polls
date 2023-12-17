import { client } from '$lib';
import type { PageServerLoad, Actions } from './$types';

export const load = (async ({ params }) => {
    const AcademicYear = await client.academicYear.findUnique({
        where: {
            academicYearID: Number(params.year)
        }
    });

    const Positions = await client.positions.findMany({
        where: {
            academicYearID: Number(params.year)
        }
        include: {
            Candidates: true
        }
    })
    return { AcademicYear, Positions };
}) satisfies PageServerLoad;

export const actions: Actions = {
    position: async ({ request, params }) => {
        const data = await request.formData()
        const name = data.get("position")
        if (!name) {
            return {
                success: false,
                message: "Invalid Position Input"
            };
        }
        await client.positions.create({
            data: {
                positionName: String(name),
                academicYearID: Number(params.year)
            }
        })
        return {
            success: true,
            message: "Position successfully created"
        };
    },
    createcandidate: async ({ params, request }) => {
        console.log("Visited");
        const data = await request.formData()
        const name = data.get("name")
        console.log(name);
    }
}