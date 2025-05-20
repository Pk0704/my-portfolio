import React, { useState, useRef, useEffect } from 'react';
import './ExperienceSection.css';

const experiences = [
  {
    id: 1,
    date: 'Jun 2025 – Aug 2025',
    title: 'Quantitative Software Developer Intern',
    company: 'Royal Bank of Canada Capital Markets',
    bullets: [
      'Designed and implemented a centralized monitoring solution for Clarity-DEA using CloudWatch, TypeScript, AWS CDK, reducing MTTR by 40%',
      'Deployed CloudWatch alarms/dashboards for Redshift, Lambda, Glue, Step Functions across multiple accounts',
      'Built Level 3 CDK constructs to standardize monitoring deployments and improve scalability'
    ]
  },
  {
    id: 2,
    date: 'Jan 2025 – Present',
    title: 'Lead Data Engineer Intern',
    company: 'Biokind Analytics',
    bullets: [
      'Incoming Summer 2025'
    ]
  },
  {
    id: 3,
    date: 'May 2024 – July 2024',
    title: 'Data Science Intern',
    company: 'IFM Investors',
    bullets: [
      'Incoming Summer 2025'
    ]
  },
  {
    id: 4,
    date: 'May 2024 – July 2024',
    title: 'AI Safety Researcher',
    company: 'NYU Courant – Pavel Izmailov Lab',
    bullets: [
      'Work on AI Alignment and making black box models transparent'
    ]
  }
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