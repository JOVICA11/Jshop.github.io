document.addEventListener("DOMContentLoaded", function () {
    console.log("JavaScript Loaded!");

    
    const menu = document.querySelector(".menu");
    const menuButton = document.createElement("button");
    
    menuButton.classList.add("menu-toggle");
    document.querySelector("header").prepend(menuButton);

    menuButton.addEventListener("click", function () {
        menu.classList.toggle("active");
    });

    
    const exploreButton = document.querySelector(".button");
    if (exploreButton) {
        exploreButton.addEventListener("click", function () {
            alert("Explore our latest collection!");
        });
    }

    const products = document.querySelectorAll(".card");
    products.forEach((product) => {
        const addButton = document.createElement("button");
        addButton.innerText = "Add to Cart";
        addButton.classList.add("add-to-cart");
        product.appendChild(addButton);

        addButton.addEventListener("click", function () {
            const itemName = product.querySelector(".text-card").innerText;
            alert(`${itemName} added to cart!`);
        });
    });
});

