import * as React from "react";
import styled from "styled-components";
import Link from "gatsby-link";

interface Props {

}

const Container = styled.div`
  text-align: center;
`;

export default function Footer(props: Props) {
  return <Container>
    <p>
      Powered by
      <a href={"https://reactjs.org/"}> React</a>,
      <a href={"https://www.gatsbyjs.org/"}> Gatsby</a>
    </p>
    <p>
      Themed with
      <a href={"https://reactstrap.github.io/"}> Reactstrap</a>,
    </p>
    <p>
      Made with ❤
    </p>
  </Container>;
}
