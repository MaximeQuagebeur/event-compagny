import Image from "next/image";
import Link from "next/link";

const EventsPage = ({ data }) => (
  <div className="events_page">
    {data.map((elem) => (
      <Link className="card" key={elem.id} href={`/events/${elem.id}`}>
        <Image src={elem.image} alt={elem.title} width={500} height={500} />
        <h2>{elem.title}</h2>
      </Link>
    ))}
  </div>
);

export default EventsPage;
