const posts = [
  {
    title: "How to Scale Your Business Globally",
    date: "March 10, 2026",
    excerpt: "Expanding into new markets requires careful planning, local expertise, and the right advisory partner by your side.",
    tag: "Growth",
  },
  {
    title: "Top 5 Mistakes Companies Make When Entering the UAE Market",
    date: "February 22, 2026",
    excerpt: "The UAE offers incredible opportunity, but missteps in compliance and culture can cost you dearly. Here's what to avoid.",
    tag: "Market Entry",
  },
  {
    title: "Why India Is the Next Big Opportunity for Global Brands",
    date: "January 15, 2026",
    excerpt: "With a booming middle class and digital-first consumers, India is rapidly becoming a priority market for international businesses.",
    tag: "Insights",
  },
];

const BlogSection = () => {
  return (
    <section className="py-20 bg-white" id="blog">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-[#09285A] mb-4">Our Blog</h2>
        <p className="text-gray-500 mb-12 text-lg">Insights, strategies, and stories from the world of global business advisory.</p>
        <div className="grid md:grid-cols-3 gap-8">
          {posts.map((post) => (
            <div key={post.title} className="border border-gray-100 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">
              <span className="text-xs font-semibold uppercase tracking-widest text-secondary bg-secondary/10 px-3 py-1 rounded-full">
                {post.tag}
              </span>
              <h3 className="text-xl font-bold text-[#09285A] mt-4 mb-2">{post.title}</h3>
              <p className="text-gray-500 text-sm mb-4">{post.excerpt}</p>
              <p className="text-xs text-gray-400">{post.date}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
