import { useEffect, useState } from "react";

export default function Profile() {
  const [firstName, setFristName] = useState("");
  const [lastName, setLastName] = useState("");
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(`http://localhost:3001/profile`);
      const data = await response.json();
      setFristName(data.firstName);
      setLastName(data.lastName);
    };
    fetchData();
  }, []);

  return (
    <>
      <div>
        <strong>First Name: </strong> {firstName}
      </div>
      <div>
        <strong>Last Name: </strong> {lastName}
      </div>
    </>
  );
}
