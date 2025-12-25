import {Card, CardAction, CardContent, CardDescription, CardFooter, CardHeader, CardTitle} from "@/components/ui/card";
import {Button} from "@/components/ui/button";

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
        <Card className="w-full max-w-sm">
            <CardHeader>
                <CardTitle>{performance.name}</CardTitle>
                <CardDescription>{performance.description}</CardDescription>
                <CardAction>
                    <span>{avgRating}</span>
                </CardAction>
            </CardHeader>
            <CardContent>

            </CardContent>
            <CardFooter className="flex-col gap-2">
                <Button variant="outline" className="w-full">
                    Login with Google
                </Button>
            </CardFooter>
        </Card>
    );
}
