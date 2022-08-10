import { ISendMailDTO } from '../../dtos/ISendMailDTO';
import { ISendMailRepository } from '../ISendMailRepository';
import nodemailer from 'nodemailer';

const transport = nodemailer.createTransport({
  host: 'smtp.mailtrap.io',
  port: 2525,
  auth: {
    user: '72b900f1ba920d',
    pass: '7d4d06c79b4fbf',
  },
});

class SendMailRepository implements ISendMailRepository {
  async sendMail({ user_email, subject, body }: ISendMailDTO): Promise<void> {
    await transport.sendMail({
      from: 'Equipe <noreplay@unifip.com>',
      // to: '<juniorsilvacc1@gmail.com>',
      to: user_email,
      subject,
      html: body,
    });
  }
}

export { SendMailRepository };
