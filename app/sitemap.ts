import type { MetadataRoute } from 'next'
import {prisma} from "@/lib/prisma";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
    const sitemap: {
        url: string;
        lastModified?: string | Date | undefined;
        changeFrequency?: "yearly" | "monthly" | "always" | "hourly" | "daily" | "weekly" | "never" | undefined;
        priority?: number | undefined;
    }[] = [
        {
            url: 'http://dreamtheater.site',
            lastModified: new Date(),
            changeFrequency: 'yearly',
            priority: 1,
        },
        {
            url: 'http://dreamtheater.site/performances',
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 0.8,
        }
    ];

    const performances = await prisma.performance.findMany({
        orderBy: {perfomancedAt: "desc"},
    });

    performances.forEach((performance) => {
        sitemap.push({
            url: `http://dreamtheater.site/performances/${performance.id}`,
            lastModified: new Date(),
            changeFrequency: 'weekly',
            priority: 0.5,
        })
    })

    return sitemap;
}