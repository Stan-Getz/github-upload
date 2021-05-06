import React from 'react';

export default function CartItem({ item, value }) {
  const { id, title, img, price, total, count } = item;
  const { increment, decrement, removeItem } = value;
  return (
    <div className="row my-2 text-capitalize text-center">
      <div className="col-10 mx-auto col-lg-2">
        <img
          src={img}
          style={{ width: '4rem', height: '5rem' }}
          className="img-fluid"
          alt="product"
        />
      </div>
      <div className="col-10 mx-auto col-lg-2">
        <span className="d-lg-none">product: </span>
        {title}
      </div>
      <div className="col-10 mx-auto col-lg-2">
        <span className="d-lg-none">price: </span>€{price}
      </div>
      <div className="col-10 mx-auto col-lg-2 my-2 my-lg-0">
        <div className="display-flex justify-content-center">
          <div>
            <span className="btn btn-black mx-1" onClick={() => decrement(id)}>
              <i class="fas fa-minus"></i>
            </span>
            <span className="btn btn-black mx-1 font-weight-bold font-size">
              {count}
            </span>
            <span className="btn btn-black mx-1" onClick={() => increment(id)}>
              <i class="fas fa-plus"></i>
            </span>
          </div>
        </div>
      </div>
      {/*  */}

      <div className="col-10 mx-auto col-lg-2">
        <div className="cart-icon" onClick={() => removeItem(id)}>
          <i class="cart-icon fas fa-trash-alt"></i>
        </div>
      </div>
      <div className="col-10 mx-auto col-lg-2">
        <strong>item total: €{total}</strong>
      </div>
    </div>
  );
}
