import Counter from "../../../../common/counter";
import SectionTitle from "../../../../common/sectionTitle";
import data from "../../../../assets/data/about/dataV2";

import AboutStyleWrapper from "./About.style";

const About = () => {
  const { aboutDescription1, aboutDescription2 } = data;
  return (
    <AboutStyleWrapper>
      <div className="container">
        <div className="row about_row">
          <div className="col-lg-6">
            <div className="v5_about_us_left_sect">
              <SectionTitle
                title="ABOUT US"
                subtitle="THE STORY "
                className="section_title"
              />
              <div className="v5_about_us_left_text">
                <p>{aboutDescription1}</p>
                <p>{aboutDescription2}</p>
              </div>
            </div>
          </div>

          <div className="col-lg-6">
            <div className="about_right_item">
              <div className="counter_item">
                <h3>
                  <Counter
                    end={9999}
                    decimal="."
                    decimals={9999 % 1 !== 0 ? "2" : "0"}
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
                <h3>
                  <Counter
                    end={555}
                    decimal="."
                    decimals={555 % 1 !== 0 ? "2" : "0"}
                    suffix={"+"}
                  />
                </h3>
                <h6>Number of Attributes</h6>
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
                <h6>Volume Traded (ETH)</h6>
              </div>
            </div>
          </div>
        </div>
      </div>
    </AboutStyleWrapper>
  );
};

export default About;
