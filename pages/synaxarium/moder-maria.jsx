import Head from 'next/head';
import { useState } from 'react';
import events from 'data/staticdata';
import styles from 'styles/synaxarium.module.css';

export default function Event5() {
  const [pageTitle, setPageTitle] = useState('');

  const event = events.find((e) => e.id === 5);

  if (event) {
    setPageTitle(event.title);
  }

  return (
    <div className={styles.container}>
      <Head>
        <title>{pageTitle}</title>
      </Head>
      <h1 className={styles.title}>Den heliga jungfrun Maria, Moder Guds</h1>
      <p className={styles.paragraph}>
        Maria, Moder Guds, är en av de mest vördade personerna inom den kristna tron. Som moder till Jesus Kristus
        anses hon ha en mycket speciell plats i Guds hjärta och i människornas tro. I den ortodoxa kyrkan är hon känd
        som Theotokos, vilket betyder "Guds moder".
      </p>
      <h2 className={styles.subtitle}>Historia och betydelse</h2>
      <p className={styles.paragraph}>
        Marias betydelse inom kristendomen är stor, inte bara som modersgestalt, utan också som en förebild för alla
        troende. Hon stod alltid vid sin sons sida och var en av få personer som stannade kvar vid korset när Jesus
        korsfästes. Hennes troskap och kärlek till sin son är en inspiration för många kristna.
      </p>
      <p className={styles.paragraph}>
        Maria har också spelat en viktig roll i kyrkans historia och teologi. En av de mest kända dogmerna inom den
        kristna tron är "Theotokos-dogmen", som fastställer att Maria verkligen var Guds moder och att Jesus var både
        Gud och människa. Detta är en central del av den kristna tron och Marias roll som Guds moder spelar en stor
        roll i det.
      </p>
      <h2 className={styles.subtitle}>Firande och helgonförklaring</h2>
      <p className={styles.paragraph}>
        Den heliga jungfrun Maria har en speciell plats i ortodox kristendom, och hennes liv och arbete firas på flera
        högtider under året. Hennes födelse firas den 8 september, hennes upphöjelse till himlen den 15 augusti och
        hennes avsomnande den 28 augusti. Hon är också en viktig del av jul- och påskfirandet.
      </p>
      <p className={styles.paragraph}>
        Maria har också helgonförklarats av den ortodoxa kyrkan och är en av de mest vördade helgonen. Hon betraktas
        som en av de viktigaste förebilderna för alla kristna och en beskyddare för kvinnor och mödrar över hela
        världen.
      </p>
    </div>
  );
}
