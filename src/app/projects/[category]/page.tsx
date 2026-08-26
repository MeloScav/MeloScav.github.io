import { Metadata } from "next";
import { notFound } from "next/navigation";
import { getCategoryBySlug } from "@/app/services/get-categories";

interface ICategoryPageProps {
  params: {
    category: string;
  };
}

export const generateMetadata = ({ params }: ICategoryPageProps): Metadata => {
  const category = getCategoryBySlug(params.category);

  return {
    title: category?.name ?? "Projets",
    description:
      category?.description ??
      "Ensemble de mes réalisations de design, développement et illustration.",
  };
};

const CategoryPage = (props: ICategoryPageProps) => {
  const { params } = props;
  const category = getCategoryBySlug(params.category);

  if (!category) {
    notFound();
  }

  return <h1>Categorie : {category.name}</h1>;
};

export default CategoryPage;
