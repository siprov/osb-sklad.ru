if (document.querySelector('#newField')) {
    let fieldBlock_index = document.querySelector('.filedBlock_index'); // Контейнер с блоками плоскостей
    let template_index = document.querySelector('#newField').content; // Содержимое шаблона
    let newField_index = template_index.querySelector('.plane_index'); // Сохраняем содержимое шаблона в переменную
    let addNewField_index = document.querySelector('.addNewPlane_index'); // Кнопка добавления новой плоскости
    let addBtnArea_index = document.querySelector('.addButton_index'); // Контейнер с кнопкой добавления плоскости и текстом
    let nextFieldValue_index = document.querySelector('.filedsValue_index'); // Порядковый номер очередной плоскости
    let calculateItBtn_index = document.querySelector('.calculateIt_index'); // Кнопка расчитать
    let totalSquare_index = document.querySelector('.totalSquareValue_index'); // Вывод общей влечины S
    let requiredNumbers_index = document.querySelector('.requiredNumbersValue_index'); // Вывод общего количества плит
    let calcBtn_index = document.querySelector('.orderBtn_index'); // Кнопка заказать
    let fields_index = fieldBlock_index.children; // Динамическа коллекция дочерних элементов
    let x;


    let calculator = function(field) {
        let lengthValue = field.querySelector('.lengthField_index');
        let heightValue = field.querySelector('.heightField_index');
        x = lengthValue.value * heightValue.value;
        return x;
    }

    addNewField_index.addEventListener('click', function() {
        let newElement = newField_index.cloneNode(true);
        fieldBlock_index.appendChild(newElement);
        for (let i = 0; i <= fields_index.length - 1; i ++) {
            let fieldNumber_index = fields_index[i].querySelector('.fieldNumber_index');
            fieldNumber_index.textContent = i + 1;
        }
        nextFieldValue_index.textContent = fields_index.length + 1;
        if (fields_index.length === 6) {
            addBtnArea_index.style.display = "none";
            calculateItBtn_index.style.margin = "0px auto";
        }
    })

    calcBtn_index.addEventListener('click', function() {
        let total = 0;
        for (let i = 0; i <= fields_index.length - 1; i++) {
            calculator(fields_index[i]);
            total += x;
        }
        totalSquare_index.textContent = total;
    })
}