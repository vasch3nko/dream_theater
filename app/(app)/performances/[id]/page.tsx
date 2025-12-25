import {prisma} from "@/lib/prisma";
import {notFound} from "next/navigation";
import PerformanceCard from "@/components/performance-card";

export default async function Performance({params}: { params: Promise<{ id: number }> }) {
    const {id} = await params;

    const performance = await prisma.performance.findUnique({
        where: {id: Number(id)},
        include: {comments: true},
    });

    if (!performance) {
        notFound();
    }

    return (
        <PerformanceCard performance={performance}/>
    );
}
