import { Category } from 'core/model/components/side-nave';

export const categoryies: Category[] = [
  {
    id: 1,
    category: 'Men',
  },
  {
    id: 2,
    category: 'Women',
  },
  {
    id: 3,
    category: 'Accessories',
  },
  {
    id: 4,
    category: 'Perty waer',
    parent_category__id: 1,
  },
  {
    id: 5,
    category: 'Perty waer',
    parent_category__id: 2,
  },
  {
    id: 6,
    category: 'Foot waer',
    parent_category__id: 3,
  },
  {
    id: 4,
    category: 'Accessories',
    parent_category__id: 4,
  },
];
