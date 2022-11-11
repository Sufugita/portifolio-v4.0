import styled from "styled-components";

export const ContactH1 = styled.h1`
font-size: 3rem;
color: ${(props) => props.theme.TextColor};
font-weight: 700;
letter-spacing: 1.4px;
text-transform: uppercase;
display: flex;
justify-content: center;
margin-top: 80px;

@media screen and (max-width: 480px) {
  margin-top: 0px;
  font-size: 2rem;
  margin-bottom: 2rem;
}
`

export const ContactContainer = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: ${(props) => props.theme.BackColor};
  color:  ${(props) => props.theme.PrimaryColor};
 
  
  @media screen and (max-width: 768px) {
    height: 90vh;
    background:  ${(props) => props.theme.BackColor};
  }
  
  @media screen and (max-width: 480px) {
    height: 80vh; 
    background:  ${(props) => props.theme.BackColor};
  }
`

export const ContactWrapper = styled.div`
  display: flex;
  width:75%;
  justify-content: center;
  align-items: center;
  height:60vh;
  padding:0 20px;
  @media screen and (max-width: 480px) {
    width:90%; 
  }
`


export const ContactForm = styled.form`
  width: 100%;
  max-width: 700px;
  padding: 40px;
  background-color: #fff;
  border-radius: 10px;
  box-sizing: border-box;
  box-shadow: 0px 0px 20px 0px rgba(0,0,0,0.2);  
`

export const ContactInput = styled.input`
  display: block;
  width: 100%;
  background-color: #fff;
  height: 40px;
  border-radius: 5px;
  border: 1px solid #ddd;
  margin: 10px 0 20px 0;
  padding: 20px;
  box-sizing: border-box;
`
export const ContactTextArea = styled.textarea`
  background-color: #eee;
  width:100%;
  min-height: 100px;
  resize: none; //To not change size.
  background-color: #fff;
  height: 40px;
  border-radius: 5px;
  border: 1px solid #ddd;
  margin: 10px 0 20px 0;
  padding: 20px;
  box-sizing: border-box;
`

export const ContactButton = styled.button`
  display: block;
  background: #0077fa;
  white-space: nowrap;
  padding: 7px 12px;
  color: #010606;
  font-size: 16px;
  font-weight: 500;
  outline: none;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;
  border-radius: 5px;
    
    &:hover {
        transition: all 0.2 ease-in-out;
        background: #0077fa;
        color: #f2f2f3;
    }
`



