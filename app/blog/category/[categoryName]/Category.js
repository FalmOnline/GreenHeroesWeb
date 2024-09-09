// // "use client"

// // import { useState } from "react";
// // import Link from "next/link";
// // import LoadMore from "@/app/components/LoadMore";
// // import Date from "../../../components/Date";
// // import Image from 'next/image';
// // import { getPostList } from "../../../../lib/posts"; // Add this import

// // export default function Category({ categoryPosts, pageInfo, categoryDetails }) {
// //     const [posts, setPosts] = useState({ nodes: categoryPosts, pageInfo });
// //     const [pageInfoState, setPageInfoState] = useState(pageInfo);
  
// //     const handleLoadMore = async () => {
// //       const morePosts = await getPostList(posts.pageInfo.endCursor, { key: "categoryName", value: categoryDetails.slug });
// //       setPosts({
// //         nodes: [...posts.nodes, ...morePosts.nodes],
// //         pageInfo: morePosts.pageInfo,
// //       });
// //     };

// //   return (
// //     <main>
// //       <div>
// //         <h1>Category Archive: {categoryDetails.name}</h1>
// //         <div>
// //           Found {categoryDetails.count} posts under this category.
// //         </div>
// //         <section>
// //           <div>
// //             {posts.nodes.map((post) => (
// //               <div key={post.slug} className="grid grid-cols-5 gap-4 mb-4">
// //                 <div className="col-span-2">
// //                   {post.featuredImage && post.featuredImage.node && post.featuredImage.node.mediaDetails && post.featuredImage.node.mediaDetails.sizes && post.featuredImage.node.mediaDetails.sizes.length > 0 && (
// //                     <Image
// //                       src={post.featuredImage.node.mediaDetails.sizes[0].sourceUrl}
// //                       alt={post.title}
// //                       width={post.featuredImage.node.mediaDetails.sizes[0].width}
// //                       height={post.featuredImage.node.mediaDetails.sizes[0].height}
// //                     />
// //                   )}
// //                 </div>
// //                 <div className="col-span-3">
// //                   <h2 className="py-4">
// //                     <Link className="" href={`/blog/${post.slug}`}>
// //                       {post.title}
// //                     </Link>
// //                   </h2>
// //                   <div className="py-4">
// //                     Published on <Date dateString={post.date} />
// //                   </div>
// //                   <div dangerouslySetInnerHTML={{ __html: post.excerpt }}></div>
// //                   <div>
// //                     Posted under {
// //                       post.categories.nodes.map((category) => (
// //                         <Link href={`/blog/category/${category.slug}`} key={category.slug}>{category.name}</Link>
// //                       ))
// //                     }
// //                   </div>
// //                 </div>
// //               </div>
// //             ))}
// //             <LoadMore posts={posts} setPosts={setPosts} taxonomy={{ key: "categoryName", value: categoryDetails.slug }} />
// //           </div>
// //         </section>
// //       </div>
// //     </main>
// //   );
// // }

// "use client";

// import { useState } from "react";
// import Link from "next/link";
// import LoadMore from "@/app/components/LoadMore";
// import Date from "../../../components/Date";
// import Image from 'next/image';
// import { getPostList } from "../../../../lib/posts";

// export default function Category({ categoryPosts, pageInfo, categoryDetails }) {
//     const [posts, setPosts] = useState({ nodes: categoryPosts, pageInfo });
  
//     const handleLoadMore = async () => {
//       const morePosts = await getPostList(posts.pageInfo.endCursor, { key: "categoryName", value: categoryDetails.slug });
//       setPosts({
//         nodes: [...posts.nodes, ...morePosts.nodes],
//         pageInfo: morePosts.pageInfo,
//       });
//     };

//     if (!categoryDetails) {
//         return <div>Loading category details...</div>;
//     }

