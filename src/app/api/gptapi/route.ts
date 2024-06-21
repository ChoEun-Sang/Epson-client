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
            "keyword에 적힌 글을 분석해서 모두 json 객체에 담아서 알려줘. keyword가 한글이라면 translated에는 keyword를 영어로 번역하고 keyword가 영어라면 translated에는 keyword를 한글로 번역해. definition에는 keyword가 한글이라면 영어로 된 사전적 의미를, keyword가 영어라면 한글로 된 사전적 의미를 넣어. synonyms에는 keyword가 한글이라면 한글로 된 동의어를, keyword가 영어라면 영어로 된 동의어를 넣어. antonym에는 keyword가 영어라면 영어로 된 반의어를, keyword가 한글이라면 한글로 된 반의어를 넣어. 추가적으로 keyword가 한글이라면 example에는 한글로 된 한 줄의 예시문장과 translatedExample에는 example에 썼던 예시 문장을 영어로 번역해서 넣고, keyword가 영어라면 example에는 영어로 된 한 줄의 예시문장과 translatedExample에는 example에 썼던 예시 문장을 한글로 번역해서 넣어. 그리고 동사, 형용사, 부사등은 기본형으로 알려줘. 다만 영어가 아닌 것들은 필요없으니 쓰지마.",
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
