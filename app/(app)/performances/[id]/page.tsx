import {prisma} from "@/lib/prisma";
import {notFound} from "next/navigation";
import PerformanceClient from "@/app/(app)/performances/[id]/performance-client";
import {Metadata} from "next";

export async function generateMetadata({params}: { params: Promise<{ id: number }> }): Promise<Metadata> {
    const {id} = await params;

    const performance = await prisma.performance.findUnique({
        where: {id: Number(id)}
    });

    const name = performance?.name || "Не найдено";
    const description = performance?.description || "Не найдено";

    return {
        title: `${name} - Dream Theater - Драм. театр Нижневартовск`,
        description: `${description}`,
    }
}

export default async function Performance({params}: { params: Promise<{ id: number }> }) {
    const {id} = await params;

    const performance = await prisma.performance.findUnique({
        where: {id: Number(id)},
        include: {comments: true},
    });

    if (!performance) {
        notFound();
    }

    return <PerformanceClient performance={performance}/>;
}
