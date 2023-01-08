import Image from "next/image";
import Link from "next/link";

export default function Home({ data }) {
  return (
    <main>
      {data.map((elem) => (
        <Link key={elem.id} href={`/events/${elem.id}`}>
          <Image src={elem.image} alt={elem.title} width={200} height={200} />
          <h2>{elem.title}</h2>
          <p>{elem.description}</p>
        </Link>
      ))}
    </main>
  );
}
