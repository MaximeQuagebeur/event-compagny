import Image from "next/image";
import Link from "next/link";

const CatEvent = ({ data, pageName }) => {
  return (
    <div className="cat_events">
      <h1>Events in {pageName}</h1>
      <div className="content">
        {data.map((elem) => (
          <Link
            className="card"
            key={elem.id}
            href={`/events/${elem.city}/${elem.id}`}
            passHref
          >
            <Image width={300} height={300} alt={elem.title} src={elem.image} />
            <h2>{elem.title}</h2>
            <p>{elem.description}</p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default CatEvent;
