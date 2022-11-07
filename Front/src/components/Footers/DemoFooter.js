
import React from "react";

// reactstrap components
import { Row, Container } from "reactstrap";

function DemoFooter() {
  return (
    <footer style={{backgroundColor:"#88672c", color:"white"}} className="footer">
      <Container>
        <Row>
          <nav className="footer-nav">
            <ul>
              <li>
                <a
                  target="_blank"
                  style={{color:"white"}}
                >
                  Licenses
                </a>
              </li>
            </ul>
          </nav>
          <div style={{color:"white"}} className="credits ml-auto">
            <span style={{color:"white"}} className="copyright">
              © {new Date().getFullYear()}, made with{" "}
              <i style={{color:"white"}} className="fa fa-heart heart" /> by Mariana Vidal
            </span>
          </div>
        </Row>
      </Container>
    </footer>
  );
}

export default DemoFooter;
