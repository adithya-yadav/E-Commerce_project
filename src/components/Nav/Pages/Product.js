import "./Product.css";
import { useContext, useState } from "react";
import productsArr from "../../items/DummyData";
import ContextApi from "../../store/ContextApi";
import Footer from "../Footer";
import { useParams } from "react-router-dom";

const Products = () => {
  const params = useParams();
  const cartCtx = useContext(ContextApi);
  const imgInd = productsArr.findIndex(
    (item) => item.title === params.ProductId
  );
  const [product, setProduct] = useState({
    title: productsArr[imgInd].title,
    imgUrl: productsArr[imgInd].imageUrl,
  });
  const [addCart, setAddCart] = useState(productsArr[0]);
  const addToCartHandler = () => {
    cartCtx.addItem({
      id: addCart.title,
      title: addCart.title,
      imageUrl: addCart.imageUrl,
      amount: 1,
      price: addCart.price,
    });
  }
  const purchaseHandler = () => {
    alert("Thanks for the purchase")
  }
  return (
    <>
      <div className="container d-flex">
        <div className="side_items d-inline">
          {productsArr.map((item, ind) => {
            const itemShowHandler = () => {
              setProduct({title:item.title,imgUrl:item.imageUrl});
              setAddCart(item);
            }
            return (
              <button key={ind} onClick={itemShowHandler} className="mb-2">
                <img alt="img" src={item.imageUrl} height="150px" />
              </button>
            );
          })}
        </div>
        <div
          className="d-flex m-5"
          style={{
            flexDirection: "column",
          }}
        >
          <div className="img">
          <div className="heading">{product.title}</div>
            <img
              className="imageZoom ms-3"
              alt="img"
              src={product.imgUrl}
              height="500px"
            />
          </div>
          <div className="d-flex justify-content-around mt-5 border-dark">
            <button
              onClick={addToCartHandler}
              className="btn btn-warning btn-lg"
              style={{ minHeight: "7vh", width: "45%" }}
            >
              Add to Cart
            </button>
            <button
            onClick={purchaseHandler}
              className="btn btn-danger btn-lg"
              style={{minHheight: "7vh", width: "45%" }}
            >
              Buy Now
            </button>
          </div>
        </div>
        <div className="mt-5">
        <h3> Lorem ipsum carrots enhanced rebates. Excellent sayings of a man </h3>
          <p><em className="text-primary">Brand: colors Brand - Solimo</em></p>
        <p className="loram_content">
          Lorem ipsum carrots enhanced rebates. Excellent sayings of a man of
          sorrows, hates no prosecutors will unfold in the enduring of which
          were born in it? Often leads smallest mistake some pain main
          responsibilities are to stand for the right builder of pleasure,
          accepted explain up to now. , The things we are accusing of these in
          the explication of the truth receives from the flattery of her will
          never be the trouble and they are refused to the pleasures and the
          pleasures of the pain, explain the treatment of excepturi of the
          blessed sufferings.
        </p>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Products;
