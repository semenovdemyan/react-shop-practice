/* eslint-disable jsx-a11y/anchor-has-content */
import styles from "./card.module.css";
import arrowImg from "./../../images/icons/arrow.svg";
const Card = (props) => {
  return (
    <div className={styles.card}>
      <a href="#!" className={styles.card__link}></a>
      <img className={styles.card__img} src={props.img} alt="" />
      <div className={styles.card__body}>
        <div className={styles.card__text}>
          <div className={styles.card__title}>{props.title}</div>
          <div className={styles.card__descr}>Explore Now!</div>
        </div>
        <div className={styles.card__icon}>
          <img src={arrowImg} alt="Open" />
        </div>
      </div>
    </div>
  );
};

export default Card;
