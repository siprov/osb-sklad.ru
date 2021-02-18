// Этот скрипт переключает состояние кнопок карточки товара и
// определяет значения параметров страницы в зависимости от выбронного значения толщины
// valueSender_productCard.js


if (document.querySelector('.thicknessButtons_productCard')) {
    let btns_productCard = document.querySelectorAll('.thicknessButton_productCard');
    let price_productCard = document.querySelector('.priceForPieceValue_productCard');
    let priceForMeter = document.querySelector('.priceForMeterValue_productCard');
    let inStock_productCard = document.querySelector('.countInStock_productCard');
    let thicknessCharacteristic_productCard = document.querySelector('.thicknessValue_productCard');
    let weightCharacteristic_productCard = document.querySelector('.weigthValue_productCard');
    let hiddenValue = document.querySelector('.hiddenValue_productCard');
    let btnsArray_productCard = [];
    let selectBtnArray = [];

    for (let btn of btns_productCard) {
        btnsArray_productCard.push(btn)
    }

    let active_btn = document.querySelector('.selectButton')
    price_productCard.textContent = active_btn.dataset.price;
    priceForMeter.textContent = active_btn.dataset.priceForMeter;
    inStock_productCard.textContent = active_btn.dataset.count;
    thicknessCharacteristic_productCard.textContent = active_btn.dataset.thicknessFilter;
    weightCharacteristic_productCard.textContent = active_btn.dataset.weightFilter;
    hiddenValue.value = active_btn.dataset.id;

    for (let i = 0; i <= btnsArray_productCard.length - 1; i ++) {
        btnsArray_productCard[i].onclick = function () {
            price_productCard.textContent = btnsArray_productCard[i].dataset.price;
            priceForMeter.textContent = btnsArray_productCard[i].dataset.priceForMeter;
            inStock_productCard.textContent = btnsArray_productCard[i].dataset.count;
            hiddenValue.value = btnsArray_productCard[i].dataset.id;
            thicknessCharacteristic_productCard.textContent = btnsArray_productCard[i].dataset.thicknessFilter;
            weightCharacteristic_productCard.textContent = btnsArray_productCard[i].dataset.weightFilter;
            selectBtnArray[0] = btnsArray_productCard[i];
            btnsArray_productCard[i].classList.add('selectButton');
            for (let j = 0; j <= btnsArray_productCard.length - 1; j ++) {
                if (selectBtnArray[0] !== btnsArray_productCard[j]) {
                    btnsArray_productCard[j].classList.remove('selectButton');
                }
            }
        }
    }
}
