"use client"

import { useInView } from "react-intersection-observer"
import {
  ExternalLink,
  Bot,
  FileText,
  MessageSquare,
  Shield,
  Calendar,
  Users,
  BarChart3,
  GitBranch,
  BookOpen,
  Code,
} from "lucide-react"
import SectionAnimations from "@/components/section-animations"

interface ProjectsProps {
  data: Array<{
    name: string
    description: string
    technologies: string[]
    features: string[]
    demoUrl?: string
  }>
}

const projectIcons = {
  "HackerRank Astra Human + AI": GitBranch,
  Blogify: FileText,
  "Concrete Crack Segmentation": Shield,
  "My Portfolio": Code,
  Remedi: Calendar,
  StuMate: Users,
  "Whisper Line": MessageSquare,
  "Spotify Talk": BookOpen,
  "User Management System": BarChart3,
}

export default function Projects({ data }: ProjectsProps) {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  })

  const handleDemoClick = (demoUrl?: string) => {
    if (demoUrl) {
      window.open(demoUrl, "_blank", "noopener,noreferrer")
    }
  }

  return (
    <SectionAnimations sectionId="projects">
      <section id="projects" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div
            ref={ref}
            className={`transition-all duration-1000 ${
              inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-center text-white mb-12">
              <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Projects</span>
            </h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {data.map((project, index) => {
                const IconComponent = projectIcons[project.name as keyof typeof projectIcons] || Bot
                return (
                  <div
                    key={index}
                    className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-all duration-300 transform hover:scale-105 group"
                  >
                    <div className="flex items-center space-x-3 mb-4">
                      <div className="bg-gradient-to-r from-cyan-500 to-blue-600 p-2 rounded-lg">
                        <IconComponent className="text-white" size={20} />
                      </div>
                      <h3 className="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors">
                        {project.name}
                      </h3>
                    </div>

                    <p className="text-gray-300 mb-4 leading-relaxed text-sm">{project.description}</p>

                    <div className="mb-4">
                      <h4 className="text-sm font-semibold text-white mb-2">Key Features:</h4>
                      <ul className="space-y-1 max-h-24 overflow-y-auto">
                        {project.features.slice(0, 4).map((feature, featureIndex) => (
                          <li key={featureIndex} className="text-xs text-gray-400 flex items-start">
                            <span className="w-1 h-1 bg-cyan-400 rounded-full mt-1.5 mr-2 flex-shrink-0"></span>
                            {feature}
                          </li>
                        ))}
                        {project.features.length > 4 && (
                          <li className="text-xs text-gray-500 italic">
                            +{project.features.length - 4} more features...
                          </li>
                        )}
                      </ul>
                    </div>

                    <div className="mb-6">
                      <div className="flex flex-wrap gap-1">
                        {project.technologies.slice(0, 4).map((tech, techIndex) => (
                          <span
                            key={techIndex}
                            className="bg-gradient-to-r from-purple-500/20 to-pink-600/20 text-purple-300 px-2 py-1 rounded text-xs font-medium"
                          >
                            {tech}
                          </span>
                        ))}
                        {project.technologies.length > 4 && (
                          <span className="text-xs text-gray-500 px-2 py-1">+{project.technologies.length - 4}</span>
                        )}
                      </div>
                    </div>

                    <div className="flex justify-center">
                      <button
                        onClick={() => handleDemoClick(project.demoUrl)}
                        disabled={!project.demoUrl}
                        className={`flex items-center space-x-2 px-6 py-2 rounded-lg text-sm font-medium transition-all duration-300 transform hover:scale-105 ${
                          project.demoUrl
                            ? "bg-gradient-to-r from-cyan-500 to-blue-600 text-white hover:from-cyan-600 hover:to-blue-700 cursor-pointer"
                            : "bg-gray-600 text-gray-400 cursor-not-allowed"
                        }`}
                      >
                        <ExternalLink size={16} />
                        <span>{project.demoUrl ? "Demo" : "Coming Soon"}</span>
                      </button>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </section>
    </SectionAnimations>
  )
}
