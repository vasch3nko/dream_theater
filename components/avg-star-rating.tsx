import { Star } from "lucide-react";
import { cn } from "@/lib/utils";

type AvgStarRatingProps = {
    value: number;
    size?: number;
    max?: number;
};

export function AvgStarRating({ value, size = 16, max = 5 }: AvgStarRatingProps) {
    return (
        <div className="flex gap-1">
            {Array.from({ length: max }).map((_, i) => {
                const v = i + 1;
                return (
                    <Star
                        key={v}
                        size={size}
                        className={cn(
                            "transition-colors",
                            v <= value
                                ? "fill-yellow-400 text-yellow-400"
                                : "text-muted-foreground"
                        )}
                    />
                );
            })}
        </div>
    );
}
