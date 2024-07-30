import React from 'react';
import Challenge from './Challenge';

const ChallengeList = ({ challenges, updateProgress }) => {
  return (
    <div>
      <h2>Ongoing Challenges</h2>
      {challenges.filter(challenge => challenge.status === 'ongoing').map(challenge => (
        <Challenge key={challenge.id} challenge={challenge} updateProgress={updateProgress} />
      ))}

      <h2>Completed Challenges</h2>
      {challenges.filter(challenge => challenge.status === 'completed').map(challenge => (
        <Challenge key={challenge.id} challenge={challenge} updateProgress={updateProgress} />
      ))}
    </div>
  );
};

export default ChallengeList;
