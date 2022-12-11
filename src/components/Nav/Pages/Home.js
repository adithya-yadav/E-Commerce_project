import { Table } from "react-bootstrap";
import ItemHeaders from "../../items/ItemHeaders";
const DummyList = [
  {
    name: "primary",
    class: "bg-primary text-white",
    col: "light blue",
    btn: "use primary color",
  },
  {
    name: "secondary",
    class: "bg-primary text-white",
    col: "light blue",
    btn: "use secondary color",
  },
  {
    name: "success",
    class: "bg-primary text-white",
    col: "light blue",
    btn: "use success color",
  },
  {
    name: "danger",
    class: "bg-primary text-white",
    col: "light blue",
    btn: "use danger color",
  },
  {
    name: "warning",
    class: "bg-primary text-white",
    col: "light blue",
    btn: "use warning color",
  },
  {
    name: "info",
    class: "bg-primary text-white",
    col: "light blue",
    btn: "use info color",
  },
];
function Home() {
  return (
    <>
      <div className=" pb-5 mb-2 bg-secondary mb-5 mt-0 ">
        <ItemHeaders />
        <div className="d-flex justify-content-center">
          <button className="btn btn-secondary border-info ">
            <div className="text-white h2">Get Our Latest Colors</div>
          </button>
        </div>
        <img
          src="https://prasadyash2411.github.io/ecom-website/img/Album%201.png"
          alt="img"
          className="mt-5 rounded-circle rounded mx-auto d-block border border-info"
          style={{
            height: "70px",
            width: "70px",
          }}
        />
      </div>
      <Table>
        <h2 className="d-flex justify-content-center">bootstrap Colors</h2>
        <div className="d-flex justify-content-center">
          <tbody>
            {DummyList.map((col) => {
              return (
                <tr className="h4">
                  <td className={`m-5 mt-0 text-${col.name}`}>{col.name}</td>
                  <td className={`text-secondary`}>ClassName={col.class}</td>
                  <td>{<span className={`m-2 p-2 border border-dark bg-${col.name}`}></span>}</td>
                  <td className={`mt-3 mb-3 ms-5 btn btn-${col.name}`}>{col.btn}</td>
                </tr>
              );
            })}
          </tbody>
        </div>
      </Table>
      <footer className="bg-info mt-5 p-5">
            <div className="text-white h1 ms-5">The Generies</div>
    </footer>
    </>
  );
}

export default Home;
