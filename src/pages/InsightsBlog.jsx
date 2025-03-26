"use client"
import { motion } from "framer-motion"

const InsightsBlog = () => {
  const articles = [
    {
      title: "Optimizing Cargo for Long-Duration Mars Missions",
      excerpt:
        "Exploring the unique challenges of cargo management for missions to the Red Planet and how AI-driven solutions are changing the game.",
      author: "Dr. Sarah Chen",
      date: "June 15, 2023",
      category: "Research",
      readTime: "8 min read",
      image: "/placeholder.svg?height=300&width=600",
    },
    {
      title: "The Psychology of Space: Designing Storage for Astronaut Wellbeing",
      excerpt:
        "How thoughtful cargo organization can impact crew morale and psychological health during extended missions.",
      author: "Marcus Johnson",
      date: "May 22, 2023",
      category: "Human Factors",
      readTime: "6 min read",
      image: "/placeholder.svg?height=300&width=600",
    },
    {
      title: "Machine Learning in Space: Predicting Supply Needs Before They Arise",
      excerpt: "Advanced algorithms are now capable of forecasting resource consumption with unprecedented accuracy.",
      author: "Dr. Aisha Patel",
      date: "April 10, 2023",
      category: "Technology",
      readTime: "10 min read",
      image: "/placeholder.svg?height=300&width=600",
    },
    {
      title: "Case Study: How StowMate Optimized the Artemis III Lunar Mission",
      excerpt:
        "A detailed look at how our cargo management system helped NASA maximize the scientific payload for the return to the Moon.",
      author: "Carlos Rodriguez",
      date: "March 5, 2023",
      category: "Case Study",
      readTime: "12 min read",
      image: "/placeholder.svg?height=300&width=600",
    },
    {
      title: "The Future of Autonomous Cargo Management in Space",
      excerpt: "Robotic systems and AI are set to revolutionize how we handle supplies in orbit and beyond.",
      author: "Dr. Sarah Chen",
      date: "February 18, 2023",
      category: "Future Tech",
      readTime: "7 min read",
      image: "/placeholder.svg?height=300&width=600",
    },
    {
      title: "Standardizing Cargo Protocols Across International Space Agencies",
      excerpt:
        "Efforts to create universal systems for cargo management are gaining momentum among global space organizations.",
      author: "Marcus Johnson",
      date: "January 30, 2023",
      category: "Industry",
      readTime: "5 min read",
      image: "/placeholder.svg?height=300&width=600",
    },
  ]

  const categories = ["All", "Research", "Technology", "Human Factors", "Case Study", "Future Tech", "Industry"]

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  }

  return (
    <div className="min-h-screen bg-[#F5F5F5] py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeIn}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl font-bold text-[#1A237E] mb-4">Insights & Research</h1>
          <p className="text-xl text-[#607D8B] max-w-3xl mx-auto">
            Explore the latest developments in space logistics and cargo management.
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeIn}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mb-8"
        >
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category, index) => (
              <button
                key={index}
                className={`px-4 py-2 rounded-full text-sm font-medium ${
                  index === 0
                    ? "bg-[#1A237E] text-white"
                    : "bg-white text-[#607D8B] hover:bg-[#1A237E] hover:text-white"
                } transition-colors`}
              >
                {category}
              </button>
            ))}
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.map((article, index) => (
            <motion.article
              key={index}
              initial="hidden"
              animate="visible"
              variants={fadeIn}
              transition={{ duration: 0.5, delay: 0.1 * index + 0.3 }}
              className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
            >
              <img src={article.image || "/placeholder.svg"} alt={article.title} className="w-full h-48 object-cover" />
              <div className="p-6">
                <div className="flex items-center mb-2">
                  <span className="text-xs font-medium text-white bg-[#FF6D00] px-2 py-1 rounded-full">
                    {article.category}
                  </span>
                  <span className="text-xs text-[#607D8B] ml-2">{article.readTime}</span>
                </div>
                <h2 className="text-xl font-bold text-[#1A237E] mb-2">{article.title}</h2>
                <p className="text-[#607D8B] mb-4">{article.excerpt}</p>
                <div className="flex justify-between items-center">
                  <div className="text-sm">
                    <span className="font-medium text-[#212121]">{article.author}</span>
                    <span className="text-[#607D8B] ml-2">{article.date}</span>
                  </div>
                  <button className="text-[#1A237E] font-medium hover:text-[#FF6D00] transition-colors">
                    Read More →
                  </button>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeIn}
          transition={{ duration: 0.5, delay: 0.9 }}
          className="mt-12 text-center"
        >
          <button className="bg-white text-[#1A237E] border border-[#1A237E] px-6 py-3 rounded-md hover:bg-[#1A237E] hover:text-white transition-colors">
            Load More Articles
          </button>
        </motion.div>

        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeIn}
          transition={{ duration: 0.5, delay: 1.1 }}
          className="mt-16 bg-[#1A237E] text-white rounded-lg shadow-lg p-8"
        >
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl font-semibold mb-4">Subscribe to Our Newsletter</h2>
            <p className="mb-6">
              Stay updated with the latest research, insights, and developments in space logistics.
            </p>
            <form className="flex flex-col sm:flex-row gap-4 justify-center">
              <input
                type="email"
                placeholder="Your email address"
                className="px-4 py-2 rounded-md text-[#212121] focus:outline-none focus:ring-2 focus:ring-[#FF6D00]"
              />
              <button
                type="submit"
                className="bg-[#FF6D00] text-white px-6 py-2 rounded-md hover:bg-[#FF8F00] transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default InsightsBlog

