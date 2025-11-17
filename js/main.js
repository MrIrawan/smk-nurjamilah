const menuItems = document.querySelectorAll(".menu-item");
const contentTitle = document.getElementById("contentTitle");
const tentangContent = document.getElementById("tentangContent");
const visiContent = document.getElementById("visiContent");
const galeriContent = document.getElementById("galeriContent");
const mobileToggle = document.getElementById("mobileToggle");
const sidebar = document.getElementById("sidebar");

// Function to change active menu and content
function setActiveMenu(activeItem) {
  // Remove active class from all items
  menuItems.forEach((item) => {
    item.classList.remove("active");
  });

  // Add active class to clicked item
  activeItem.classList.add("active");

  // Get the content type from data attribute
  const contentType = activeItem.getAttribute("data-content");

  // Hide all content
  tentangContent.style.display = "none";
  visiContent.style.display = "none";
  galeriContent.style.display = "none";

  // Show the selected content and update title
  switch (contentType) {
    case "tentang":
      tentangContent.style.display = "block";
      contentTitle.textContent = "Tentang Kami";
      break;
    case "visi":
      visiContent.style.display = "block";
      contentTitle.textContent = "Visi dan Misi";
      break;
    case "galeri":
      galeriContent.style.display = "block";
      contentTitle.textContent = "Galeri Nurjamilah";
      break;
  }

  // Close sidebar on mobile after selection
  if (window.innerWidth <= 768) {
    sidebar.classList.remove("mobile-open");
  }
}

// Add click event to menu items
menuItems.forEach((item) => {
  item.addEventListener("click", function () {
    setActiveMenu(this);
  });
});

// Mobile toggle functionality
mobileToggle.addEventListener("click", function () {
  sidebar.classList.toggle("mobile-open");
});

// Close sidebar when clicking outside on mobile
document.addEventListener("click", function (event) {
  if (window.innerWidth <= 768) {
    const isClickInsideSidebar = sidebar.contains(event.target);
    const isClickOnToggle = mobileToggle.contains(event.target);

    if (
      !isClickInsideSidebar &&
      !isClickOnToggle &&
      sidebar.classList.contains("mobile-open")
    ) {
      sidebar.classList.remove("mobile-open");
    }
  }
});
