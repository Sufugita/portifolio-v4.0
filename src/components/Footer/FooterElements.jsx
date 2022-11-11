import styled from "styled-components";

export const FooterContainer = styled.div`
  display:flex;
  background: ${(props) => props.theme.BackColor};
  color:  ${(props) => props.theme.TextColor};
  height:7vh;
  justify-content: center;
  align-items: center;
  font-weight: bold;

`