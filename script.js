const tooltip = document.getElementById("tooltip");
const svg = document.getElementById("topo-svg");

// Add hover events to all contour paths
svg.querySelectorAll(".contour").forEach(path => {
  
  path.addEventListener("mousemove", (e) => {
    const info = path.dataset.info;
    tooltip.textContent = info;
    tooltip.style.left = (e.pageX + 12) + "px";
    tooltip.style.top = (e.pageY + 12) + "px";
    tooltip.style.display = "block";
  });

  path.addEventListener("mouseleave", () => {
    tooltip.style.display = "none";
  });
});
