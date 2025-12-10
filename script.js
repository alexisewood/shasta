const tooltip = document.getElementById("tooltip");
const contours = document.querySelectorAll(".contour");

// Tooltip content generator — customize easily
function getContourInfo(id) {
  return `Contour Line: ${id}`;
}

contours.forEach(path => {
  // Mouse enters a contour line
  path.addEventListener("mouseenter", (e) => {
    tooltip.style.opacity = 1;
    tooltip.innerHTML = getContourInfo(path.id);
  });

  // Move tooltip with cursor
  path.addEventListener("mousemove", (e) => {
    tooltip.style.left = (e.pageX + 12) + "px";
    tooltip.style.top = (e.pageY + 12) + "px";
  });

  // Hide tooltip when leaving
  path.addEventListener("mouseleave", () => {
    tooltip.style.opacity = 0;
  });

  // Click event (optional)
  path.addEventListener("click", () => {
    alert(`Clicked: ${path.id}`);
  });
});
