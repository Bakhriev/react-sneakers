import React from "react";
import axios from "axios";
import Card from "./components/Card";
import Header from "./components/Header";
import Drawer from "./components/Drawer";

function App() {
  const [cartOpened, setCartOpened] = React.useState(false);
  const [items, setItems] = React.useState([]);

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
        return setItems(response.data);
      });
  }, []);

  return (
    <div className="wrapper">
      {cartOpened && <Drawer onClose={() => setCartOpened(false)} />}
      <Header onClickCard={() => setCartOpened(true)} />
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
      </div>
      <div className="card_wrapper">
        {items.map((obj) => (
          <Card title={obj.title} imageUrl={obj.imageUrl} price={obj.price} />
        ))}
      </div>
    </div>
  );
}

export default App;
