"use client";

import { useInView } from "react-intersection-observer";
import { Briefcase, Trophy, Calendar, Code } from "lucide-react";
import SectionAnimations from "@/components/section-animations";

interface ExperienceProps {
  data: {
    workExperience: Array<{
      title: string;
      company: string;
      duration: string;
      type: string;
    }>;
    internships: Array<{
      title: string;
      company: string;
      duration: string;
      type: string;
    }>;
    hackathons: Array<{
      name: string;
      project: string;
      role: string;
      result: string;
      date: string;
    }>;
    openSource: Array<{
      project: string;
      organization: string;
      role: string;
      date: string;
    }>;
  };
}

export default function Experience({ data }: ExperienceProps) {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  return (
    <SectionAnimations sectionId="experience">
      <section id="experience" className="py-20 px-4 bg-black/20">
        <div className="max-w-6xl mx-auto">
          <div
            ref={ref}
            className={`transition-all duration-1000 ${
              inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-center text-white mb-12">
              <span className="bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent">
                Experience
              </span>
            </h2>

            {/* Main Grid: Left (Work + Open Source), Right (Internships + Hackathons) */}
            <div className="grid md:grid-cols-2 gap-12">
              {/* Left Column */}
              <div className="space-y-12">
                {/* Work Experience */}
                <div>
                  <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
                    <Briefcase className="mr-3 text-blue-400" size={24} />
                    Work Experience
                  </h3>
                  <div className="space-y-6">
                    {data.workExperience.map((job, index) => (
                      <div
                        key={index}
                        className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-all duration-300 transform hover:scale-105"
                      >
                        <h4 className="text-xl font-semibold text-white mb-2">
                          {job.title}
                        </h4>
                        <p className="text-blue-400 mb-2">{job.company}</p>
                        <div className="flex items-center space-x-2">
                          <Calendar size={16} className="text-gray-400" />
                          <span className="text-gray-400">{job.duration}</span>
                        </div>
                        <span className="text-gray-500 text-sm mt-1 block">
                          {job.type}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Open Source Contributions */}
                {data.openSource.length > 0 && (
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
                      <Code className="mr-3 text-pink-400" size={24} />
                      Open Source Contributions
                    </h3>
                    <div className="space-y-4">
                      {data.openSource.map((contrib, index) => (
                        <a
                          key={index}
                          href={contrib.project}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="block bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-4 hover:bg-white/10 transition-all duration-300 transform hover:scale-105"
                        >
                          {/* Top Row: Bullet + Project */}
                          <div className="flex items-center space-x-2 mb-1 space-y-1">
                            <div className="w-3 h-3 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full" />
                            <span className="text-white font-semibold truncate">
                              {contrib.project.replace(/^https?:\/\//, "")}
                            </span>
                          </div>

                          {/* Organization */}
                          <span className="block text-gray-300 text-sm">
                            {contrib.organization}
                          </span>

                          {/* Role and Date */}
                          <span className="block text-gray-400 text-sm italic">
                            {contrib.role} • {contrib.date}
                          </span>
                        </a>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* Right Column */}
              <div className="space-y-12">
                {/* Internships */}
                <div>
                  <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
                    <Briefcase className="mr-3 text-green-400" size={24} />
                    Internships
                  </h3>
                  <div className="space-y-6">
                    {data.internships.map((internship, index) => (
                      <div
                        key={index}
                        className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-all duration-300 transform hover:scale-105"
                      >
                        <h4 className="text-xl font-semibold text-white mb-2">
                          {internship.title}
                        </h4>
                        <p className="text-green-400 mb-2">
                          {internship.company}
                        </p>
                        <div className="flex items-center space-x-2">
                          <Calendar size={16} className="text-gray-400" />
                          <span className="text-gray-400">{internship.duration}</span>
                        </div>
                        <span className="text-gray-500 text-sm mt-1 block">
                          {internship.type}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Hackathons */}
                {data.hackathons.length > 0 && (
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
                      <Trophy className="mr-3 text-yellow-400" size={24} />
                      Hackathons
                    </h3>
                    <div className="space-y-4">
                      {data.hackathons.map((hackathon, index) => (
                        <div
                          key={index}
                          className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-4 hover:bg-white/10 transition-all duration-300 transform hover:scale-105"
                        >
                          <div className="flex flex-col space-y-1">
                            <div className="flex items-center space-x-3">
                              <div className="w-3 h-3 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full" />
                              <span className="text-white font-semibold">
                                {hackathon.name}
                              </span>
                            </div>
                            <span className="text-gray-300 text-sm">
                              {hackathon.project}
                            </span>
                            <span className="text-gray-400 text-sm italic">
                              {hackathon.role} • {hackathon.result} • {hackathon.date}
                            </span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </SectionAnimations>
  );
}
