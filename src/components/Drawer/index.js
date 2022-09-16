import styles from "./Drawer.module.scss";

function Drawer() {
  return (
    <div className={styles.drawer}>
      <div className={styles.drawer__container}>
        <h2>Корзина</h2>
        <div className={styles.cartItemWrapper}>
          <div className={styles.cartItem}>
            <img
              width={70}
              height={70}
              src="/img/sneakers/1.jpg"
              alt="sneakers"
            />
            <div className={styles.cartItemText}>
              <p>Мужские Кроссовки Nike Air Max 270</p>
              <span>12 999 руб.</span>
            </div>
            <img
              className="cancel"
              width={32}
              height={32}
              src="/img/cancel.svg"
              alt="cancel"
            />
          </div>
          <div className={styles.cartItem}>
            <img
              width={70}
              height={70}
              src="/img/sneakers/2.jpg"
              alt="sneakers"
            />
            <div className={styles.cartItemText}>
              <p>Мужские Кроссовки Nike Air Max 270</p>
              <span>12 999 руб.</span>
            </div>
            <img
              className="cancel"
              width={32}
              height={32}
              src="/img/cancel.svg"
              alt="cancel"
            />
          </div>
          <div className={styles.cartItem}>
            <img
              width={70}
              height={70}
              src="/img/sneakers/1.jpg"
              alt="sneakers"
            />
            <div className={styles.cartItemText}>
              <p>Мужские Кроссовки Nike Air Max 270</p>
              <span>12 999 руб.</span>
            </div>
            <img
              className="cancel"
              width={32}
              height={32}
              src="/img/cancel.svg"
              alt="cancel"
            />
          </div>
          <div className={styles.cartItem}>
            <img
              width={70}
              height={70}
              src="/img/sneakers/1.jpg"
              alt="sneakers"
            />
            <div className={styles.cartItemText}>
              <p>Мужские Кроссовки Nike Air Max 270</p>
              <span>12 999 руб.</span>
            </div>
            <img
              className={styles.cancel}
              width={32}
              height={32}
              src="/img/cancel.svg"
              alt="cancel"
            />
          </div>
          <div className={styles.cartItem}>
            <img
              width={70}
              height={70}
              src="/img/sneakers/1.jpg"
              alt="sneakers"
            />
            <div className={styles.cartItemText}>
              <p>Мужские Кроссовки Nike Air Max 270</p>
              <span>12 999 руб.</span>
            </div>
            <img
              className={styles.cancel}
              width={32}
              height={32}
              src="/img/cancel.svg"
              alt="cancel"
            />
          </div>
        </div>
        <ul className={styles.priceMenu}>
          <li>
            <p>Итого: </p>
            <span></span>
            <b>21 498 руб. </b>
          </li>
          <li>
            <p>Налог 5%: </p>
            <span></span>
            <b>1074 руб. </b>
          </li>
        </ul>
        <button className="btn">
          <p>Оформить заказ</p>
          <svg
            width="16"
            height="14"
            viewBox="0 0 16 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1 7H14.7143"
              stroke="white"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M8.71436 1L14.7144 7L8.71436 13"
              stroke="white"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </button>
      </div>
    </div>
  );
}

export default Drawer;
