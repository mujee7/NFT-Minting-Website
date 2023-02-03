import styled, { keyframes } from "styled-components";
import bgImg from "../../../../../assets/images/bg/roadmapblurimggray.png";
import pendingBgImg from "../../../../../assets/images/bg/roadmapblurimggreen.png";
import doneBgImg from "../../../../../assets/images/bg/roadmapblurimggreendone.png";
const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

const RoadMapItemStyleWrapper = styled.div`
  position: relative;
  min-height: 340px;
  width: 100%;
  position: relative;
  overflow: hidden;
  padding: 17px 19px;
  color: #ffffff;
  background: rgba(255, 255, 255, 0.01);

  &::before {
    position: absolute;
    left: 0;
    top: 0;
    height: 100%;
    width: 100%;
    background: url(${bgImg}) no-repeat;
    background-size: contain;
    background-position: top left;
    content: "";
  }

  &.project_done {
    &::before {
      background: url(${doneBgImg}) no-repeat;
    }
  }
  &.project_pending {
    &::before {
      background: url(${pendingBgImg}) no-repeat;
    }

    // pending project icon spin
    .roadmap_header {
      svg {
        animation: ${rotate} 3s linear infinite;
      }
    }
  }

  .roadmap_header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 20px;
    h3 {
      margin: 0;
    }

    svg {
      font-size: 22px;
      opacity: 0.4;
    }
  }

  .roadmap_features {
    margin: 0;
    padding: 0;

    li {
      display: flex;
      align-items: center;
      column-gap: 10px;
      font-weight: 500;
      font-size: 14px;
      line-height: 24px;
      color: rgba(255, 255, 255, 0.8);
      position: relative;
      padding-left: 20px;

      svg {
        position: absolute;
        left: 0;
        font-size: 10px;
        color: rgba(255, 255, 255, 0.2);
      }
    }

    li + li {
      margin-top: 17px;
    }
  }
`;

export default RoadMapItemStyleWrapper;
