import React from 'react';

import Cards from '../../../components/Cards/Cards';

const Projects = () => {
  return (
    <Cards
      data={[
        {
          url: 'https://sanjaysaravanan38.medium.com/containerize-an-application-using-dockerfile-bf35c38d4d95',
          imageUrl: 'https://raw.githubusercontent.com/sanjaysaravanan/test-drive/e6ca4f4bad5cec02d4a61399a7f91c93ff5d4758/src/app/assets/html.svg',
          title: 'Containerize an application using Docker',
          type: 'project',
          description: 'Containerize any software application using Docker and make it easily portable across platforms.',
          techs: ['React', 'Python']
        },
        {
          url: 'https://sanjaysaravanan38.medium.com/ci-cd-for-a-web-application-using-aws-codepipeline-46c18985d74c',
          imageUrl: 'https://raw.githubusercontent.com/sanjaysaravanan/test-drive/e6ca4f4bad5cec02d4a61399a7f91c93ff5d4758/src/app/assets/html.svg',
          title: 'Application CI/CD using AWS Code Pipeline',
          type: 'blog',
          date: 'May 2, 2021',
          description: 'Containerize any software application using Docker and make it easily portable across platforms.',
        }
      ]}
    />
  )
};

export default Projects;
