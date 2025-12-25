import {prisma} from "@/lib/prisma";
import PerformancesClient from "@/app/(app)/performances/performances-client";

export default async function Performances() {
    const performances = await prisma.performance.findMany({
        include: {comments: true},
        orderBy: {perfomancedAt: "desc"},
        take: 64,
    });

    return <PerformancesClient performances={performances}/>;
}
