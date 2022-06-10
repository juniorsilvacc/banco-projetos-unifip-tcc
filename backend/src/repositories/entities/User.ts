class User {
  id?: string;
  name: string;
  email: string;
  password: string;
  registry: string;

  private constructor({ name, email, password, registry }: User) {
    return Object.assign(this, {
      name,
      email,
      password,
      registry,
    });
  }

  static create({ name, email, password, registry }: User) {
    const user = new User({ name, email, password, registry });
    return user;
  }
}

export { User };
