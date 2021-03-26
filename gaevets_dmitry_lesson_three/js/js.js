// ---------------------Первое задание ----------------------------

// Сделать собственные примеры методов применяемых для массивов.

// let arr = [1,2,3,4,5,6,7,8,9];

// Получение элемента
// alert( arr[1] ); // 2

// Замена
// arr[2] = "Три";

// Добавление нового
// arr[9] = 10;

//pop
// alert( arr.pop() ); // удаляем "9" и выводим его
// alert( arr ); // выводим массив [1,2,3,4,5,6,7,8]

//push
// arr.push("Десять");
// alert( arr ); // получаем 1,2,3,4,5,6,7,8,9,Десять

// shift 
// alert( arr.shift() ); // удаляем "1" и выводим ее

//unshift
// arr.unshift("Zero");
// alert( arr ); // получаем Zero,1,2,3,4,5,6,7,8,9

//join
// arr.join();
// alert(arr);

//reverse
// arr.reverse();
// alert(arr); // 9,8,7,6,5,4,3,2,1

//slice
// const auto = ['BMW', 'WAG', 'GMC', 'Honda', 'Mazda'];
// console.log(auto.slice(1,4)); // 'WAG', 'GMC', 'Honda'



// ---------------------Второе задание ----------------------------

// Создать программу, выполняющую вставку элемента в массив после элемента, значение которого укажет пользователь.
//     Описание:
//     п.1 Создайте произвольный массив и заполните его данными, например: 
//     var cars = ["Mitsubishi", "Honda", "Toyota", "Suzuki", "Audi", "BMW", "Mercedes"];
//     п.2 Запросите у пользователя название элемента массива
//     п.3.1 Если в массиве такой элемент есть - то необходимо после него вставить новый элемент, который пользователь введет дальше
//     п.3.2 Если в массиве такого элемента нет - добавить в конец массива
//     п.4 Если в массиве есть одинаковые элементы (из. п.2), программа должна добавлять только после первого найденного элемента
//     п.5 Запросите у пользователя новый элемент для массива и вставьте его после найденного элемента или же в конец массива 
//     (в зависимости от условий выше)


// var cars = ["Mitsubishi", "Honda", "Toyota", "Suzuki", "Audi", "BMW", "Mercedes"];
// var car = prompt("Введите марку машину: Mitsubishi, Honda, Toyota, Suzuki, Audi, BMW иил Mercedes");
// 	if (car == "Audi" || car == "Mitsubishi" || car == "Honda" || car == "Toyota" || car == "Suzuki" || car == "BMW" || car == "Mercedes") {
// 		var model = prompt("Введите модельный ряд машины");
// 			if (model == "Audi" || model == "Mitsubishi" || model == "Honda" || model == "Toyota" || model == "Suzuki" || model == "BMW" 
// 				|| model == "Mercedes") {
// 				alert("Вы ввели название машины, пожалуйта введите модельный ряд")
// 			}
// 			else {
// 				alert("Вы ищете " + car + " " + model);
// 			}
// 	}
// 	else if (car != cars) {
// 		cars.push(car);
// 		alert("Данная марка не поступила")
// 	}
// 
// Несколько раз перечитал задание и пересмотрел Ваше обьяснение, но все равно ничего не понял окончательно,
// наверное я выполнил это не правильно.

// ---------------------Третье задание ----------------------------

// Создать многомерный массив, размер массива получить от пользователя. Каждый нечётный подмассив заполнить значением 'odd',
// а чётный - 'even'. 
// Размер каждого вложенного массива - 3.

// let arr = new Array(prompt("Введите размер массива"))
// arr = [    [, , ,],
// 		   [, , ,],
// 		   [, , ,],
// ]
// console.log()

// Даже не могу представить, как это исполнять))


// ---------------------Четветрое задание -------------------------

// Создать два произвольных массива: 
//         один массив - любимая спортивная команда / модели автомобилей / города, 
//         во втором - количество игроков в команде / объем двигателя / количество жителей в городе.
//     Из двух массивов сделайте ассоциативный массив.
//     Массив, который будет выступать в качестве ключа - должен содержать уникальные значения

// auto = ("Bugatti Veyron", "Porsche Carrera GT", "Aston Martin Lagonda Taraf");
// volume = ("7993 W16", "5,7 V10","5,9 V12");

// var cars = new Map([
//   ['7993 W16', "Bugatti Veyron"],
//   ['5,7 V10', "Porsche Carrera GT"],
//   ['5,9 V12', "Aston Martin Lagonda Taraf"]
// ]);

// console.log(cars);