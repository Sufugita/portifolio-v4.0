import styled from "styled-components";
import { Link } from 'react-scroll'

export const Button = styled(Link)`
  border-radius: 10px;
  background: ${({ primary }) => (primary ? '#0077fa' : '#f2f2f3')};
  white-space: nowrap;
  padding: ${({ big }) => (big ? '14px 48px' : '12px 30px')};
  color: ${({ dark }) => (dark ? '#27292a' : '#f2f2f3')};
  outline: none;
  border: none;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.2s ease-in-out;
  font-size: 20px;
  font-weight: bold;

  &:hover {
    transition: all 0.2s ease-in-out;
    background: ${({ primary }) => (primary ? '#f2f2f3' : '#0077fa')};
  }
`