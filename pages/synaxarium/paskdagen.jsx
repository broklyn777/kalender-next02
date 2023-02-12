
import styles from '../../styles/Synaxarium.module.css';
import Head from 'next/head';

export default function Easter() {
  const pageTitle = "Påskdagens betydelse för ortodoxa kristna";

  return (
    <>
      <Head>
        <title>{pageTitle}</title>
      </Head>
      <div className={styles.container}>
        <h1 className={styles.title}>Påskdagens betydelse för ortodoxa kristna</h1>
        <div className={styles.content}>
          <h2 className={styles.subtitle}>Bakgrund</h2>
          <p className={styles.paragraph}>
            Påskdagen är en av de mest betydelsefulla helgdagarna för ortodoxa kristna runt om i världen. Det är en dag som markerar Jesu uppståndelse från de döda, och representerar hoppet om evigt liv för kristna. För ortodoxa kristna är påskdagen en tid för glädje och firande, men det är också en tid för eftertanke och reflektion över Jesu liv, död och uppståndelse.
          </p>

          <h2 className={styles.subtitle}>Jesu liv, död och uppståndelse</h2>
          <p className={styles.paragraph}>
            Enligt bibeln arresterades Jesus av romerska myndigheter, dömdes till döden genom korsfästelse och dog på korset. För kristna representerar korsfästelsen Guds kärlek till människor, eftersom Jesus offrade sitt liv för att rädda mänskligheten från synd och ondska. Men på den tredje dagen efter Jesu död, uppstod han från de döda, vilket visade att döden inte var det sista ordet.
          </p>

         <h2 className={styles.subtitle}>Fastan innan Påskdagen</h2>
          <p className={styles.paragraph}>
            För ortodoxa kristna är påskdagen inte bara en dag, utan en period på sju veckor, som kallas fastan eller "fastan". Fastan är en tid för själens rening och förberedelse inför påskdagen, och det innebär att avstå från vissa livsmedel och aktiviteter under denna period.
          </p>

          <h2 className={styles.subtitle}>Gudstjänster</h2>
          <p className={styles.paragraph}>
            På själva påskdagen firas gudstjänster över hela världen, med sång, böner och symboliska gestikulationer som påminner om Jesu liv, död och uppståndelse. En av de viktigaste ceremonierna på påskdagen är midnattsgudstjänsten, som äger rum vid midnatt, då ortodoxa kristna tändar ljus och sjunger lovsånger för att fira Jesu uppståndelse.
          </p>

          <h2 className={styles.subtitle}>Agape-måltiden</h2>
          <p className={styles.paragraph}>
            Efter midnattsgudstjänsten kommer det som kallas "agape-måltiden", som är en gemensam måltid där familjer och vänner samlas för att fira påskdagen tillsammans. Under måltiden äter man traditionella ortodoxa rätter och delar med sig av påskbröd och färgglada påskägg.
          </p>

          <h2 className={styles.subtitle}> Tid för glädje</h2>
          <p className={styles.paragraph}>
            För ortodoxa kristna runt om i världen är påskdagen en av de mest betydelsefulla och heliga dagarna på året. Det är en tid för glädje, firande och reflektion, och det representerar hoppet om evigt liv för kristna. Genom att fira påskdagen och reflektera över Jesu liv, död och uppståndelse, kan ortodoxa kristna stärka sin tro och uppleva en närmare relation med Gud.
          </p>
        </div>
      </div>
    </>
  );
}