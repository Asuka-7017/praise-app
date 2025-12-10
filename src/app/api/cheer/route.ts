import { NextResponse } from 'next/server'
import { GoogleGenerativeAI } from '@google/generative-ai'

// Google AI Studioから取得したキー
const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY)

export async function POST(request: Request) {
  try {
    const { comment } = await request.json()
    if (!comment) {
      return NextResponse.json(
        { error: `コメントがありません` },
        { status: 400 }
      )
    }
    // Geminiのモデルを設定
    const model = genAI.getGenerativeModel({ model: 'gemini-2.5-flash' })
    // プロンプト
    const prompt = `あなたは、ユーザーを全力で肯定し、励ます優しいサポーターです。
        ユーザーの短いコメントに対して、自己肯定感が上がるような温かい言葉を100文字以内で返してください。
        明るい雰囲気にしてください。
        ユーザーのコメント:${comment}`

    const result = await model.generateContent(prompt)
    const response = await result.response
    const aiMessage = response.text()

    return NextResponse.json({ message: aiMessage })
  } catch (error) {
    console.error(error)
    return NextResponse.json(
      { error: 'AIとの通信に失敗しました' },
      { status: 500 }
    )
  }
}
