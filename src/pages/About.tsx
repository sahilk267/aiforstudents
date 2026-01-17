import React from 'react';

const About: React.FC = () => {
  const team = [
    {
      name: "Dr. Sarah Chen",
      role: "Founder & CEO",
      bio: "Former AI researcher at Google with 15+ years in education technology",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&h=256&q=80"
    },
    {
      name: "James Wilson",
      role: "Head of Education",
      bio: "20+ years experience in curriculum development and educational technology",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&h=256&q=80"
    },
    {
      name: "Dr. Maria Rodriguez",
      role: "AI Research Director",
      bio: "PhD in Machine Learning, specializing in educational AI applications",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&h=256&q=80"
    }
  ];

  const milestones = [
    {
      year: "2020",
      title: "Foundation",
      description: "Started with a vision to revolutionize AI education"
    },
    {
      year: "2021",
      title: "First School Partnership",
      description: "Partnered with 10 leading schools to implement AI curriculum"
    },
    {
      year: "2022",
      title: "Platform Launch",
      description: "Launched our AI-powered learning platform"
    },
    {
      year: "2023",
      title: "Global Expansion",
      description: "Expanded to 50+ schools across 5 countries"
    }
  ];

  return (
    <div className="relative min-h-screen bg-gradient-to-b from-gray-900 via-blue-900 to-gray-900">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-20"></div>

      {/* Content */}
      <div className="relative z-10">
        {/* Hero Section */}
        <div className="pt-32 pb-16 text-center">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-500/10 text-blue-400 border border-blue-500/20">
              About Us
            </span>
            <h1 className="mt-6 text-4xl sm:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
              Transforming Education Through AI
            </h1>
            <p className="mt-4 text-xl text-gray-300">
              We're on a mission to make AI education accessible to every student
            </p>
          </div>
        </div>

        {/* Mission Section */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10">
            <h2 className="text-3xl font-bold text-white mb-6">Our Mission</h2>
            <p className="text-gray-300 text-lg leading-relaxed">
              We believe that understanding AI is essential for the next generation. Our mission is to 
              provide high-quality AI education that is accessible, engaging, and practical. Through 
              our innovative platform and expert-led programs, we're preparing students for a future 
              where AI literacy is as fundamental as reading and writing.
            </p>
          </div>
        </div>

        {/* Team Section */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <h2 className="text-3xl font-bold text-center text-white mb-12">Our Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <div
                key={index}
                className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10 text-center"
              >
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-32 h-32 rounded-full mx-auto mb-4"
                />
                <h3 className="text-xl font-semibold text-white mb-1">{member.name}</h3>
                <p className="text-blue-400 mb-2">{member.role}</p>
                <p className="text-gray-300">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Milestones Section */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <h2 className="text-3xl font-bold text-center text-white mb-12">Our Journey</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {milestones.map((milestone, index) => (
              <div
                key={index}
                className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10"
              >
                <div className="text-2xl font-bold text-blue-400 mb-2">{milestone.year}</div>
                <h3 className="text-xl font-semibold text-white mb-2">{milestone.title}</h3>
                <p className="text-gray-300">{milestone.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Join Us in Shaping the Future of Education
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Whether you're a student, educator, or school administrator, we'd love to hear from you
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
              Contact Us
            </button>
            <button className="px-8 py-3 bg-white/10 text-white rounded-lg hover:bg-white/20 transition-colors">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About; 