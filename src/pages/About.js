import React from 'react';

/**
 * About page providing deeper insight into NeZha Academy’s origins, mission,
 * vision and values. Much of this text is inspired by the Drama in
 * Transpersonal Psychology methodology pioneered by Dr. Liu Jiawei.
 */
const About = () => {
  return (
    <div className="container mx-auto px-4 py-10">
      <h2 className="text-3xl font-bold mb-6">About NeZha Academy</h2>
      <p className="mb-4">
        NeZha Academy draws inspiration from the pioneering work of the International Dramatists Association in Drama in Transpersonal Psychology. Our founder, Dr. Liu Jiawei, developed a curriculum that uses dramatic arts to enrich narrative thinking and help children explore the world through storytelling. By harnessing imagination and empathetic engagement, our programs nurture independent thinkers prepared to navigate both their inner and outer worlds.
      </p>

      <h3 className="text-2xl font-semibold mt-8 mb-3">Mission</h3>
      <p className="mb-4">
        Our mission is to revolutionize how children think and learn by integrating drama and transpersonal psychology into education. We cultivate narrative and critical thinking skills and help children understand complex social, familial and ecological issues.
      </p>

      <h3 className="text-2xl font-semibold mt-8 mb-3">Vision</h3>
      <p className="mb-4">
        We envision a world where every child, regardless of background, has access to innovative experiences that promote profound personal growth. Through drama, we use creative arts as a bridge to knowledge, empathy and empowerment, cultivating compassionate and proactive global citizens.
      </p>

      <h3 className="text-2xl font-semibold mt-8 mb-3">Core Values &amp; Services</h3>
      <ul className="list-disc ml-6 space-y-2">
        <li>Unique Educational Philosophy – we stimulate imagination and foster independence through creativity and transpersonal psychology.</li>
        <li>Distinguished Faculty – our team comprises international experts trained in drama and psychology.</li>
        <li>Effective Pedagogy – we embrace joyful, child‑centered learning that honors each child’s curiosity.</li>
        <li>Personalized Learning – small class sizes ensure tailored support for every child.</li>
        <li>Lifelong Impact – we focus on skills like empathy, problem‑solving and communication that endure beyond the stage.</li>
      </ul>

      <h3 className="text-2xl font-semibold mt-8 mb-3">Educational Philosophy</h3>
      <p className="mb-4">
        We believe in the seriousness of play and the crucible paradigm, where teachers and students learn together as co‑explorers. Our classroom environment encourages creativity, critical reflection and cooperation. By integrating phenomenology and hermeneutics into our methodology, we help children and performers alike discover deeper meaning through their experiences.
      </p>
    </div>
  );
};

export default About;