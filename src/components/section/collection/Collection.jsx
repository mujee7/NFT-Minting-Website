import Product from "./product/Product";

import { useState, useEffect } from "react";
import CollectionStyleWrapper from "./Collection.style";
import { useNavigate } from "react-router-dom";

import { useModal } from "../../../utils/ModalContext";

const Collection = () => {
  const { Contract, CreateContractInstance, Basic } = useModal();
  const [products, setProducts] = useState([]);
  let nav = useNavigate();
  const getImage = async (value) => {
    try {
      let data = await fetch(
        `https://gateway.pinata.cloud/ipfs/QmewasZSkCSe7t66sCzAmGvpxoHp1UGDymrTmGVbELrz5G/${value}.json`
      );
      data = await data.json();
      console.log(data);

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
      const Supply = await Contract.methods.totalSupply().call();
      // setRemaining(TokenURI)
      console.log(Supply);
      for (var i = 1; i <= Supply; i++) {
        getImage(i);
      }
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

  console.log("wasssup gaydil");
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
                    onClick={() => nav(`/NFT/${idx + 1}`)}
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

export default Collection;
