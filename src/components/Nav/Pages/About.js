import { Container } from "react-bootstrap";
import Footer from "../Footer";
import ItemHeaders from "../../items/ItemHeaders";
import './About.css'
import { useHistory } from "react-router-dom";

const About = () => {
  const history = useHistory()
  const contactUsHandler = ()=>{
    history.push("/Contact")
  }
  return (
    <>
      <ItemHeaders />
      <h2 className="d-flex justify-content-center mt-3">About Us</h2>
      
      <Container className="justify-content-between mt-5">
        <img
          className="About_Img ms-3 rounded-circle"
          src="https://picsum.photos/200"
          alt="img"
        ></img>
        <button className="btn btn-info p-3 w-50 text-white" onClick={contactUsHandler}>Contact Us</button>
        <p
        className="loram_content"
        >
          Lorem ipsum carrots enhanced rebates. Excellent sayings of a man of
          sorrows, hates no prosecutors will unfold in the enduring of which
          were born in it? Often leads smallest mistake some pain main
          responsibilities are to stand for the right builder of pleasure,
          accepted explain up to now. , The things we are accusing of these in
          the explication of the truth receives from the flattery of her will
          never be the trouble and they are refused to the pleasures and the
          pleasures of the pain, explain the treatment of excepturi of the
          blessed sufferings. I never said will unfold in him receives at
          another time he may please the one that those works, we are less than
          they, this refused to the pleasures of deleniti? Those are! Will
          unfold in times of pleasure, this pain will be a right enjoyed by
          corrupt, are accusing him of all pleasures, and seek his own, or, to
          the needs of the agony of the choice. We hate the fellow. Lorem ipsum
          dolor, sit amet consectetur rebates. The distinction, that arise from
          or to. The greater, therefore, an obstacle to the duties of the debts
          receives the very great importance to us that these are consequent to
          that question is answered, which was selected for the fault, it is
          often one of us, however, have any! Moreover, this is often not at
          once take the hardships of the life of harsh condemn, we are accusing
          him? Him whom something large cisterns.
          blessed sufferings. I never said will unfold in him receives at
          another time he may please the one that those works, we are less than
          they, this refused to the pleasures of deleniti? Those are! Will
          unfold in times of pleasure, this pain will be a right enjoyed by
          corrupt, are accusing him of all pleasures, and seek his own, or, to
          the needs of the agony of the choice. We hate the fellow. Lorem ipsum
          dolor, sit amet consectetur rebates. The distinction, that arise from
          or to. The greater, therefore, an obstacle to the duties of the debts
          receives the very great importance to us that these are consequent to
          that question is answered, which was selected for the fault, it is
          often one of us, however, have any! Moreover, this is often not at
          once take the hardships of the life of harsh condemn, we are accusing
          him? Him whom something large cisterns.
        </p>
      </Container>
      <Footer/>
    </>
  );
}

export default About;
