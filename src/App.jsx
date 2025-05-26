import blogPosts from "./data/blogPosts.js";

export default function App() {
  return (
    <>
      <div className="container text-center my-3">
        {/* LISTA DI TITOLI */}
        {blogPosts.map(function (currentTitle, index) {
          return <h3 key={index}>{currentTitle}</h3>;
        })}
      </div>
    </>
  );
}
