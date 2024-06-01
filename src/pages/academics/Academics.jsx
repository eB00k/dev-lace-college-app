import React from "react";

const reasonsToStudy = [
  "Affordable Education in English",
  "Small Class Sizes",
  "Hands-On Learning",
  "Focused Programs",
  "Flexible Scheduling",
  "Transfer Opportunities",
  "Industry Connections",
  "Supportive Environment",
  "Diverse Student Body",
  "Community Engagement",
];

const programs = [
  {
    name: "Software Engineering",
    description:
      "The Software Engineering Program is dedicated to advancing the discipline of software development through comprehensive educational programs, research, and collaboration with industry. Focused on the application of engineering principles to the design, development, and implementation of software, the program offers both theoretical and practical training. Students learn about various software development methodologies, project management, and effective team collaboration, preparing them to tackle complex software challenges in a dynamic technological landscape.",
    jobRoles: [
      "Software Developer",
      "DevOps Engineer",
      "Quality Assurance Analyst",
      "Mobile Application Developer",
      "User Interface Designer",
      "Project Manager",
      "Scrum Master",
      "Embedded Systems Engineer",
    ],
  },
  {
    name: "Cyber Security",
    description:
      "The Cybersecurity Program provides rigorous training and research opportunities in the field of information security. Addressing the increasing threats in the digital world, the program's curriculum covers areas such as network security, ethical hacking, cryptography, and data protection. Through hands-on labs and real-world projects, students are equipped with the skills needed to design, implement, and manage secure systems and to anticipate and mitigate potential security breaches, thus preparing them for high-demand roles in both public and private sectors.",
    jobRoles: [
      "Information Security Analyst",
      "Penetration Tester",
      "Cybersecurity Consultant",
      "Network Security Engineer",
      "Security Operations Center (SOC) Analyst",
      "Cryptographer",
      "Forensic Computer Analyst",
      "Vulnerability Assessor",
      "Compliance and Controls Analyst",
    ],
  },
  {
    name: "IT & Entrepreneurship",
    description:
      "The IT & Entrepreneurship Program bridges the gap between advanced technological skills and innovative business strategies. This program focuses on leveraging technology for business growth, covering topics such as digital transformation, tech startups, and venture capital. It encourages students to develop entrepreneurial thinking alongside strong IT skills, fostering the creation of new ventures and innovations in the tech industry. The curriculum is designed to empower students to launch and manage technology-driven businesses effectively.",
    jobRoles: [
      "Project Manager",
      "IT Project Manager",
      "SCRUM Master",
      "Technology Entrepreneur",
      "IT Consultant",
      "Digital Marketing Specialist",
      "Business Analyst",
      "Product Manager",
      "Startup Founder",
      "E-commerce Manager",
    ],
  },
  {
    name: "STEM Pedagogy",
    description:
      "The STEM Pedagogy program focuses on the education and training of future educators in the fields of science, technology, engineering, and mathematics. This program emphasizes the development of effective teaching strategies, curriculum design, and the integration of technology into education. By combining educational theory with practical teaching experiences, the program aims to prepare educators who can inspire and engage the next generation of scientists and engineers, enhancing the overall quality of STEM education.",
    jobRoles: [
      "STEM Teacher",
      "Science Educator",
      "Curriculum Developer",
      "Educational Technologist",
      "Mathematics Curriculum Specialist",
      "Engineering Educator",
      "Instructional Coordinator",
      "Educational Consultant",
      "STEM Program Director",
    ],
  },
];

function Academics() {
  return (
    <div className="page-style">
      <section className="px-6 py-12">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-6">Overview</h2>
          <p className="mb-6">
            Light Academy College of Engineering (L.A.C.E.) is an institution
            dedicated to advancing knowledge and innovation in the fields of
            engineering and technology. Located in the heart of a vibrant urban
            center, L.A.C.E. offers a dynamic learning environment that combines
            modern facilities, research, and a commitment to sustainability and
            environmental stewardship.
          </p>

          <h2 className="text-3xl font-bold mb-6">Programs</h2>
          {programs.map((program) => (
            <div key={program.name} className="mb-6">
              <h3 className="text-2xl font-semibold mb-4">{program.name}</h3>
              <p className="mb-4">{program.description}</p>
              <h4 className="text-xl font-semibold mb-2">
                Potential Job Roles:
              </h4>
              <ul className="list-disc ml-5">
                {program.jobRoles.map((role, index) => (
                  <li key={index} className="mb-2">
                    {role}
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <h2 className="text-3xl font-bold mb-6">Why Study at L.A.C.E.</h2>
          <ul className="list-disc ml-5">
            {reasonsToStudy.map((reason, index) => (
              <li key={index} className="mb-2">
                {reason}
              </li>
            ))}
          </ul>
        </div>
      </section>
    </div>
  );
}

export default Academics;
