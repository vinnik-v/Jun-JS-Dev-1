
var sum = document.querySelector('.buttons'); //ищем в документе кнопу "Сложить" (ищем по классу ".buttons") и запихиваем в переменную sum

// создаем функцию на событие onclick (то есть на нажатие кнопки "Сложить")

sum.onclick = function() {
	
	//ловим введенные значения и присваиваем их в переменные firstVal и secondVal, приводя их к числу с плавающей точкой методом parseFloat
	var firstVal = parseFloat(document.getElementById('first-num').value);
	var secondVal = parseFloat(document.getElementById('second-num').value);

	if (isNaN(firstVal)||isNaN(secondVal)){					// если значения нет (поле пустое, то есть значение NaN), говорим пользователю ввести числа

		return alert("Введите числа для суммирования");

	}
    
    alert('Результат: '+(firstVal+secondVal));	// если всё хорошо, суммируем числа и выводим сумму в окно

  };

