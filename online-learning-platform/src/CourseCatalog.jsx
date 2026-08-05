function CourseCatalog({ userData, courses }) {
  return (
    <>
      <ul>
        {courses.courses.map((e) => {
          console.log(e);
          if (e.enrolled == false) {
            return (
              <li id={e.Id}>
                Course: {e.Course}
                <br></br>
                Price: {e.Price}
                <br></br>
                <button
                  onClick={() => {
                    courses.dispatch({ type: "enroll", payload: e.Id });
                  }}
                >
                  {" "}
                  Enroll{" "}
                </button>
                <br></br>
                <br></br>
              </li>
            );
          }
        })}
      </ul>
    </>
  );
}

export default CourseCatalog;
