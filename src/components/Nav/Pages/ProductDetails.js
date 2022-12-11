import { useParams } from "react-router-dom";

function ProductDetails(){
    const params = useParams()
    return (
        <>
            <p className="m-5">{params.ProductId}</p>
        </>
    )
};

export default ProductDetails;