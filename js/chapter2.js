//?2 Раздел, Урок 8, Тема: Способы применения JavaScript ==================================================================================================

//<script>alert('hello again')</script>
//?========================================================================================================================================================



//*2 Раздел, Урок 9, Тема: Консоль ========================================================================================================================

//undefined - означает что функция не возвращает никакого значения
//console.log('Hello console!');
//*========================================================================================================================================================



//?2 Раздел, Урок 10, Тема: Переменные. Комментарии =======================================================================================================

//var - устаревший и больше в основном не используется 

// var name = 'Rus'; 
// console.log(name);
// name ='Kat';
// console.log(name);

// var color
// console.log(color);
// color = 'elloy';
// console.log(color);

//JavaScript  имена могут включать в себя буквы, числа, знак доллора и нижнее подчеркивание
//Имена в JavaScript не могут начинаться с цифр 
//// 1color =  'green'
//Имена можно начинать писать со знака доллора, нижнего подчеркивание и букв
// так модно можно разделять слова так:
// myMainColor ='green'//camel case
// my_main_color //snake case
// my-main-color //kebab case
// MyMainCase //Pascal case

//let - используется сейчас

// const - используется сейчас.
//?========================================================================================================================================================



//*2 Раздел, Урок 11, Тема: let and const ========================================================================================================================

//let - полностью эдентично с вар

//const - не изменное значене
// const name ='Rus';
// console.log(name);
// ////name = 'Kate'// выбивает ошибку

// const color = 'green'; // обязательно нужно присваивать значение константе иначе выбивает ошибку
// console.log(color);

// const user = { //так можно присваивать несколько значений 
//    name: 'Rus',
//    gender: 'male',
//    age: '22'
// }
// console.log(user);

// user.name = 'Kat'; //благодаря записи через точку мы можем константе задать новое значение
// user.gender = 'gerl';
// user.age = '19';
// console.log(user);

// //// user = {  //однако у константы так их изменить нельзя, выбивает ошибку
// ////    name: 'Kate',
// ////    gender: 'gerl',
// ////    age: '19'
// //// }

// const colors = ['red', 'oreng', 'green', 'yelloy'];// массив создается из квадратных скобочек, дополнительное значение появляется в конце
// console.log(colors);
// colors.push('blue');
// console.log(colors);
////colors = ['red', 'oreng', 'green', 'yelloy'] //константе нельзя присвоить новый массив
//*========================================================================================================================================================



//?2 Раздел, Урок 12, Тема: Типы данных ===================================================================================================================

//типы данных разделяются на примитивные и ссылочные

//примитивные типы данных - существует 6 примитивных типов данных
//1. string - строка (любые символы которые находятся внтури ковычек: цифры, буквы, символы )
//2. namber - числовые типы данных (иногда делятся на целые, десятичные и тд. )
//3. Boolean - логический тип данных (имеет только два значения true или false)
//4. Null - пустое значение 
//5. Undefined - неопределенное значение ( когда переменной не присваивали никакого значения)
//6 Symbols - появился только с ES6

//ссылочные типы данных
//1. Array - массив
//2. Object Literal - объектные литералы
//3. Function -функции
//4. Date - даты
//5. Anything else... - и др... (классы обертки)

// let x = 'sonething'
// console.log(x)
// x = '3'
// console.log(x)

//примитивные типы данных

//string
// const someText = 'Some text';
// console.log(typeof someText);

// number
// const someNumber = 11;
// console.log(typeof someNumber);

// boolean
// const someBoolean = true;
// console.log(typeof someBoolean);

// const someBoolean1 = false;
// console.log(typeof someBoolean1);

// Null
// const someNull = null; //в консоле выводит значение object - является одним из багов JavaScript
// console.log(typeof someNull);

// Undefined
// let someUndefined;
// console.log(typeof someUndefined);

// Symbols;
// const someSymbols = Symbol();
// console.log(typeof someSymbols);


//Ссылочные типы данных - возвращают объект



//Array
// const someArray = [1, 2, 3, 4, 5, 6, 7,  8, 9];
// console.log(typeof someArray);

//Object Literal
// const someObjectLiteral = {
//    firstProperty: '12',
//    secondProerty: 'secondProerty'
// }
// console.log(typeof someObjectLiteral);

//Function
// const someFunction = function(){

// };
// console.log(typeof someFunction);

//Date
// const someDate = new Date();
// console.log(typeof someDate);

//Anything else...
//?========================================================================================================================================================



//*2 Раздел, Урок 13, Тема: Преобразование типов ========================================================================================================================

//Есть двав типо преобразования к строковому и к числовому типу

//Приведение к строковому типу String
// let x = String(111);
// x = String(2/2); //можно проводить какие либо действия в скобках
// x = String(true); // так же можно приводить к булинговому значению
// x = String(new Date()); //так же мы можем приводить и ссылочные типы
// x = String([1, 2, 3, 4, 5, 6, 7]) // в скобках считаются и запятые 

// toString
// x = (35).toString();
// x = (true).toString();
// x = (new Date()).toString();
// x = ([1, 2, 3, 4, 5, 6, 7]).toString();

// console.log(x);//само значение 
// console.log(typeof x);//тип строки
// console.log(x.length);//при помощи этого свойства выводится длинна строки

