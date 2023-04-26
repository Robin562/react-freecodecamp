import { Link, useParams } from "react-router-dom";
import { useGlobalContext } from "./context";

const Description = () => {
  const { data } = useGlobalContext();
  const { id } = useParams();
  const currentPost = data.find((item) => item.id.toString() === id);
  const { webformatURL, views, downloads } = currentPost;
  return (
    <div>
      <Link
        to="/"
        style={{
          margin: "auto",
          background: "rebeccapurple",
          fontSize: "1.5rem",
          padding: "0.5rem",
          textDecoration: "none",
        }}
      >
        Home
      </Link>
      <section className="description-container">
        <img src={webformatURL} style={{ border: "4px solid grey" }} />
        <div className="details-container">
          <p>
            <span className="label"> Views :</span>
            <span className="values">{views}</span>
          </p>
          <p>
            <span className="label"> Downloads :</span>
            <span className="values">{downloads}</span>
          </p>
        </div>
      </section>
    </div>
  );
};

export default Description;
