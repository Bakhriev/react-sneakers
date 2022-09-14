import Card from "./components/Card";
import Header from "./components/Header";
import Drawer from "./components/Drawer";

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
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
      </div>
    </div>
  );
}

export default App;
