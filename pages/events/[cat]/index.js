import CatEvent from "../../../src/components/Events/CatEvent";

export default function EventsPerCity({ data, pageName }) {
  return <CatEvent data={data} pageName={pageName} />;
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
