import { useEffect, useState } from "react";
import NavBar from "../components/NavBar";
import "./styles.css";

export default function Data() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [numQuotes, setNumQuotes] = useState(1);
  const [quotes, setQuotes] = useState([]);

  // API Source: https://mixedanalytics.com/blog/list-actually-free-open-no-auth-needed-apis/
  useEffect(() => {
    fetch(`https://api.quotable.io/quotes/random?limit=${numQuotes}`)
      .then((res) => res.json())
      .then((json) => {
        if (numQuotes > 10) {
          alert("Maximum quotes allowed: 10");
        }
        setIsLoaded(true);
        console.log(json);
        setQuotes(json);
      });
  }, [numQuotes]);

  if (!isLoaded) {
    return <p>Loading...</p>;
  }
  return (
    <>
      <NavBar />
      <h1>Quotes Generator</h1>
      <form>
        <label htmlFor="quote" style={{ marginRight: "10px" }}>
          Number of quotes:
        </label>
        <input
          name="quote"
          type="number"
          max={50}
          style={{ marginRight: "10px" }}
          onChange={(e) => setNumQuotes(e.target.value)}
        />
      </form>
      <small>(Maximum 10 quotes)</small>
      <br />
      <ol>
        {quotes.map((quote) => (
          <>
            <li key={quote._id}>
              <q>
                <i>{quote.content}</i>
              </q>
              <span> - {quote.author}</span>
            </li>
            <br />
          </>
        ))}
      </ol>
    </>
  );
}