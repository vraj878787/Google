import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export const getSommelierRecommendation = async (userQuery: string): Promise<string> => {
  try {
    const model = 'gemini-2.5-flash';
    const systemInstruction = `
      You are Henri, an expert sommelier at a prestigious restaurant called "Lumière & Sel".
      Your tone is sophisticated, warm, and inviting. You are concise but knowledgeable.
      You help guests pair wines with their meals or suggest cocktails based on their mood.
      The menu features modern French cuisine with Japanese influences.
      If the user asks about something unrelated to food or drink, politely steer the conversation back to the dining experience.
      Keep responses under 100 words.
    `;

    const response = await ai.models.generateContent({
      model,
      contents: userQuery,
      config: {
        systemInstruction,
        temperature: 0.7,
      },
    });

    return response.text || "I apologize, I am momentarily distracted by a vintage Bordeaux. Could you repeat that?";
  } catch (error) {
    console.error("Sommelier Error:", error);
    return "I seem to be having trouble accessing my wine cellar notes at the moment. Please ask your server for a recommendation.";
  }
};
