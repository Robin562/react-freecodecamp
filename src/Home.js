import { Link } from "react-router-dom";
import { useGlobalContext } from "./context";

const Home = () => {
  const { data, search, setSearch } = useGlobalContext();
  return (
    <main>
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
        placeholder="Search"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <section
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 250px)",
          gap: "1rem",
          margin: "1rem auto",
        }}
      >
        {data.map((item) => {
          const { webformatURL, id } = item;
          return (
            <div
              key={id}
              style={{
                display: "flex",
                flexDirection: "column",
                height: "200px",
                alignItems: "center",
              }}
            >
              <img
                src={webformatURL}
                style={{ width: "100%", height: "100%" }}
              />
              <Link to={`description/${id}`}>
                <button>Details</button>
              </Link>
            </div>
          );
        })}
      </section>
    </main>
  );
};

export default Home;
