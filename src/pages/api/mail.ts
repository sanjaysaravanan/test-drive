import nodemailer from 'nodemailer';
import type { NextApiRequest, NextApiResponse } from 'next'

export const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'sanjaysaravanan00007@gmail.com',
    // ToDo: Remove the visible creds
    pass: 'ntmtnlhslnjoyfql'
  }
});

export const mailOptions = {
  from: 'sanjaysaravanan00007@gmail.com',
  to: ['sanjaysaravanan1997@gmail.com'],
  subject: 'Received Your Msg, will get Back Shortly',
  text: 'That was easy!'
};
 
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const { message, email } = req.body;
    await transporter.sendMail({ 
      ...mailOptions,
      to: [...mailOptions.to, email],
      text: `Received Your below msg,

${message}

Will get back to You shortly. Thanks!!!
`
    });
    // Process a POST request
    res.status(200).json({ message: 'Hello from Next.js!' });
  } else {
    // Handle any other HTTP method
    res.status(404).json({ message: 'Http method not found' });
  }
}
