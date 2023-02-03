import Counter from "../../../../common/counter";

import CoinInfoCounterWrapper from "./Counter.style";
import coinInfoCounterData from "../../../../assets/data/coinInfoCounter.json";

const CoinInfoCounter = () => {
  const { info } = coinInfoCounterData;

  return (
    <CoinInfoCounterWrapper>
      <div className="container">
        <ul>
          {info?.map((item, i) => (
            <li key={i}>
              <h3>
                <Counter
                  end={item.number}
                  decimal="."
                  decimals={item.number % 1 !== 0 ? "2" : "0"}
                  suffix={item.unit}
                />
              </h3>
              <h4>{item.text}</h4>
            </li>
          ))}
        </ul>
      </div>
    </CoinInfoCounterWrapper>
  );
};

export default CoinInfoCounter;
