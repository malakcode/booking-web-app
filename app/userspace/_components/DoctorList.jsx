"use client";
import React, { useState, useEffect } from 'react';
import Link from 'next/link';

function DoctorList() {
  const [doctors, setDoctors] = useState([]);

  useEffect(() => {
    fetch('http://localhost:8080/doctor/getAll')
      .then(response => response.json())
      .then(data => setDoctors(data))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  return (
    <div>
      <div className="doctor-list">
        {doctors.map(doctor => (
          <Link href={`/Detail/${doctor.doctorid}`} key={doctor.doctorid}>
            <div className="doctor-card">
              <img src="../person.png" alt="Doctor" className="doctor-image" />
              <h2>{doctor.name}</h2>
              <p><strong>Address:</strong> {doctor.address}</p>
              <p><strong>Category:</strong> {doctor.category}</p>
            </div>
          </Link>
        ))}
      </div>
      <style jsx>{`
        .doctor-list {
          display: flex;
          flex-wrap: wrap;
          justify-content: space-around;
        }
        .doctor-card {
          border: 1px solid #ddd;
          border-radius: 8px;
          padding: 16px;
          margin: 16px;
          width: 200px;
          text-align: center;
          box-shadow: 0 4px 8px rgba(0,0,0,0.1);
          transition: transform 0.2s;
          cursor: pointer;
        }
        .doctor-card:hover {
          transform: scale(1.05);
        }
        .doctor-image {
          width: 100%;
          height: auto;
          border-radius: 50%;
        }
      `}</style>
    </div>
  );
}

export default DoctorList;
