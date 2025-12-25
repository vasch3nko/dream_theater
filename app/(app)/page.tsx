import {prisma} from "@/lib/prisma";
import HomeClient from "@/app/(app)/home-client";
import type {Metadata} from "next";

export const metadata: Metadata = {
    title: "Главная - Dream Theater - Драм. театр Нижневартовск",
    description: "Главная страница драм. театра Dream Theater в Нижневартовске. Классика, драма, психологический театр, современная классика, эксперименты и авторские постановки.",
};

export default async function Home() {
    const performances = await prisma.performance.findMany({
        include: {comments: true},
        orderBy: {perfomancedAt: "desc"},
        take: 12,
    });

    return <HomeClient performances={performances}/>;
}
