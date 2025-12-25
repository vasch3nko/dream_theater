"use client"

import {useHeaderLinks} from "@/contexts/header-context";
import {useEffect} from "react";
import PerformanceCard from "@/components/performance-card";
import {Separator} from "@/components/ui/separator";
import {Card, CardContent} from "@/components/ui/card";
import {Accordion, AccordionItem, AccordionTrigger, AccordionContent} from "@/components/ui/accordion";

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
        <>
            <section className="space-y-5">
                <h1 className="text-2xl md:text-3xl lg:text-5xl font-black">Dream Theater</h1>

                <p className="text-lg font-light text-balance">
                    В Нижневартовске есть место, где реальность трескается по швам, где тишина тяжелее крика, а свет софитов режет воздух, как лезвие. Это драматический театр «Dream Theater» — не здание, не сцена, а состояние души.

                    <br/>
                    <br/>

                    Здесь не «играют роли» — здесь живут на разрыв. Каждый спектакль — как открытая рана: больно, честно, без анестезии. Актёры выходят на сцену не за аплодисментами, а за правдой. За той самой, от которой зритель сначала замирает, потом злится, потом узнаёт себя — и уже не может отвести взгляд.

                    <br/>
                    <br/>

                    «Dream Theater» — это когда классика звучит дерзко, современность бьёт в лоб, а эксперименты не из серии «чтобы было», а потому что иначе нельзя. Здесь ломают шаблоны, плюют на удобство и делают театр, который не гладит по голове, а хватает за горло.

                    <br/>
                    <br/>

                    Нижневартовск суров. И театр здесь — соответствующий. Без глянца, без фальши, без пустых поз. Только живые нервы, жёсткие смыслы и сцена, на которой мечта и кошмар идут рука об руку. Не зря название — Dream Theater: потому что мечты тоже бывают тревожными, странными и пугающе настоящими.

                    <br/>
                    <br/>

                    Если ты ищешь «культурный вечер» — возможно, тебе не сюда.
                    А если ты хочешь почувствовать, а не просто посмотреть —
                    двери «Dream Theater» уже открыты.
                </p>
            </section>

            <Separator className="my-10"/>

            <section className="space-y-10">
                <h2 className="text-2xl md:text-3xl lg:text-5xl font-black">Предстоящие выступления:</h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10">
                    {performances.map((performance) => (
                        <PerformanceCard key={performance.id} performance={performance}/>
                    ))}
                </div>
            </section>

            <Separator className="my-10"/>

            <section>
                <Card className="shadow-xl rounded-2xl">
                    <CardContent className="p-6">
                        <h2 className="text-3xl font-bold mb-6 tracking-tight">
                            FAQ — Dream Theater
                        </h2>

                        <Accordion type="single" collapsible className="w-full">
                            <AccordionItem value="item-1">
                                <AccordionTrigger>Что это вообще за театр?</AccordionTrigger>
                                <AccordionContent>
                                    «Dream Theater» — драматический театр, который не развлекает, а встряхивает. Мы работаем с эмоциями,
                                    страхами и мечтами. Это театр переживаний, а не декораций.
                                </AccordionContent>
                            </AccordionItem>

                            <AccordionItem value="item-2">
                                <AccordionTrigger>Почему такое название?</AccordionTrigger>
                                <AccordionContent>
                                    Dream Theater — про сны. Тревожные, странные, честные. Про состояния, из которых выходишь другим.
                                </AccordionContent>
                            </AccordionItem>

                            <AccordionItem value="item-3">
                                <AccordionTrigger>Какие спектакли вы ставите?</AccordionTrigger>
                                <AccordionContent>
                                    Драму, психологический театр, современную классику, эксперименты и авторские постановки.
                                    Иногда жёстко. Иногда тихо. Но никогда — пусто.
                                </AccordionContent>
                            </AccordionItem>

                            <AccordionItem value="item-4">
                                <AccordionTrigger>Нужно ли разбираться в театре?</AccordionTrigger>
                                <AccordionContent>
                                    Нет. Нужно только быть живым. Всё остальное догонит по ходу спектакля.
                                </AccordionContent>
                            </AccordionItem>

                            <AccordionItem value="item-5">
                                <AccordionTrigger>Можно ли уйти, если стало тяжело?</AccordionTrigger>
                                <AccordionContent>
                                    Можно. Но чаще зрители остаются. Даже когда некомфортно. Особенно тогда.
                                </AccordionContent>
                            </AccordionItem>

                            <AccordionItem value="item-6">
                                <AccordionTrigger>Это театр для всех?</AccordionTrigger>
                                <AccordionContent>
                                    Нет. Если вы ищете лёгкий вечер — вам не сюда. Если хотите честный разговор — добро пожаловать.
                                </AccordionContent>
                            </AccordionItem>

                            <AccordionItem value="item-8">
                                <AccordionTrigger>Почему стоит прийти именно к вам?</AccordionTrigger>
                                <AccordionContent>
                                    Мы не обещаем, что вам понравится. Мы обещаем, что вам будет не всё равно.
                                </AccordionContent>
                            </AccordionItem>
                        </Accordion>
                    </CardContent>
                </Card>
            </section>
        </>
    );
}
