interface ICreateUserDTO {
  id?: string;
  name: string;
  email: string;
  password: string;
  registry: string;
  avatar?: string;
  isAdmin?: boolean;
}

export { ICreateUserDTO };
