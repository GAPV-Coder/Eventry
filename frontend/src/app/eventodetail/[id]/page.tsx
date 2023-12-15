import Image from "next/image";
import { TicketInfo } from "@/components/eventos/eventosDetail/ticketInfo";
import { EventInfo } from "@/components/eventos/eventosDetail/EventInfo";
import { OtherEventsList } from "@/components/eventos/eventosDetail/OtherEventsList";
import { useParams } from "next/navigation";

async function getData() {
  const res = await fetch(
    "https://s12-01-m-node-react.onrender.com/api/v1/events/"
  );
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

async function getSingleEvent(id: string) {
  const res = await fetch(
    `https://s12-01-m-node-react.onrender.com/api/v1/events/${id}`
  );
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

const EventDetail = async ({ params }: any) => {
  const events = await getData();
  const { id } = params;
  const singleEvent = await getSingleEvent(id);
  console.log(singleEvent);

  return (
    <main>
      <Image
        src={"/images/eventoheader.png"}
        alt="event header image"
        height={333}
        width={1280}
        className="object-cover"
      />
      <section className="p-10 flex justify-between w-full">
        <EventInfo singleEvent={singleEvent} />
        <TicketInfo singleEvent={singleEvent} />
      </section>
      <OtherEventsList events={events} />
    </main>
  );
};

export default EventDetail;
