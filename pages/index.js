
// import React, { useState } from 'react';
// import Calendar from 'react-calendar';
// import moment from 'moment-timezone';
// import events from 'data/staticdata';
// import 'react-calendar/dist/Calendar.css';


// function HomePage() {
//   const [selectedEvent, setSelectedEvent] = useState(null);

//   const onChange = (date) => {
//     const selectedEvent = events.find(
//       (event) => moment(event.date).format('YYYY-MM-DD') === moment(date).format('YYYY-MM-DD')
//     );
//     setSelectedEvent(selectedEvent);
//   };

//   return (
//     <div>
//       <h1>Min ortodoxa kalender</h1>
//       <Calendar onClickDay={onChange} value={new Date()} />
//       {selectedEvent && (
//         <>
//           <h2>{selectedEvent.title}</h2>
//           <p>{selectedEvent.description}</p>
//           <a href={selectedEvent.link} target="_blank" rel="noopener noreferrer">Läs mer</a>
//         </>
//       )}
//     </div>
//   );
// }

// export default HomePage;

import CalendarComponent from '@/components/CalendarComponent';
import React from 'react';
import Footnote from '@/components/Footnote';

function HomePage() {
  return (
    <>
      <div>

        <CalendarComponent />
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Morbi auctor <Footnote number="1" text="A footnote about Morbi auctor" /> euismod dolor, quis dapibus mi vestibulum ac.
          Sed ut felis et augue pulvinar gravida. Fusce sagittis velit ac luctus malesuada.
          <Footnote number="2" text="A footnote about Fusce sagittis" />
        </p>
        <div>


        </div>

      </div>
    </>
  );





}

export default HomePage;
