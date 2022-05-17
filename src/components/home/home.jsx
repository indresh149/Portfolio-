import "./home.css";
import img from "../props/img2.jpg";
import Buttons from "../button/button";
import { BsMouse } from "react-icons/bs";

function Home() {
  return (
    <div id="home" className="container home-container">
      <div className="logo">
        <div className="hover-show">
          <span className="circle"></span>
          <span className="circle"></span>
          <span className="circle"></span>
          <span className="circle"></span>
          <span className="circle"></span>
          <span className="circle"></span>
          <span className="circle"></span>
          <span className="circle"></span>
        </div>

        <img src={img} alt="" />
      </div>

      <a href="#footer" className="scroll-down">
        <hr />
        <h5>scroll down</h5>
        <BsMouse className="scroll" />
        <hr />
      </a>

      <h2>
        <span>About Me</span> <br />
        <p>
          • Undergraduate student at Galgotias University, pursuing a bachelor's
          degree in Computer Science and Engineering. 
          • Active Competitive
          Programmer (C++). 
          • Skilled in Data Structures and Algorithms, and CS
          Fundamentals. 
          • Want to establish my career in Software Engineering
          and work with like-minded people.
        </p>
      </h2>

      <Buttons />
    </div>
  );
}

export default Home;
