import { useRef } from "react";
import { Container, Form } from "react-bootstrap";
import Footer from "../Footer";
import "./ContactUs.css";

const ContactUs = () => {
    const nameRef = useRef()
    const emailRef = useRef()
    const phoneRef = useRef()
    const addDetailsHandler = async(e) => {
        e.preventDefault()
        const name=nameRef.current.value;
        const email=emailRef.current.value;
        const phoneNo=phoneRef.current.value;
        const details = {
            name,
            email,
            phoneNo
        }

       var response = await fetch("https://adddetails-2dc5d-default-rtdb.firebaseio.com/userDetails.json",{
        method:"POST",
        body:JSON.stringify(details),
        headers:{
            "content-type":"application/json"
        }
       })
       nameRef.current.value="";
       emailRef.current.value="";
       phoneRef.current.value="";
       console.log(response)

    }
  return (
    <>
      <Container
        className="container"
        style={{
          marginTop: "90px",
        }}
      >
        <h1 className="contact_us">Contact Us</h1>
        <Form
          className="form_contactUs d-block align-items-center"
          onSubmit={addDetailsHandler}
        >
          <label htmlFor="name">Name :</label>
          <input type="text" ref={nameRef} id="name" placeholder="enter your name" />
          <label htmlFor="email">Email Id :</label>
          <input type="text" ref={emailRef} id="email" placeholder="enter your email" />
          <label htmlFor="phone">phone No :</label>
          <input type="number" ref={phoneRef} id="phone" placeholder="enter your phone number" />
          <button className="button" type="submit">Submit</button>
        </Form>
      </Container>
      <Footer/>
    </>
  );
}

export default ContactUs;
