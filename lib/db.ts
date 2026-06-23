import dotenv from "dotenv";

import { PrismaPg } from "@prisma/adapter-pg";
import { PrismaClient } from "./generated/prisma/client";

const globalForPrisma = globalThis as unknown as {
    prisma: PrismaClient;
};

export function createPrismaClient() {
    dotenv.config();
    const url = process.env.DATABASE_URL;

    if (!url) {
        throw new Error("DATABASE_URL environment variable is not set.");
    }

    // Prisma 7+ users drive adapter instead of baking the connection into the client, so we need to create the adapter and pass it to the PrismaClient constructor.
    const adapter = new PrismaPg({
        connectionString: url,
    });

    return new PrismaClient({
        adapter,
    });
}

export const prisma = globalForPrisma.prisma || createPrismaClient();

if (process.env.NODE_ENV !== "production") {
    globalForPrisma.prisma = prisma;
}
