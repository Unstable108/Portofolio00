import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi, I am <span className="purple">Debasish Das </span>
            from <span className="purple"> Assam, India.</span>
            <br />
            I am currently finding opportunities as Software Developer.
            <br />
            I have graduted from (IIIT Allahabad) in Information
            Technology-Business Informatics in 2023.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Reading Manga
            </li>
            <li className="about-activity">
              <ImPointRight /> Watching Animes
            </li>
            <li className="about-activity">
              <ImPointRight /> Havig fun time with Friends
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Learning Tech to Contibrute!"{" "}
          </p>
          <footer className="blockquote-footer">Debasish</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
