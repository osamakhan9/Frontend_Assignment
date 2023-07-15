import React, { useState } from "react";
import "./shoppingCart.css";
import item1Image from "../../assets/item1.jpg";
import item2Image from "../../assets/item2.jpg";
import item3Image from "../../assets/item3.jpg";
import item4Image from "../../assets/item4.jpg";

export const ShoppingCart = () => {
  const [catalog, setCatalog] = useState([
    { title: "Fan", img: item1Image, qty: 0, price: "200" },
    { title: "Office Chair", img: item2Image, qty: 0, price: "2000" },
    { title: "i-phone", img: item3Image, qty: 0, price: "3000" },
    { title: "sofa", img: item4Image, qty: 0, price: "4000" },
  ]);

  const [cartFlag, setCartFlag] = useState(false);

  const updateCart = (item, incFlag) => {
    let arr = [...catalog];
    arr.forEach((x) => {
      if (item.title === x.title) {
        x.qty = incFlag ? x.qty + 1 : x.qty - 1;
      }
    });
    setCatalog(arr);
  };

  return (
    <>
      {!cartFlag ? (
        <div className="product">


          <div className="products_nav">
          

            <div>
            Product
              </div> 
          


          <div
              className="btnCart"
              style={{opacity: catalog.some((x) => x.qty > 0 ) ? '100%' : '60%' }} onClick={() => setCartFlag(true)}
              disabled={ catalog.some((x) => x.qty > 0 ) ? false : true}>
              Cart
             
            </div>
          </div>

          <div className="shop">
            {catalog.map((card) => {
              return (
                <div className="card">
                  <div className="card-image">
                    <img className="card-image" src={card.img} />
                  </div>
                  <div className="card-title">{card.title}</div>

                  <div className="d-flex justify-content align-items-center">
                    <div className="card-price">{"$" + card.price}</div>
                    {card.qty > 0 && (
                      <div className="d-flex justify-content align-items-center">
                        <button
                          onClick={() => updateCart(card, false)}
                          style={{ marginRight: "20px" }}
                        >
                          -
                        </button>
                        <p style={{ marginRight: "20px" }}>{card.qty || 0}</p>
                        <button onClick={() => updateCart(card, true)}>
                          +
                        </button>
                      </div>
                    )}
                  </div>
                  <div className="addToCart">
                    <button
                      className="button2"
                      style={{ marginBottom: "10px" }}
                      onClick={() => updateCart(card, true)}
                      
                    >
                      Add to Cart
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      ) : (
        <>
          <div className="shopContainer">
            <div style={{alignItems: 'start'}}>
            <button  className="button" onClick={() => setCartFlag(false)}>Back</button>
            </div>
            <h2 style={{textAlign: 'left'}}>Cart</h2>
            <table class="styled-table" style={{color: "white"}}>
              <thead>
                <tr>
                  <th style={{color: "white"}}>SrNo</th>
                  <th style={{color: "white"}}>Item Name</th>
                  <th style={{color: "white"}}>Qty</th>
                  <th style={{color: "white"}}>Sub Total</th>
                </tr>
              </thead>
              <tbody>
                {
                  catalog.filter(x=> x.qty > 0).map((item, i) => {
                    return (
                  <tr>
                  <td >{i + 1}</td>
                  <td>{item.title}</td>
                  <td>{item.qty}</td>
                  <td>{item.qty * item.price}</td>
                </tr>
                    )
                  })
                }
                
              </tbody>
            </table>

            <h3 style={{textAlign: 'left'}}>Total : <p>{catalog.map(x=>x.qty * x.price).reduce((a,b) => a+b)}</p></h3>
          </div>
        </>
      )}
    </>
  );
};
