import Image from "next/image";
import Link from "next/link";

export default function Home({ data }) {
  return (
    <div className="home_body">
      {data.map((elem) => (
        <Link className="card" key={elem.id} href={`/events/${elem.id}`}>
          <div className="image">
            <Image src={elem.image} alt={elem.title} width={400} height={300} />
          </div>
          <div className="content">
            <h2>{elem.title}</h2>
            <p>{elem.description}</p>
          </div>
        </Link>
      ))}
    </div>
  );
}
