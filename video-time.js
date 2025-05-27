$(function () {
  const content = $(".video-content")[0]; // class of main content div
  if (!content) {
    console.warn("No .video-content element found.");
    return;
  }

  function formatDuration(seconds) {
    if (seconds < 60) {
      return Math.floor(seconds) + " sec";
    } else if (seconds < 3600) {
      return Math.floor(seconds / 60) + " min";
    } else {
      return (
        Math.floor(seconds / 3600) +
        " hr " +
        Math.floor((seconds % 3600) / 60) +
        " min"
      );
    }
  }

  function getVideoDuration(videoUrl) {
    return new Promise((resolve) => {
      const video = document.createElement("video");
      video.preload = "metadata";
      video.src = videoUrl;

      video.addEventListener("loadedmetadata", () => {
        resolve(video.duration);
      });

      video.addEventListener("error", () => {
        console.warn("Error loading video:", videoUrl);
        resolve(0);
      });
    });
  }

  async function updateVideoDurations() {
    const videoLinks = $(
      ".video-content a[href$='.mp4'], .video-content a[href$='.webm'], .video-content a[href$='.mov']"
    );

    let totalVideoDuration = 0;

    for (let i = 0; i < videoLinks.length; i++) {
      const link = videoLinks[i];
      const videoUrl = link.href;

      const duration = await getVideoDuration(videoUrl);
      totalVideoDuration += duration;

      const formatted = formatDuration(duration);
      if (!$(link).next().hasClass("video-duration")) {
        $(link).after(`<span class="video-duration">(${formatted})</span>`);
      } else {
        $(link).next(".video-duration").text(`(${formatted})`);
      }
    }

    if (totalVideoDuration > 0 && $(".video-time").length > 0) {
      const totalFormatted = formatDuration(totalVideoDuration);
      $(".video-time").html(totalFormatted); // class name of time display div
    }
  }

  // Initial run
  updateVideoDurations();

  // Watch for changes
  const observer = new MutationObserver(() => {
    updateVideoDurations();
  });

  observer.observe(content, {
    childList: true,
    subtree: true,
  });
});
