import { getCurrentUser } from '@/lib/actions/auth.action';
import { getFeedbackInterviewId, getInterviewById } from '@/lib/actions/general.action'
import { redirect } from 'next/navigation';
import React from 'react'

const page = async ({ params }: RouteParams) => {
  const { id } = await params;
  const user = await getCurrentUser();
  const interview = await getInterviewById(id)

  if(!interview) redirect('/')

  const feedback = await getFeedbackInterviewId({
    interviewId: id,
    userId: user?.id!
  })

  return (
    <section className="section-feedback">
    </section>
  )
}

export default page