export interface Information {
  nume: string;
  name: string;
  link: string;
  linkTwo?: string;
}

export interface Category {
  id: number;
  category: string;
  parent_category__id?: number;
}
