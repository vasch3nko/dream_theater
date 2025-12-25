import {Star} from "lucide-react";
import {cn} from "@/lib/utils";

type StarRatingProps = {
    value: number;
    onChange: (value: number) => void;
    max?: number;
};

export function StarRating({value, onChange, max = 5}: StarRatingProps) {
    return (
        <div className="flex gap-1">
            {Array.from({length: max}).map((_, i) => {
                const v = i + 1;
                return (
                    <Star
                        key={v}
                        size={24}
                        onClick={() => onChange(v)}
                        className={cn(
                            "cursor-pointer transition-colors",
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
