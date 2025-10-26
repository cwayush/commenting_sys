export interface User {
  id: number | string;
  name: string;
  email: string;
  company: {
    name: string;
  };
}

export interface Comment {
  id: number | string;
  name: string;
  email: string;
  companyName: string;
  body: string;
}
