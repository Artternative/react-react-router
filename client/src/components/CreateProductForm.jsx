import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";


function CreateProductForm() {

  const [productName,setproductName] = useState("")
  const [productImg,setproductImg] = useState("")
  const [productPrice,setproductPrice] = useState("")
  const [productDesc,setproductDesc] = useState("")

  const navigate = useNavigate();

  const handlerSubmit = async (e) => {
     e.preventDefault();
    // set useState 
    // send data to server
      const data = {
          name:productName,
          price:productPrice,
          image:productImg,
          description:productDesc
          };
      try {
          const response = await axios.post("http://localhost:4001/products", data);
          console.log("Product created:", response.data);
          navigate("/"); 
          } catch (error) {
        console.error("Error creating product:", error);
         }
    }
   
  return (
    <form className="product-form" onSubmit={handlerSubmit}>
      <h1>Create Product Form</h1>
      <div className="input-container">
        <label>
          Name
          <input
            id="name"
            name="name"
            type="text"
            placeholder="Enter name here"
            value={productName}
            onChange={(e) => {setproductName(e.target.value)}}
          />
        </label>
      </div>
      <div className="input-container">
        <label>
          Image Url
          <input
            id="image"
            name="image"
            type="text"
            placeholder="Enter image url here"
            value={productImg}
            onChange={(e) => {setproductImg(e.target.value)}}
          />
        </label>
      </div>
      <div className="input-container">
        <label>
          Price
          <input
            id="price"
            name="price"
            type="number"
            placeholder="Enter price here"
            value={productPrice}
            onChange={(e) => {setproductPrice(e.target.value)}}
          />
        </label>
      </div>
      <div className="input-container">
        <label>
          Description
          <textarea
            id="description"
            name="description"
            type="text"
            placeholder="Enter description here"
            value={productDesc}
            onChange={(e) => {setproductDesc(e.target.value)}}
            rows={4}
            cols={30}
          />
        </label>
      </div>
      <div className="form-actions">
        <button type="submit">Create</button>
      </div>
    </form>
  );
}

export default CreateProductForm;