//     return (
//         <main>
//             <div>
//                 <h1>Category Archive: {categoryDetails?.name || 'Loading...'}</h1>
//                 <div>
//                     Found {categoryDetails?.count || '...'} posts under this category.
//                 </div>
//                 <section>
//                     <div>
//                         {posts.nodes.map((post) => (
//                             <div key={post.slug} className="grid grid-cols-5 gap-4 mb-4">
//                                 <div className="col-span-2">
//                                     {post.featuredImage && post.featuredImage.node && post.featuredImage.node.mediaDetails && post.featuredImage.node.mediaDetails.sizes && post.featuredImage.node.mediaDetails.sizes.length > 0 && (
//                                         <Image
//                                             src={post.featuredImage.node.mediaDetails.sizes[0].sourceUrl}
//                                             alt={post.title}
//                                             width={post.featuredImage.node.mediaDetails.sizes[0].width}
//                                             height={post.featuredImage.node.mediaDetails.sizes[0].height}
//                                         />
//                                     )}
//                                 </div>
//                                 <div className="col-span-3">
//                                     <h2 className="py-4">
//                                         <Link className="" href={`/blog/${post.slug}`}>
//                                             {post.title}
//                                         </Link>
//                                     </h2>
//                                     <div className="py-4">
//                                         Published on <Date dateString={post.date} />
//                                     </div>
//                                     <div dangerouslySetInnerHTML={{ __html: post.excerpt }}></div>
//                                     <div>
//                                         Posted under {
//                                             post.categories.nodes.map((category) => (
//                                                 <Link href={`/blog/category/${category.slug}`} key={category.slug}>{category.name}</Link>
//                                             ))
//                                         }
//                                     </div>
//                                 </div>
//                             </div>
//                         ))}
//                         <LoadMore posts={posts} setPosts={setPosts} taxonomy={{ key: "categoryName", value: categoryDetails.slug }} />
//                     </div>
//                 </section>
//             </div>
//         </main>
//     );
// }

"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import LoadMore from "@/app/components/LoadMore";
import Date from "../../../components/Date";

export default function Category({ categoryPosts, pageInfo, categoryDetails, categories }) {
  const [posts, setPosts] = useState({ nodes: categoryPosts, pageInfo });
  
  return (
    <main>
      <div>
        {/* Render the categories menu */}
        <nav>
          <ul className="flex space-x-4">
            {categories.map((category) => (
              <li key={category.slug}>
                <Link href={`/blog/category/${category.slug}`}>
                  {category.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Category Details */}
        <h1>Category Archive: {categoryDetails.name}</h1>
        <div>
          Found {categoryDetails.count} posts under this category.
        </div>

        {/* Posts List */}
        <section>
          <div>
            {posts.nodes.map((post) => (
              <div key={post.slug} className="grid grid-cols-5 gap-4 mb-4">
                <div className="col-span-2">
                  {post.featuredImage && post.featuredImage.node && post.featuredImage.node.mediaDetails && post.featuredImage.node.mediaDetails.sizes && post.featuredImage.node.mediaDetails.sizes.length > 0 && (
                    <Image
                      src={post.featuredImage.node.mediaDetails.sizes[0].sourceUrl}
                      alt={post.title}
                      width={post.featuredImage.node.mediaDetails.sizes[0].width}
                      height={post.featuredImage.node.mediaDetails.sizes[0].height}
                    />
                  )}
                </div>
                <div className="col-span-3">
                  <h2 className="py-4">
                    <Link className="" href={`/blog/${post.slug}`}>
                      {post.title}
                    </Link>
                  </h2>
                  <div className="py-4">
                    Published on <Date dateString={post.date} />
                  </div>
                  <div dangerouslySetInnerHTML={{ __html: post.excerpt }}></div>
                  <div>
                    Posted under {
                      post.categories.nodes.map((category) => (
                        <Link href={`/blog/category/${category.slug}`} key={category.slug}>{category.name}</Link>
                      ))
                    }
                  </div>
                </div>
              </div>
            ))}
            <LoadMore posts={posts} setPosts={setPosts} taxonomy={{ key: "categoryName", value: categoryDetails.slug }} />
          </div>
        </section>
      </div>
    </main>
  );
}
