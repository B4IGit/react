import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";

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
            <Skill skill="React" emoji="😘" color="#75F4F4"/>
            <Skill skill="HTML+CSS" emoji="😁" color="#90E0F3"/>
            <Skill skill="JavaScript" emoji="😒" color="yellowgreen"/>
            <Skill skill="Web Design" emoji="😍" color="#B8B3E9"/>
            <Skill skill="Git and Github" emoji="😂" color="#D999B9"/>
            <Skill skill="SQL" emoji="👌" color="#D17B88"/>
        </div>
    )
}

function Skill(props) {
    return (
        <div className="skill" style={{backgroundColor: props.color}}>
            <span>{props.skill}</span>
            <span>{props.emoji}</span>
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
