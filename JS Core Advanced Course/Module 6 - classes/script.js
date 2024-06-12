// Создайте класс Book со свойствами названия, автора и года публикации.
// Включите метод отображения сведений о книге.
// Создайте подкласс под названием «Ebook», который наследуется от класса «Book» и включает дополнительное свойство для цены книги.
// Переопределите метод отображения, чтобы включить цену книги. Создайте экземпляр класса «Электронная книга» и отобразите его сведения.

class Book {
    constructor(bookName, authorName, year){
        this._bookName = bookName;
        this._authorName = authorName;
        this._year = year;
    }

    getBookInfo(){
        console.log(`Название книги: ${this._bookName}\nАвтор книги: ${this._authorName}\nДата выпуска книги: ${this._year}`);
    }
}

class Ebook extends Book {
    constructor(bookName, authorName, year, price) {
        super(bookName, authorName, year);
        this._price = price;
    }

    getBookInfo(){
        console.log(`Название книги: ${this._bookName}\nАвтор книги: ${this._authorName}\nДата выпуска книги: ${this._year}\nСтоимость книги: ${this._price}`);
    }
}

let HarryPotter = new Book('Harry Potter', 'Joanne Rowling', 1997);
HarryPotter.getBookInfo(); // Выведет данные в консоль об книги Harry Potter

let HarryPotterElectronicVersion = new Ebook('Harry Potter', 'Joanne Rowling', 1997, '60$');
HarryPotterElectronicVersion.getBookInfo(); // Выведет данные в консоль об книги Harry Potter и её стоимость

let RichDadPoorDad = new Ebook('Rich Dad Poor Dad', 'Robert Toru Kiyosaki', 1997, '90$');
RichDadPoorDad.getBookInfo(); // Выведет данные в консоль об книги RichDadPoorDad и её стоимость