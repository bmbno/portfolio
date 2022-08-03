import React from "react";

const About = () => {
  return (
    <div className="flex w-full my-32">
      <div className="max-w-[1240px] mx-auto">
        <div className="pb-12">
          <h2 className="text-5xl font-bold text-neutral-100">
            Hi, I'm Gabe Ng - an aspiring Software Engineer
          </h2>
          <p className="text-3xl py-6 text-neutral-300">
            I am a graduate of Davidson College with a BA in Philosophy. I began
            teaching myself how to program during the beginning of the pandemic
            and have fell in love with it since, inspiring me to take classes
            such as <b>Data Structures</b> during my remaining time at Davidson.
            <br />
            <br />I am currenting pursuing a post-baccalaureate at North
            Carolina State University in the form of their{" "}
            <a
              href="https://www.engineeringonline.ncsu.edu/programs-and-courses/certificates/computer-programming-certificate/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-neutral-50"
            >
              Computer Programming Certificate
            </a>{" "}
            to fulfill the remaining prerequisites needed to pursue a masters in
            Computer Science, such as{" "}
            <b>Concepts and Facilities of Operating Systems</b> and{" "}
            <b>Basic Computer Organization and Assembly Language</b>
          </p>
        </div>
        <div className="pb-12">
          <h2 className="text-5xl font-bold text-neutral-100">Skills</h2>
          <p className="text-3xl py-6 text-neutral-300">
            You can find the list of my skills below. I am more focused on
            learning backend related frameworks, libraries, and languages.
          </p>
          <div className="flex flex-wrap justify-between">
            <div className="flex flex-col">
              <h1 className="text-5xl font-bold text-neutral-100">Languages</h1>
              <ul className="text-3xl py-6 text-neutral-300">
                <li>Java</li>
                <li>JavaScript</li>
                <li>Python</li>
                <li>MongoDB &amp; PostgreSQL</li>
                <li>HTML &amp; CSS</li>
              </ul>
            </div>
            <div className="flex flex-col">
              <h1 className="text-5xl font-bold text-neutral-100">
                FrameWorks
              </h1>
              <ul className="text-3xl py-6 text-neutral-300">
                <li>Node</li>
                <li>Express</li>
                <li>React</li>
                <li>Tailwind CSS</li>
                <li>Flask</li>
              </ul>
            </div>
            <div className="flex flex-col">
              <h1 className="text-5xl font-bold text-neutral-100">
                Technologies
              </h1>
              <ul className="text-3xl py-6 text-neutral-300">
                <li>Git &amp; GitHub</li>
                <li>REST APIs</li>
                <li>AWS</li>
                <li>VS Code</li>
              </ul>
            </div>
          </div>
        </div>
        <div>
          <p className="text-3xl py-6 text-neutral-300">
            In my spare time, I enjoy cooking, climbing, and drinking
            gongfu-style tea.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
