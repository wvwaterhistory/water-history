var React = require('react');

const Footer = () => (
  <div className="container-fluid footer">
    <div className="row">
      <div className="col-sm-10 col-sm-offset-1 bottom-space">
        <div className="row top-space">
          <div className="col-sm-6">
            <p>This project was made possible with funding from the:</p>
            <p><strong>Judith Lee Stronach Baccalaureate Prize,<br/>Office of Undergraduate Research at the University of California, Berkeley</strong></p>
          </div>
          <div className="col-sm-6 portraits">
            <div className="row">
              <img src="./src/img/gabe_circle.png" width="55px"/>
              <p><strong>Gabe Schwartzman</strong><br/>
                  <span className="small">Author &amp; Researcher</span></p>
            </div>
            <div className="row">
              <img src="./src/img/alicia_circle.png" width="55px" />
              <p><a href="http://aliciakw.github.io" target="_blank"><strong>Alicia Willett</strong></a><br/>
                <span className="small">Web Development &amp; Graphics</span></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Footer;
