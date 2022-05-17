import "./members.css";

const Members = () => {
  return (
    <div id="members" className="container members-container">
      <h1 className="member-txt">Members</h1>
      <div className="member member-1">
        <div className="member-img"></div>
        <div className="member-info">
          <h1 className="name">Indresh</h1>
          <h3 className="position">Leader</h3>
          <h4 className="about">
          Undergraduate student at Galgotias University, pursuing a bachelor's
          degree in Computer Science and Engineering.Skilled in Data Structures and Algorithms, and CS
          Fundamentals. Want to establish my career in Software Engineering
          and work with like-minded people.
          </h4>
          <a href="#contact" className="contact-member">
            <span>contact</span>
          </a>
        </div>
      </div>

      <div className="member member-2">
        <div className="member-img"></div>
        <div className="member-info">
          <h1 className="name">Mohamed Ali Kohla</h1>
          <h3 className="position">Another Leader</h3>
          <h4 className="about">
            A Flutter Developer with a passion for learning and creating.Sophomore at the University 
            of California, Berkeley in the branch of Computer Science . Enriched with the skill of datastructures 
            and algorithms and very much familiar with the building blocks of the codes.
          </h4>
          <a href="#contact" className="contact-member">
            <span>contact</span>
          </a>
        </div>
      </div>


      <div className="member member-3">
        <div className="member-img"></div>
        <div className="member-info">
          <h1 className="name">Chitra Sarkar</h1>
          <h3 className="position">Another Leader Again</h3>
          <h4 className="about">
            A frontend Developer , undergrad student in Nit Raipur  in Computer Science Sector.
              Currently is a part of Hackerearth Hackthon. Familiar with the concept of algorithms and data structures, react 
              ,bootstrap, css , html , javascript.Love to create new things and learn new things.
          </h4>
          <a href="#contact" className="contact-member">
            <span>contact</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Members;
