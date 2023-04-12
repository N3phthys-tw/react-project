import "./FAQ.css";
import { useState } from "react";
import { GoChevronDown, GoChevronRight } from "react-icons/go";

const FAQ = ({ qdata }) => {
  const [expandedIndex, setExpandedIndex] = useState(-1);

  const handleClick = (index) => {
    if (index === expandedIndex) {
      setExpandedIndex(-1);
    } else {
      setExpandedIndex(index);
    }
  };

  const renderedQuestions = qdata.map((data, index) => {
    const isExpanded = index === expandedIndex;

    const icon = (
      <span>{isExpanded ? <GoChevronDown /> : <GoChevronRight />}</span>
    );

    return (
      <div key={data.id}>
        <div className="question" onClick={() => handleClick(index)}>
          {icon}
          {data.question}
        </div>
        {isExpanded && <div className="answer">{data.answer}</div>}
      </div>
    );
  });

  return (
    <div className="faq-container">
      <div className="faq-title">
        <h1>常見問題</h1>
      </div>
      <div className="faq-content-container">{renderedQuestions}</div>
    </div>
  );
};

export default FAQ;
