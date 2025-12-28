import React from "react";
import styled from "styled-components";
import SmallTitle from "../components/SmallTitle";
import { Title } from "../components/Title";
import { InnerLayout, MainLayout } from "../styles/Layouts";
import WorkIcon from "@material-ui/icons/Work";
import SchoolIcon from "@mui/icons-material/School";
import ResumeItem from "../components/ResumeItem";

export const ResumeView = () => {
  const work = <WorkIcon />;
  const school = <SchoolIcon />;
  return (
    <MainLayout>
      <ResumeViewStyled>
        <Title title={"Resume"} span={"Resume"} />
        <InnerLayout>
          <div className="smalltitle">
            <SmallTitle icon={work} title={"Experience"} />
          </div>
          <div className="resume-content">
          <ResumeItem
              title={"Software Developer"}
              subtitle={"BMO Financial Group"}
              description={
                ["Built and maintained scalable Angular frontend applications using TypeScript , integrated with Node.js REST APIs now serving thousands of daily users, collaborating closely with designers and backend engineers to deliver secure, accessible banking features. Designed and implemented Node.js backend services and APIs , integrating with databases and internal systems to support secure, high-traffic banking workflows.",
                "Contributed to the user onboarding UI for the Bank of the West conversion, building Angular components that greeted and guided newly migrated customers as they became BMO users, supporting a smooth transition for 12,000 customers and 33,000 users.",
                "Developed and maintained micro-frontend Angular applications , enabling independent team deployments and reducing cross-team release dependencies while supporting CI/CD pipelines and safe production rollouts."
              ]}
              year={"May 2022 - Current"}
            />
            <ResumeItem
              title={"Sports Data Analyst Intern"}
              subtitle={"Canadian Tire"}
              description={
                ["Developed Python-based scraping and ETL pipelines to collect sports performance data from external sources and persist it to cloud-hosted databases.",
                "Integrated cloud-based workflows using Microsoft Azure to update and maintain performance databases with newly collected data.",
                "Analyzed historical and current athlete performance data to develop models and metrics used to predict future performance outcomes."
              ]}
              year={"Jan 2022 - Apr 2022"}
            />
            <ResumeItem
              title={"Financial Data Analyst Intern"}
              subtitle={"Future Stars Sports"}
              description={
                ["Consists of working on projects, researching new technologies that we could utilize, perform data entry, verification,and back-up; maintenance of database. Provide creative alternatives and recommendations to reduce costs and improve financial performance. Identify trends, advise company, and recommend actions to a Finance Manager based on sound analysis."
              ]}
              year={"Apr 2021 - Dec 2021"}
            />
          </div>
          <div className="smalltitle">
            <SmallTitle
              className="smalltitle"
              icon={school}
              title={"Education"}
            />
          </div>
          <div className="education-content">
            <ResumeItem
              title={"BSC Computer Science"}
              subtitle={"Carleton University"}
              description={
                ["Throughout my academic journey, I not only acquired coding skills but also delved into the theoretical foundations of programming. This included understanding various data structures such as linked lists, binary trees, and dictionaries, as well as learning essential algorithms like Dijkstra's algorithm. Moreover, I gained insights into how data is stored and interpreted at the bit and byte level, explored code design patterns, and dived into parallel programming, among other valuable skills. These experiences have equipped me with a solid foundation for my future career endeavors."
                ]}
              year={"Sept 2017 - Apr 2022"}
            />
          </div>
        </InnerLayout>
      </ResumeViewStyled>
    </MainLayout>
  );
};

const ResumeViewStyled = styled.header`
  height: max-content;
  width: 100%;
  .smalltitle {
    padding: 2rem 0;
  }
  .resume-content,
  .education-content {
    border-left: 2px solid var(--border-color);
  }
`;
