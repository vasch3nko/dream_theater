import {prisma} from "@/lib/prisma";
import HomeClient from "@/app/(app)/home-client";

export default async function Home() {
    const performances = await prisma.performance.findMany({
        include: {comments: true},
        orderBy: {perfomancedAt: "desc"},
        take: 12,
    });

    return <HomeClient performances={performances}/>;
}
