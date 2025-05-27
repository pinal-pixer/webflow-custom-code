/* resource time to read */
$(function () {
  var content = $(".read-content")[0]; // class name of content main div
  if (!content) {
    return;
  }
  var txt = content.textContent;

  wordCount = txt.replace(/[^\w ]/g, "").split(/\s+/).length;

  var readingTimeInMinutes = Math.floor(wordCount / 228) + 1;
  var readingTimeAsString = readingTimeInMinutes + " min read";

  $(".read-time").html(readingTimeAsString); // class name of your read time text
});
