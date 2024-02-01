import styled from "styled-components";


export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: nowrap;
`;

export const SectionHeading = styled.div`
    align-items: center;
    text-align: center;
    flex-direction: column;
    position: relative;

    h1{
        font-size: 32px;
        font-weight: 700;
        margin-bottom: 10px;
    }

    p{
        text-align: center;
    }
`;


export const ImageContainer = styled.div`
  position: relative;
  margin: 20px;
`;

export const Image = styled.img`
    width: 596px;
    height: 457px;
`;

export const ToggleIcon = styled.span`
  position: absolute;
  bottom: 30px;
  left: 30px;
  cursor: pointer;
`;
export const ToggleIcon2 = styled.span`
  position: absolute;
  bottom: 30px;
  left: 60px;
  cursor: pointer;
`;

export const TextContainer = styled.div`
  text-align: center;
  margin-top: 10px;
  margin-left: 0px !important;
`;

export const Text = styled.span`
  position: relative;
  display: flex;
  float: left;
  &:after {
    content: '';
    position: absolute;
    bottom: -5px;
    left: 26%;
    transform: translateX(-50%);
    width: 50%;
    height: 1px;
    background-color: black;
  }
`;

export const Icons = styled.div`
    display: inline-flex;
    align-items: center;
    gap: 16px;
    position: relative;
`;

export const Icon = styled.div`
  background-color: white;
  width: 20px;
  height: 20px;
  align-items: center;
  justify-content: center;
  text-align: center;

`










// import styled from "styled-components";

// export const StyledDesign = styled.div`
//     margin-top: 20px;
// `;

// export const SectionHeading = styled.div`
//     align-items: center;
//     text-align: center;
//     flex-direction: column;
//     position: relative;

//     h1{
//         font-size: 32px;
//         font-weight: 700;
//         margin-bottom: 10px;
//     }

//     p{
//         text-align: center;
//     }
// `;

// export const Residential = styled.div`
//     img{
//         width: 596px;
//         height: 457px;
//         gap: 20px;
//     }

//     hr{
//         width: 100px;
//         height: 0px;
//         margin-left: 0;
//         margin-top: -10px;
//     }
// `;

// export const Corporate = styled.div`
//         img{
//             width: 596px;
//             height: 457px;
//             margin-left: 30px;
//         }

//         h3{
//             margin-left: 30px;
            
//         }

//         hr{
//             width: 100px;
//             height: 0px;
//             margin-left: 30px;
//             margin-top: -10px;
//         }
// `;

// export const Sliders = styled.div`
    
// `

// export const LeftSlider = styled.img`
//     width: 3px;
//     height: 3px;
//     position: absolute;
// `
