// Этот скрипт определяет количество дополнительных элементов списка и по нажатию на кнопку "ещё" показывает их.

let footerList_index = document.querySelector('.footerMenuByApplicationList'); 
let elementsList_index = footerList_index.querySelectorAll('li');
let valueHiddenElements_index = footerList_index.querySelector('.hiddenListElements_index');
let moreListElements_index = footerList_index.querySelector('.moreEl');
let counter = 0;
let hiddenListElements_index = [];


for (let i = 0; i <= elementsList_index.length - 1; i ++) {
    counter ++;
    if (counter > 8) {
        elementsList_index[i].style.display = "none";
        hiddenListElements_index.push(elementsList_index[i]);
        valueHiddenElements_index.textContent = hiddenListElements_index.length;
    }
}

moreListElements_index.addEventListener('click', function() {
    for (let i = 0; i <= hiddenListElements_index.length - 1; i ++) {
        hiddenListElements_index[i].style.display = "block";
        moreListElements_index.style.display = "none";
    }
})