import NavBar from "../components/NavBar";
import "./styles.css";

export default function Home() {
  return (
    <>
      <NavBar />
      <h1 className="heading">Welcome to my first React page!</h1>
      <p className="move para">
        This is the link to a list of Yotube videos that help me pass CS 3010 with an A!
      </p>
      <iframe
        className="move"
        width="560"
        height="315"
        src="https://www.youtube.com/embed/videoseries?si=D3KJ11S5c3-mTS0W&amp"
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