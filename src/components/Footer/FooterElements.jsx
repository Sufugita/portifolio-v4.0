import styled from "styled-components";

export const FooterContainer = styled.div`
  display: flex;
  flex-direction: column;
  background: ${(props) => props.theme.BackColor};
  color:  ${(props) => props.theme.TextColor};
  height:7vh;
  justify-content: center;
  align-items: center;
  font-weight: bold;
`
export const Text = styled.div`
  color: black;
`
export const Email = styled.div`
  color: black;
  cursor: pointer;
`
export const IconHeart = styled.span`
  color: red;
  font-size: 16px;
`