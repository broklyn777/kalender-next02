import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

function HomePage() {
  const [value, setValue] = useState(new Date());

  const onChange = (selectedDate) => {
    setValue(selectedDate);
  };

  return (
    <div>
      <h1>Min ortodoxa kalender</h1>
      <Calendar onClickDay={onChange} value={value} />
      <p>Du har valt följande datum: {value.toLocaleDateString()}</p>
    </div>
  );
}

export default HomePage;

