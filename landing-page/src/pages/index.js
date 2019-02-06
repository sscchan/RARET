import React from "react"
import { Link, graphql } from "gatsby"
import Img from "gatsby-image"
import styled from "styled-components"

import Layout from "../components/layout"
import SEO from "../components/seo"
import logo from "../images/Team-Sodo-Logo-White.svg"
import Header from "../components/header"
import HeroTitle from "../components/title"
import Team from "../components/team"
import Sponsors from "../components/sponsors"
import Contact from "../components/contact"

const StyledLink = styled(Link)`
  position: relative;
  text-decoration: none;
  z-index: 20;
  left: 5rem;
  top: 5vh;
`;

const Logo = styled.img`
  max-width: 6rem;
  margin: 0;
`;

const Image = styled(Img)`
  bottom: 8vh;
  left: 1.25rem;
  right: 1.25rem;
  top: 1.25rem;
`;

const Container = styled.div`
  position: relative;
  z-index: 20;
  padding: 1.25rem 0;
  padding-bottom: 0;
  background: #ffffff;
  // margin-top: calc(50h - 1.25rem);
  // margin-top: 30vh;
  margin-top: 45vh;
`;


const Content = styled.div`
  max-width: 1080px;
  margin: 1rem auto;
  padding: 0 1.25rem;
`;

const About = styled.p`
  max-width: 800px;
  margin: 2.5rem auto;
  font-weight: 300;
  font-size: 16pt;
  line-height: 1.5;

  @media (max-width: 768px) {
    font-size: 14pt;
  }
`;

const Dash = styled.div`
  padding-top: 2rem;
  border-bottom: solid 1.5px #dddddd;
`;

const StatementWrapper = styled.div`
  max-width: 800px;
  margin: 2.5rem auto;
`;

const Statement = styled.p`
  padding: 1.25rem 0;
  font-weight: 300;
  font-size: 16pt;
  line-height: 1.5;
  text-align: center;

  @media (max-width: 768px) {
    font-size: 14pt;
    text-align: left;
  }
`;

const CardGrid = styled.div `
  padding: 1.25rem 0;
  margin: 1.25rem auto;
`;

const CardWrapper = styled.div `
  margin: 1.25rem auto;
  break-inside: avoid;
  // position: relative;
`;

const SecondImage = styled(Img)`
  // bottom: 8vh;
  left: 1.25rem;
  right: 1.25rem;
  // top: 50vh;
`;

class IndexPage extends React.Component {
  constructor() {
    super(); 
  }

  render() {
    return (
    <Layout>
      <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
      {/* <Header siteTitle={"Team Sodo"} /> */}
      <HeroTitle  />
      <Image 
      fluid={this.props.data.hero.childImageSharp.fluid} 
      style = {{ position: `fixed`}}
      />
      <Container>
        <Content>
          <About>
            The Regional Alliance for Resilient and Equitable Transportation (RARET) covers King, Snohomish, and Pierce Counties. RARET works with special needs transportation providers (think paratransit vehicles) to find ways to supplement the system in event of a major emergency, such as an earthquake, fire, or flooding.
          </About>
          <Dash/>
          <StatementWrapper>
            <h6 style={{textAlign: "center", color: "#767676"}}>WHAT WE'RE BUILDING</h6>
            <Statement>We're creating and piloting a central repository of road conditions to provide a one-stop-shop of transportation conditions and situational awareness in the central Puget Sound region   </Statement>
          </StatementWrapper>
          {/* <Dash /> */}
          <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
          </div>
          {/* <Link to="/page-2/">Go to page 2</Link> */}
          <CardGrid>
            <CardWrapper>
              <Img fluid={this.props.data.freeway.childImageSharp.fluid}></Img>
            </CardWrapper>
            <CardWrapper>
              <Img fluid={this.props.data.viaduct.childImageSharp.fluid}></Img>
            </CardWrapper>
          </CardGrid>
          <Team robin={this.props.data.robin} christian={this.props.data.christian} john={this.props.data.john}/>
          <Sponsors ischool={this.props.data.ischool} hopelink={this.props.data.hopelink} />
        </Content>
        <Contact />
      </Container>
  </Layout>
    )
  }
}

export default IndexPage;

export const query = graphql`
  {
    hero:file(relativePath: {eq: "images/hero.jpg"}) {
      childImageSharp {
        fluid (maxWidth: 2400) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    freeway:file(relativePath: {eq: "images/jose-rizal.jpg"}) {
      childImageSharp {
        fluid (maxWidth: 2400, maxHeight: 1600) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    viaduct:file(relativePath: {eq: "images/viaduct.jpg"}) {
      childImageSharp {
        fluid (maxWidth: 2400) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    robin:file(relativePath: {eq: "images/robin.jpg"}) {
      childImageSharp {
        fixed {
          ...GatsbyImageSharpFixed
        }
      }
    }
    christian:file(relativePath: {eq: "images/christian.jpg"}) {
      childImageSharp {
        fixed (width: 200, height: 200) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    john:file(relativePath: {eq: "images/john.jpg"}) {
      childImageSharp {
        fixed (width: 200, height: 200) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    ischool:file(relativePath: {eq: "images/iSchoolPrimary_RGB_Purple.png"}) {
      childImageSharp {
        fixed {
          ...GatsbyImageSharpFixed
        }
      }
    }
    hopelink:file(relativePath: {eq: "images/hopelink.png"}) {
      childImageSharp {
        fixed (width: 300) {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
`;
                                                                              