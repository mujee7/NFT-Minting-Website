import Product from "./product/Product";

import { useState, useEffect } from "react";
import CollectionStyleWrapper from "./Collection.style";
import { useNavigate } from "react-router-dom";

import { useModal } from "../../../utils/ModalContext";

const Account = () => {
  const { Contract, CreateContractInstance, Basic, account } = useModal();
  const [products, setProducts] = useState([]);
  let nav = useNavigate();
  const getImage = async (value) => {
    try {
      let data = await fetch(
        `https://gateway.pinata.cloud/ipfs/QmewasZSkCSe7t66sCzAmGvpxoHp1UGDymrTmGVbELrz5G/${value}.json`
      );
      data = await data.json();
      console.log(data);

      // setProducts([...products],[ {...data,id:value}])
      setProducts((prevValue) => {
        return [...prevValue, { ...data, id: value }];
      });
    } catch (err) {
      console.log(err);
    }
    // console.log(data)
  };
  const getNextMint = async () => {
    if (Contract) {
      try {
        const TotalTokens = await Contract.methods.balanceOf(account[0]).call();
        console.log(TotalTokens);
        for (var j = 0; j < TotalTokens; j++) {
          const Supply = await Contract.methods
            .tokenOfOwnerByIndex(account[0], j)
            .call();
          console.log("yeah its working here in getting NFT by index", Supply);
          getImage(Supply);
        }
      } catch (err) {
        console.log("error in getting NFTs of Owner ie (getNextMint)");
      }

      // setRemaining(TokenURI)
    }
  };

  const something = async () => {
    if (!Basic) await CreateContractInstance();
    console.log(Contract);
  };
  useEffect(() => {
    something();
  }, []);
  useEffect(() => {
    getNextMint();
  }, [Contract]);

  console.log("checking the data of products", products);
  return (
    <CollectionStyleWrapper>
      <div className="container">
        <div className="row filters_row">
          <div className="col-lg-12 col-md-8">
            <div className="collection_items">
              <div className="row products_row">
                {/* {console.log(products)} */}

                {products?.map((product, idx) => (
                  <div
                    key={idx}
                    className="col-lg-4 col-sm-6 col-12"
                    onClick={() => nav(`/NFT/${product.id}`)}
                    style={{ cursor: "pointer" }}
                  >
                    <Product product={product} key={idx}></Product>
                  </div>
                ))}
              </div>
            </div>
            {/* <Pagination /> */}
          </div>
        </div>
      </div>
    </CollectionStyleWrapper>
  );
};

export default Account;
