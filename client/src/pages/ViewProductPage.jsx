import { Link } from "react-router-dom";
import { useEffect,useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

function ViewProductPage()  {
  const {id} = useParams();
  const [product , setProduct ] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
      const fetchProduct = async () => {
        try {
          const response = await axios.get(`http://localhost:4001/products/${id}`);
          setProduct(response.data.data);
          setIsLoading(false);
        }catch (error) {
          setIsError(true);
          setIsLoading(false);
        }
      };
      fetchProduct();
  },[id]);

    if (isLoading) return <h1>Loading...</h1>;
    if (isError || !product) return <h1>Product not found</h1>;


  
  return (
    <div>
      <h1>View Product Page</h1>
      <div className="view-product-container">
        <h2>{product.name}</h2>
        <h4>{product.price} THB</h4>
        <p>{product.description}</p>
      </div>
      <Link to="/"><button>Back to Home</button></Link>
    </div>
  );
}

export default ViewProductPage;
