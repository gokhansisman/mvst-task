export type Node = {
  id: string;
  name: string;
  avatarUrl: string;
  login: string;
};

export type UserResult = {
  node: Node;
};

export type Repository = {
  id: string;
  name: string;
  url: string;
  description: string;
  updatedAt: Date;
  primaryLanguage: Language;
};

export type Language = {
  id: string;
  name: string;
}
