const Card = () => {
  return (
    <div className="card">
      <img className="btn-unlike" src="/img/products/unlike.svg" alt="unlike" />
      <img
        width={133}
        height={112}
        alt="кросовок"
        src="/img/products/sneakers-1.jpg"
      ></img>
      <h2>Мужские Кроссовки Nike Blazer Mid Suede</h2>
      <div className="cardBottom">
        <div>
          <p>Цена:</p>
          <b>12 999 руб.</b>
        </div>
        <button className="button">
          <img
            width={32}
            height={32}
            alt="добавить"
            src="/img/products/plus.svg"
          />
        </button>
      </div>
    </div>
  );
};

export default Card;
