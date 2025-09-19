document.getElementById("wasteForm").addEventListener("submit", async (e) => {
  e.preventDefault();

  const itemName = document.getElementById("itemName").value;
  const location = document.getElementById("location").value;

  let response = await fetch("http://localhost:3000/api/items", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ itemName, location }),
  });

  let data = await response.json();
  console.log(data);

  // show QR
  document.getElementById("qrResult").innerHTML = `
    <p>✅ ${data.message}</p>
    <p><b>Item ID:</b> ${data.item.id}</p>
    <img src="${data.qr}" alt="QR Code" class="mt-2"/>
  `;
});
