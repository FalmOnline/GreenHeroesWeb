import { getCategoryDetails, getCategorySlugs, getPostList } from "../../../../lib/posts";
import Category from './Category';

export async function generateStaticParams() {
  const categories = await getCategorySlugs();
  return categories.map((category) => ({
    categoryName: category.slug,
  }));
}

async function fetchCategoryData(categoryName) {
  const { nodes, pageInfo } = await getPostList(null, { key: "categoryName", value: categoryName });
  const categoryDetails = await getCategoryDetails(categoryName);
  return {
    categoryPosts: nodes,
    pageInfo,
    categoryDetails,
  };
}

export default async function CategoryPage({ params }) {
  const { categoryPosts, pageInfo, categoryDetails } = await fetchCategoryData(params.categoryName);
  const categories = await getCategorySlugs(); // Fetch all categories for the menu

  return (
    <Category 
      categoryPosts={categoryPosts} 
      pageInfo={pageInfo} 
      categoryDetails={categoryDetails}
      categories={categories} // Pass the categories to the Category component
    />
  );
}
