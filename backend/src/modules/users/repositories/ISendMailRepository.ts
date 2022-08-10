import { ISendMailDTO } from '../dtos/ISendMailDTO';

interface ISendMailRepository {
  sendMail(data: ISendMailDTO): Promise<void>;
}

export { ISendMailRepository };
