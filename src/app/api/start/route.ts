import { NextRequest, NextResponse } from 'next/server'
import axios from 'axios'

export async function POST(request: NextRequest) {
    try {
        const body = await request.json()
        const { tg_user_id, tg_chat_id, user_id } = body

        if (!user_id || !tg_chat_id || !tg_user_id) {
            return NextResponse.json({
                status: 400,
                message: "Отсутствуют обязательные поля: user_id, tgChatId, tgUserId",
            }, { status: 400 })
        }

        const response = await axios.post(
            "https://api.resume.uz/api/telegram/tg-connect",
            {
                user_id: user_id,
                tg_chat_id: tg_chat_id,
                tg_user_id: tg_user_id,
            }
        )

        console.log("API ответ:", response.data)

        return NextResponse.json({
            status: 200,
            message: "Request sent successfully",
            data: response.data,
        })
    } catch (error: any) {
        console.error("Ошибка при отправке запроса:", error.message)

        return NextResponse.json({
            status: 500,
            message: "Ошибка при отправке запроса",
            error: error.message,
        }, { status: 500 })
    }
}