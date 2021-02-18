if (document.querySelector('.addToShoppingCart_productCard')) {
    let submitBtn_productCard = document.querySelector('.addToShoppingCart_productCard');
    let popover_productCard = document.querySelector('.popover_productCard');
    let popoverText_productCard = document.querySelector('.popoverText_productCard');

    let fadePopup_productCard = function () {
        popover_productCard.style.opacity = "0";
    }

    let openPopup = function () {
        popover_productCard.style.opacity = "1";
        popoverText_productCard.textContent = submitBtn_productCard.dataset.popover;
        setTimeout(fadePopup_productCard, 1000);
    }

    submitBtn_productCard.addEventListener('click', openPopup);
}
