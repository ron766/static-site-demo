// JavaScript to display the :slug value from the URL
function displaySlugFromURL() {
  const url = window.location.pathname; // Get the current URL
  const parts = url.split("/"); // Split the URL into parts

  // Check if the path starts with "/blog/"
  if (url.startsWith("/blog/")) {
    const slug = parts[parts.length - 1]; // The last part should be the :slug value
    // Display the :slug value in the designated HTML element for blog posts
    const slugElement = document.getElementById("slug-blog");
    slugElement.textContent = slug;
  } else if (url.startsWith("/news/")) {
    const slug = parts[parts.length - 1]; // The last part should be the :slug value
    // Display the :slug value in the designated HTML element for news pages
    const slugElement = document.getElementById("slug-news");
    slugElement.textContent = slug;
  }
}

// Call the function to display the :slug value
displaySlugFromURL();
