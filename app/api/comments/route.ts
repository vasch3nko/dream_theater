import {NextRequest, NextResponse} from "next/server"
import {prisma} from "@/lib/prisma"

export async function POST(req: NextRequest) {
    try {
        const {content, rating, performanceId} = await req.json()

        if (!content || typeof rating !== "number" || typeof performanceId !== "number") {
            return NextResponse.json(
                {error: "Неверные данные"},
                {status: 400}
            )
        }

        const comment = await prisma.comment.create({
            data: {
                content,
                rating,
                performanceId,
            },
        })

        return NextResponse.json(comment)
    } catch (error) {
        console.error(error)
        return NextResponse.json(
            {error: "Ошибка сервера"},
            {status: 500}
        )
    }
}
