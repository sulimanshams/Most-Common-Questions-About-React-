import { useState } from "react";
import "./styles.css";

const faqs = [
  {
    title: "How long does it take to learn React?",
    text: "Learning React typically takes 3 to 6 weeks if you already know HTML, CSS, and JavaScript well. You can learn the basics like components, props, and state in the first week, and then move on to hooks, routing, and state management in the following weeks. However, mastering React and building real-world applications may take a few months of consistent practice and project-based learning",
  },
  {
    title: "Where Should I Start Learning React??",
    text: "To start learning React, you should first have a solid understanding of HTML, CSS, and especially JavaScript (ES6). Once you're comfortable with JavaScript concepts like functions, arrays, objects, and async/await, begin with the official React documentation or tutorials on platforms like freeCodeCamp, Scrimba, or YouTube. Start by learning how to create components, use JSX, manage props and state, and then move on to hooks like useState and useEffect. Building small projects along the way is the best way to learn and stay motivated.",
  },
  {
    title: "What Can I Do After Learning React?",
    text: "After learning React, you can build modern web applications, work as a frontend developer, or even create mobile apps using React Native. React is highly in demand, so you can apply for remote jobs, freelance projects, or join tech companies.",
  },
  {
    title: "How much can i Earn after learning React ",
    text: "After learning React, you can earn between $30,000 to $100,000+ per year, depending on your experience, skills, and location. Freelancers and remote developers can also earn well with real projects.",
  },
];

export default function App() {
  return (
    <div>
      <Accordion data={faqs} />
    </div>
  );
}

function Accordion({ data }) {
  return (
    <div className="accordion">
      {data.map((el, i) => (
        <AccordionItem title={el.title} text={el.text} num={i} />
      ))}
    </div>
  );
}

function AccordionItem({ num, title, text }) {
  const [isOpen, setIsOpen] = useState(false);

  function handleToggle() {
    setIsOpen((isOpen) => !isOpen);
  }
  return (
    <div className={`item ${isOpen ? "open" : ""}`} onClick={handleToggle}>
      <p className="number">{num < 9 ? `0${num + 1}` : num + 1}</p>
      <p className="title">{title}</p>
      <p className="icon">{isOpen ? `-` : `+`}</p>

      {isOpen && <p className="content-box">{text}</p>}
    </div>
  );
}
