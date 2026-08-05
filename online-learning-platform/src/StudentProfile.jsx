function StudentProfile({ userData }) {
  return (
    <>
      Student Details
      <br></br>
      Name: {userData.name}
      <br></br>
      Email: {userData.email}
      <br></br>
      Program: {userData.program}
      <br></br>
    </>
  );
}

export default StudentProfile;
