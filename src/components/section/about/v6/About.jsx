import Button from "../../../../common/button";
import AboutStyleWrapper from "./About.style";

import thumb1 from "../../../../assets/images/nft/story-img1.png";
import thumb2 from "../../../../assets/images/nft/story-img2.png";
import thumb3 from "../../../../assets/images/nft/story-img3.png";
import thumb4 from "../../../../assets/images/nft/story-img4.png";

const About = () => {
  return (
    <AboutStyleWrapper>
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <div className="about_left_content">
              <h2 className="about_title">
                THE STORY <br /> YOU SHOULD KNOW
              </h2>
              <p>
                Contrary to popular belief, Lorem Ipsum is not simply random
                text. It has roots in a piece of classical Latin literature from
                45 BC, making it over 2000 years old. Richard McClintock, a
                Latin professor at Hampden-Sydney College in Virginia, looked up
                one of the more obscure Latin words, consectetur cites of the
                word in classical literature.
              </p>
              <p>
                The standard chunk of Lorem Ipsum used since the 1500s is
                reproduced below for those interested. Sections 1.10.32 and
                1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also
                reproduced in their exact original a latin professor.
              </p>

              <Button lg variant="mint">
                Read Litepaper
              </Button>
            </div>
          </div>
          <div className="col-md-6">
            <div className="about_right_content">
              <div className="nft_thumb">
                <img src={thumb1} alt="thumb" />
              </div>
              <div className="nft_thumb">
                <img src={thumb2} alt="thumb" />
              </div>
              <div className="nft_thumb">
                <img src={thumb3} alt="thumb" />
              </div>
              <div className="nft_thumb">
                <img src={thumb4} alt="thumb" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </AboutStyleWrapper>
  );
};

export default About;
