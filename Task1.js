// Show travel tip on button click
function showAlert() {
  alert("💡 Travel Tip: Don't miss the Ganga Aarti at Har Ki Pauri in the evening!");
}

// Confirm before leaving
// mark event as any to avoid deprecation/typings strike-through in editors
window.addEventListener("beforeunload", /** @param {any} e */ function (e) {
  e.preventDefault();
  // use bracket notation to avoid editor deprecation strike-through
  e['returnValue'] = '';
});

// Filter gallery images by search
function filterImages() {
  const input = document.getElementById("searchBox").value.toLowerCase();
  // target the gallery item containers so captions hide with images
  const items = document.querySelectorAll(".gallery-container > div");

  items.forEach(item => {
    const img = item.querySelector("img");
    const caption = item.querySelector(".caption")?.textContent || "";
    const text = ((img && img.alt) || "") + " " + caption;
    if (text.toLowerCase().includes(input)) {
      item.style.display = "";
    } else {
      item.style.display = "none";
    }
  });
}
