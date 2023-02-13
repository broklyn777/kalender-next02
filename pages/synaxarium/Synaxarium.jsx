import Footnote from '@/components/Footnote';
import styles from '@/styles/Synaxarium.module.css';

const text = `När de insåg att de behövde tillbringa längre tid för att assimilera deras gudomliga undervisning, och då de kände sig besvärade av deras löfte, vände de sig till abboten Joseph med sitt problem. Efter en natt av bön, försäkrade abboten dem att det skulle vara till deras fördel att stanna i Egypten, utan att bry sig om deras brådskande löfte. Trösta av den äldste stannade de i sju år i Egypten, och fortsatte med hängivenhet sin andliga undersökning.`;

const Synaxarium = () => {
  return (
    <div className={styles.synaxarium}>
      <p>
        {text}
        <Footnote
          number={1}
          text="Egypten är känt för sina många heliga platser och för att vara ett viktigt centrum för tidig kristendom."
        />
      </p>
    </div>
  );
};

export default Synaxarium;