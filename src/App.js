import React from "react";
import axios from "axios";
import Card from "./components/Card";
import Header from "./components/Header";
import Drawer from "./components/Drawer";

function App() {
  const [cartOpened, setCartOpened] = React.useState(false);
  const [cartItems, setCartItems] = React.useState([]);
  const [items, setItems] = React.useState([]);
  const [searchValue, setSearchValue] = React.useState("");

  // React.useEffect(() => {
  //   fetch("https://6325daa94cd1a2834c45d03c.mockapi.io/items")
  //     .then((res) => {
  //       return res.json();
  //     })
  //     .then((json) => {
  //       setItems(json);
  //     });
  // }, []);

  React.useEffect(() => {
    axios
      .get("https://6325daa94cd1a2834c45d03c.mockapi.io/items")
      .then((response) => {
        setItems(response.data);
      });
    axios
      .get("https://6325daa94cd1a2834c45d03c.mockapi.io/cart")
      .then((res) => setCartItems(res.data));
  }, []);

  const onCLickAddCart = (obj) => {
    setCartItems((prev) => [...prev, obj]);
    axios.post("https://6325daa94cd1a2834c45d03c.mockapi.io/cart", obj);
  };
  const onRemoveItem = (id) => {
    setCartItems((prev) => prev.filter((item) => item.id !== id));
    axios.delete(`https://6325daa94cd1a2834c45d03c.mockapi.io/cart/${id}`);
  };
  const onChangeSearchInput = (event) => {
    setSearchValue(event.target.value);
  };

  return (
    <div className="wrapper">
      {cartOpened && (
        <Drawer
          items={cartItems}
          onClose={() => setCartOpened(false)}
          onRemove={onRemoveItem}
        />
      )}
      <Header onClickCard={() => setCartOpened(true)} />
      <div className="content container">
        <div className="title">
          <h1>
            {searchValue ? `Поиск по: "${searchValue}"` : "Все Кроссовки"}
          </h1>
          <div className="search">
            <img
              width={14.25}
              height={14.25}
              src="/img/search.svg"
              alt="search"
            />
            <input
              onChange={onChangeSearchInput}
              value={searchValue}
              placeholder="Поиск..."
            />
          </div>
        </div>
      </div>
      <div className="card_wrapper">
        {items
          .filter((item) =>
            item.title.toLowerCase().includes(searchValue.toLowerCase())
          )
          .map((obj, index) => (
            <Card
              key={index}
              title={obj.title}
              imageUrl={obj.imageUrl}
              price={obj.price}
              onClickAdd={onCLickAddCart}
            />
          ))}
      </div>
    </div>
  );
}

export default App;
