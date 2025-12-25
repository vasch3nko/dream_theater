"use client"

import PerformanceCard from "@/components/performance-card";
import {useHeaderLinks} from "@/contexts/header-context";
import {useEffect} from "react";

export default function PerformancesClient({performances}: {
    performances: ({
        comments: {
            id: number
            performanceId: number
            content: string
            rating: number
            createdAt: Date
        }[]
    } & {
        id: number
        name: string
        description: string
        soldOut: boolean
        perfomancedAt: Date
    })[]
}) {
    const {setLinks} = useHeaderLinks();

    useEffect(() => {
        setLinks([{href: '/performances', label: 'Мероприятия'}]);
        return () => setLinks([]);
    }, [setLinks]);

    return (
        <section className="space-y-10">
            <h1 className="text-2xl md:text-3xl lg:text-5xl font-black">Выступления:</h1>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10">
                {performances.map((performance) => (
                    <PerformanceCard key={performance.id} performance={performance}/>
                ))}
            </div>
        </section>
    );
}
