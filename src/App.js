import React, { useState, useEffect } from 'react';
import ChallengeForm from './Component/ChallengeForm';
import ChallengeList from '../src/Component/ChallengeList ';
import './App.css';

const App = () => {
  const [challenges, setChallenges] = useState([]);

  useEffect(() => {
    const storedChallenges = JSON.parse(localStorage.getItem('challenges'));
    if (storedChallenges) {
      setChallenges(storedChallenges);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('challenges', JSON.stringify(challenges));
  }, [challenges]);

  const addChallenge = (challenge) => {
    setChallenges([...challenges, challenge]);
  };

  const updateProgress = (id, newProgress) => {
    setChallenges(challenges.map(challenge => {
      if (challenge.id === id) {
        challenge.progress = newProgress;
        if (newProgress >= 100) {
          challenge.status = 'completed';
        }
      }
      return challenge;
    }));
  };

  return (
    <div className="App">
      <h1>Fitness Challenge Tracker</h1>
      <ChallengeForm addChallenge={addChallenge} />
      <ChallengeList challenges={challenges} updateProgress={updateProgress} />
    </div>
  );
};

export default App;
