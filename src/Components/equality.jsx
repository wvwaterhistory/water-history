import React from 'react';
import MediaLink from './mediaLink.jsx';

var EqualitySection = React.createClass({
  render: function () {
    return (
      <div className="container-fluid" id="equality">
        <section id="exposureMap" className="paper-bg"></section>
        <div className="row transition-image equality-bg center">
            <h1>Equality</h1>
        </div>
        <div className="row article">
          <div className="col-sm-10 col-sm-offset-1 top-space">
            <h4>People in poverty, particularly African Americans, and particularly people in rural areas, unequally faced exposure to the chemical spill during the 2014 water crisis.</h4>
            <p>The 2014 water crisis did indiscriminately pollute hundreds of thousands of people’s drinking water. However, the way people were able to cope with that crisis was determined by their economic and geographic position. This was because of the inability of people in poverty and in rural areas to drive distances to pick up water from distribution points. Elderly people also were without effective access to clean water, while effective water distribution remained entirely inadequate for close to a month, some estimate.</p>
            <div className="row">
              <div className="col-sm-4">
                <h5 className="subheading">Poverty</h5>
                <blockquote className="bq0">
                  <p>“What happened in this community? You can just see how being poor affects you when there is a crisis. The initial places for the water distribution were such that if you didn’t have transportation it would be hard for you to get water because you could only carry it so many blocks. We believe that many people in this community probably did use the water when they were advised not to use it, because they just could not get enough water.”</p>
                  <footer>Reverend Watts, Grace Bible Church, West Charleston, WV</footer>
                </blockquote>
                <div className="spacer"></div>
                <MediaLink onClick={this.props.showMedia.bind(null, "audio", 6)} mediaTitle="Being Poor During A Crisis" icon="watts" />
              </div>
              <div className="col-sm-4">
                <h5 className="subheading">Race and Class</h5>
                <blockquote className="bq0">
                  <p>“I think it’s important when you break down who it affected, and how it affected them, that race and class are a part of this dialog. This crisis affected the majority of the African American community in the entire state – yes, the majority of black folks in WV were affected by this. Then if you look at it in another conversation, this is the second time that West Virginia American Water has displaced African Americans. When they built their treatment plant - that was the thriving African-American neighborhood.”</p>
                  <p>“It’s back to this caste system [I was talking about] – who is disposable and who is not? It affected everybody, right, but which communities did it affect to a greater degree?”</p>
                  <footer>Crystal Good, Poet, Charleston, WV</footer>
                </blockquote>
                <MediaLink onClick={this.props.showMedia.bind(null, "audio", 5)} mediaTitle="Race and Class Matter" icon="good" />
              </div>
              <div className="col-sm-4">
                <h5 className="subheading">Rural Communities</h5>
                <blockquote className="bq0">
                  <p>"We had just started to relax, just gotten used to the idea that maybe it was ok to drink this [West Virginia American] water. And maybe the chlorine was ok, and the fluoride, and the other stuff they put in it. But it’s better than what we had, or we thought it was. And when that [spill] happened, a friend calls me, and she’s like: “We’ll just do what we done before – we’ll take short quick showers, and buy bottled water to drink with, and to cook with.” She said, “We’ve been through this, we already know what to do. The people in Charleston’s the ones that’s gonna have a hard time. We’ve already learned to cope with it.” So we did.</p>
                  <footer>Maria Lambert, Prenter, WV</footer>
                </blockquote>
                <MediaLink onClick={this.props.showMedia.bind(null, "audio", 7)} mediaTitle="Bad Well Water, Bad City Water" icon="DJ" />
              </div>
            </div>
            <div className="col-sm-4 top-space">
              <div className="center">
                <div className="media-link" style={{backgroundImage: 'url(./src/img/letter_circle.png)'}} >
                  <a href="http://storiesfromsouthcentralwv.com" target="_blank"><img src="./src/img/plus-sign.png"/></a>
                </div>
                <h4 className="map-title">The Water Crisis in the Jail</h4>
              </div>
            </div>
            <div className="col-sm-8">
              <blockquote className="bq-header top-space">
                <h4>“Why are the people in Charleston given free bottled water and we are not – I just thought about that. Just because we are convicted of a crime doesn’t mean that we rate different health standards than the general public.”</h4>
                <footer>Anonymous, Prisoner at South Central Regional Jail</footer>
              </blockquote>
            </div>
           </div>
        </div>
      </div>
    )
  }
});

export default EqualitySection;
