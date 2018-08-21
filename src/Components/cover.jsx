var React = require('react');
import styled from 'styled-components';
import $ from 'jquery';

const ResourcesLink = styled.a`
  position: absolute;
  z-index: 6;
  text-transform: uppercase;
  background: #fff;
  right: 0;
  top: 0;
  padding: 5px;
  width: 125px;
  text-align: center;
  color: #222;
`;
const positions = {
  desktop: {
    initial: {
      titles: 0,
      subtitles: 0,
      h3: '300px',
      p: '470px'
    },
    change: {
      titles: '280px',
      subtitles: '290px',
      h3: '100px',
      p: '460px'
    }
  },
  mobile: {
    initial: {
      h3: '210px',
      p: '410px'
    }
  }
};
const Container = styled.div`
  border: 1px solid #333;
  background: #333;
  height: 897px;
  position: relative;
  img {
    opacity: 0;
    position: absolute;
    transition: opacity 1s;
    top: 0;
  }
  .titles, .subtitles {
    top: ${positions.desktop.titles};
    position: absolute;
    transition: margin-top .5s, color .5s;
    width: 100%;
    z-index: 5;
  }
  .subtitles {
    z-index: 3;
  }
  h1, h2 {
    margin-top: 10px;
    color: white;
    text-align: center;
    text-shadow: 1px 1px 2px black;
  }
  h3 {
    position: absolute;
    top: ${positions.desktop.initial.h3};
    transiton: opacity 1s;
  }
  p {
    position: absolute;
    top: ${positions.desktop.initial.p};
    font-size: 1.2em;
    line-height: 1.2em;
  }
  @media (max-width: 750px){
    h1.title {
      margin-top: 100px;
    }
    h2.title {
      line-height: 0.9em;
    }
    h3 {
      top: ${positions.mobile.initial.h3};
      color: #dcd28a;
      opacity: 0;
      font-size: 1.4em;
    }
    p {
      top: ${positions.mobile.initial.p};
      font-size: 1.1em;
      line-height: 1.1em;
    }
  }
`;
class Cover extends React.Component {
  constructor(props) {
    super(props);
  }
  _parallax(ev) {
    const pos = $(window).scrollTop();
    if (pos > 150) {
      $('#cover-container img').css('opacity', .8);
    } else if (pos > 70) {
      $('#cover-container img').css('opacity', .1);
    }
    if (pos > 50) {
      $('.titles').css('margin-top', positions.desktop.change.titles);
      $('.subtitles').css('margin-top', positions.desktop.change.subtitles);
      $('.subtitles').css('color', '#1a1a1a');
      $('.subtitles h3').css('margin-top', positions.desktop.change.h3);
      $('.subtitles h3').css('opacity', 1);
    } else {
      $('.titles').css('margin-top', positions.desktop.initial.titles);
      $('.subtitles').css('margin-top', positions.desktop.initial.subtitles);
    }
  }
  componentDidMount() {
    window.addEventListener('scroll', this._parallax);
  }
  render () {
    const { title, subtitle } = this.props;
    return (
      <div>
        <ResourcesLink href="resources.html">Resources</ResourcesLink>
        <Container id="cover-container">
          <div className="titles">
            <h1 className="title">{title}</h1>
            <h2 className="title">{subtitle}</h2>
          </div>
          <img src="src/bg/cover.jpg" />
          <div className="subtitles">
            <div className="col-sm-10 col-sm-offset-1 col-lg-8 col-lg-offset-2 top-space bottom-space">
              <h3>A chemical spill poisoned the drinking water of approximately 300,000 West Virginians on January 9th, 2014...</h3>
              <p>Many were without potable water for weeks – for some it was months. On January 9th, and still today, drinking water in the 9 county area was coming not from a municipal source, as with most of the United States, but a private corporation – West Virginia American Water. Today, very little has changed, physically or legally, in this West Virginian water system.</p>
            </div>
          </div>
          <div className="spacer"></div>
        </Container>
      </div>
    );
  }
}



export default Cover;
