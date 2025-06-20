// app/faq/page.tsx or components/Faq.tsx
"use client";

import React from "react";

const faqItems = Array(5).fill({
  question: "QUESTION ?",
  answer:
    "We have successfully completed works such as interior decorating of posh offices and showrooms, software centers BPO’s Data centre’s and fabrication of Atriums and ACP cladding and Glass cladding for multi storey buildings in Hyderabad and other metros for clientele base, which includes multinationals and corporate houses. We have also completed more than a thirty eight hospitals interiors through out India.",
});

const Faq = () => {
  return (
    <section className="py-16 bg-white text-gray-800">
      <div className="max-w-6xl mx-auto px-4">
        {faqItems.map((item, index) => (
          <div key={index} className="mb-8">
            <h3 className="font-bold text-2xl uppercase mb-2">
              {item.question}
            </h3>
            <p className="text-l leading-relaxed">{item.answer}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Faq;
