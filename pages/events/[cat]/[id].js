import Image from "next/image";
import SingleEvent from "../../../src/components/Events/SingleEvent";

export default function Event({ data }) {
  return <SingleEvent data={data} />;
}

export async function getStaticPaths() {
  const { allEvents } = await import("/data/data.json");
  const allPaths = allEvents.map((elem) => {
    return {
      params: {
        cat: elem.city,
        id: elem.id,
      },
    };
  });
  return {
    paths: allPaths,
    fallback: false,
  };
}

export async function getStaticProps(context) {
  const { allEvents } = await import("/data/data.json");
  const id = context.params.id;
  const eventData = allEvents.find((elem) => elem.id === id);
  return {
    props: { data: eventData },
  };
}
