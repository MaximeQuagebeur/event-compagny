import Image from "next/image";
import Link from "next/link";

export default function Events({ data }) {
  return (
    <div>
      <h1>Évènements</h1>
      <div>
        {data.map((elem) => (
          <Link key={elem.id} href={`/events/${elem.id}`}>
            <Image src={elem.image} alt={elem.title} width={200} height={200} />
            <h2>{elem.title}</h2>
          </Link>
        ))}
      </div>
    </div>
  );
}

export async function getStaticProps() {
  const { events_categories } = await import("../../data/data.json");

  return {
    props: {
      data: events_categories,
    },
  };
}
