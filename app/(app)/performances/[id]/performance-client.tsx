"use client"

import {useHeaderLinks} from "@/contexts/header-context";
import {useEffect} from "react";
import {AvgStarRating} from "@/components/avg-star-rating";
import {Card, CardContent, CardFooter, CardHeader} from "@/components/ui/card";
import {Separator} from "@/components/ui/separator";
import {useForm} from "react-hook-form"
import {zodResolver} from "@hookform/resolvers/zod"

import {CommentFormValues, commentSchema} from "./schema"
import {Form, FormControl, FormField, FormItem, FormLabel, FormMessage} from "@/components/ui/form";
import {Textarea} from "@/components/ui/textarea";
import {Button} from "@/components/ui/button";
import {StarRating} from "@/components/star-rating";
import {toast} from "sonner";

export default function PerformanceClient({performance}: {
    performance: ({
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
    })
}) {
    const {setLinks} = useHeaderLinks();

    useEffect(() => {
        setLinks([
            {href: '/performances', label: 'Мероприятия'},
            {href: '#comment-form', label: 'Написать комментарий'},
            {href: '#comments', label: 'Комментарии'},
        ]);
        return () => setLinks([]);
    }, [setLinks]);

    const comments = performance.comments;
    const avgRating = comments.length === 0 ? 1 : Math.round(
        comments.reduce((sum, c) => sum + c.rating, 0) / comments.length
    )

    const form = useForm<CommentFormValues>({
        resolver: zodResolver(commentSchema),
        defaultValues: {
            performanceId: performance.id,
            content: "",
            rating: 5,
        },
    });

    function onSubmit(values: CommentFormValues) {
        fetch("/api/comments", {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(values),
        }).then(res => {
            if (!res.ok) {
                toast.error("Ошибка сохранения комментария");
            }
        }).catch(err => {
            toast.error("Ошибка сохранения комментария");
            console.error(err);
        })

        form.reset()
    }

    return (
        <>
            <section className="space-y-5">
                <h1 className="text-2xl md:text-3xl lg:text-5xl font-black">{performance.name}</h1>
                <div className="flex gap-2.5">
                    <span>Средняя оценка:</span>
                    <AvgStarRating value={avgRating} size={24}/>
                </div>
                <p className="font-light">{performance.description}</p>
            </section>

            <Separator className="my-5"/>

            <section className="space-y-5">
                <h3 id="comment-form" className="text-2xl font-bold">Написать комментарий:</h3>
                <Form {...form}>
                    <form
                        onSubmit={form.handleSubmit(onSubmit)}
                        className="space-y-4 max-w-md"
                    >
                        <FormField
                            control={form.control}
                            name="content"
                            render={({field}) => (
                                <FormItem>
                                    <FormLabel>Комментарий</FormLabel>
                                    <FormControl>
                                        <Textarea
                                            placeholder="Напишите комментарий..."
                                            {...field}
                                        />
                                    </FormControl>
                                    <FormMessage/>
                                </FormItem>
                            )}
                        />

                        <FormField
                            control={form.control}
                            name="rating"
                            render={({field}) => (
                                <FormItem>
                                    <FormLabel>Оценка</FormLabel>
                                    <FormControl>
                                        <StarRating
                                            value={field.value}
                                            onChange={field.onChange}
                                            max={5}
                                        />
                                    </FormControl>
                                    <FormMessage/>
                                </FormItem>
                            )}
                        />

                        <Button type="submit">Отправить</Button>
                    </form>
                </Form>
            </section>

            <Separator className="my-5"/>

            <section className="space-y-5">
                <h3 id="comments" className="text-2xl font-bold">Комментарии:</h3>

                <div className="grid md:grid-cols-2 gap-5">
                    {comments.map(comment => (
                        <Card key={comment.id}>
                            <CardHeader>
                                <AvgStarRating value={comment.rating}/>
                            </CardHeader>

                            <CardContent>
                                <p>{comment.content}</p>
                            </CardContent>

                            <CardFooter>
                                <span className="text-sm font-light">{comment.createdAt.toLocaleString()}</span>
                            </CardFooter>
                        </Card>
                    ))}
                </div>
            </section>
        </>
    );
}
