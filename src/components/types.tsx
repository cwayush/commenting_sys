export interface User {
  id: string;
  name: string;
  email: string;
  company: {
    name: string;
  };
}

export interface Comment {
  id: string;
  name: string;
  email: string;
  companyName: string;
  body: string;
}
