import { useState, useEffect } from "react";
import axios from "axios";
import { Route, Routes } from "react-router-dom";
import Card from "./components/Card";
import Header from "./components/Header";
import Drawer from "./components/Drawer";

function App() {
  const [cartOpened, setCartOpened] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [items, setItems] = useState([]);
  const [searchValue, setSearchValue] = useState("");

  // React.useEffect(() => {
  //   fetch("https://6325daa94cd1a2834c45d03c.mockapi.io/items")
  //     .then((res) => {
  //       return res.json();
  //     })
  //     .then((json) => {
  //       setItems(json);
  //     });
  // }, []);

  useEffect(() => {
    axios
      .get("https://6325daa94cd1a2834c45d03c.mockapi.io/items")
      .then((response) => setItems(response.data));
    axios
      .get("https://6325daa94cd1a2834c45d03c.mockapi.io/cart")
      .then((res) => setCartItems(res.data));
  }, []);

  const onCLickAddCart = async (obj) => {
    if (cartItems.find((elem) => elem.title === obj.title)) {
      axios.delete(
        `https://6325daa94cd1a2834c45d03c.mockapi.io/cart/${obj.id}`
      );
    } else {
      const { data } = await axios.post(
        "https://6325daa94cd1a2834c45d03c.mockapi.io/cart",
        obj
      );
      setCartItems((prev) => [...prev, data]);
    }
  };
  const onRemoveItem = async (id) => {
    await axios.delete(
      `https://6325daa94cd1a2834c45d03c.mockapi.io/cart/${id}`
    );
    setCartItems((prev) => prev.filter((item) => item.id === id));
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
            {searchValue ? `Search on: "${searchValue}"` : "All Sneakers"}
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
              placeholder="Search..."
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
              id={obj.id}
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
