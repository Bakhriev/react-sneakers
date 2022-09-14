import Card from "./components/Card";
import Header from "./components/Header";
import Drawer from "./components/Drawer";

const arr = [
  {
    title: "Мужские Кроссовки Nike Blazer Mid Suede",
    imageUrl: "./img/sneakers/1.jpg",
    price: 12999,
  },
  {
    title: "Мужские Кроссовки Nike Air Max 270",
    imageUrl: "./img/sneakers/2.jpg",
    price: 12999,
  },
  {
    title: "Мужские Кроссовки Nike Blazer Mid Suede",
    imageUrl: "./img/sneakers/3.jpg",
    price: 11999,
  },
  {
    title: "Кроссовки Puma X Aka Boku Future Rider",
    imageUrl: "./img/sneakers/4.jpg",
    price: 7500,
  },
  {
    title: "Мужские Кроссовки Under Armour Curry 8",
    imageUrl: "./img/sneakers/5.jpg",
    price: 8000,
  },
  {
    title: "Мужские Кроссовки Nike Kyrie 7",
    imageUrl: "./img/sneakers/6.jpg",
    price: 4999,
  },
  {
    title: "Мужские Кроссовки Jordan Air Jordan 11",
    imageUrl: "./img/sneakers/7.jpg",
    price: 7999,
  },
  {
    title: "Мужские Кроссовки Nike LeBron XVIII",
    imageUrl: "./img/sneakers/8.jpg",
    price: 3999,
  },
  {
    title: "Мужские Кроссовки Nike Lebron XVIII Low",
    imageUrl: "./img/sneakers/9.jpg",
    price: 7500,
  },
  {
    title: "Мужские Кроссовки Nike Blazer Mid Suede",
    imageUrl: "./img/sneakers/10.png",
    price: 6999,
  },
  {
    title: "Кроссовки Puma X Aka Boku Future Rider",
    imageUrl: "./img/sneakers/11.png",
    price: 8999,
  },
  {
    title: "Мужские Кроссовки Nike Kyrie Flytrap IV",
    imageUrl: "./img/sneakers/12.jpg",
    price: 11000,
  },
];

function App() {
  return (
    <div className="wrapper">
      <div className="overlay">
        <Drawer />
      </div>
      <Header />
      <div className="content container">
        <div className="title">
          <h1>Все кроссовки</h1>
          <div className="search">
            <img
              width={14.25}
              height={14.25}
              src="/img/search.svg"
              alt="search"
            />
            <input placeholder="Поиск..." />
          </div>
        </div>
        <div className="card-wrapper">
          {arr.map((obj) => Card(obj.title, obj.imageUrl, obj.price))}
        </div>
      </div>
    </div>
  );
}

export default App;
