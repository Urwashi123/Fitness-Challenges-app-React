import React from 'react';

const Challenge = ({ challenge, updateProgress }) => {
  const { id, name, description, startDate, endDate, goal, progress, status } = challenge;

  const handleProgressChange = (e) => {
    const newProgress = parseInt(e.target.value);
    updateProgress(id, newProgress);
  };

  return (
    <div className={`challenge ${status}`}>
      <h3>{name}</h3>
      <p>{description}</p>
      <p>Start Date: {startDate}</p>
      <p>End Date: {endDate}</p>
      <p>Goal: {goal}</p>
      <label>Progress: </label>
      <input
        type="number"
        value={progress}
        onChange={handleProgressChange}
        min="0"
        max="100"
        step="1"
      />%
    </div>
  );
};

export default Challenge;
