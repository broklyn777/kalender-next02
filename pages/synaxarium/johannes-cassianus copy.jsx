import styles from '../../styles/Synaxarium.module.css';
import Head from "next/head";

function JeanCassien() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Vördade fader Johannes Cassianus</h1>
      <h2 className={styles.subtitle}>Minnesdag: 29:e</h2>
      <p className={styles.paragraph}>
        Vår fader Johannes Cassianus, som av Gud var bestämd att förmedla den östliga munktraditionens ljus till Väst,
        föddes till följd av en lycklig Guds beskydd vid gränserna mellan två världar, i Lille Skithien, i regionen
        vid Donauflodens mynningar (nuvarnade Dobroudja i Rumänien), runt år 365. Han kom från en framstående familj
        och avlade med framgång de klassiska studierna.
      </p>
      <p className={styles.paragraph}>
        Men eftersom han brann av en het lust efter fullkomlighet, gav han redan som ung upp världens bedrägliga
        frågor och begav sig till Heliga landet tillsammans med sin vän Germain, sin "broder inte enligt födsel,
        men i anden", och de blev munkar i ett kloster i Bethlehem.
      </p>
      <p className={styles.paragraph}>
        Efter att ha blivit introducerade till de grundläggande aspekterna av det gemenskapsbaserade livet och ha
        informerat sig om livet bland Palestinas, Mesopotamiens och Kapadociens munkar, kände de ett starkt önskemål
        om en högre fullkomlighet och beslutade sig för att bege sig till öknarna i Egypten, till de anakoreter som
        de hade hört talas väl om av den helige Pinuphe [27 nov.], som hade sökt tillflykt i deras kloster för att
        undvika den goda ryktbarheten.
      </p>
      <p className={styles.paragraph}>
        Klostrets överstepräst gav dem till slut sin välsignelse, men med viss tvekan, och fick dem att lova att
        snart återvända. När Jean och Germain hade beundrat ordningen och livet i de cenobitiska samfunden i Nilens
        delta, begav de sig in i öknen. Överallt dit de kom, sökte de ivrigt efter de heliga enslingarna, för att
        vörda i dem den graces praktfullhet och dess frukter, samt att länge förfråga dem om själens kunskap.
      </p>
    </div>
  );
}

export default JeanCassien;


