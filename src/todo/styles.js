import styled from "styled-components";
import H3 from "./../system/Headings/H3";

export const Card = styled.div`
  border: 1px solid black;
  text-align: center;
  min-width: 300px;
  background-color: gray;
  padding: 5px 10px;
  margin: auto;
`;

export const Input = styled.input`
  background-color: black;
  color: white;
  border: 1px solid white;
  margin: auto;
  width: 50%;
`;

export const Paragraph = styled.p`
  padding: 5px;
  text-align: start;
`;

export const H3Red = styled(H3)`
  border-color: red;
`;
