import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
    try {
        const body = await request.json()
        const { name } = body

        return NextResponse.json({ data: `User is ${name}` })
    } catch (error) {
        return NextResponse.json(
            { error: 'Invalid request body' },
            { status: 400 }
        )
    }
}