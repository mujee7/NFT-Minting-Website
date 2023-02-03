import { FiSearch } from "react-icons/fi";
import { useModal } from "../../../utils/ModalContext";
import titleShape from "../../../assets/images/icon/home-shape.png";
import PageHeaderStyleWrapper from "./PageHeader.style";
const PageHeader1 = () => {
  const { account} =    useModal();
  console.log(account)
  return (
    <PageHeaderStyleWrapper>
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-5">
            <div className="breadcrumb_area">
              <div className="breadcrumb_menu">
                <a href="# ">Home</a> <span>.</span> Account
                <img
                  className="heading_shape"
                  src={titleShape}
                  alt="bithu nft heading shape"
                />
              </div>
              <h2 className="breadcrumb_title text-uppercase">Your Account</h2>
              <p style={{marginTop:"10px",fontSize:"25px"}}>{account[0]}</p>
            </div>
          </div>

          <div className="col-md-7">
            <div className="breadcrumb_form">
              
            </div>
          </div>
        </div>
      </div>
    </PageHeaderStyleWrapper>
  );
};

export default PageHeader1;
