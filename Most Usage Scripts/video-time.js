/*

Add these attributes to your HTML structure:
[data-time="video"] - Add this to the video element to calculate video time.
[data-time="video-time"] - Add this to the text element where the video time will be displayed.

*/

// Calculate Video Time
$(document).ready(function () {
  const video = $('[data-time="video"] video').get(0);
  const output = $('[data-time="video-time"]');

  video.addEventListener('loadedmetadata', () => {
    const m = Math.floor(video.duration / 60);
    const s = Math.floor(video.duration % 60);
    output.text(`${m}:${s < 10 ? '0' + s : s}`);
  });
});
