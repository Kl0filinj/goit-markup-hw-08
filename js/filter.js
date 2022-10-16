const refs = {
  projects: document.querySelectorAll(".projects-list__item"),
  filterSet: document.querySelector(".filter-list"),
};

const onFilterSelected = (evt) => {
  if (evt.target.tagName !== "BUTTON") {
    return;
  }
  const currentFilterOption = evt.target.dataset.filter;
  console.log(currentFilterOption);
  refs.projects.forEach((item) => {
    item.classList.remove("hiden-title");
    if (
      currentFilterOption !== item.dataset.category &&
      currentFilterOption !== "all"
    ) {
      item.classList.add("hiden-title");
    }
  });
};

refs.filterSet.addEventListener("click", onFilterSelected);
