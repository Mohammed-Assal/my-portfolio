import React from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const Skill = ({ skill, level }) => {
  return (
    <div className="flex flex-col items-center md:w-[100px] w-[87px] md:m-1 md:mx-4 m-1">
      <div className="md:w-[87px] w-[67px]  h-16">
        <CircularProgressbar
          value={level}
          text={`${level}%`}
          styles={buildStyles({
            rotation: 0.75,
            strokeLinecap: "butt",
            pathColor: `#fff, ${level / 100})`,
            textColor: "#D8D2C2",
            trailColor: "#111",
            backgroundColor: "#111",
          })}
          circleRatio={0.5}
        />
      </div>
      <h4 className="text-center text-gray-400  text-[12px]">{skill}</h4>
    </div>
  );
};

const Skills = () => {
  const frontskills = [
    { skill: "HTML & CSS", level: 80 },
    { skill: "JavaScript", level: 90 },
    { skill: "ReactJS", level: 80 },
    { skill: "Next.js", level: 80 },
    { skill: "Tailwind.css", level: 70 },
    { skill: "Bootstrap.css", level: 60 },
    { skill: "Redux.js", level: 70 },
    { skill: "Material-UI", level: 60 },
  ];
  const backskills = [
    { skill: "Node.js", level: 90 },
    { skill: "Express.js", level: 85 },
    { skill: "Mongodb", level: 70 },
    { skill: "JWT", level: 75 },
    { skill: "Hash", level: 100 },
  ];
  const orhetskills = [
    { skill: "AWS", level: 50 },

    { skill: "Git & github", level: 60 },
  ];

  return (
    <div className="flex flex-col md:py-[50px]  md:flex-row">
      <div className="md:w-[50%] w-full my-8">
        <h2 className="text-4xl  font-bold text-white mb-8 text-center">
          Frontend :
        </h2>
        <div className="flex justify-center flex-wrap gap-2">
          {frontskills.map((item, index) => (
            <Skill key={index} skill={item.skill} level={item.level} />
          ))}
        </div>
      </div>
      <div className="md:w-[50%] w-full my-8">
        <h2 className="text-4xl font-bold text-white mb-8 text-center">
          Backend :
        </h2>
        <div className="flex justify-center flex-wrap gap-2">
          {backskills.map((item, index) => (
            <Skill key={index} skill={item.skill} level={item.level} />
          ))}
        </div>
      </div>
      <div className="md:w-[50%] w-full my-8">
        <h2 className="text-4xl font-bold text-white mb-8 text-center">
          Other Tech :
        </h2>
        <div className="flex justify-center flex-wrap gap-2">
          {orhetskills.map((item, index) => (
            <Skill key={index} skill={item.skill} level={item.level} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
