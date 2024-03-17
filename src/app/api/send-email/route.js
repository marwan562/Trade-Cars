import {EmailTemplate} from '../../checkout/_Components/_emailTemblet/email-template'
import { Resend } from 'resend';
import {useUser} from '@clerk/nextjs'


const resend = new Resend(process.env.RESEND_API_KEY);
const {user} = useUser();
export async function POST() {
  try {
    const data = await resend.emails.send({
      from: 'onboarding@resend.dev',
      to: [`${user.primaryEmailAddress.emailAddress}`],
      subject: ' Hello ',
      react: EmailTemplate({ firstName: `${user.fullName}` }),
    });

    return Response.json(data);
  } catch (error) {
    return Response.json({ error });
  }
}
