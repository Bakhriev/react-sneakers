import React from "react";
import axios from "axios";
import { Route, Routes, Link } from "react-router-dom";
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
      .then((response) => setItems(response.data));
    axios
      .get("https://6325daa94cd1a2834c45d03c.mockapi.io/cart")
      .then((res) => setCartItems(res.data));
  }, []);

  const onCLickAddCart = async (obj) => {
    if (cartItems.find((elem) => elem.id === obj.objectId)) {
      axios.delete(
        `https://6325daa94cd1a2834c45d03c.mockapi.io/cart/${obj.objectId}`
      );
      setCartItems((prev) => [...prev, obj]);
    } else {
      const { data } = await axios.post(
        "https://6325daa94cd1a2834c45d03c.mockapi.io/cart",
        obj
      );
      setCartItems((prev) => [...prev, data]);
    }
  };
  const onRemoveItem = async (objectId) => {
    axios.delete(
      `https://6325daa94cd1a2834c45d03c.mockapi.io/cart/${objectId}`
    );
    setCartItems((prev) =>
      prev.filter((item) => console.log(item.objectId, objectId))
    );
  };
  const onChangeSearchInput = (event) => {
    setSearchValue(event.target.value);
  };

  return (
    <div className="wrapper">
      {cartOpened && (
        <Drawer
          cartItems={cartItems}
          onClose={() => setCartOpened(false)}
          onRemove={onRemoveItem}
          setCartItems={setCartItems}
        />
      )}
      <Header onClickCard={() => setCartOpened(true)} />
      <Routes>
        <Route path="/favorites" element={<h2>Favorites</h2>} />
      </Routes>

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
              objectId={obj.id}
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
