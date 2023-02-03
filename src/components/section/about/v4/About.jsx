import Counter from "../../../../common/counter";
import SectionTitle from "../../../../common/sectionTitle";
import data from "../../../../assets/data/about/dataV2";

import AboutStyleWrapper from "./About.style";

const About = () => {
  const { aboutDescription1, aboutDescription2 } = data;
  return (
    <AboutStyleWrapper id="about">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <div className="about-left-item">
              <div className="counter_item">
                <h3>
                  <Counter
                    end={300}
                    decimal="."
                    decimals={300 % 1 !== 0 ? "2" : "0"}
                    suffix={""}
                  />
                </h3>
                <h6>Total Items</h6>
              </div>
              <div className="counter_item">
                <h3>
                  <Counter
                    end={0.06}
                    decimal="."
                    decimals={0.06 % 1 !== 0 ? "2" : "0"}
                    suffix={""}
                  />
                </h3>
                <h6>NFT Mint Price</h6>
              </div>
              <div className="counter_item">
                <h3><span>0Xdk...5cvd</span></h3>
                <h6>Address</h6>
              </div>
              <div className="counter_item">
                <h3>
                  <Counter
                    end={25.5}
                    decimal="."
                    decimals={25.5 % 1 !== 0 ? "2" : "0"}
                    suffix={"K"}
                  />
                </h3>
                <h6>
                  Volume Traded (ETH)
                </h6>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="v1_about_us_right_sect">
              <SectionTitle title="ABOUT US" subtitle="THE STORY " />
              <div className="v1_about_us_right_text">
                <p>{aboutDescription1}</p>
                <p>{aboutDescription2}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </AboutStyleWrapper>
  );
};

export default About;
