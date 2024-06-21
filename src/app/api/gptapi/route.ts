import OpenAI from "openai";
import type { NextRequest } from "next/server";

const openai = new OpenAI({
  apiKey: process.env.PUBLIC_OPENAI_API_KEY,
});

export const POST = async (req: NextRequest) => {
  try {
    const { searchParams } = req.nextUrl;
    const keyword = searchParams.get("keyword");
    if (!keyword) {
      return new Response(JSON.stringify({ error: "키워드가 필요합니다." }), { status: 400 });
    }
    const response = await openai.chat.completions.create({
      response_format: { type: "json_object" },
      model: "gpt-4o",
      messages: [
        {
          role: "system",
          content:
            "keyword를 분석하여 JSON 객체로 반환해. keyword가 한글이라면 translated: keyword를 영어로 번역한 값, definition: keyword의 영어 사전적 의미, synonyms: 한글 동의어 리스트, antonyms: 한글 반의어 리스트, example: 한글로 된 예시 문장, translatedExample: example을 영어로 번역한 값. keyword가 영어라면 translated: keyword를 한글로 번역한 값,definition: keyword의 한글 사전적 의미, synonyms: 영어 동의어 리스트, antonyms: 영어 반의어 리스트, example: 영어로 된 예시 문장, translatedExample: example을 한글로 번역한 값.",
        },
        {
          role: "user",
          content: keyword,
        },
      ],
      temperature: 0,
      max_tokens: 300,
      top_p: 0,
      frequency_penalty: 0,
      presence_penalty: 0,
    });

    const completion = response.choices[0].message.content;
    return new Response(JSON.stringify({ completion }));
  } catch (error) {
    console.error("Error in handler:", error);
    return new Response(JSON.stringify({ error: `${error}` }));
  }
};
