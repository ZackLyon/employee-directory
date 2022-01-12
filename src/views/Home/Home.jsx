import { Link } from 'react-router-dom';
import style from './Home.css';

export default function Home() {
  return (
    <div className={style.homeView}>
      <h1>
        Acme has been a leading provider of cartoon mischief for over 50 years
      </h1>
      <article>
        <p>
          Crowdsource network effects accelerator. Supply chain research &
          development startup technology crowdfunding. Success venture
          deployment hypotheses technology disruptive MVP infrastructure.
          Rockstar vesting period churn rate network effects venture handshake
          bootstrapping influencer entrepreneur infrastructure user experience
          mass market. Learning curve advisor business-to-business growth
          hacking. Marketing return on investment partner network founders
          release conversion.
        </p>
        <p>
          Creative ownership return on investment social proof scrum project
          iPad direct mailing validation early adopters churn rate. Long tail
          mass market traction non-disclosure agreement hypotheses agile
          development burn rate technology validation gen-z A/B testing. Partner
          network leverage MVP first mover advantage agile development
          partnership investor paradigm shift. Ramen venture channels marketing
          gen-z leverage funding equity stealth. Graphical user interface
          technology incubator responsive web design seed round startup release
          equity funding user experience twitter social proof. Pitch series A
          financing holy grail virality iPhone early adopters customer
          infrastructure non-disclosure agreement stock supply chain.
        </p>
      </article>

      <div className={style.buttonContainer}>
        <Link to="/register">
          <button>Sign Up</button>
        </Link>
        <Link to="/login">
          <button>Log In</button>
        </Link>
      </div>
    </div>
  );
}
