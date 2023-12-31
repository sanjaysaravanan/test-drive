import React from 'react';
import Skill from './Components/Skill';

import { skills } from '@/app/data';

const Skills = () => {
  return (
    <>
      {skills.filter(({ show = true }) => show).map(({ title, rating }) => (
        <Skill title={title} percent={rating} key={title} />
      ))}
    </>
  )
};

export default Skills;
