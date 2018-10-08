export interface News {
  excerpt: string;
  id: string;
  frontmatter: {
    date: string;
    id_name: string;
    title: string;
    ignored?: boolean;
  };
  html: string;
}
