// import { useEffect, useState } from 'react';
// import styles from '/styles/Synaxarium.module.css';

// function Crucifixion() {
//   const [data, setData] = useState({ title: '', description: '' });

//   useEffect(() => {
//     // Hämta data från JSON-fil
//     fetch('data/calendarData.json')
//       .then(response => response.json())
//       .then(data => setData(data[3])); // ID 4 = index 3 i listan
//   }, []);

//   return (
//     <div className={styles.container}>
//       <h1 className={styles.title}>Påskdagen</h1>
//       <p className={styles.paragraph}>
//         Korsfästelsen är en central händelse i Jesus liv och en viktig del av kristen tro. För kristna representerar
//         korsfästelsen Guds kärlek till människor, eftersom Jesus offrade sitt liv för att rädda mänskligheten från synd
//         och ondska. Korsfästelsen är också en symbol för hopp och tröst för kristna, eftersom det visar att döden inte
//         är det sista ordet.
//       </p>
//       <p className={styles.paragraph}>
//         Förutom dess teologiska betydelse har korsfästelsen också inspirerat konst, litteratur och musik genom historien.
//         Många konstnärer har skildrat Jesu korsfästelse i sina verk, som Leonardo da Vincis "Nattvarden" och
//         Michelangelos "Kristus på korset". Korsfästelsen har också varit en inspirationskälla för många musikstycken,
//         inklusive Johann Sebastian Bachs "Matteuspassionen".
//       </p>
//       <p className={styles.paragraph}>
//         I kristen liturgi är korsfästelsen också en viktig del av påskfirandet. På långfredagen minns kristna Jesu
//         korsfästelse genom att delta i en ceremoni som kallas "Stations of the Cross". Denna ceremoni är en meditativ
//         vandring genom 14 stationer som representerar olika händelser i Jesu sista timmar.
//       </p>
//     </div>
//   );
// }

// export default Crucifixion;

import { useEffect, useState } from 'react';
import styles from '../../styles/Synaxarium.module.css';

function Easter() {
  const [data, setData] = useState({ title: '', description: '' });

  useEffect(() => {
    // Hämta data från JSON-fil
    fetch('/data/calendarData.json')
      .then(response => response.json())
      .then(data => setData(data[0])); // ID 1 = index 0 i listan
  }, []);

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Påskdagen</h1>
      <h2 className={styles.subtitle}>Bakgrund och betydelse</h2>
      <p className={styles.paragraph}>
        Korsfästelsen är en central händelse i Jesus liv och en viktig del av kristen tro. För kristna representerar
        korsfästelsen Guds kärlek till människor, eftersom Jesus offrade sitt liv för att rädda mänskligheten från synd
        och ondska. Korsfästelsen är också en symbol för hopp och tröst för kristna, eftersom det visar att döden inte
        är det sista ordet.
      </p>
      <p className={styles.paragraph}>
        Förutom dess teologiska betydelse har korsfästelsen också inspirerat konst, litteratur och musik genom historien.
        Många konstnärer har skildrat Jesu korsfästelse i sina verk, som Leonardo da Vincis "Nattvarden" och
        Michelangelos "Kristus på korset". Korsfästelsen har också varit en inspirationskälla för många musikstycken,
        inklusive Johann Sebastian Bachs "Matteuspassionen".
      </p>
      <p className={styles.paragraph}>
        I kristen liturgi är korsfästelsen också en viktig del av påskfirandet. På långfredagen minns kristna Jesu
        korsfästelse genom att delta i en ceremoni som kallas "Stations of the Cross". Denna ceremoni är en meditativ
        vandring genom 14 stationer som representerar olika händelser i Jesu sista timmar.
      </p>
    </div>
  );
}

export default Easter;

