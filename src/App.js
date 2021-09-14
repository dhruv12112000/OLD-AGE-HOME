import "./App.css";
import logo from "./logo.svg";
import { About } from "./About";
import "bootstrap/dist/css/bootstrap.min.css";
import * as ReactBootStrap from "react-bootstrap";
import img1 from "./img1.jpg";
import img2 from "./img2.jpg";
import img3 from "./img3.jpg";
import img4 from "./L.png";
import img6 from "./f.png";
import img7 from "./img7.png";
import img8 from "./img8.png";
import img9 from "./img9.png";
import i1 from "./i1.jpg";
import i3 from "./i3.jpg";
import i2 from "./i2.jpg";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Link } from "react-router-dom";

let jumbotron = {
  padding: "4rem 2rem",
  marginBottom: "2rem",
  backgroundColor: "var(--bs-light)",
  borderRadius: ".3rem",
};

let wow1 = {
  marginLeft: "1250px",
};
let style = {
  Width: "100px",
  Height: "100px",
};

let light = {
  color: "white",
};
let size = {
  width: "50px",
  height: "50px",
  padding: "5px",
};

let margin = {
  marginTop: "20px",
};

let margin1 = {
  marginLeft: "20px",
};

let margin2 = {
  margin: "10px",
};

let wow = {
  paddingLeft: "20px",
};

let hey = {
  padding: "20px",
};

let hey1 = {
  paddingRight: "10px",
  paddingLeft: "10px",
};

