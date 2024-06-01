import React from "react";
import SectionTitle from "../../components/title/SectionTitle";

function AboutPage() {
  return (
    <div className="page max-w-[900px] py-20 pt-24 px-4 sm:px-6 md:px-8 text-slate-900">
      <SectionTitle className="text-start">Light Academy</SectionTitle>
      <p className="text-sm my-2">
        Light Academy (L.A.) is an educational brand which started its path in
        2018 and at the moment operates 5 international schools in different
        regions of Kyrgyzstan. This year L.A. is opening new engineering college
        in Bishkek L.A. College of Engineering.
      </p>

      <SectionTitle className="text-start mt-12">
        Light Academy College of Engineering
      </SectionTitle>

      <h3 className="font-medium text-base">Overview</h3>
      <p className="text-sm my-2">
        Light Academy College of Engineering (L.A.C.E.) is an institution
        dedicated to advancing knowledge and innovation in the fields of
        engineering and technology. Located in the heart of a vibrant urban
        center, L.A.C.E. offers a dynamic learning environment that combines
        modern facilities, research, and a commitment to sustainability and
        environmental stewardship.
      </p>
      <h3 className="font-medium text-base mt-4">Mission</h3>
      <p className="text-sm my-2">
        Our mission is to educate and inspire the next generation of engineers
        and technologists to solve industries pressing challenges through
        innovation, ethical practice, and a deep understanding of global
        environmental issues.
      </p>
      <h3 className="font-medium text-base mt-4">Vission</h3>
      <p className="text-sm my-2">
        At Light Academy College of Engineering (LACE), we envision becoming a
        leading institution recognized globally for excellence in engineering
        education and research. Our commitment is to empower students through
        innovative learning experiences and cutting-edge research, fostering
        leaders who are prepared to solve the world's most pressing
        technological challenges. We aim to cultivate an environment where
        creativity, diversity, and collaboration are the cornerstones of
        advancing knowledge and driving sustainable progress in society.
      </p>
    </div>
  );
}

export default AboutPage;
