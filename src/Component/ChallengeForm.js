import React, { useState } from 'react';

const ChallengeForm = ({ addChallenge }) => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [goal, setGoal] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const newChallenge = {
      id: Date.now(),
      name,
      description,
      startDate,
      endDate,
      goal,
      progress: 0,
      status: 'ongoing'
    };
    addChallenge(newChallenge);
    setName('');
    setDescription('');
    setStartDate('');
    setEndDate('');
    setGoal('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Create New Challenge</h2>
      <div>
        <label>Challenge Name</label>
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
      </div>
      <div>
        <label>Description</label>
        <input type="text" value={description} onChange={(e) => setDescription(e.target.value)} required />
      </div>
      <div>
        <label>Start Date</label>
        <input type="date" value={startDate} onChange={(e) => setStartDate(e.target.value)} required />
      </div>
      <div>
        <label>End Date</label>
        <input type="date" value={endDate} onChange={(e) => setEndDate(e.target.value)} required />
      </div>
      <div>
        <label>Goal</label>
        <input type="text" value={goal} onChange={(e) => setGoal(e.target.value)} required />
      </div>
      <button type="submit">Add Challenge</button>
    </form>
  );
};

export default ChallengeForm;
