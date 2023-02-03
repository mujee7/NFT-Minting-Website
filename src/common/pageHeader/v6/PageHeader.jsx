import titleShape from "../../../assets/images/icon/home-shape.png";
import PageHeaderStyleWrapper from "./PageHeader.style";
const PageHeader = () => {
  return (
    <PageHeaderStyleWrapper>
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-6">
            <div className="breadcrumb_area">
              <div className="breadcrumb_menu">
                <a href="# ">Home</a> <span>.</span> FAQS
                <img
                  className="heading_shape"
                  src={titleShape}
                  alt="bithu nft heading shape"
                />
              </div>
              <h2 className="breadcrumb_title text-uppercase">
                QUESTIONS & ANSWER
              </h2>
            </div>
          </div>
        </div>
      </div>
    </PageHeaderStyleWrapper>
  );
};

export default PageHeader;
