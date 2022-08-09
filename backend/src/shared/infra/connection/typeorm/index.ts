import { DataSource } from 'typeorm';
import { Category } from '../../../../modules/category/models/Category';
import { Project } from '../../../../modules/projects/models/Project';
import { User } from '../../../../modules/users/models/User';
import { CreateUser1655417573382 } from './migrations/1655417573382-CreateUser';
import { CreateCategory1655503803488 } from './migrations/1655503803488-CreateCategory';
import { CreateProject1655562919592 } from './migrations/1655562919592-CreateProject';
import { AddRelationsCategoryID1655570195595 } from './migrations/1655570195595-AddRelationsCategoryID';

//Criar migration: yarn typeorm migration:create <caminho>
//Executar migration: yarn typeorm -- -d ./src/shared/connection/typeorm/index.ts migration:run

export const dataSource = new DataSource({
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: 'postgres',
  database: 'database_banco',
  entities: [User, Category, Project],
  migrations: [
    CreateUser1655417573382,
    CreateCategory1655503803488,
    CreateProject1655562919592,
    AddRelationsCategoryID1655570195595,
  ],
});
