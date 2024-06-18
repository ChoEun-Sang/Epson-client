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
      model: "gpt-4o",
      messages: [
        {
          role: "system",
          content:
            "keyword에 적힌 글을 분석해서 모두 json 객체에 담아서 알려줘. translated에는 영어로 번역하고 , definition에는 영어로된 사전적 의미와, synonyms에는 영어로된 동의어, antonym에는 영어로된 반의어를 알려주고 추가적으로 krexample에는 한글로 된 한 줄의 예시문장과 enexample에는 예시 문장을 영어로 번역해서 모두 json 객체에 담아서 알려줘. 다만 영어가 아닌 것들은 필요없으니 쓰지마 그리고 개행은 필요없으니 하지마",
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
