function openPopup() {
    document.getElementById("orderPopup").style.display = "block";
}

function closePopup() {
    document.getElementById("orderPopup").style.display = "none";
}

function confirmOrder() {
    let food = document.getElementById("foodItem").value;
    let qty = document.getElementById("quantity").value;

    alert("✅ Order Confirmed!\n\nFood: " + food + "\nQuantity: " + qty);

    closePopup();
}
