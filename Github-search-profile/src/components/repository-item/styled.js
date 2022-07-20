import styled from "styled-components";

export const Wrapper = styled.div`
  padding: 8px;
  border-radius: 8px;
  border: 1px solid #ccc;
  margin: 16px 16px;
  width: 350px;
  height: 150px;
  align-content: center;
  box-shadow: 1px 1px 6px green;
  background-color: white;
  text-align: center;
  border-radius: 16px;
  border: 1px solid black;
`;

export const WrapperTitle = styled.h2`
  color: black;
  font-size: 1.5em;
  font-weight: bold;
  margin: 8px;
  margin-bottom: 25px;
  margin-top: 15px;
`;

export const WrapperLink = styled.a`
  font-size: 1.4em;
  font-weight: bold;
  margin: 8px 0;
  color: #3182ce;

  &:hover {
    color: green;
  }
`;