// Slideshow
const images = [
  "images/concept-person-suffering-from-cybersickness-technology-addiction.jpg",
  "images/assortment-sorted-tech-objects.jpg",
  "images/pic.jpeg",
  "images/pic2.avif"
];

let index = 0;
const slideshow = document.getElementById("slideshow");

setInterval(() => {
  index = (index + 1) % images.length;
  slideshow.classList.add("opacity-0", "scale-105");
  setTimeout(() => {
    slideshow.src = images[index];
    slideshow.classList.remove("opacity-0", "scale-105");
  }, 2000);
}, 5000);

// Backend API functions
async function addItem() {
  const item = {
    id: "#EW-5001",
    category: "Laptop",
    location: "Lab B",
    status: "Pending Pickup",
    date: new Date().toISOString()
  };

  let response = await fetch("http://localhost:3000/api/items", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(item)
  });

  let data = await response.json();
  console.log("Server response:", data);
  alert(data.message);
}

async function loadItems() {
  let response = await fetch("http://localhost:3000/api/items");
  let items = await response.json();
  console.log("Items from backend:", items);
}

