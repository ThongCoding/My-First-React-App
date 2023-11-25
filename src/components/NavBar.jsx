import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <>
      <div className="flex_container">
        <Link className="link" to={"/"}>
          Home
        </Link>
        |
        <Link className="link" to={"/tic_tac_toe"}>
          Tic-Tac-Toe
        </Link>
        |
        <Link className="link" to={"/data_api"}>
          Random Quote Generator
        </Link>
      </div>
      <hr />
    </>
  );
}