import { Comment } from "../comment";

export interface Article {
  id: number;
  title: string;
  content: string;
  createdAt: Date;
  updatedAt: Date;
  comments: Comment[];
}
