import { Link } from "react-router-dom";
import { useGlobalContext } from "./context";

const Home = () => {
  const { data, search, setSearch } = useGlobalContext();
  return (
    <main style={{ margin: "auto" }}>
      <header
        style={{
          display: "flex",
          width: "60%",
          justifyContent: "space-between",
          margin: "auto",
          boxShadow: "0px 5px 10px 2px black",
          padding: "1rem",
        }}
      >
        <h1>Images from Pixabay</h1>
        <nav>
          <Link to="about">About</Link>
        </nav>
      </header>
      <input
        placeholder="Search Images"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        style={{
          margin: "1rem 0 0.5rem 50%",
          background: "white",
          transform: "translateX(-50%)",
          color: "black",
          border: "none",
          padding: "0.5rem",
        }}
      />
      <section
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 320px)",
          gap: "1rem",
          justifyContent: "center",
        }}
      >
        {data.map((item) => {
          const { webformatURL, id } = item;
          return (
            <div key={id} className="picture">
              <img
                src={webformatURL}
                style={{ width: "100%", height: "100%" }}
              />
              <Link to={`description/${id}`}>
                <button className="btn">Details</button>
              </Link>
            </div>
          );
        })}
      </section>
    </main>
  );
};

export default Home;
