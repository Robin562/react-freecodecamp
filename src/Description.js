import { Link, useParams } from "react-router-dom";
import { useGlobalContext } from "./context";

const Description = () => {
  const { data } = useGlobalContext();
  const { id } = useParams();
  const currentPost = data.find((item) => item.id.toString() === id);
  const { webformatURL, views, downloads } = currentPost;
  return (
    <div>
      <Link to="/">Home</Link>
      <section>
        <img src={webformatURL} />
        <p>Views: {views}</p>
        <p>Downloads: {downloads}</p>
      </section>
    </div>
  );
};

export default Description;
