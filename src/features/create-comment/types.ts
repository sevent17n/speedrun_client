export interface CreateCommentProps {
  article_id: number;
}

export interface CreateCommentDto {
  article_id: number;
  title: string;
  content: string;
}
