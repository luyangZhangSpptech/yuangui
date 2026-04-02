import React from 'react';

/**
 * Programs page outlining the key initiatives offered by NeZha Academy.
 */
const Programs = () => {
  return (
    <div className="container mx-auto px-4 py-10">
      <h2 className="text-3xl font-bold mb-6">Our Programs</h2>
      <div className="space-y-8">
        <section>
          <h3 className="text-2xl font-semibold mb-2">Scholarship Program</h3>
          <p>
            In partnership with the Da Vinci Education Foundation, we provide scholarships for underprivileged children. These scholarships open doors to top educational opportunities and ensure that every child, regardless of financial means, can benefit from our innovative drama‑based curriculum.
          </p>
        </section>
        <section>
          <h3 className="text-2xl font-semibold mb-2">Mental Health &amp; Life Coaching</h3>
          <p>
            Our programs prioritize mental well‑being and life skills. We support children and families with coaching and guidance that helps them navigate personal and professional challenges, fostering resilience and balanced growth.
          </p>
        </section>
        <section>
          <h3 className="text-2xl font-semibold mb-2">Educational Philosophy</h3>
          <p>
            We champion the seriousness of play and a collaborative classroom culture. Our educators encourage children to think creatively and critically, while cultivating empathy and cooperation through dramatic exploration.
          </p>
        </section>
        <section>
          <h3 className="text-2xl font-semibold mb-2">Training &amp; Research</h3>
          <p>
            Beyond programs for children, we offer training for educators and drama practitioners. Our research, rooted in phenomenology and hermeneutics, investigates how drama and transpersonal psychology improve performance and enhance personal development.
          </p>
        </section>
      </div>
    </div>
  );
};

export default Programs;