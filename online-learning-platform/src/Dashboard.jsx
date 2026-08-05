import CourseCatalog from "./CourseCatalog";
import StudentProfile from "./StudentProfile";

function Dashboard({ userData, courses }) {
  return (
    <>
      {/* HELLO */}
      <CourseCatalog userData={userData} courses={courses}></CourseCatalog>
      <StudentProfile userData={userData}></StudentProfile>
    </>
  );
}

export default Dashboard;
