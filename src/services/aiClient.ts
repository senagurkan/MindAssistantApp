import { HF_API_KEY, HF_MODEL_URL } from "@env";

const API_KEY = HF_API_KEY;
const API_URL = HF_MODEL_URL;


function interpretSentiment(scores: any[]): "positive" | "neutral" | "negative" {
  if (!scores || !scores.length) return "neutral";

  const sorted = [...scores].sort((a, b) => b.score - a.score);
  const top = sorted[0].label.toLowerCase();

  if (top.includes("positive")) return "positive";
  if (top.includes("negative")) return "negative";
  return "neutral";
}

export async function analyzeText(text: string) {
  try {
    const response = await fetch(API_URL, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ inputs: text }),
    });
    

    const data = await response.json();

    if (!response.ok) {
      console.log("HF ERROR:", data);
      throw new Error("Model çalışmadı");
    }

    const scores = Array.isArray(data[0]) ? data[0] : data;

    const sentiment = interpretSentiment(scores);

    const summary =
      sentiment === "positive"
        ? "Bugün olumlu duygular ön planda."
        : sentiment === "negative"
        ? "Bugün biraz zorlayıcı duygular taşıyorsun."
        : "Bugün daha dengeli ve nötr bir ruh halindesin.";

    const suggestion =
      sentiment === "positive"
        ? "Bu enerjiyi koruyacak bir aktivite yapabilirsin."
        : sentiment === "negative"
        ? "Kısa bir nefes egzersizi veya yürüyüş iyi gelebilir."
        : "Dilersen günü güzelleştirecek küçük bir aktivite ekleyebilirsin.";

    return {
      sentiment,
      summary,
      suggestion,
    };
  } catch (err) {
    console.log("AI ERROR:", err);
    throw err;
  }
}
