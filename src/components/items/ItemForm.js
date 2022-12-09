// import { useRef, useState } from "react";

// function ItemForm(props) {
//     const [amountIsValid,setAmountIsValid] = useState(true)
//     const amountInputRef = useRef();
  
//     const submitHandler = (e) => {
//       e.preventDefault();
//       const enteredAmount = amountInputRef.current.value;
//       const enteredAmountNumber = +enteredAmount;
//       if (
//         enteredAmount.trim().length === 0 ||
//         enteredAmountNumber < 1 ||
//         enteredAmountNumber > 5
//       ) {
//         setAmountIsValid(false)
//         setTimeout(()=>{
//           setAmountIsValid(true)
//         },3000)
//         amountInputRef.current.value="1"
//         return;
//       }
//       amountInputRef.current.value="1"
//       props.onAddToCard(enteredAmountNumber)
//     };
  
//     return (
//       <form onSubmit={submitHandler}>
//         <button className="btn btn-info" ref={amountInputRef} type="submit">
//           Add to Card
//         </button>
//       </form>
//     );
// }

// export default ItemForm;
