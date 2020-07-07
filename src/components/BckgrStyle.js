import styled from "styled-components";

const BckgrStyle = styled.header`
  display: flex;
  align-items: center;
  justify-content: center;
  background: url(${props => props.img}) center/cover no-repeat;
  min-height: 70vh;
`;

export default BckgrStyle;
