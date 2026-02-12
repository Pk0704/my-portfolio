import React, { useState, useRef, useEffect } from 'react';
import './ExperienceSection.css';

const experiences = [
  {
    id: 1,
    date: 'Jan 2026 – March 2025',
    title: 'Quantitative Trader Intern',
    company: 'Royal Bank of Canada Capital Markets',
    bullets: [
      'Worked with the semi-systematic Internation ETF Market-Making Team, working on create/redeem baskets.',
      'Created a pricing algorithm using ML in a pipeline with proprietary data to predict local opening of APAC ETF prices during US overnight hours.'
    ]
  },
  {
    id: 2,
    date: 'Jun 2025 – Aug 2025',
    title: 'Quantitative Software Developer Intern',
    company: 'Royal Bank of Canada Capital Markets',
    bullets: [
      'Architected data pipeline integrating options trade data from KDB+ queries into an IsolationForest machine learning model to detect trading anomalies, processing high-frequency data and slashing error rates from 3% to 0.34% while enabling automated market surveillance operations.',
      'Worked closely with live trade data and FX systems.',
      'Engineered statistical analysis pipeline querying EOD trade data from Dremio, performing comprehensive market analytics on equities, and integrating a RAG chatbot using LLM technology to deliver natural language insights and automated report generation for trading desk decision-making.'
    ]
  },
  {
    id: 3,
    date: 'Jan 2025 – Present',
    title: 'Lead Data Engineer Intern',
    company: 'Biokind Analytics',
    bullets: [
      'Directed 5 data scientists in a high-impact project for Alliance NYC, uncovering statistical trends in HIV data.',
      'Architected and implemented an automated, microservices-driven data ingestion pipeline for Master Client integration—leveraging Apache Kafka for real-time streaming, normalization, fuzzy duplicate detection, and unique ID generation to ensure transactional database integrity and asynchronous Excel synchronization at scale.'
    ]
  },
  {
    id: 4,
    date: 'May 2024 – July 2024',
    title: 'Data Science Intern',
    company: 'IFM Investors',
    bullets: [
        'Engineered a back-end SQL database to manage $900 million in past and ongoing deals, successfully migrating 100% of investors to the system by integrating data into eFront and Aladdin, providing company-wide data accessibility, enabling simpler, centralized deal tracking.',
        'Accomplished enhanced strategic decision-making for over 20 companies, accelerating deal closures, by integrating data from financial statements and SQL databases, using Docker containers and Tableau to create reproducible financial analysis workflows and reports that delivered targeted sector insights.'
    ]
  },
];

export default function ExperienceSection() {
  const [index, setIndex] = useState(0);
  const container = useRef(null);
  const isThrottled = useRef(false);
  const clamp = (num, min, max) => Math.max(min, Math.min(num, max));

  const onWheel = (e) => {
    e.preventDefault();
    if (isThrottled.current) return;
    isThrottled.current = true;
    setTimeout(() => (isThrottled.current = false), 800);
    const delta = e.deltaY;
    setIndex(i => clamp(i + (delta > 0 ? 1 : -1), 0, experiences.length - 1));
  };

  useEffect(() => {
    const el = container.current;
    el.addEventListener('wheel', onWheel, { passive: false });
    return () => el.removeEventListener('wheel', onWheel);
  }, []);

  return (
    <section id="experience" className="experience-section" ref={container}>
      <div
        className="experience-slides"
        style={{ transform: `translateY(-${index * 100}vh)` }}
      >
        {experiences.map((exp, idx) => {
          // alternate cards left/right
          const side = idx % 2 === 0 ? 'left' : 'right';
          return (
            <div className="experience-slide" key={exp.id}>
              <div className={`exp-card ${side}`}>
                <div className="exp-date">{exp.date}</div>
                <h3 className="exp-title">{exp.title}</h3>
                <div className="exp-company">{exp.company}</div>
                <ul className="exp-bullets">
                  {exp.bullets.map((b, i) => (
                    <li key={i}>{b}</li>
                  ))}
                </ul>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}