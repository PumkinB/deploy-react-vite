import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(1);
  const [article, setArticle] = useState("");

  function nextPage() {
    setCount(count + 1);
  }

  useEffect(() => {
    fetch(`https://dummyjson.com/posts/${count}`)
      .then((res) => res.json())
      .then((data) => setArticle(data));
  }, [count]);

  return (
    <>
      <main>
        <h3>{count}</h3>
        <button onClick={nextPage}>Next Page</button>
        <article>
          <h1>{article.title}</h1>
          <p>{article.body}</p>
        </article>
      </main>
    </>
  );
}

export default App;
