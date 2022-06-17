import { DataSource } from 'typeorm';
import { Category } from '../../../models/Category';
import { User } from '../../../models/User';
import { CreateUser1655417573382 } from './migrations/1655417573382-CreateUser';
import { CreateCategory1655503803488 } from './migrations/1655503803488-CreateCategory';

//Criar migration: yarn typeorm migration:create <caminho>
//Executar migration: yarn typeorm -- -d ./src/connection/typeorm/index.ts migration:run

export const dataSource = new DataSource({
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: 'postgres',
  database: 'database_banco',
  entities: [User, Category],
  migrations: [CreateUser1655417573382, CreateCategory1655503803488],
});
