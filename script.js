// tooltip div
const tooltip = document.getElementById("tooltip");

// select all contour lines
const contours = document.querySelectorAll(".contour");

contours.forEach(line => {

  // Show popup on hover
  line.addEventListener("mouseenter", () => {
    // Get elevation from id (e.g. elev-7400 → 7400)
    const elev = line.id.replace("elev-", "");
    tooltip.innerText = `Elevation: ${elev} ft`;
    tooltip.style.display = "block";
  });

  // Move popup with mouse
  line.addEventListener("mousemove", (e) => {
    tooltip.style.left = (e.pageX + 10) + "px";
    tooltip.style.top = (e.pageY + 10) + "px";
  });

  // Hide popup on mouse leave
  line.addEventListener("mouseleave", () => {
    tooltip.style.display = "none";
  });

  // Click event (optional)
  line.addEventListener("click", () => {
    alert("You clicked elevation " + line.id.replace("elev-", "") + " ft");
  });
});
