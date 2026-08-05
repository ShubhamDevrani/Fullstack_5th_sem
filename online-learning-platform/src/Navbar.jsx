function Navbar({ courses, userData }) {
  let enrolled = 0;

  courses.forEach((element) => {
    if (element.enrolled == true) enrolled++;
  });

  return (
    <>
      <br></br>
      <h2> SKILLNEST - ONLINE LEARNING PLATFORM </h2>
      <br></br>
      Welcome, {userData.name}
      <br></br>
      Program: Web Development Enrolled: {enrolled}
    </>
  );
}

export default Navbar;
