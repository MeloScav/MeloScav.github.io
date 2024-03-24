import React from "react";

interface ICategoryPageProps {
  params: {
    category: string;
  };
}

const CategoryPage = (props: ICategoryPageProps) => {
  const { params } = props;
  const currentCategory = params.category;

  return <div>Test {currentCategory}</div>;
};

export default CategoryPage;
