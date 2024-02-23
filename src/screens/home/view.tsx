import { CreateArticle } from "@/features/create-article";
import { ArticleList } from "@/widgets/article-list/view";

export const HomePage = () => {
  return (
    <div>
      <CreateArticle />
      <ArticleList />
    </div>
  );
};
