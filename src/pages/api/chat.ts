import dotenv from 'dotenv';
import { NextApiRequest, NextApiResponse } from 'next';
import { GoogleGenerativeAI } from '@google/generative-ai';

import jsonData from '../../data.json';

dotenv.config();
const genAI = new GoogleGenerativeAI(process.env.GAPI_KEY!);
const model = genAI.getGenerativeModel({ model: 'gemini-1.5-flash' });

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {

  if (req.method === 'POST') {
    const { message } = req.body;

    try {
      const prompt = `
        You are an intelligent assistant. Use the following information to respond to the user's query:
  
        Data:
        ${JSON.stringify(jsonData, null, 2)}
  
        User query:
        ${message}
  
        Provide a detailed, contextually relevant response based on the data provided generate a beautiful answer and short, and never return the answer with you replace it with Yarin.
        `;

      const result = await model.generateContent(prompt);
      const responseText = await result.response.text();
      return res.status(200).json({
        reply: responseText.trim(),
      });
    } catch (err) {
      console.error('Error communicating with Google Generative AI:', err);
      return res.status(500).json({
        error: 'Failed to generate response from Google Generative AI',
      });
    }
  }

  res.setHeader('Allow', ['POST']);
  res.status(405).end(`Method ${req.method} Not Allowed`);
}
