document.addEventListener("DOMContentLoaded", function () {
  const links = document.querySelectorAll(".blogfilter-radiobutton"); // class name of link

  links.forEach((link) => {
    const text = link.textContent.trim();
    const originalHref = link.getAttribute("href");

    // Skip if the text is "All Categories"
    if (text === "All Categories") return;

    // Avoid adding the ID if already present
    if (!originalHref.includes("#category-section")) {
      link.setAttribute("href", originalHref + "#category-section");
    }
  });
});
