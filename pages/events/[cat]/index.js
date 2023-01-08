import Image from "next/image";
import Link from "next/link";

export default function EventsPerCity({ data, pageName }) {
  return (
    <div>
      <h1>Events in {pageName}</h1>
      <div>
        {data.map((elem) => (
          <Link key={elem.id} href={`/events/${elem.city}/${elem.id}`} passHref>
            <Image width={300} height={300} alt={elem.title} src={elem.image} />
            <h2>{elem.title}</h2>
            <p>{elem.description}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}

export async function getStaticPaths() {
  const { events_categories } = await import("/data/data.json");
  const allPaths = events_categories.map((elem) => {
    return {
      params: {
        cat: elem.id.toString(),
      },
    };
  });
  return {
    paths: allPaths,
    fallback: false,
  };
}

export async function getStaticProps(context) {
  const id = context?.params.cat;
  const { allEvents } = await import("/data/data.json");
  const data = allEvents.filter((elem) => elem.city === id);
  return {
    props: {
      data,
      pageName: id,
    },
  };
}
