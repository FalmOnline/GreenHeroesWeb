// import { useState } from "react";
// import { getPostList } from "@/lib/posts";

// export default function LoadMore({ posts, setPosts, taxonomy = null }) {
//   const [buttonText, setButtonText] = useState('Load more posts');
//   const [buttonDisabled, setButtonDisabled] = useState(false);

//   const handleOnClick = async () => {
//     setButtonText('Loading...');
//     setButtonDisabled(true);

//     // Pass the taxonomy filter if provided
//     const morePosts = await getPostList(posts.pageInfo.endCursor, taxonomy);

//     const updatedPosts = {
//       pageInfo: morePosts.pageInfo,
//       nodes: [...posts.nodes, ...morePosts.nodes],
//     };

//     setPosts(updatedPosts);

//     if (morePosts.pageInfo.hasNextPage) {
//       setButtonText('Load more posts');
//       setButtonDisabled(false);
//     } else {
//       setButtonText('No more posts to load');
//       setButtonDisabled(true);
//     }
//   };

//   return (
//     <button 
//       onClick={handleOnClick} 
//       disabled={buttonDisabled}
//     >
//       {buttonText}
//     </button>
//   );
// }

import { useState, useEffect } from "react";
import { getPostList } from "@/lib/posts";

export default function LoadMore({ posts, setPosts, taxonomy = null }) {
  // Initialize state based on whether there are more posts to load
  const [buttonText, setButtonText] = useState(
    posts.pageInfo.hasNextPage ? 'Load more posts' : 'No more posts to load'
  );
  const [buttonDisabled, setButtonDisabled] = useState(!posts.pageInfo.hasNextPage);

  useEffect(() => {
    // Update the button state if the posts prop changes
    if (posts.pageInfo.hasNextPage) {
      setButtonText('Load more posts');
      setButtonDisabled(false);
    } else {
      setButtonText('No more posts to load');
      setButtonDisabled(true);
    }
  }, [posts]);

  const handleOnClick = async () => {
    setButtonText('Loading...');
    setButtonDisabled(true);

    // Pass the taxonomy filter if provided
    const morePosts = await getPostList(posts.pageInfo.endCursor, taxonomy);

    const updatedPosts = {
      pageInfo: morePosts.pageInfo,
      nodes: [...posts.nodes, ...morePosts.nodes],
    };

    setPosts(updatedPosts);

    if (morePosts.pageInfo.hasNextPage) {
      setButtonText('Load more posts');
      setButtonDisabled(false);
    } else {
      setButtonText('No more posts to load');
      setButtonDisabled(true);
    }
  };

  return (
    <button 
      onClick={handleOnClick} 
      disabled={buttonDisabled}
    >
      {buttonText}
    </button>
  );
}
