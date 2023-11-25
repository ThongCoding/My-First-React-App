import NavBar from "../components/NavBar";
import "./styles.css";

export default function Home() {
  return (
    <>
      <NavBar />
      <h1 className="heading">Thong Nguyen's First React Page</h1>
      <p className="move para">
        This is one of the Yotube videos that help me pass CS 3010 with an A! You should definitely check this channel out!
      </p>
      <iframe
        className="move"
        width="560"
        height="315"
        src="https://www.youtube.com/embed/BAwOGkchq7w?si=a2o_4i590I13xVdI"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen
      ></iframe>

      <footer>
        <p>Copyright © 2023 Thong Nguyen</p>
      </footer>
    </>
  );
}