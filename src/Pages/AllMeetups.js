import MeetupList from "../Components/Meetups/MeetupList";
import { useState, useEffect } from 'react'

function AllMeetupsPage() {
  const [isLoading, setIsLoading] = useState(false);
  const [loadedMeetups, setLoadedMeetups] = useState([]);

  useEffect(() => {
    setIsLoading(true);
    fetch(
    'https://react-website-b55c7-default-rtdb.firebaseio.com/meetups.json'
  )
    .then((response) => {
      return response.json();
    }).then((data) => {
      const meetups = [];
      
      for(const key in data){
        const meetup = {
          id: key,
          ...data[key]
        };

        meetups.push(meetup);
      }

      setIsLoading(false);
      setLoadedMeetups(meetups);
    });
  }, []);

  if (isLoading){
    return (
      <section>
        <p>Loading...</p>
      </section>
    );
  }

  return (
      <section>
          <h1>All Spots</h1>
          <MeetupList meetups={loadedMeetups} />
      </section>
  );
}

export default AllMeetupsPage;