//приведение к числововму зеачению
//первый способ
// let y = Number('6.2121231241241242441244124');
// y = Number(false); // при значении true в консоль выводит 1б но при значении false выводит 0
// y = Number (null)//так же в консоль выводится 0
// y = Number ('text') //текстовые строки не распознаются как число
// y = Number ([1, 2, 3, 4, 5, 6])//так же массив нельзя распознать как число 

// console.log(y);//само значение 
// console.log(typeof y);//тип строки
// console.log(y.toPrecision(7));// благодаря этому свойству мы можем менять длинну значения чисел

//Второй способ приобразования к числу
// y = parseInt('123.213')//благодаря parseInt текстовое значение преобразовалось в числовое, отображается только целое число поскольку данное свойство отвечает за отображение целых чисел
// y = parseFloat('123.2131123') //отображает дробную часть, однако если 0 стоит в конце то его не отображает 

// console.log(y);//само значение 
// console.log(typeof y);//тип строки
// console.log(y.toPrecision(7));// благодаря этому свойству мы можем менять длинну значения чисел


// const x = 5;
// const y = 3;
// const z = x + y;

// console.log(z); //значение
// console.log(typeof z);//тип


// const d = 5;
// const k = '3'; //когда число складывается с строкой то происходит конкатенация(склеивание между собой строк или какого либо другого значения связанного со стракой)
// const m = d + k; //когда да значения оказываются строчными  то строки цепляются друг к другу
//однако если стоит (-)(*)(/) то джава преобразовывает эллементы в числовые  

// console.log(m); //значение
// console.log(typeof m);//тип
//*====================================================================================================================================================================



//?2 Раздел, Урок 14, Тема: Операции с числами ========================================================================================================================
// const a = 50; //первое число  значения (a, b, x) могут быть любыми
// const b = 12;  //второе число
// let x; //результат

//простые математические операции
// x = a + b;
// x = a / b; 
// x = a * b;
// x = a - b;
// x = a % b;//остаток от деления

//Math объект используется для вычесление
// x = Math.PI; //число пи
// x = Math.round(3.5); //округление
// x = Math.ceil(3.3); // округление в большую сторону
// x = Math.floor(3.7); //округление в меньшую сторону
// x = Math.sqrt(99.3); //квадратный корень
// x = Math.abs(-84); //обсолютное значение числа(число без знака -)
// x = Math.pow(3, 5); //возведение в степень
// x = Math.min(3, 45, 60, 0.00001); //минимальное значение из списка
// x = Math.max(2, 45, 67, 8888); //максимальное значение
// x = Math.round(Math.random()*40);//целое рандомное значение

// console.log(x);
//?====================================================================================================================================================================



//*2 Раздел, Урок 15, Тема: Строки ========================================================================================================================

//Конкатенация строк
// let x;
// const y = 'Rus';
// const t = 'Kat';
// const h = ' '; //таким образом можно делать пробел 
// const age = 17;
// const g = 'Hey there!';
// x = 'Rus';
// x = 'Rus' +  ' Gavrilin';//конкотенация двух строк(скрепление)

// x = y + h + t;
// x = g + h + 'My name is' + h + y + ' ' + t + " I'm " + age + ' years old.';

//Экранирование
// x = 'I\'m 34 years old'; //при помощи обратного слеша мы можем обойти ограничение по ковычкам 
// x = "I like \"Loki\" movie" //есть так же такой способ

//Свойства и методы
// x = 'Hello!'.length; //выводит длинну строки включая все знаки припинания
// x = y.length;
// x = y.concat(h, t);//конкат
// x = h.concat(h, 'My name is ', y, h, t);
// x = x.toUpperCase();//делает из старой строки новую, но все буквы становятся заглавными
// x = x.toLowerCase(); //делает из старой строки новую, но все буквы становятся прописными 
// x = y[2];//индекс строки
// x = y.indexOf('u');//выводит номер. для того что бы узнать индекс повторяющейся буквы перед index пишем last. Если символа в строке нету то выводит  -1
// x = y.charAt(2);//символ на позиции
// const ciuo = 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit';
// x = ciuo.charAt(ciuo.length - 1);//индекс последнего знака в строке
// x = g.substring(0,2); //извлечение символов
// x = g.slice(-3);//так же можно извлекать символы однако можно извлечь несколько последних символов подставив знак -
// x = ciuo.split(' ');//так можно рахделить текст на слова, а так же на буквы, таким образом можно получить массив
// x = ciuo.replace('amet', '\"Loki\"')//замена одно символа на другой 
// x = ciuo.includes('sit')//так можно проверить содержит ли текст тот или иной символ 

// console.log(x);
//*========================================================================================================================================================



//?2 Раздел, Урок 16, Тема: Шаблонные строки ========================================================================================================================
// const t = 'love';
// const w = 'viget';
// const q = 'quuuu';
// const y = 'year';

// let wordsHTML;

// //Старый подход (до ES6)
// wordsHTML = '<h3>' + 'words love' + '</h3>' + '<ul>' + '<li>t:' + t + '</li>' + '<li>w:' + w + '</li>' + '<li>q:' + q + '</li>' + '<li>y:' + y + '</li>' + '</ul>';



// document.body.innerHTML = wordsHTML//выводит текст на страницу

//?==================================================================================================================================================================



//*2 Раздел, Урок 17, Тема: Задание Анкета ========================================================================================================================


//*================================================================================================================================================================