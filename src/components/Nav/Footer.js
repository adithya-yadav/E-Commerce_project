import { Fragment } from "react";

const fbicons = require("../images/fb.png");
const spotifyIcon = require("../images/spotify.png");
const youtubeIcon = require("../images/youtube.png");

const Footer = () => {
  return (
    <Fragment>
      <div style={{
        marginTop:"10%"
      }}>
        <footer className="bg-info mt-5 p-5 d-flex justify-content-around">
          <div className="text-white h1 ms-5 mb-5">The Generis</div>

          <a href="https://www.youtube.com/">
            <img src={youtubeIcon} alt="youtube" height="40px" />
          </a>
          <a
            href="https://open.spotify.com/"
            className="bg-white h-25 d-inline-block"
          >
            <img src={spotifyIcon} alt="spotyfy" height="40px" width="40px" />
          </a>
          <a href="https://www.facebook.com/">
            <img src={fbicons} alt="facebook" height="40px" />
          </a>
        </footer>
      </div>
    </Fragment>
  );
};

export default Footer;
