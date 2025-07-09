"use client";

import { useState } from "react";
import Head from "next/head";

const PortfolioPage = () => {
  const [activeTab, setActiveTab] = useState("all");
  const [selectedProject, setSelectedProject] = useState(null);

  // Portfolio data
  const portfolioItems = [
    {
      id: 1,
      title: "Concert Sound System",
      category: "live",
      description:
        "Full sound system design and implementation for a 10,000-person outdoor concert.",
      image: "/portfolio/concert.jpg",
      tags: ["Live Sound", "Line Array", "System Design"],
    },
    {
      id: 2,
      title: "Studio Recording Suite",
      category: "studio",
      description:
        "Professional recording studio design with acoustic treatment and high-end equipment.",
      image: "/portfolio/studio.jpg",
      tags: ["Acoustic Treatment", "Equipment Setup", "Soundproofing"],
    },
    {
      id: 3,
      title: "Corporate Event AV",
      category: "event",
      description:
        "Audio-visual solutions for a 3-day corporate conference with multiple stages.",
      image: "/portfolio/corporate.jpg",
      tags: ["Conference Sound", "Wireless Mics", "Live Streaming"],
    },
    {
      id: 4,
      title: "Home Theater Installation",
      category: "installation",
      description:
        "Custom 7.1.4 Dolby Atmos home theater with acoustic paneling and hidden speakers.",
      image: "/portfolio/theater.jpg",
      tags: ["Home Theater", "Dolby Atmos", "Acoustic Design"],
    },
    {
      id: 5,
      title: "Jazz Club Sound System",
      category: "live",
      description:
        "Intimate venue sound system optimized for acoustic jazz performances.",
      image: "/portfolio/jazzclub.jpg",
      tags: ["Venue Sound", "Jazz Acoustics", "Monitor System"],
    },
    {
      id: 6,
      title: "Podcast Studio",
      category: "studio",
      description: "Turnkey podcast production studio with video capabilities.",
      image: "/portfolio/podcast.jpg",
      tags: ["Podcasting", "Voice Recording", "Video Podcast"],
    },
  ];

  // Filter items based on active tab
  const filteredItems =
    activeTab === "all"
      ? portfolioItems
      : portfolioItems.filter((item) => item.category === activeTab);

  // Categories for filtering
  const categories = [
    { id: "all", name: "All Projects" },
    { id: "live", name: "Live Sound" },
    { id: "studio", name: "Studio Services" },
    { id: "event", name: "Event Production" },
    { id: "installation", name: "Installations" },
  ];

  return (
    <>
      <Head>
        <title>Our Portfolio | Professional Sound Services</title>
        <meta
          name="description"
          content="Explore our portfolio of professional sound services including live events, studio recordings, and custom installations."
        />
      </Head>

      <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-white">
        {/* Hero Section */}
        <section className="relative py-20 bg-gradient-to-r from-orange-950 to-amber-950 ">
          <div className="container mx-auto px-4 text-center pt-20">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-amber-500 to-orange-700">
              Our Sound Portfolio
            </h1>
            <p className="text-xl text-amber-200 max-w-3xl mx-auto">
              Showcasing our best work in live sound, studio production, event
              management, and custom installations.
            </p>
          </div>
        </section>

        {/* Filter Navigation */}
        <section className="py-12 bg-gray-900/90 sticky top-0 z-10 backdrop-blur-sm border-b border-orange-900">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap justify-center gap-2">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setActiveTab(category.id)}
                  className={`px-6 py-2 rounded-full transition-all ${
                    activeTab === category.id
                      ? "bg-orange-800 text-white shadow-lg shadow-orange-900/30"
                      : "bg-gray-800 text-amber-200 hover:bg-gray-700"
                  }`}
                >
                  {category.name}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Portfolio Grid Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredItems.map((item) => (
                <div
                  key={item.id}
                  className="group relative overflow-hidden rounded-xl border border-orange-900/50 bg-gray-800/70 hover:bg-gray-700/80 transition-all duration-300 hover:shadow-lg hover:shadow-orange-900/20"
                  onClick={() => setSelectedProject(item)}
                >
                  <div className="aspect-w-16 aspect-h-9 overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                      <div>
                        <h3 className="text-xl font-bold text-white mb-2">
                          {item.title}
                        </h3>
                        <div className="flex flex-wrap gap-2">
                          {item.tags.map((tag, index) => (
                            <span
                              key={index}
                              className="text-xs bg-orange-900/50 text-amber-200 px-2 py-1 rounded"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-amber-200 mb-2">
                      {item.title}
                    </h3>
                    <p className="text-amber-300/80 text-sm">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-16 bg-orange-950/50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12 text-amber-200">
              Client Testimonials
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  quote:
                    "The sound quality at our festival was phenomenal thanks to their expertise.",
                  name: "Sarah Johnson",
                  company: "Music Festival Director",
                  rating: 5,
                },
                {
                  quote:
                    "Our podcast studio sounds better than we ever imagined possible.",
                  name: "Michael Chen",
                  company: "Podcast Network",
                  rating: 5,
                },
                {
                  quote:
                    "The home theater installation was flawless - it's like being at the cinema.",
                  name: "David & Emily Wilson",
                  company: "Homeowners",
                  rating: 5,
                },
              ].map((testimonial, index) => (
                <div
                  key={index}
                  className="bg-gray-900/70 p-8 rounded-xl border border-orange-900/50"
                >
                  <div className="flex mb-4">
                    {[...Array(5)].map((_, i) => (
                      <svg
                        key={i}
                        className={`w-5 h-5 ${
                          i < testimonial.rating
                            ? "text-amber-500"
                            : "text-gray-700"
                        }`}
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <p className="text-amber-200 italic mb-6">
                    "{testimonial.quote}"
                  </p>
                  <div>
                    <p className="font-medium text-amber-400">
                      {testimonial.name}
                    </p>
                    <p className="text-sm text-amber-300/70">
                      {testimonial.company}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 bg-gray-900/80">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12 text-amber-200">
              By The Numbers
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              {[
                { number: "250+", label: "Events Supported" },
                { number: "40+", label: "Studios Designed" },
                { number: "100%", label: "Client Satisfaction" },
                { number: "15+", label: "Years Experience" },
              ].map((stat, index) => (
                <div key={index} className="p-6">
                  <p className="text-5xl font-bold text-amber-500 mb-2">
                    {stat.number}
                  </p>
                  <p className="text-amber-300">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Project Modal */}
        {selectedProject && (
          <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
            <div className="relative bg-gray-900 rounded-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto border border-orange-900">
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 p-2 rounded-full bg-orange-900 hover:bg-orange-800 transition-colors"
              >
                <svg
                  className="w-6 h-6 text-amber-200"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>

              <img
                src={selectedProject.image}
                alt={selectedProject.title}
                className="w-full h-96 object-cover"
              />

              <div className="p-8">
                <h2 className="text-3xl font-bold text-amber-200 mb-4">
                  {selectedProject.title}
                </h2>

                <div className="flex flex-wrap gap-2 mb-6">
                  {selectedProject.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="bg-orange-900/50 text-amber-200 px-3 py-1 rounded-full text-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <p className="text-amber-300 mb-6">
                  {selectedProject.description}
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                  <div>
                    <h3 className="text-lg font-semibold text-amber-400 mb-2">
                      Challenge
                    </h3>
                    <p className="text-amber-200">
                      {
                        [
                          "Achieving perfect sound coverage in a challenging venue",
                          "Balancing budget with professional quality requirements",
                          "Integrating with existing architecture seamlessly",
                          "Meeting tight deadlines for high-profile event",
                        ][selectedProject.id % 4]
                      }
                    </p>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-amber-400 mb-2">
                      Solution
                    </h3>
                    <p className="text-amber-200">
                      {
                        [
                          "Custom speaker placement and acoustic treatment",
                          "Hybrid system combining new and existing equipment",
                          "Hidden wiring and custom speaker enclosures",
                          "Round-the-clock installation team",
                        ][selectedProject.id % 4]
                      }
                    </p>
                  </div>
                </div>

                <div className="border-t border-orange-900 pt-6">
                  <h3 className="text-lg font-semibold text-amber-400 mb-4">
                    Technologies Used
                  </h3>
                  <div className="flex flex-wrap gap-3">
                    {[
                      "Line Array Speakers",
                      "Digital Mixers",
                      "Acoustic Panels",
                      "Wireless Systems",
                      "DSP Processors",
                      "Recording Software",
                    ]
                      .slice(0, 4)
                      .map((tech, index) => (
                        <div
                          key={index}
                          className="flex items-center bg-gray-800 px-4 py-2 rounded-full"
                        >
                          <div className="w-2 h-2 bg-amber-500 rounded-full mr-2"></div>
                          <span className="text-sm text-amber-200">{tech}</span>
                        </div>
                      ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default PortfolioPage;
