"use client"

import { useInView } from "react-intersection-observer"
import { Brain, MessageCircle, Users, Clock, Lightbulb, Shield, Sparkles, Zap, Target, Award } from "lucide-react"
import SectionAnimations from "@/components/section-animations"

interface SkillsProps {
  data: {
    technical: string[]
    soft: string[]
    languages: string[]
    certifications: string[]
  }
}

const softSkillIcons = {
  "Well-organized": Brain,
  "Problem Solver": Lightbulb,
  "Attention to Detail": Target,
  "Curiosity for new tech": Sparkles,
  Teamwork: Users,
  "Ambitious Projects": Award,
  Communication: MessageCircle,
  "Critical Thinking": Zap,
  Adaptability: Shield,
  "Time Management": Clock,
}

export default function Skills({ data }: SkillsProps) {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  })

  return (
    <SectionAnimations sectionId="skills">
      <section id="skills" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div
            ref={ref}
            className={`transition-all duration-1000 ${
              inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-center text-white mb-12">
              <span className="bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">Skills</span>
            </h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {/* Technical Skills */}
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-all duration-300">
                <h3 className="text-xl font-bold text-white mb-4 text-center">Technical Skills</h3>
                <div className="space-y-3">
                  {data.technical.slice(0, 10).map((skill, index) => (
                    <div
                      key={index}
                      className="bg-gradient-to-r from-blue-500/20 to-purple-600/20 p-3 rounded-lg text-center"
                    >
                      <span className="text-gray-300 font-medium">{skill}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Soft Skills */}
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-all duration-300">
                <h3 className="text-xl font-bold text-white mb-4 text-center">Soft Skills</h3>
                <div className="space-y-3">
                  {data.soft.slice(0, 10).map((skill, index) => {
                    const IconComponent = softSkillIcons[skill as keyof typeof softSkillIcons] || Brain
                    return (
                      <div
                        key={index}
                        className="bg-gradient-to-r from-green-500/20 to-blue-600/20 p-3 rounded-lg flex items-center space-x-2"
                      >
                        <IconComponent size={16} className="text-green-400" />
                        <span className="text-gray-300 text-sm">{skill}</span>
                      </div>
                    )
                  })}
                </div>
              </div>

              {/* Languages */}
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-all duration-300">
                <h3 className="text-xl font-bold text-white mb-4 text-center">Languages</h3>
                <div className="space-y-3">
                  {data.languages.slice(0, 10).map((language, index) => (
                    <div
                      key={index}
                      className="bg-gradient-to-r from-yellow-500/20 to-orange-600/20 p-3 rounded-lg text-center"
                    >
                      <span className="text-gray-300 font-medium">{language}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Certifications */}
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-all duration-300">
                <h3 className="text-xl font-bold text-white mb-4 text-center">Certifications</h3>
                <div className="space-y-3">
                  {data.certifications.slice(0, 10).map((cert, index) => (
                    <div key={index} className="bg-gradient-to-r from-pink-500/20 to-red-600/20 p-3 rounded-lg">
                      <span className="text-gray-300 text-sm">{cert}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </SectionAnimations>
  )
}
