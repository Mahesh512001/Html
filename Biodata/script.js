// Get elements
const openPopupBtn = document.getElementById("openPopupBtn");
const popupForm = document.getElementById("popupForm");
const closeBtn = document.querySelector(".close");

// Show popup when "CREATE" is clicked
openPopupBtn.onclick = () => {
  popupForm.style.display = "block";
};

// Close popup when X is clicked
closeBtn.onclick = () => {
  popupForm.style.display = "none";
};

// Close popup when clicking outside
window.onclick = (event) => {
  if (event.target === popupForm) {
    popupForm.style.display = "none";
  }
};

// Handle form submission
document.getElementById("biodataForm").addEventListener("submit", function(e) {
  e.preventDefault();
  alert("Biodata submitted! PDF generation will go here.");
  popupForm.style.display = "none"; // Hide after submit
});
