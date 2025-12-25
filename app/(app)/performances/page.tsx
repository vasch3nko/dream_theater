import {prisma} from "@/lib/prisma";
import PerformanceCard from "@/components/performance-card";

export default async function Performances() {
    const performances = await prisma.performance.findMany({
        include: {comments: true},
    });

    return (
        <>
            {performances.map((performance) => (
                <PerformanceCard key={performance.id} performance={performance}/>
            ))}
        </>
    );
}
