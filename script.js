const line1 = document.getElementById('line1');
const line2 = document.getElementById('line2');
const measurementDisplay = document.getElementById('measurement');

let isDragging = false;
let draggedLine = null;

// Function to calculate the distance between the lines
function updateMeasurement() {
    const line1Pos = line1.offsetTop;
    const line2Pos = line2.offsetTop;
    const distance = Math.abs(line1Pos - line2Pos);
    measurementDisplay.textContent = `Distance: ${distance}px`;
}

// Enable dragging for line2
line2.addEventListener('mousedown', (event) => {
    isDragging = true;
    draggedLine = line2;
});

document.addEventListener('mouseup', () => {
    isDragging = false;
});

document.addEventListener('mousemove', (event) => {
    if (isDragging && draggedLine) {
        const containerTop = draggedLine.parentElement.offsetTop;
        const containerHeight = draggedLine.parentElement.clientHeight;
        let newTop = event.clientY - containerTop;

        // Restrict the line within the container boundaries
        if (newTop < 0) newTop = 0;
        if (newTop > containerHeight - draggedLine.offsetHeight) newTop = containerHeight - draggedLine.offsetHeight;

        draggedLine.style.top = `${newTop}px`;

        updateMeasurement();
    }
});

// Initialize the measurement display
updateMeasurement();
