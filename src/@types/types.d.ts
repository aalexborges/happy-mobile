export type User = {
  name: string;
  email: string;
  image: string;
};

export type PostType = {
  id: number;
  slug: string;
  title: string;
  liked: boolean;
  saved: boolean;
  content: string;
  createAt: string | Date;
  updateAt: string | Date;
  author: {
    name: string;
    image: string;
  };
};

export type ApiReturnPosts = {
  page: number;
  take: number;
  data: PostType[];
  total: number;
};

export type PostAuthorProps = {
  updateAt: string | Date;
  author: {
    name: string;
    image: string;
  };
};

export type PostContentProps = {
  id: number;
  liked: boolean;
  content: string;
  onLiked: (liked: boolean) => void;
};

export type PostLikeProps = {
  id: number;
  liked: boolean;
  onLiked: (liked: boolean) => void;
};