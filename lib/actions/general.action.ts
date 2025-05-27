"use server";

import { feedbackSchema } from "@/constants";
import { db } from "@/firebase/admin";
import { google } from "@ai-sdk/google";
import { generateObject } from "ai";

export async function getInterviewByUserId(userId: string): Promise<Interview[] | null> {
  const interviews = await db.collection('interviews').where('userId', '==', userId).orderBy('createdAt', 'desc').get()

  return interviews.docs.map((doc) => ({
    id: doc.id,
    ...doc.data()
  })) as Interview[]
}

export async function getLatestInterviewByUserId(params: GetLatestInterviewsParams): Promise<Interview[] | null> {
  const { userId, limit = 20 } = params;

  const interviews = await db.collection('interviews').where('finalized', '==', true).where('userId', '!=', userId).limit(limit).get()

  return interviews.docs.map((doc) => ({
    id: doc.id,
    ...doc.data()
  })) as Interview[]
}

export async function getInterviewById(id: string): Promise<Interview | null> {
  const interview = await db.collection('interviews').doc(id).get()

  return interview.data() as Interview | null
}

export async function createFeedback(params: CreateFeedbackParams) {
  const { interviewI, userId, transcript } = params;

  try {
    const formattedTranscript = transcript.map((sentence: { role: string; content: string; }) => (
      `- ${ sentence.role }: ${sentence.content}\n`
    )).join('');

    const { object } = await generateObject({
      model: google('gemini-2.0-flash-001', {
        structuredOutputs: false,
      }),
      schema: feedbackSchema,
      prompt: 'ill give you the transcript and you asses the candidate',
      system: 'You are a professional interviewer.'
    });

    return { success: true, feedbackId: "" };

  } catch(e) {
    console.error('Error saving feedback', e)
  }
}
