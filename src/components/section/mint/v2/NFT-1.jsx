import { useState } from "react";

import { useModal } from "../../../../utils/ModalContext";

import Button from "../../../../common/button";
import Particle from "./Particles";
import MintStyleWrapper from "./Mint.style";

import discordIcon from "../../../../assets/images/icon/dis_logo.svg";

import { useEffect } from "react";

import { useParams } from "react-router-dom";
const Mint = () => {
  const [Transfer, setTransfer] = useState();
  const [product, setProduct] = useState();
  let params = useParams();
  console.log(params.product);
  const {
    CreateContractInstance,
    Contract,
    Basic,
    account,
    mintModalHandle,
    reload,
  } = useModal();
  const [NftOwner, setNftOwner] = useState();

  const getNFT = async (value) => {
    try {
      let data = await fetch(
        `https://gateway.pinata.cloud/ipfs/QmewasZSkCSe7t66sCzAmGvpxoHp1UGDymrTmGVbELrz5G/${value}.json`
      );
      data = await data.json();
      setProduct(data);
    } catch {
      console.log("Error in getImage function in Mint.jsx");
    }
    // console.log(data)
  };

  const getNextMint = async () => {
    console.log("CHECK HERE VALUE", Contract);

    if (Contract) {
      await getNFT(params.product);
      console.log("I am HERE");
      try {
        const TokenOwner = await Contract.methods
          .ownerOf(params.product)
          .call();
        console.log("Capital", TokenOwner);
        setNftOwner(TokenOwner);

        setTransfer(TokenOwner.toString().toLowerCase());
        console.log("CHECK HERE TokenOWner" + TokenOwner);
      } catch (err) {
        console.log("fucking error in tokenowner");
        console.log(err);
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
  }, [Contract, reload]);

  console.log("reading account", account);
  return (
    <MintStyleWrapper>
      <Particle />
      <div className="container" style={{ marginTop: "80px" }}>
        <div className="row">
          <div className="col-md-6">
            <div className="mint_left_content">
              <div className="mint_left_inner">
                <div className="mint_slider">
                  <div className="mint_thumb">
                    {product ? (
                      <img src={product.image} alt="thumb" />
                    ) : (
                      <h1>......</h1>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-md-6">
            <div className="mint_right_content">
              <div className="content_header">
                <h1>{product ? <>{product.name}</> : <></>}</h1>
              </div>

              <div className="mint_timer">
                <h3 style={{ color: "white" }}>Description</h3>
                <p style={{ marginTop: "10px", fontSize: "25px" }}>
                  {product ? <>{product.description}</> : <></>}
                </p>
              </div>
              <div className="content_footer">
                <h3 style={{ color: "white" }}>Owner OF NFT</h3>
                {console.log("OWNER:" + NftOwner)}
                <p style={{ marginTop: "10px", fontSize: "25px" }}>
                  {" "}
                  {NftOwner ? <>{NftOwner}</> : <></>}
                </p>
              </div>
              <div className="mint_btns">
                <Button lg variant="outline">
                  <img src={discordIcon} alt="icon" />
                  join discord
                </Button>
                {console.log(Transfer)}
                {account[0] == Transfer ? (
                  <Button
                    lg
                    variant="outline"
                    style={{ background: "#00ffa3", color: "black" }}
                    onClick={() => mintModalHandle()}
                  >
                    Transfer
                  </Button>
                ) : (
                  <></>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </MintStyleWrapper>
  );
};

export default Mint;
