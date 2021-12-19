import MeetUpList from "../components/meetsup/MeetUpList";
import { useState, useEffect } from "react";

const AllMeetup = () => {
  const [dataShow, setDataShow] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const fetchMeetups = async () => {
    const data = await fetch(
      "https://list-app-f2951-default-rtdb.firebaseio.com/meetups.json"
    );
    const res = await data.json();

    return res;
  };

  useEffect(() => {
    setIsLoading(true);

    const getMeetupServer = async () => {
      const data = await fetchMeetups();
      const meetups = [];

      for (const key in data) {
        const meetup = {
          id: key,
          ...data[key],
        };

        meetups.push(meetup);
      }

      setIsLoading(false);
      setDataShow(meetups);
    };

    getMeetupServer();
  }, []);

  if (isLoading) {
    return (
      <section>
        <p>Loading...</p>
      </section>
    );
  }

  return (
    <div>
      <h2>All Meetup Pages</h2>
      <MeetUpList data={dataShow} />
    </div>
  );
};

export default AllMeetup;
