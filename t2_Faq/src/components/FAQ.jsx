import React from "react";
import FAQitem from "./FAQitem";

function FAQ() {
  const faqs = [
    {
      question: "How many bones does a cat have?",
      answer: "A cat has 230 bones - 6 more than a human",
    },
    {
      question: "How much do cats sleep?",
      answer: "The average cat sleeps 12-16 hours per day",
    },
    {
      question: "How long do cats live",
      answer:
        "Outdoor cats live 5 years on average. Indoor\ncats live 15 years on average.",
    },
  ];
  return (
    <div className="">
      {faqs.map((e, i) => (
        <div key={i} className="">
          <FAQitem props={e} i={i} />
        </div>
      ))}
    </div>
  );
}

export default FAQ;
