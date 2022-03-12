import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export const getLicense = async () => {
    try {
        let allLicences: any = await prisma.license.findMany({})
        return allLicences
    } catch (error) {
        console.error(error);
    }
};

export const postLicense = async(licenseName: string) => {
    try {
        await prisma.license.create({
            data: { name: licenseName }
        })
        return "ok"
    }
    catch (error) {
        console.log(error)
    }
}