export const checkImageURL = (url) => {
    if (!url) {
      return false;
    }
  
    // Match URLs that are typical image hosting URLs, like those that end in image extensions
    const imagePattern = /\.(jpeg|jpg|gif|png|bmp|webp|svg)$/i;
  
    // Ensure the URL is a valid URL structure (using regex to cover cases like encrypted-tbn0)
    const validUrlPattern = /^(http|https):\/\/[^ "]+$/;
  
    // Check if the URL is valid and if it ends with an image extension (if applicable)
    return validUrlPattern.test(url) && (imagePattern.test(url) || url.includes("tbn"));
  };
  