document.addEventListener("DOMContentLoaded", function () {
  const tabs = document.querySelectorAll(".tab"); // Tab navigation elements
  const cards = document.querySelectorAll(".casestudy_card-section"); // Card elements to be filtered and paginated
  const paginationWrapper = document.querySelector(".pagination_block"); // Main pagination container
  const paginationContainer = document.querySelector(".pagination_inner-block"); // Container for page numbers
  const prevBtn = document.querySelector(".prev_button"); // Previous page button
  const nextBtn = document.querySelector(".next_button"); // Next page button

  let cardsPerPage = getCardsPerPage();
  let currentPage = 1;
  let filteredCards = [...cards];

  function getCardsPerPage() {
    return window.innerWidth <= 768 ? 3 : 6;
  }

  function showPage(page) {
    cardsPerPage = getCardsPerPage();
    const totalCards = filteredCards.length;
    const totalPages = Math.ceil(totalCards / cardsPerPage);
    const start = (page - 1) * cardsPerPage;
    const end = start + cardsPerPage;

    cards.forEach((card) => (card.style.display = "none"));

    filteredCards.forEach((card, index) => {
      if (index >= start && index < end) {
        card.style.display = "flex";
      }
    });

    paginationWrapper.style.display =
      totalCards > cardsPerPage ? "flex" : "none";

    updatePagination(totalPages);
  }

  function updatePagination(totalPages) {
    paginationContainer.innerHTML = "";
    if (totalPages <= 1) {
      paginationWrapper.style.display = "none";
      return;
    }

    const createPageButton = (page) => {
      const btn = document.createElement("a");
      btn.href = "#";
      btn.className = "page_number";
      btn.textContent = page;
      if (page === currentPage) btn.classList.add("active");
      btn.addEventListener("click", (e) => {
        e.preventDefault();
        currentPage = page;
        showPage(currentPage);
      });
      paginationContainer.appendChild(btn);
    };

    const createDots = () => {
      const dots = document.createElement("span");
      dots.className = "page_dots";
      dots.textContent = "...";
      paginationContainer.appendChild(dots);
    };

    createPageButton(1);
    if (currentPage > 4) createDots();

    let startPage = Math.max(2, currentPage - 2);
    let endPage = Math.min(totalPages - 1, currentPage + 2);

    for (let i = startPage; i <= endPage; i++) {
      createPageButton(i);
    }

    if (currentPage < totalPages - 3) createDots();
    if (totalPages > 1) createPageButton(totalPages);

    prevBtn.style.display = currentPage > 1 ? "flex" : "none";
    nextBtn.style.display = currentPage < totalPages ? "flex" : "none";
  }

  function filterCards(category) {
    filteredCards = [...cards].filter((card) => {
      return category === "all" || card.dataset.category === category;
    });

    currentPage = 1;
    showPage(currentPage);
  }

  tabs.forEach((tab) => {
    tab.addEventListener("click", () => {
      tabs.forEach((t) => t.classList.remove("active"));
      tab.classList.add("active");
      filterCards(tab.dataset.tab);
    });
  });

  prevBtn.addEventListener("click", (e) => {
    e.preventDefault();
    if (currentPage > 1) {
      currentPage--;
      showPage(currentPage);
    }
  });

  nextBtn.addEventListener("click", (e) => {
    e.preventDefault();
    const totalPages = Math.ceil(filteredCards.length / cardsPerPage);
    if (currentPage < totalPages) {
      currentPage++;
      showPage(currentPage);
    }
  });

  window.addEventListener("resize", () => {
    showPage(currentPage);
  });

  showPage(currentPage);
});
