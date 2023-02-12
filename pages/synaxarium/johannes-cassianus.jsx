import Head from 'next/head';
import styles from '../../styles/Synaxarium.module.css';
import events from '../../data/staticdata';

const event = events.find((event) => event.id === 5);

export default function JohannesCassianus() {
  const { title, description } = event;
  const pageTitle = `${title} - Synaxarium`;

  return (
    <div className={styles.container}>
      <Head>
        <title>{pageTitle}</title>
      </Head>

      <h1 className={styles.title}>{title}</h1>
      <h2 className={styles.subtitle}>{description}</h2>

      <p className={styles.paragraph}>
        Johannes Cassianus, född omkring år 360 i Dakien (dagens Rumänien), var en munk och författare som var aktiv under
        400-talet. Han var verksam i olika delar av det östra Romarriket, däribland i Palestina, Egypten och Konstantinopel.
      </p>

      <p className={styles.paragraph}>
        Cassianus var en av de första som förmedlade den östliga munktraditionens ljus till Väst, och han skrev flera
        verk om munklivet och det kristna andliga livet. Hans verk, bland annat "Om inre kamp", "Institutioner" och "Om
        profeterna", blev mycket inflytelserika och användes som läroböcker för munkar under medeltiden.
      </p>

      <p className={styles.paragraph}>
        Johannes Cassianus betonade vikten av att leva ett balanserat liv med fokus på både bön och praktiskt arbete.
        Han betonade också betydelsen av att känna sinnesrörelsens olika stadier och hur man ska hantera dem, vilket han
        kallade "åtta onda tankar". Cassianus lärde ut att genom att erkänna dessa tankar och genom att vända sig till
        Gud, så kunde man förvandla dem till något positivt.
      </p>

      <p className={styles.paragraph}>
        Johannes Cassianus är en av de mest inflytelserika kristna författarna under senantiken och medeltiden, och hans
        verk fortsätter att ha betydelse för kristna än idag.
      </p>
        <p className={styles.paragraph}>
          Den 29:e i denna månad firar vi minnet av vår vördade fader Theophore JEAN CASSIEN och hans övningskamrat
          GERMAIN. Vår fader Jean Cassien, som av Gud var bestämd att förmedla den östliga munktraditionens ljus till
          Väst, föddes till följd av en lycklig Guds beskydd vid gränserna mellan två världar, i Lille Skithien, i
          regionen vid Donauflodens mynningar (nuvarande Dobroudja i Rumänien), runt år 365. Han kom från en framstående
          familj och avlade med framgång de klassiska studierna. Men eftersom han brann av en het lust efter
          fullkomlighet, gav han redan som ung upp världens bedrägliga frågor och begav sig till Heliga landet
          tillsammans med sin vän Germain, sin "broder inte enligt födsel, men i anden", och de blev munkar i ett
          kloster i Bethlehem.
        </p>
        <p className={styles.paragraph}>
          Efter att ha blivit introducerade till de grundläggande aspekterna av det gemenskapsbaserade livet och ha
          informerat sig om livet bland Palestinas, Mesopotamiens och Kapadociens munkar, kände de ett starkt önskemål
          om en högre fullkomlighet och beslutade sig för att bege sig till öknarna i Egypten, till de anakoreter som
          de hade hört talas väl om av den helige Pinuphe [27 nov.], som hade sökt tillflykt i deras kloster för att
          undvika den goda ryktbarheten. Klostrets överstepräst gav dem till slut sin välsignelse, men med viss
          tvekan, och fick dem att lova att snart återvända. När Jean och Germain hade beundrat ordningen och livet i
          de cenobitiska samfunden i Nilens delta, begav de sig in i öknen. Överallt dit de kom, sökte de ivrigt efter
          de heliga enslingarna, för att vörda i dem den graces praktfullhet och dess frukter, samt att länge
          förfråga dem om själens kunskap.
        </p>
           <p className={styles.paragraph}>
         Själva öknen var för dem som en levande bibliotek av asketiska lärdomar och teologisk visdom. Genom att söka upp och tillbringa tid med öknens fäder och mödrar, förvärvade Johannes Cassianus en djup förståelse för den östliga munktraditionen och det asketiska livet.

Efter flera år i öknen reste Johannes till Konstantinopel, där han studerade teologi och prästvigdes. Han vistades också en tid i Rom och Italien, där han kom i kontakt med den västliga kristna kyrkan och dess asketiska traditioner.

Johannes Cassianus är mest känd för sitt verk "Collationes Patrum in Scetica Eremo", eller "Konferenser med fäderna i Sketis öken". Verket består av tjugofem konferenser som Johannes höll med öknens fäder och mödrar, där han samlade deras visdom och lärdomar om det asketiska livet.

Johannes Cassianus är en viktig person inom både den östliga och västliga kristna kyrkan. Han var en brygga mellan de två kyrkorna och förmedlade den östliga munktraditionens ljus till Väst. Hans verk har haft en stor påverkan på den kristna spiritualiteten och har inspirerat generationer av munkar och troende.

Idag, den 9 december, firar den ortodoxa kyrkan Johannes Cassianus minnesdag och minns hans viktiga bidrag till den kristna spiritualiteten och det asketiska livet.
        </p>
    </div>
  );
}
