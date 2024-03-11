import { GREECE } from "@/src/data/greece";

const page = () => {
  console.log(GREECE);
  return (
    <div>
      <h1>World Description</h1>
      <p>
        This is the world description page. It should be a detailed description
        of the world.
      </p>
      <h2>Timeline</h2>
      <ul>
        {GREECE.map((item, index): any => (
          <>
            <li key={index} className="flex gap-4">
              <h3>{item.period}</h3>
              {item.start && <p>Start: {item.start}</p>}
              {item.end && <p>End: {item.end}</p>}
            </li>
            <li>
              {item?.key_events?.map((event, index): any => (
                <div key={index} className="flex gap-4">
                  <p>{event.year}</p>
                  <p>{event.event}</p>
                </div>
              ))}
            </li>
          </>
        ))}
      </ul>
    </div>
  );
};

export default page;
