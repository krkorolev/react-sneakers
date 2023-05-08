import React from 'react';

const Info = ({title, img, text, onClose}) => {

    return (
        <div className="cartEmpty">
              <img
                src={img}
                width={120}
                height={120}
                alt='коробка'
              />
              <h2>{title}</h2>
              <p>{text}</p>
              <button className="btn-green" onClick={onClose} >Вернуться назад</button>
            </div>
     );
}
 
export default Info;