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
                "Implementing initiatives as required to deliver business objectives."  }
              year={"May 2022 - Current"}
            />
            <ResumeItem
              title={"Sports Data Analyst Intern"}
              subtitle={"Canadian Tire"}
              description={
                "Building and maintaining large sport performance databases using automated data collection tools.\n Use Python to data mine large quantities of historical Olympic and senior-level performance data. Create statistical models and performance metrics to evaluate future athlete potential, Develop interactive tools/dashboards for Canadian Sport Organizations.  "
              }
              year={"Jan 2022 - Apr 2022"}
            />
            <ResumeItem
              title={"Financial Data Analyst Intern"}
              subtitle={"Future Stars Sports"}
              description={
                "Consists of working on projects, researching new technologies that we could utilize, perform data entry, verification,and back-up; maintenance of database. Provide creative alternatives and recommendations to reduce costs and improve financial performance. Identify trends, advise company, and recommend actions to a Finance Manager based on sound analysis."
              }
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
                "Over the course of my degree, not only did I learn how to code but also theory behind it. Data structures, (linked lists, binary trees, dictionaries, etc), useful algorithms (e.g. Dijkstra's algorithm), the ways data is stored and interpreted at the bit and byte level , code design patterns, parallel programming & many more skills that has set me up for the rest of my career.  "
              }
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
