import React from "react";
import './App.css';
import githubicon from '../src/github.png';
import linkedinicon from '../src/linkedinicon.png'
import bookmanager from '../src/library.jpg'
import yahtzee from '../src/yahtzee_image.jpg'


class App extends React.Component {
  state = {
      isLoading: true,
      info: [
        {
          icon: githubicon,
          url: "https://github.com/harryseo1992",
          class: "icon",
          objectID: "github"
        },
        {
          icon: linkedinicon ,
          url: "https://www.linkedin.com/in/jong-hwan-seo-579238202/",
          class: "linkedinicon",
          objectID: "linkedin"
        }
      ]
      
  };

  authenticate(){
    return new Promise(resolve => setTimeout(resolve, 2000)) // 2 seconds
  }

  componentDidMount(){
    var isLoading = this.state;
    setTimeout(() => {
        this.setState({ isLoading: false })
    }, 3000);
  }

  render() {
    const { isLoading, info } = this.state;
    return (
      <section className="container">
        {isLoading ? (
          <div className="lds-ring"><div></div><div></div><div></div><div></div></div>
        ) : (
          <div className="content">
            <div className="Iam">
              <p>I am</p>
              <b>
                <div className="innerIam">
                  Harry.<br /> 
                  an aspiring developer.<br />
                  a foodie.<br />
                  a discworld lover.<br />
                  a gamer.
                </div>
              </b>
            </div>
            <article className="about">
              <h4>About me</h4>
              <p>My name is Jong Hwan Seo but my English name is Harry.</p>
            </article>
            <div className="projects">
              <h4>My projects</h4>
              <div class="grid">
                <figure class="effect-sadie">
                  <img src={ bookmanager } alt="Book Manager"/>
                  <figcaption>
                    <h2>Book <span>Manager</span></h2>
                    <a href="http://www.google.com/">View more</a>
                  </figcaption>			
                </figure>
              </div>
              <div class="grid">
                <figure class="effect-sadie">
                  <img src={ yahtzee } alt="Yahtzee"/>
                  <figcaption>
                    <h2>Yahtzee <span>in Python</span></h2>
                    <a href="http://www.google.com/">View more</a>
                  </figcaption>			
                </figure>
              </div>
            </div>
            <div className="contact">
              <h4>Contact Info</h4>
              <List list={ info }/>
            </div>
            <Grido />
          </div>
        )}
      </section>
    );
  }
};

function Grido() {
  return (
    <div class="grid">
      <figure class="effect-sadie">
        <img src="https://tympanus.net/Development/HoverEffectIdeas/img/2.jpg" alt="img02"/>
        <figcaption>
          <h2>Holy <span>Sadie</span></h2>
            <p>Sadie never took her eyes off me.</p>
            <a href="http://www.google.com/">View more</a>
        </figcaption>			
      </figure>
    </div>
  );
}

const List = props =>
  props.list.map(info => (
      <a href={ info.url }>
        <img src={ info.icon } className={info.class} alt={info.objectID}/>
      </a>
  ));

export default App;

{/* <div className="contact">
              <h4>Contact Info</h4>
              <a href="https://github.com/harryseo1992">
                <img src={ githubicon } className="icon" alt="github"/>
              </a>
              <a href="https://www.linkedin.com/in/jong-hwan-seo-579238202/">
                <img src={ linkedinicon } className="linkedinicon" alt="linkedin" />
              </a>
            </div> */}