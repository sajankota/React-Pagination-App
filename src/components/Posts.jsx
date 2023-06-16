import React from "react";
// Import the necessary modules from the React library

const Post = ({ posts, loading }) => {
  // Define a functional component called "Post" that accepts two props: "posts" and "loading"

  return (
    <>
      {/* Use a fragment to wrap the JSX code */}
      {loading ? ( // Use a conditional (ternary) operator to check if loading is true
        <h2>Loading...</h2> // Return a loading message if loading is true
      ) : (
        <ul className="list-group mb-4">
          {/* Render an unordered list with the class "list-group" and "mb-4" margin-bottom class */}
          {posts.map((post) => (
            // Map through each post in the "posts" array
            <li key={post.id} className="list-group-item">
              {/* Render a list item for each post with a unique key based on the post's id */}
              {post.title}
              {/* Render the post's title as the content of the list item */}
            </li>
          ))}
        </ul>
      )}
    </>
  );
};

export default Post;
// Export the Post component as the default export of the module
