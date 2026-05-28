/*

Add these attributes to your HTML structure:
[data-time="reading"] - Add this to the Rich Text or any content element to calculate reading time.
[data-time="reading-time"] - Add this to the text element where the reading time will be displayed.

*/

// Calculate Reading Time 
$(document).ready(function () {
  const blogText = $('[data-time="reading"]').text().trim();
  const words = blogText.split(/\s+/).filter((word) => word.length > 0);
  const wordsPerMinute = 150;
  const wordCount = words.length;
  const time = Math.max(1, Math.ceil(wordCount / wordsPerMinute));
  $('[data-time="reading-time"]').text(`${time}min`);
});
