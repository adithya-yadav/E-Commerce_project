import { useRef } from "react";
import { Container, Form } from "react-bootstrap";
import "./Contact.css";
 function ContactUs() {
    const nameRef = useRef()
    const emailRef = useRef()
    const phoneRef = useRef()
    async function addDetailsHandler(e){
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
        <Form
          className="d-block align-items-center"
          style={{
            display: "flex",
            alignItems: "center",
            flexDirection: "column",
            rowGap: "10px",
          }}
          onSubmit={addDetailsHandler}
        >
          <label htmlFor="name">Name :</label>
          <input type="text" ref={nameRef} id="name" placeholder="enter your name" />
          <label htmlFor="email">Email Id :</label>
          <input type="text" ref={emailRef} id="email" placeholder="enter your email" />
          <label htmlFor="phone">phone No :</label>
          <input type="text" ref={phoneRef} id="phone" placeholder="enter your phone number" />
          <button className="button" type="submit">Submit</button>
        </Form>
      </Container>
    </>
  );
}

export default ContactUs;
