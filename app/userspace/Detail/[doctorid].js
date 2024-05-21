"use client";
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

function DoctorDetail() {
  const router = useRouter();
  const { doctorid } = router.query;
  const [doctor, setDoctor] = useState(null);

  useEffect(() => {
    if (doctorid) {
      fetch(`http://localhost:8080/doctor/getAll`)
        .then(response => response.json())
        .then(data => {
          const selectedDoctor = data.find(doc => doc.doctorid == doctorid);
          setDoctor(selectedDoctor);
        })
        .catch(error => console.error('Error fetching data:', error));
    }
  }, [doctorid]);

  if (!doctor) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>{doctor.name}</h1>
      <p><strong>Address:</strong> {doctor.address}</p>
      <p><strong>Category:</strong> {doctor.category}</p>
      <p><strong>Years of Experience:</strong> {doctor.year_of_Experience}</p>
      <p><strong>Available From:</strong> {doctor.startTime}</p>
      <p><strong>Available To:</strong> {doctor.endTime}</p>
      <p><strong>About:</strong> {doctor.about}</p>
      <p><strong>Phone:</strong> {doctor.phone}</p>
    </div>
  );
}

export default DoctorDetail;