let color = {
  
 backgroundImage: "radial-gradient(circle, #9dfff2, #7affd5, #72fca8, #86f66e, #a8eb12)",
 
};
function App() {
  return (
    <>
      <Router>
        <div style={color} className="App">
          <ReactBootStrap.Navbar bg="dark" variant="dark" expand="lg">
            <ReactBootStrap.Navbar.Brand as={Link} style={wow} to="/">
              OLD AGE HOME
            </ReactBootStrap.Navbar.Brand>
            <ReactBootStrap.Navbar.Toggle aria-controls="navbarScroll" />
            <ReactBootStrap.Navbar.Collapse id="navbarScroll" className="justify-content-end me-auto" style={{ paddingRight: "100px" }}>
              <ReactBootStrap.Nav
                className="mr-auto my-2 my-lg-0"
                style={{ maxHeight: "100px" }}
                navbarScroll
              >
                <ReactBootStrap.Nav.Link as={Link} style={wow} to="/about">
                  About
                </ReactBootStrap.Nav.Link>
              </ReactBootStrap.Nav>
              <ReactBootStrap.Button
                style={margin1}
                className="float-right"
                href="https://rzp.io/l/t3XOeyDuHk"
                variant="outline-success"
              >
                Donate
              </ReactBootStrap.Button>
            </ReactBootStrap.Navbar.Collapse>
          </ReactBootStrap.Navbar>
          <Switch>
            <Route exact path="/">
              {
                <>
                  <div>
                    <ReactBootStrap.Carousel>
                      <ReactBootStrap.Carousel.Item interval={1000}>
                        <img
                          style={style}
                          className="d-block w-100"
                          src={img1}
                          alt="First slide"
                        />
                        <ReactBootStrap.Carousel.Caption>
                          <h3>Complete Elder Nursing Care</h3>
                          
                        </ReactBootStrap.Carousel.Caption>
                      </ReactBootStrap.Carousel.Item>
                      <ReactBootStrap.Carousel.Item interval={500}>
                        <img
                          style={style}
                          className="d-block w-100"
                          src={img2}
                          alt="Second slide"
                        />
                        <ReactBootStrap.Carousel.Caption>
                          <h3>Retirement Homes for Elders</h3>
                         
                        </ReactBootStrap.Carousel.Caption>
                      </ReactBootStrap.Carousel.Item>
                      <ReactBootStrap.Carousel.Item>
                        <img
                          style={style}
                          className="d-block w-100"
                          src={img3}
                          alt="Third slide"
                        />
                        <ReactBootStrap.Carousel.Caption>
                          <h3>Hospice & Palliative Care</h3>
                          
                        </ReactBootStrap.Carousel.Caption>
                      </ReactBootStrap.Carousel.Item>
                    </ReactBootStrap.Carousel>
                  </div>

                  <div style={jumbotron} bg="light">
                    <h1 className="display-4">Our Vision</h1>
                  
                    <p>We work day and night to provide the best in class retirement homes, nursing care facilities and  assisted living to the elders of the society.We know and believe that it is our duty to care for our elders responsibly, to treat them with respect and to provide them with the highest level of care possible.</p>
                    <hr className="my-4" />.
                    <a className="btn btn-success btn-lg" href="https://rzp.io/l/t3XOeyDuHk" role="button">Donate</a>
                  </div>
                  

                  <ReactBootStrap.CardGroup style={hey}>
                    <ReactBootStrap.Card style={(hey, margin2)}>
                      <ReactBootStrap.Card.Img variant="top" src={i3} />
                      <ReactBootStrap.Card.Body>
                        <ReactBootStrap.Card.Title>
                        Assisted Living
                        </ReactBootStrap.Card.Title>
                        <ReactBootStrap.Card.Text>
                        For elders with medical conditions who find difficulty in living independently.
                        </ReactBootStrap.Card.Text>
                        <ReactBootStrap.Button
                          href="https://socialjusticehry.gov.in/old-age-homes/"
                          variant="primary"
                        >
                          Visit
                        </ReactBootStrap.Button>
                      </ReactBootStrap.Card.Body>
                    </ReactBootStrap.Card>

                    <ReactBootStrap.Card style={(hey, margin2)}>
                      <ReactBootStrap.Card.Img variant="top" src={i1} />
                      <ReactBootStrap.Card.Body>
                        <ReactBootStrap.Card.Title>
                        Home Healthcare
                        
                        </ReactBootStrap.Card.Title>
                        <ReactBootStrap.Card.Text>
                        For seniors with special needs who can manage at home with professional support from caregivers such as nurses, aides, or therapists.
                        </ReactBootStrap.Card.Text>
                        <ReactBootStrap.Button
                          href="https://socialjusticehry.gov.in/old-age-homes/"
                          variant="primary"
                        >
                          Visit
                        </ReactBootStrap.Button>
                      </ReactBootStrap.Card.Body>
                    </ReactBootStrap.Card>

                    <ReactBootStrap.Card style={(hey, margin2)}>
                      <ReactBootStrap.Card.Img variant="top" src={i2} />
                      <ReactBootStrap.Card.Body>
                        <ReactBootStrap.Card.Title>
                        Independent Living
                        </ReactBootStrap.Card.Title>
                        <ReactBootStrap.Card.Text>
                        For elders without any medical conditions, who desire the conveniences of community life, a hassle-free luxurious living.
                        </ReactBootStrap.Card.Text>
                        <ReactBootStrap.Button
                          variant="primary"
                          href="https://socialjusticehry.gov.in/old-age-homes/"
                        >
                          Visit
                        </ReactBootStrap.Button>
                      </ReactBootStrap.Card.Body>
                    </ReactBootStrap.Card>
                  </ReactBootStrap.CardGroup>


                  <div className="text-center" style={{ backgroundColor: "#fff", padding: "50px", }}>
                    <h2>Contact Us</h2>
                    <div style={margin}>
                      <a href="https://www.linkedin.com/signup">
                        <img style={size} src={img4} />
                      </a>
                      <a style={size} href="https://www.facebook.com/">
                        <img style={size} src={img7} />
                      </a>
                      <a href="https://twitter.com/?lang=en">
                        <img style={size} src={img8} />
                      </a>
                      <a href="https://www.youtube.com/">
                        <img style={size} src={img9} />
                      </a>
                    </div>
                  </div>

                </>
              }
            </Route>
            <Route exact path="/about">
              <About />
            </Route>
          </Switch>

          <footer className="bg-dark">
            <div className="container-fluid padding">
              <div className="row text-center">
                <div className="col-md-6">
                  <hr className="light" style={light} />
                  <h5 style={light}>Contact Us</h5>
                  <hr className="light" style={light} />
                  <p style={light}>(+91) 9837463782</p>
                  <p style={light}>abc123@gmail.com</p>
                </div>
                <div className="col-md-6">
                  <hr className="light" style={light} />
                  <h5 style={light}>About</h5>
                  <hr className="light" style={light} />
                  <a href="https://pensionersportal.gov.in/SeniorCitizenCorner.aspx">
                    <p style={light}>Links</p>
                  </a>
                  <a href="https://socialwelfare.delhigovt.nic.in/content/old-age-homes">
                    <p style={light}>Other Links</p>
                  </a>
                </div>
                <div className="col-12">
                  <hr className="light-100" style={light} />
                  <h5 style={light}>&copy; OLD AGE HOME</h5>
                  <h6 style={light}>Developer Contact</h6>
                  <a
                    style={hey1}
                    href="https://www.linkedin.com/in/dhruv-vashist-501a1211a/"
                  >
                    Linkedin
                  </a>
                  <a style={hey1} href="https://github.com/dhruv12112000">
                    Github
                  </a>
                </div>
              </div>
            </div>
          </footer>
        </div>
      </Router>
    </>
  );
}

export default App;
