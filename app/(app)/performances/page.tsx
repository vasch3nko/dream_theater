import {prisma} from "@/lib/prisma";
import PerformancesClient from "@/app/(app)/performances/performances-client";
import type {Metadata} from "next";

export const metadata: Metadata = {
    title: "Выступления - Dream Theater - Драм. театр Нижневартовск",
    description: "Выступления в драм. театре Dream Theater в Нижневартовске. Классика, драма, психологический театр, современная классика, эксперименты и авторские постановки.",
};

export default async function Performances() {
    const performances = await prisma.performance.findMany({
        include: {comments: true},
        orderBy: {perfomancedAt: "desc"},
        take: 64,
    });

    return <PerformancesClient performances={performances}/>;
}
