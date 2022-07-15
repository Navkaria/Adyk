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
// const y = '1000';

// let wordsHTML;

// Старый подход (до ES6)
// wordsHTML = '<h3>' + 'words love' + '</h3>' + '<ul>' + '<li>t:' + t + '</li>' + '<li>w:' + w + '</li>' + '<li>q:' + q + '</li>' + '<li>y:' + y + '</li>' + '</ul>';

//Новый подход (templete literals or template strings)
// wordsHTML = `
// <h3> Words love </h3>
//    <ul>
//       <li>t: ${t} </li>
//       <li>w: ${w} </li>
//       <li>q: ${q} </li>
//       <li>y: ${y} </li>
//       <li>f: ${2022+30} </li>
//       <li>Door: ${getDoorsNumber()} </li>
//       <li>y: ${y < 2000 ? '20%' : '10%'} </li>
//    </ul>
// `
// function getDoorsNumber(){
//    return 5;
// }

// document.body.innerHTML = wordsHTML//выводит текст на страницу
//?==================================================================================================================================================================



//*2 Раздел, Урок 17, Тема: Задание Анкета ========================================================================================================================
// let color;

// color = prompt('Какой твой любиый цвет?');

// console.log('Твой любиый цвет ' + color);


/*Задание: 
Создать приложение с промтами (Как вас зовут?), (Какая ваша фамилия?), (Сколько вам лет?)*/
// let name = prompt('Как вас зовут?');
// let fam = prompt('Какая ваша фамилия?');
// let year = prompt('Сколько вам лет?');
// let color= prompt('Какой твой любиый цвет?');

// console.log('Моё имя ' + name);
// console.log('Моя фамилия ' + fam);
// console.log(`Мне ${year} лет`);
// console.log('Мой любиый цвет ' + color);
//*================================================================================================================================================================



//?2 Раздел, Урок 18, Тема: Оператор сравнения ====================================================================================================================

// const x = '4120';
// const y = 324;
// let t = x != y // так же есть операторы такие как (<, <=, =>, ==(знак равенства), !=(Знак не равенства), ===(cтрогий знак равенства(к примеру число равно числу, а строка строке)))
// сравниваться могут и значения к примеру булинг значения или строки

// console.log(t);

// console.log(true == 1  );// так же можно сравнивать так( при сравнениии двух значений Nan  и Nan всегда будет folse)
//?================================================================================================================================================================



//*2 Раздел, Урок 19, Тема: Приоретеи операторов ==================================================================================================================

// const x =  2 + 11 / 2;
// console.log(x);

// const y = 10 - x > 10; // действия выполняются в соответсвии приоретета оператора (больше инфы тут:https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Operator_Precedence)
// console.log(y);

// let x, y;
// x = y = 10 + (5 - 4) * 23

// console.log(x, y);
//*================================================================================================================================================================



//?2 Раздел, Урок 20, Тема: Сокращённая форма записи операторов ===================================================================================================

// let x = 30;

// let y = 6;
// x += 12; //так можно записывать все арефметические операторы

// x ++; //увеличивает число на единицу так же можно и уменьшить 

// y = ++x // так игрику присваивается х увеличенный на 1, но если ++ будет после х то ему не будет прибовлятся 1 так же и с--

// console.log(x)
// console.log(y)
//?================================================================================================================================================================



//*2 Раздел, Урок 21, Тема: Задание Лишний вес ====================================================================================================================
/*Задание расчитать ИМТ */

// let kg = prompt('Укажите ваш вес в кг');
// let m = prompt('укажите ваш рост в м');

// const ImT = kg / Math.pow(m, 2);
// const oz = ImT >= 25;

// console.log(ImT);
// console.log(oz);

// alert ('У вас избыточный вес? ' + oz);


//*================================================================================================================================================================



//?2 Раздел, Урок 22, Тема: If Else Statement =====================================================================================================================

// let age = prompt ('Укажите ваш возраст')

// if( age >= 18){
//    console.log('Вы можете смотреть это видео')
// } 
// else {
//    console.log('Ты слишком маленький для этого видео')
// }
// const yearsLeft = 18 - age;
// console.log(`Ты слишком маленький. Ты можете посмотреть это видео через ${yearsLeft} лет`)


// let years = prompt ('Укажите ваш год рождения');
// let yearsNaw = prompt (' Укажите теперяшний год');
// const age = yearsNaw - years;

// let answer;

// if(age >= 18){
//    answer = 'Вы можете просматривать данный контент'
// } else{
//    answer = 'К сожалению в не можете просматривать данный контент(('
// }

// console.log(`Доступен ли мне данный контент? - ${answer}`)

//  const color = 'orange';

//  if ( color === 'green') {
//    console.log('Go');
//  } else if (color === 'yellow'){
//    console.log('Get ready!');
//  } else if(color === 'red'){
//    console.log('Stop');
//  } else{
//    console.log('Incorrect color!');
//  }
//?================================================================================================================================================================



//*2 Раздел, Урок 23, Лишний вес с If Else. Задание ===============================================================================================================

/*Задание расчитать ИМТ */

// let kg = prompt('Укажите ваш вес в кг');
// let m = prompt('укажите ваш рост в м');

// const ImT = kg / Math.pow(m, 2);
// const oz = ImT >= 25;

// console.log(ImT);
// console.log(oz);

// alert ('У вас избыточный вес? ' + oz);
//========================================================================================================================================================

let kg = prompt('Укажите ваш вес в кг');
let m = prompt('укажите ваш рост в м');

const ImT = kg / Math.pow(m, 2);

if (ImT>=18.5 && ImT<=24.99){
   console.log('У вас нормальный вес ' + ImT);
} else if (ImT>=16 && ImT<=18.5){
   console.log('У вас недостаточная масса тела ' + ImT  + ' Нормай является 18.5-24.99');
} else if (ImT<=16){
   console.log('У вас выраженный дифицит массы тела ' + ImT  + ' Нормай является 18.5-24.99');
} else if (ImT>=25 && ImT<=30){
   console.log('У вас избыточная массы тела(Предожирение) ' + ImT  + ' Нормай является 18.5-24.99');
} else if (ImT>=30 && ImT<=35){
   console.log('У вас ожирение первой степени ' + ImT  + ' Нормай является 18.5-24.99');
} else if (ImT>=35 && ImT<=40){
   console.log('У вас ожирение второй степени ' + ImT  + ' Нормай является 18.5-24.99');
} else if (ImT>=40 ){
   console.log('У вас ожирение третьей степени ' + ImT  + ' Нормай является 18.5-24.99');
}

//*================================================================================================================================================================



//?2 Раздел, Урок 24, Тема: Лишний вес  If Else. Решение ==========================================================================================================

//?================================================================================================================================================================



//*2 Раздел, Урок 25, Тема: Truthy и Falsy значения ===============================================================================================================

//*================================================================================================================================================================



//?2 Раздел, Урок 26, Тема: Boolean логика ========================================================================================================================

//?================================================================================================================================================================




