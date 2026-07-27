'use client';

import { motion } from 'motion/react';
import { MapPin, Shield, Phone, Search, Clock, Globe, UserCheck, FileText } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

const features = [
  {
    icon: MapPin,
    title: 'SIM Owner Details Online Check',
    description: 'Check SIM owner details online and find phone number details with our verified SIM information system and mobile number details lookup.',
    color: '#7DB9BC'
  },
  {
    icon: Shield,
    title: 'SIM Details by Number',
    description: 'Get sim details by number, sim number details, and SIM owner details by number instantly with our accurate SIM data information tool.',
    color: '#5A9EA1'
  },
  {
    icon: Phone,
    title: 'Phone Number Details with Name',
    description: 'Find phone number details with name, mobile number details with owner name and address, and phone number owner name using our number lookup service.',
    color: '#7DB9BC'
  },
  {
    icon: UserCheck,
    title: 'Mobile Number Details & Identity Check',
    description: 'Verify mobile number details, check sim owner name by mobile number online, and protect your identity with SIM identity check and number verification.',
    color: '#5A9EA1'
  },
  {
    icon: Globe,
    title: 'Live Tracker SIM Data',
    description: 'Access live tracker sim data, live tracker mobile number details, and live tracker all network details for comprehensive SIM data tracking.',
    color: '#7DB9BC'
  },
  {
    icon: Clock,
    title: 'SIM Number Check & Verification',
    description: 'Perform SIM number check, sim number details online check, number check, and number verification quickly with our fast sim check tools.',
    color: '#5A9EA1'
  },
  {
    icon: Search,
    title: 'Check SIM Owner Details by Number',
    description: 'Check sim owner details, check sim owner name by mobile number, and find out phone number owner with our reliable owner lookup features.',
    color: '#7DB9BC'
  },
  {
    icon: FileText,
    title: 'SIM Information System & Data Check',
    description: 'Use our SIM information system for sim data check, sim information with number, sim data information, and complete SIM details check online.',
    color: '#5A9EA1'
  }
];

export function FeaturesSection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const currentSection = sectionRef.current;
    if (currentSection) {
      observer.observe(currentSection);
    }

    return () => {
      if (currentSection) {
        observer.unobserve(currentSection);
      }
    };
  }, []);

  return (
    <section id="features" ref={sectionRef} className="py-12 sm:py-16 md:py-20 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 sm:mb-16"
        >
          <p className="text-accent text-xs sm:text-sm uppercase tracking-wider mb-2 sm:mb-3">SIM Owner Details & Phone Number Details Tools</p>
          <h2 
            className="text-3xl sm:text-4xl md:text-5xl text-primary mb-3 sm:mb-4 px-4"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Check SIM Owner Details, Phone Number Details & Mobile Number Details
          </h2>
          <p className="text-muted-foreground text-base sm:text-lg max-w-2xl mx-auto px-4" style={{ fontFamily: "'Inter', sans-serif" }}>
            Complete tools to check SIM owner details online, find phone number details with name, get mobile number details with owner name and address, and run SIM number check. Use sim details by number, live tracker sim data, and SIM information system for fast, reliable results.
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="group"
            >
              <div className="bg-muted rounded-2xl p-6 sm:p-8 h-full transition-all duration-300 hover:shadow-xl border border-transparent hover:border-accent/30">
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ duration: 0.3 }}
                  className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl mb-4 sm:mb-6 flex items-center justify-center"
                  style={{ backgroundColor: `${feature.color}20` }}
                >
                  <feature.icon className="w-6 h-6 sm:w-7 sm:h-7" style={{ color: feature.color }} />
                </motion.div>
                <h3 className="text-lg sm:text-xl text-primary mb-2 sm:mb-3" style={{ fontFamily: "'Playfair Display', serif" }}>
                  {feature.title}
                </h3>
                <p className="text-sm sm:text-base text-muted-foreground leading-relaxed" style={{ fontFamily: "'Inter', sans-serif" }}>
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}