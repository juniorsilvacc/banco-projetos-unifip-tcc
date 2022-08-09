interface ICreateProjectDTO {
  id?: string;
  user_id: string;
  title: string;
  description: string;
  availability: string;
  category_id: string;
}

export { ICreateProjectDTO };
