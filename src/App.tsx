import React, { useState, useEffect } from "react"; // Importing necessary modules and components
import axios from "axios";
import "./App.css";
import Post from "./components/Posts";
import Pagination from "./components/Pagination";

const App = () => {
  // Define the main component
  const [posts, setPosts] = useState([]); // State variable for storing posts data
  const [loading, setLoading] = useState(false); // State variable for loading status
  const [currentPage, setCurrentPage] = useState(1); // State variable for current page number
  const postPerPage = 10; // Number of posts to display per page

  useEffect(() => {
    // Run the effect hook to fetch posts data
    const fetchPosts = async () => {
      // Define an asynchronous function for fetching posts
      setLoading(true); // Set loading state to true
      try {
        const res = await axios.get(
          "https://jsonplaceholder.typicode.com/posts"
        ); // Send a GET request to retrieve posts data from an API
        setPosts(res.data); // Update the posts state with the retrieved data
      } catch (error) {
        console.error("Error fetching posts:", error); // Log an error if there is any issue with fetching posts
      }
      setLoading(false); // Set loading state to false once the data has been fetched
    };

    fetchPosts(); // Invoke the fetchPosts function
  }, []); // Run the effect only once (on component mount) by passing an empty dependency array

  // Get current posts based on the current page
  const indexOfLastPost = currentPage * postPerPage; // Calculate the index of the last post to be displayed on the current page
  const indexOfFirstPost = indexOfLastPost - postPerPage; // Calculate the index of the first post to be displayed on the current page
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost); // Extract the posts to be displayed on the current page using slice()

  // Change the current page
  const paginate = (pageNumber) => {
    // Define a function for changing the current page
    setCurrentPage(pageNumber); // Update the currentPage state with the provided page number
  };

  return (
    // Render the JSX markup
    <div className="container mt-5">
      <h1 className="text-primary mb-3">Simple React Pagination App</h1>
      {
        //Display a heading
      }
      <Post posts={currentPosts} loading={loading} />
      {
        // Render the Post component, passing the currentPosts and loading props
      }

      <Pagination // Render the Pagination component
        postsPerPage={postPerPage} // Pass the number of posts per page as a prop
        totalPosts={posts.length} // Pass the total number of posts as a prop
        paginate={paginate} // Pass the paginate function as a prop
      />
    </div>
  );
};

export default App; // Export the main component for usage in other parts of the application
