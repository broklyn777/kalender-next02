import { useState } from 'react';
import styles from '../styles/Footnote.module.css';

const Footnote = ({ number, text }) => {
  const [showFootnote, setShowFootnote] = useState(false);

  const handleMouseEnter = () => {
    setShowFootnote(true);
  };

  const handleMouseLeave = () => {
    setShowFootnote(false);
  };

  return (
    <sup className={styles.footnoteNumber}>
      <a href={`#footnote${number}`} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
        {number}
        {showFootnote && (
          <span className={styles.tooltip}>
            <span className={styles.tooltiptext}>
              {text}
            </span>
          </span>
        )}
      </a>
    </sup>
  );
};

export default Footnote;


// import { useState } from 'react';
// import styles from '../styles//Footnote.module.css';

// const Footnote = ({ number, text }) => {
//   const [showFootnote, setShowFootnote] = useState(false);

//   const handleClick = () => {
//     setShowFootnote(!showFootnote);
//   };

//   return (
//     <>
//       <sup className={styles.footnoteNumber}>
//         <a href={`#footnote${number}`} onClick={handleClick}>
//           {number}
//         </a>
//       </sup>
//       {showFootnote && (
//         <div id={`footnote${number}`} className={styles.footnote}>
//           {text}
//           <button onClick={handleClick} className={styles.closeButton}>
//             X
//           </button>
//         </div>
//       )}
//     </>
//   );
// };

// export default Footnote;
