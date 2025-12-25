"use client"

import {useHeaderLinks} from "@/contexts/header-context";
import {useEffect} from "react";
import PerformanceCard from "@/components/performance-card";

export default function HomeClient({performances}: {
    performances: ({
        comments: {
            id: number
            content: string
            performanceId: number
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
        <main>
            {performances.map(performance => <PerformanceCard key={performance.id} performance={performance}/>)}
        </main>
    );
}
