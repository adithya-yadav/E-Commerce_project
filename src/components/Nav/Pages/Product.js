import { Container } from "react-bootstrap";
import "./Product.css";
import { useContext, useState } from "react";
import productsArr from "../../items/DummyData";
import ContextApi from "../../store/ContextApi";

function Products() {
  const cartCtx = useContext(ContextApi)
  const [img, setimg] = useState(productsArr[0].imageUrl);
  const [addCart,setAddCart] = useState(productsArr[0])
  function addToCartHandler(){
    cartCtx.addItem({
      id: addCart.title,
      title: addCart.title,
      imageUrl: addCart.imageUrl,
      amount: 1,
      price: addCart.price,
    });
  }
  return (
    <>
      <Container
        className="d-flex"
        style={{
          marginTop: "90px",
          flexDirection: "row",
          columnGap: "40px",
        }}
      >
        <div
          className="d-flex"
          style={{
            flexDirection: "column",
            width: "10%",
            rowGap: "10px",
          }}
        >
          {productsArr.map((item , ind) => {
            function itemShowHandler(){
              setimg(item.imageUrl)
              setAddCart(item)
            }
           return <button key={ind} onClick={itemShowHandler}>
              <img alt="img" src={item.imageUrl} height="150px" />
            </button>;
          })}
        </div>
        <div
          className="d-flex m-3"
          style={{
            flexDirection: "column",
          }}
        >
          <img
            className="imageZoom ms-3"
            alt="img"
            style={{
              transition: "transform .2s",
            }}
            src={img}
            height="500px"
          />
          <div className="d-flex justify-content-around mt-5 border-dark">
            <button
              onClick={addToCartHandler}
              className="btn btn-warning btn-lg"
              style={{ height: "7vh", width: "45%" }}
            >
              Add to Cart
            </button>
            <button
              className="btn btn-danger btn-lg"
              style={{ height: "7vh", width: "45%" }}
            >
              Buy Now
            </button>
          </div>
        </div>
      </Container>
    </>
  );
}

export default Products;
