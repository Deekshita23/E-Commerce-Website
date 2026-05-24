let cartCount = 0;

function addToCart() {
    cartCount++;
    document.getElementById("cart-count").innerText = cartCount;
}

const searchInput = document.getElementById("search");
const productCards = document.querySelectorAll(".product-card");

searchInput.addEventListener("keyup", function() {

    const searchValue = searchInput.value.toLowerCase();

    productCards.forEach(card => {

        const productName = card.querySelector("h2").innerText.toLowerCase();

        if(productName.includes(searchValue)) {
            card.style.display = "block";
        }
        else {
            card.style.display = "none";
        }

    });

});