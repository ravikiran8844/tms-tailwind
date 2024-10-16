let currentYear = new Date().getFullYear();
document.getElementById("current-year").textContent = currentYear;

function formatToDisplay(date) {
  const parsedDate = new Date(date);
  return parsedDate.toLocaleDateString("en-US", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}




function redirectTo(url) {
  window.location.href = url;
}
