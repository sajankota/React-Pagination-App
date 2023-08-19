
const Pagination = ({ postsPerPage, totalPosts, paginate }) => {
  const pageNumbers = Array.from(
    { length: Math.ceil(totalPosts / postsPerPage) },
    (_, i) => i + 1
  );
  // Create an array of page numbers using Array.from(). The array length is calculated by dividing the totalPosts by postsPerPage and rounding up using Math.ceil().
  // Each element of the array is mapped using an arrow function, where the element index is incremented by 1 to get the page number.

  return (
    <nav>
      <ul className="pagination">
        {pageNumbers.map((pageNumber) => (
          <li key={pageNumber} className="page-item">
            <a
              href="!#"
              onClick={() => paginate(pageNumber)}
              className="page-link"
            >
              {pageNumber}
            </a>
          </li>
        ))}
        {/* Render a list item for each page number in the pageNumbers array */}
        {/* Set the key prop to the page number for efficient rendering */}
        {/* Render an anchor tag for each page number */}
        {/* Set href to "!#" (can be updated with appropriate URL) */}
        {/* Attach an onClick event handler to call the paginate function with the clicked page number */}
        {/* Add the page number as the content of the anchor tag */}
      </ul>
    </nav>
  );
};

export default Pagination;
