import React from "react";

const Work = () => {
  return (
    <div className="flex w-full my-16">
      <div className="max-w-[1240px] mx-auto px-8 text-left">
        <div className="pb-16">
          <h1 className="text-center text-5xl font-bold text-neutral-100">
            Work History
          </h1>
          <br />
          <div>
            <h1 className="text-3xl font-bold text-neutral-100">Code Ninjas</h1>
            <p className="text-xl text-neutral-400">
              Coding Instructor | Jul. 27, 2021 - Sep. 17, 2021
            </p>
            <ul className=" marker:text-neutral-100 text-neutral-100 list-disc list-inside">
              <li>
                Worked with the advanced students in game development utilizing
                Unity and C#
              </li>
              <li>
                Supervised and trained students on the basics of JavaScript
                development
              </li>
              <li>
                Taught and performed good debugging practices with students
              </li>
              <li>Developed students' technical and problem-solving skills </li>
            </ul>
          </div>
        </div>
        <div>
          <h1 className="text-center text-5xl font-bold text-neutral-100">
            Education
          </h1>
          <br />
          <div className="flex flex-col space-y-8">
            <div>
              <h1 className="text-3xl font-bold text-neutral-100">
                North Carolina State University
              </h1>
              <p className="text-xl text-neutral-400">
                Post-baccalaureate Computer Programing Certificate | May 18,
                2022 - Present
              </p>
            </div>
            <div>
              <h1 className="text-3xl font-bold text-neutral-100">
                Davidson College
              </h1>
              <p className="text-xl text-neutral-400">
                BA Philosophy | May 16, 2021
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
