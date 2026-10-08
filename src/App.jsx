import React, { useState } from 'react';

function App() {
  const [students, setStudents] = useState([]);
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [major, setMajor] = useState('');

  const handleAddStudent = (e) => {
    e.preventDefault();
    if (!name || !age || !major) return;
    setStudents([...students, { name, age, major }]);
    setName('');
    setAge('');
    setMajor('');
  };

  return (
    <div style={{ textAlign: 'center', fontFamily: 'sans-serif', marginTop: '40px' }}>
      <h1>Student Information System</h1>
      <p style={{ color: 'purple', fontWeight: 'bold' }}>
        Developed By: 101468069 || Dharwyn Ivor Olpindo || DevOps
      </p>

      <form onSubmit={handleAddStudent} style={{ display: 'inline-block', textAlign: 'right', marginTop: '20px' }}>
        <div style={{ marginBottom: '10px' }}>
          <label style={{ marginRight: '10px' }}>Name:</label>
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
        </div>
        <div style={{ marginBottom: '10px' }}>
          <label style={{ marginRight: '10px' }}>Age:</label>
          <input type="text" value={age} onChange={(e) => setAge(e.target.value)} />
        </div>
        <div style={{ marginBottom: '10px' }}>
          <label style={{ marginRight: '10px' }}>Major:</label>
          <input type="text" value={major} onChange={(e) => setMajor(e.target.value)} />
        </div>
        <button 
          type="submit" 
          style={{ backgroundColor: '#4CAF50', color: 'white', border: 'none', padding: '8px 16px', cursor: 'pointer', borderRadius: '4px' }}
        >
          Add Student
        </button>
      </form>

      <h2 style={{ marginTop: '30px' }}>Student List</h2>
      {students.length === 0 ? (
        <p>No students added yet</p>
      ) : (
        <ul style={{ listStyleType: 'none', padding: 0 }}>
          {students.map((student, index) => (
            <li key={index}>
              {student.name} - {student.age} - {student.major}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default App;