
import productsArr from "./DummyData";
import { Container, Row } from "react-bootstrap";
import { Fragment } from "react";
import Item from "./Item";
import ItemHeaders from "./ItemHeaders";

function Items() {
  const itemsList = productsArr.map((item) => {
    return (
      <Item
        key={item}
        title={item.title}
        imageUrl={item.imageUrl}
        price={item.price}
      />
    );
  })

  return (
    <Fragment>
      <ItemHeaders/>
      <Container className="mt-3" style={{ zIndex: "-1" }}>
        <Row className="" style={{ zIndex: "-1" }}>
          {itemsList}
        </Row>
      </Container>
    </Fragment>
  );
}

export default Items;
