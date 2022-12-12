import { Container } from "react-bootstrap";
import fp2 from "../../images/fp2.png";
import fp3 from "../../images/fp3.png";
import fp1 from "../../images/fp1.png";
import fp4 from "../../images/fp4.png";
import "./Product.css";
import { useState } from "react";

function Products() {
  const [img, setimg] = useState(fp1);

  function fp1Handler() {
    setimg(fp1);
  }
  function fp2Handler() {
    setimg(fp2);
  }
  function fp3Handler() {
    setimg(fp3);
  }
  function fp4Handler() {
    setimg(fp4);
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
          <button onClick={fp1Handler}>
            <img alt="img" src={fp1} height="150px" />
          </button>
          <button onClick={fp2Handler}>
            <img alt="img" src={fp2} height="150px" />
          </button>
          <button onClick={fp3Handler}>
            <img alt="img" src={fp3} height="150px" />
          </button>
          <button onClick={fp4Handler}>
            <img alt="img" src={fp4} height="150px" />
          </button>
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
