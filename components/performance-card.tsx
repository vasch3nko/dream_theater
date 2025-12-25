import {Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle} from "@/components/ui/card";
import {Button} from "@/components/ui/button";
import {AvgStarRating} from "@/components/avg-star-rating";
import Link from "next/link";

export default function PerformanceCard({performance}: {
    performance: {
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
    }
}) {
    const comments = performance.comments;
    const avgRating = comments.length === 0 ? 1 : Math.round(
        comments.reduce((sum, c) => sum + c.rating, 0) / comments.length
    );

    return (
        <Card className="w-full">
            <CardHeader>
                <CardTitle>{performance.name}</CardTitle>
                <AvgStarRating value={avgRating}/>
            </CardHeader>
            <CardContent>
                <CardDescription>{performance.description}</CardDescription>
            </CardContent>
            <CardFooter className="flex-col gap-2">
                <Button variant="default" className="w-full">
                    <Link href={`/performances/${performance.id}`} className="w-full">
                        О выступлении
                    </Link>
                </Button>
            </CardFooter>
        </Card>
    );
}
