import Head from 'next/head';
import styles from '../../styles/Synaxarium.module.css';
import events from 'data/staticdata';

function Easter() {
  const eventData = events[0]; // hämta första händelsen från listan

  return (
    <>
      <Head>
        <title>{eventData.title} - Synaxarium</title>
      </Head>
      <div className={styles.container}>
        <h1 className={styles.title}>{eventData.title}</h1>
        <h2 className={styles.subtitle}>{eventData.subtitle}</h2>
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

      <p>
  Detta är en text med en fotnot. 
  <sup className={styles.footnoteNumber}>
    <a href="#footnote1" id="ref1">
      1
    </a>
  </sup>
</p>

<p>
  Detta är själva fotnoten. 
  <span className={styles.footnote} id="footnote1">
    Här kan du skriva mer information om fotnoten.
  </span>
</p>
      </div>
    </>
  );
}

export default Easter;