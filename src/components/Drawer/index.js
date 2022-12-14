import styles from "./Drawer.module.scss";

function Drawer({ onClose, onRemove, cartItems, setCartItems }) {
  return (
    <div className={styles.overlay}>
      <div className={styles.drawer}>
        <div className={styles.drawer__container}>
          <div className={styles.cartTitleWrapper}>
            <h2>Корзина</h2>

            <svg
              onClick={onClose}
              width="32"
              height="32"
              viewBox="0 0 32 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect
                x="0.5"
                y="0.5"
                width="31"
                height="31"
                rx="7.5"
                fill="white"
                stroke="#F2F2F2"
              />
              <path
                d="M20.6653 15.1312H17.2021V11.6682C17.2021 10.3328 15.1311 10.3328 15.1311 11.6682V15.1312H11.668C10.3329 15.1312 10.3329 17.2022 11.668 17.2022H15.1311V20.6652C15.1311 22.0005 17.2021 22.0005 17.2021 20.6652V17.2022H20.6653C22.0005 17.2022 22.0005 15.1312 20.6653 15.1312Z"
                fill="#D3D3D3"
              />
            </svg>
          </div>
          <div className={styles.cartItemWrapper}>
            {cartItems.map((obj) => (
              <div className={styles.cartItem}>
                <img width={70} height={70} src={obj.imageUrl} alt="sneakers" />
                <div className={styles.cartItemText}>
                  <p>{obj.title}</p>
                  <span>{obj.price} руб.</span>
                </div>
                <img
                  onClick={() => onRemove(obj.objectId)}
                  className={styles.cancel}
                  width={32}
                  height={32}
                  src="/img/cancel.svg"
                  alt="cancel"
                />
              </div>
            ))}
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
    </div>
  );
}

export default Drawer;
