import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";

const skills = [
    {
        skill: "React",
        level: "beginner",
        color: "#75F4F4"
    },
    {
        skill: "HTML+CSS",
        level: "advance",
        color: "#90E0F3"
    },
    {
        skill: "JavaScript",
        level: "intermediate",
        color: "yellowgreen"
    },
    {
        skill: "Web Design",
        level: "intermediate",
        color: "#B8B3E9"
    },
    {
        skill: "Git & Github",
        level: "intermediate",
        color: "#D999B9"
    },
    {
        skill: "SQL",
        level: "advance",
        color: "#D17B88"
    },
]

function App() {
    return (
        <div className="card">
            <Avatar />
            <div className="data">
                <Intro />
                {/* Should contain one Skill component
        for each web dev skill that you have,
        customized with props */}
                <SkillList />
            </div>
        </div>
    );
}

function Avatar() {
    return (
        <img className="avatar" src="devin_ledesma.jpg" alt="Devin Ledesma"/>
    )
}

function Intro() {
    return (
        <div>
            <h1>Devin Ledesma</h1>
            <p>Full-stack web developer. When not coding or learning, I like to run, rollerblading, and go to the gym.</p>
        </div>
    )
}

function SkillList() {
    return (
        <div className="skill-list">
            {skills.map(skill=><Skill skill={skill.skill} color={skill.color} level={skill.level} />)}
        </div>
    )
}

function Skill({skill, color, level}) {
    return (
        <div className="skill" style={{backgroundColor: color}}>
            <span>{skill}</span>
            <span>
                {level === 'beginner' && '👶'}
                {level === 'intermediate' && '👍'}
                {level === 'advance' && '💪'}
            </span>
        </div>
    )
}

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
    <StrictMode>
        <App />
    </StrictMode>
);
