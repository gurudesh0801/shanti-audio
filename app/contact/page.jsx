"use client";

import { useState, useRef, useEffect } from "react";
import Head from "next/head";

const page = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    service: "general",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const audioRef = useRef(null);

  const services = [
    { value: "general", label: "General Inquiry" },
    { value: "live", label: "Live Sound Services" },
    { value: "studio", label: "Studio Services" },
    { value: "installation", label: "Sound Installation" },
    { value: "event", label: "Event Sound Management" },
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Play subtle sound on submission
    if (audioRef.current) {
      audioRef.current.currentTime = 0;
      audioRef.current
        .play()
        .catch((e) => console.log("Audio play prevented:", e));
    }

    // Simulate API call
    try {
      await new Promise((resolve) => setTimeout(resolve, 1500));
      setSubmitSuccess(true);
      setFormData({
        name: "",
        email: "",
        message: "",
        service: "general",
      });
    } catch (error) {
      console.error("Submission error:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  // Visual sound wave effect
  const SoundWave = () => {
    const [heights, setHeights] = useState([3, 7, 5, 8, 4, 6, 9, 5, 7]);

    useEffect(() => {
      const interval = setInterval(() => {
        setHeights((prev) =>
          prev.map((h) =>
            Math.max(2, Math.min(10, h + (Math.random() * 4 - 2)))
          )
        );
      }, 300);
      return () => clearInterval(interval);
    }, []);

    return (
      <div className="flex items-end h-12 gap-1">
        {heights.map((h, i) => (
          <div
            key={i}
            className="w-1 bg-blue-400 rounded-t transition-all duration-300"
            style={{ height: `${h * 4}px` }}
          />
        ))}
      </div>
    );
  };

  return (
    <>
      <Head>
        <title>Contact Us | Professional Sound Services</title>
        <meta
          name="description"
          content="Get in touch with our sound services team for professional audio solutions and program management."
        />
      </Head>

      {/* Hidden audio element for interaction sounds */}
      <audio ref={audioRef} src="/sounds/submit-sound.mp3" preload="auto" />

      <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-white">
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-6xl mx-auto">
            {/* Header with animated sound wave */}
            <div className="flex flex-col items-center mb-16 pt-12">
              <h1 className="text-4xl md:text-5xl font-bold text-center mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
                Let's Talk Sound
              </h1>
              <div className="w-40">
                <SoundWave />
              </div>
              <p className="text-lg text-gray-300 text-center mt-6 max-w-2xl">
                Whether you need sound services for an event, installation, or
                ongoing program management, our team is ready to help.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Contact Form */}
              <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700 shadow-xl">
                <h2 className="text-2xl font-semibold mb-6">
                  Send us a message
                </h2>

                {submitSuccess ? (
                  <div className="bg-green-900/30 border border-green-700 rounded-lg p-6 text-center">
                    <div className="text-green-400 text-5xl mb-4">✓</div>
                    <h3 className="text-xl font-medium mb-2">Message Sent!</h3>
                    <p className="text-gray-300">
                      We've received your message and will get back to you soon.
                    </p>
                    <button
                      onClick={() => setSubmitSuccess(false)}
                      className="mt-6 px-6 py-2 bg-green-600 hover:bg-green-700 rounded-full transition-colors"
                    >
                      Send another message
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-sm font-medium text-gray-300 mb-1"
                      >
                        Your Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
                        placeholder="John Smith"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium text-gray-300 mb-1"
                      >
                        Email Address
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
                        placeholder="your@email.com"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="service"
                        className="block text-sm font-medium text-gray-300 mb-1"
                      >
                        Service Needed
                      </label>
                      <select
                        id="service"
                        name="service"
                        value={formData.service}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition appearance-none"
                      >
                        {services.map((service) => (
                          <option key={service.value} value={service.value}>
                            {service.label}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label
                        htmlFor="message"
                        className="block text-sm font-medium text-gray-300 mb-1"
                      >
                        Your Message
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={5}
                        className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
                        placeholder="Tell us about your sound needs..."
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className={`w-full py-3 px-6 rounded-full font-medium transition-all ${
                        isSubmitting
                          ? "bg-blue-700 cursor-not-allowed"
                          : "bg-blue-600 hover:bg-blue-500 shadow-lg hover:shadow-blue-500/30"
                      }`}
                    >
                      {isSubmitting ? (
                        <span className="flex items-center justify-center">
                          <svg
                            className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                          >
                            <circle
                              className="opacity-25"
                              cx="12"
                              cy="12"
                              r="10"
                              stroke="currentColor"
                              strokeWidth="4"
                            ></circle>
                            <path
                              className="opacity-75"
                              fill="currentColor"
                              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                            ></path>
                          </svg>
                          Sending...
                        </span>
                      ) : (
                        "Send Message"
                      )}
                    </button>
                  </form>
                )}
              </div>

              {/* Contact Info & Visual Elements */}
              <div className="space-y-8">
                <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700 shadow-xl">
                  <h2 className="text-2xl font-semibold mb-6">
                    Contact Information
                  </h2>
                  <div className="space-y-6">
                    <div className="flex items-start">
                      <div className="flex-shrink-0 bg-blue-500/20 p-3 rounded-lg">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-6 w-6 text-blue-400"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                          />
                        </svg>
                      </div>
                      <div className="ml-4">
                        <h3 className="text-lg font-medium text-gray-100">
                          Phone
                        </h3>
                        <p className="text-gray-400 mt-1">+1 (555) 123-4567</p>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <div className="flex-shrink-0 bg-purple-500/20 p-3 rounded-lg">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-6 w-6 text-purple-400"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                          />
                        </svg>
                      </div>
                      <div className="ml-4">
                        <h3 className="text-lg font-medium text-gray-100">
                          Email
                        </h3>
                        <p className="text-gray-400 mt-1">
                          contact@soundservices.com
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <div className="flex-shrink-0 bg-green-500/20 p-3 rounded-lg">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-6 w-6 text-green-400"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                          />
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                          />
                        </svg>
                      </div>
                      <div className="ml-4">
                        <h3 className="text-lg font-medium text-gray-100">
                          Office
                        </h3>
                        <p className="text-gray-400 mt-1">
                          123 Sound Avenue, Suite 400
                        </p>
                        <p className="text-gray-400">Audio City, AC 12345</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Service Hours */}
                <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700 shadow-xl">
                  <h2 className="text-2xl font-semibold mb-6">Service Hours</h2>
                  <div className="space-y-4">
                    {[
                      { day: "Monday - Friday", hours: "9:00 AM - 6:00 PM" },
                      { day: "Saturday", hours: "10:00 AM - 4:00 PM" },
                      { day: "Sunday", hours: "Emergency services only" },
                    ].map((item, index) => (
                      <div
                        key={index}
                        className="flex justify-between py-3 border-b border-gray-700 last:border-0"
                      >
                        <span className="text-gray-300">{item.day}</span>
                        <span className="text-gray-400">{item.hours}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Emergency Contact */}
                <div className="bg-red-900/20 backdrop-blur-sm rounded-2xl p-6 border border-red-800/50 shadow-xl">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 bg-red-500/30 p-3 rounded-lg">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6 text-red-400"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                        />
                      </svg>
                    </div>
                    <div className="ml-4">
                      <h3 className="text-lg font-medium text-gray-100">
                        Emergency Sound Support
                      </h3>
                      <p className="text-gray-400 mt-1">
                        For urgent event sound issues, call our 24/7 line:
                      </p>
                      <p className="text-red-400 font-medium mt-2">
                        +1 (555) 987-6543
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default page;
