import { CategoryType, ICategory } from "@/types";

import { categories } from "@/data/categories";

export const getCategories = (): Array<ICategory> => [...categories];

export const getCategoryById = (
  id: keyof typeof CategoryType
): ICategory | undefined => categories.find((category) => category.id === id);

export const getCategoryBySlug =(slug: string): ICategory | undefined =>
  categories.find(
    (category) => category.id === (slug.toUpperCase() as keyof typeof CategoryType)
  );
