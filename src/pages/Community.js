import React from 'react';

/**
 * Community page describing the shared spaces, events, and parent engagement
 * opportunities at NeZha Academy.
 */
const Community = () => {
  return (
    <div className="container mx-auto px-4 py-10">
      <h2 className="text-3xl font-bold mb-6">Community</h2>
      <p className="mb-4">
        Our community centre is a vibrant hub where members of all ages—from infants to grandparents—come together. With forum spaces and a welcoming café, it offers families a place to connect, relax and learn alongside one another.
      </p>
      <h3 className="text-2xl font-semibold mt-6 mb-3">Events &amp; Activities</h3>
      <p className="mb-4">
        We host annual events such as our Long Table Banquet and parent‑child concerts. These rituals strengthen our community, foster resilience and provide opportunities for shared storytelling and expression.
      </p>
      <h3 className="text-2xl font-semibold mt-6 mb-3">Parent Engagement</h3>
      <p className="mb-4">
        We view parents as partners in our mission. Workshops invite parents to explore the same drama structures that their children experience, enriching family relationships and empowering parents to bring these practices into their homes.
      </p>
    </div>
  );
};

export default Community;