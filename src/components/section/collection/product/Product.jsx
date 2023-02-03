import { FaRegHeart } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import ProductStyleWrapper from "./Product.style";

const Product = ({product}) => {
  let nav =useNavigate()
  // console.log(product)
  return (
    <ProductStyleWrapper>
      <div className="product_thumb" >
        <img src={product.image} alt="thumb" />
      </div>
      <div className="product_details" style={{color:"white"}}>
        <a >{product.name}</a>
        <p>
          <span> {product.description} </span>
          <span>
            <FaRegHeart />
            
          </span>
        </p>
      </div>
    </ProductStyleWrapper>
  );
};

export default Product;
