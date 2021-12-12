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
              title={"Sports Data Analyst Intern"}
              subtitle={"Canadian Tire"}
              description={
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. "
              }
              year={"Jan 2022 -"}
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
                "Over the course of my degree, I have learned, languages such as Swift, Python, JavaScript, Java, C/C++, Prolog, SQL, Kotlin as well as work with WebDriverIO, Node.js, React, JSON, CSS, MongoDB, PostgreSQL, Redux, Jupyter and Git."
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
  width: 100%;
  height: max-content;
  .smalltitle {
    padding: 2rem 0;
  }
  .resume-content,
  .education-content {
    border-left: 2px solid var(--border-color);
  }
`;
