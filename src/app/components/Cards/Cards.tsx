import React from 'react';

import styles from './cards.module.css';
import Slider from '../Sections/Slider/Slider';

type LinkProps = {
  url: string,
  imageUrl: string,
  date?: string,
  title: string,
  techs?: string[],
  type: 'game' | 'blog' | 'project',
  sourceUrl?: string,
  description?: string,
  clickFunc?: () => void,
}

const LinkCard: React.FC<LinkProps> = ({
  url,
  imageUrl,
  title,
  techs,
  date,
  type,
  description,
  sourceUrl,
  clickFunc,
}) => {
  return (
    <div
      className={styles.container}
    >
      <img
        src={imageUrl}
        alt={title}
        height={200}
        width={300}
        crossOrigin='anonymous'
        style={{objectFit: 'contain'}}
      />
      <a
        href={url}
        target='_blank'
        className={styles.link}
      >
        <h3>
          {title}
        </h3>
      </a>
      {type === 'blog' && (
        <>
          <h5>{date}</h5>
          <div className={styles.dividerLine} ></div>
          <p>{description}</p>
        </>
      )}
      {type !== 'blog' && (
        <>
          <h5>{techs?.join(' / ')}</h5>
          <div style={{ textAlign: 'center' }} >
            <a
              href={sourceUrl}
              target='_blank'
              className={'viewLink'}
              onClick={clickFunc || undefined}
            >
              {type === 'game' ? 'Play' : 'View Source'}
            </a>
          </div>
        </>
      )}
    </div>
  );
}

type CardsProps = {
  data: LinkProps[]
}

const Cards: React.FC<CardsProps> = ({ data }) => {
  return (
    <div className={styles.cardsContainer} >
      {data.map((details) => (
        <Slider type='zoom-in' key={details.title}>
          <LinkCard {...details} />
        </Slider>
      ))}
    </div>
  )
}

export default Cards;
