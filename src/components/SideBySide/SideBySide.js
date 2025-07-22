import Image from 'next/image';
import styles from './SideBySide.module.css';

const SideBySide = ({
  header,
  text,
  bulletPoints = [],
  listType = 'bullet', // New prop: 'bullet' or 'number'
  buttonLabel,
  onButtonClick,
  imageSrc,
  imageAlt,
  imagePosition = 'left',
}) => {
  const imageElement = (
    <div className={styles.imageContainer}>
      <Image src={imageSrc} alt={imageAlt} width={400} height={400} className={styles.image} />
    </div>
  );
  
  // Determine the list component type based on the new prop
  const ListComponent = listType === 'number' ? 'ol' : 'ul';

  const textElement = (
    <div className={styles.textContainer}>
      {header && <h2 className={styles.header}>{header}</h2>}
      {text && <p className={styles.text}>{text}</p>}
      
      {bulletPoints && bulletPoints.length > 0 && (
        <ListComponent className={styles.bulletList}>
          {bulletPoints.map((point, index) => (
            <li key={index} className={styles.bulletItem}>
              {point}
            </li>
          ))}
        </ListComponent>
      )}

      {buttonLabel && onButtonClick && (
        <button onClick={onButtonClick} className={styles.button}>
          {buttonLabel}
        </button>
      )}
    </div>
  );

  return (
    <section className={styles.container}>
      {imagePosition === 'left' ? (
        <>
          {imageElement}
          {textElement}
        </>
      ) : (
        <>
          {textElement}
          {imageElement}
        </>
      )}
    </section>
  );
};

export default SideBySide;