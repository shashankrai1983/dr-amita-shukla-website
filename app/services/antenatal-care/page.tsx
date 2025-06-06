// app/services/antenatal-care/page.tsx
// Changes: Created comprehensive antenatal care page following the same structure as other service pages

"use client";

import { useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, useInView } from 'framer-motion';
import { 
  Heart, 
  Shield, 
  Stethoscope, 
  Users, 
  Calendar, 
  Phone,
  CheckCircle,
  AlertTriangle,
  Star,
  Activity,
  Clock,
  ChevronRight,
  Baby,
  UserPlus,
  Microscope,
  TestTube,
  Monitor,
  FileText,
  MapPin,
  Zap
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { GridPattern } from '@/components/ui/grid-pattern';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function AntenatalCare() {
  const heroRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);
  const journeyRef = useRef<HTMLDivElement>(null);
  const careRef = useRef<HTMLDivElement>(null);
  const specialRef = useRef<HTMLDivElement>(null);
  const storiesRef = useRef<HTMLDivElement>(null);
  const emergencyRef = useRef<HTMLDivElement>(null);
  const faqRef = useRef<HTMLDivElement>(null);
  
  const isHeroInView = useInView(heroRef, { once: true });
  const isStatsInView = useInView(statsRef, { once: true });
  const isJourneyInView = useInView(journeyRef, { once: true });
  const isCareInView = useInView(careRef, { once: true });
  const isSpecialInView = useInView(specialRef, { once: true });
  const isStoriesInView = useInView(storiesRef, { once: true });
  const isEmergencyInView = useInView(emergencyRef, { once: true });
  const isFaqInView = useInView(faqRef, { once: true });

  const pregnancyStages = [
    {
      stage: "Just Found Out You're Pregnant",
      weeks: "4-8 weeks",
      description: "Feeling a mix of excitement, nervousness, and maybe some morning sickness. Perfect time to establish care.",
      care: [
        "Pregnancy confirmation and dating ultrasound",
        "Initial health assessment and blood work", 
        "Pregnancy vitamin recommendations",
        "Early pregnancy guidance and expectations"
      ],
      icon: <Heart className="h-6 w-6 text-primary-green" />,
      color: "bg-primary-green/10"
    },
    {
      stage: "First Trimester",
      weeks: "8-12 weeks", 
      description: "Baby developing rapidly. You might be dealing with fatigue, nausea, or other early symptoms.",
      care: [
        "Regular monitoring of baby's growth and heartbeat",
        "Managing morning sickness and early symptoms",
        "Important screening tests and genetic counseling",
        "Nutritional guidance for healthy development"
      ],
      icon: <Baby className="h-6 w-6 text-primary-green" />,
      color: "bg-secondary-brown/10"
    },
    {
      stage: "Second Trimester",
      weeks: "13-27 weeks",
      description: "The 'golden period' - more energy, baby bump showing. Detailed baby development monitoring.",
      care: [
        "Detailed anatomy scan to check development",
        "Routine screening tests for mother's health",
        "Pregnancy lifestyle and exercise discussion",
        "Planning for remainder of pregnancy"
      ],
      icon: <Monitor className="h-6 w-6 text-primary-green" />,
      color: "bg-accent-cream"
    },
    {
      stage: "Third Trimester",
      weeks: "28-40+ weeks",
      description: "Baby growing rapidly, preparing for delivery. Close monitoring and birth planning.",
      care: [
        "Weekly monitoring of baby's position and growth",
        "Preparing your body for labor and delivery",
        "Creating your personalized birth plan",
        "Ensuring readiness for baby's arrival"
      ],
      icon: <Users className="h-6 w-6 text-primary-green" />,
      color: "bg-primary-green/5"
    }
  ];

  const careComponents = [
    {
      title: "Regular Check-ups That Matter",
      details: [
        "Monthly visits through 28 weeks",
        "Bi-weekly visits from 28-36 weeks",
        "Weekly visits from 36 weeks until delivery",
        "Additional appointments as needed for concerns"
      ],
      icon: <Calendar className="h-8 w-8 text-primary-green" />
    },
    {
      title: "Essential Tests and Screenings",
      details: [
        "Blood work to check health and screen conditions",
        "Ultrasounds to monitor baby's growth",
        "Genetic screening options for baby's health",
        "Glucose testing for gestational diabetes"
      ],
      icon: <TestTube className="h-8 w-8 text-primary-green" />
    },
    {
      title: "Comprehensive Monitoring",
      details: [
        "Baby's heartbeat checked at every visit",
        "Blood pressure and weight tracked",
        "Baby's position and growth monitored",
        "Urine tests for infections or complications"
      ],
      icon: <Stethoscope className="h-8 w-8 text-primary-green" />
    },
    {
      title: "Personalized Support",
      details: [
        "Nutrition counseling for healthy pregnancy",
        "Exercise guidance safe for pregnancy stage",
        "Symptom management for common discomforts",
        "Birth planning discussions about delivery"
      ],
      icon: <UserPlus className="h-8 w-8 text-primary-green" />
    }
  ];

  const specialFeatures = [
    {
      title: "Technology That Gives You Peace of Mind",
      features: [
        "High-quality ultrasounds to see your baby clearly",
        "Advanced monitoring equipment for accurate assessments",
        "Digital health records tracking your entire pregnancy",
        "Immediate access to test results and reports"
      ],
      icon: <Monitor className="h-8 w-8 text-primary-green" />
    },
    {
      title: "Experience You Can Trust",
      features: [
        "Thousands of successful deliveries across all pregnancy types",
        "Expertise in both normal and high-risk pregnancies",
        "Coordination with specialists when additional care needed",
        "Hospital partnerships ensuring seamless delivery care"
      ],
      icon: <Shield className="h-8 w-8 text-primary-green" />
    },
    {
      title: "Support That's Always Available",
      features: [
        "24/7 emergency contact for urgent pregnancy concerns",
        "Same-day appointments for worrying symptoms",
        "Clear guidance on when to call and when to come in",
        "Emotional support throughout your pregnancy journey"
      ],
      icon: <Heart className="h-8 w-8 text-primary-green" />
    }
  ];

  const testimonials = [
    {
      name: "Priya Sharma",
      condition: "First-time Mother",
      story: "As a first-time mom, I was nervous about everything. Dr. Shukla took time to explain each test, each milestone, and what to expect. Her calm reassurance helped me enjoy my pregnancy instead of worrying constantly. When I went into labor, I felt completely prepared.",
      outcome: "Smooth pregnancy and natural delivery at 39 weeks"
    },
    {
      name: "Anjali Gupta", 
      condition: "Gestational Diabetes Management",
      story: "When I was diagnosed with gestational diabetes at 26 weeks, I was scared about how it would affect my baby. Dr. Shukla created a detailed management plan and monitored us closely. My blood sugar stayed perfect throughout, and my baby was born healthy at 38 weeks.",
      outcome: "Healthy baby despite gestational diabetes"
    },
    {
      name: "Meera Patel",
      condition: "Twin Pregnancy",
      story: "Carrying twins meant more frequent visits and closer monitoring. Dr. Shukla's team made sure both babies were growing well and I was healthy. The detailed ultrasounds let us see both our babies clearly. They were born healthy at 36 weeks.",
      outcome: "Successful twin delivery with no complications"
    },
    {
      name: "Kavya Singh",
      condition: "Second Pregnancy After 35",
      story: "At 37, I was worried about having a healthy pregnancy. Dr. Shukla's comprehensive monitoring gave me confidence. Every appointment confirmed that both baby and I were doing well. She delivered my healthy daughter just like she did my first child 5 years ago.",
      outcome: "Two successful pregnancies with Dr. Amita"
    }
  ];

  const emergencySymptoms = [
    {
      level: "Call Right Away",
      color: "border-red-500 bg-red-50",
      icon: <AlertTriangle className="h-6 w-6 text-red-600" />,
      symptoms: [
        "Heavy bleeding or passing clots",
        "Severe headaches with vision changes",
        "Persistent vomiting preventing fluid intake",
        "Severe abdominal pain or cramping",
        "Signs of labor before 37 weeks",
        "Decreased fetal movement after 28 weeks"
      ]
    },
    {
      level: "Call Same Day", 
      color: "border-orange-500 bg-orange-50",
      icon: <Clock className="h-6 w-6 text-orange-600" />,
      symptoms: [
        "Any bleeding during pregnancy",
        "Fever over 100.4°F (38°C)",
        "Severe heartburn not relieved by remedies",
        "Unusual discharge with odor or itching",
        "Persistent headaches or dizziness",
        "Concerns about baby's movement patterns"
      ]
    }
  ];

  const faqs = [
    {
      question: "How often will I need to come in for appointments?",
      answer: "You'll visit monthly until 28 weeks, then bi-weekly until 36 weeks, then weekly until delivery. We'll schedule additional visits if needed based on your specific situation or any concerns that arise."
    },
    {
      question: "What tests are required vs. optional during pregnancy?",
      answer: "We'll explain each test and why it's recommended. Most routine screenings help ensure a healthy pregnancy, but we'll discuss your options and preferences for each test so you can make informed decisions."
    },
    {
      question: "Can my partner come to appointments?",
      answer: "Absolutely! We encourage partners to attend appointments, especially ultrasounds and important discussions about your pregnancy and delivery plans. Their support and involvement are valuable."
    },
    {
      question: "What symptoms should I call about immediately?",
      answer: "Call right away for: severe headaches, vision changes, severe nausea/vomiting, bleeding, severe abdominal pain, decreased fetal movement, or signs of labor before 37 weeks. When in doubt, call us."
    },
    {
      question: "How do I know if my pregnancy is progressing normally?",
      answer: "We track your baby's growth, your health indicators, and address any concerns at each visit. Regular monitoring helps us catch and address any issues early. You'll always know how both you and baby are doing."
    },
    {
      question: "When do we discuss my birth plan?",
      answer: "We start discussing your preferences in the second trimester and finalize your birth plan in the third trimester, considering your health, baby's position, and your personal preferences for delivery."
    },
    {
      question: "What hospital will I deliver at?",
      answer: "We'll discuss hospital options and help you choose the best facility based on your needs, preferences, and any special care requirements. We work with top hospitals in Lucknow."
    },
    {
      question: "What if I go into labor early or late?",
      answer: "We have clear protocols for both situations and will guide you through the appropriate steps based on your specific circumstances. You'll know exactly what to do when the time comes."
    }
  ];

  return (
    <div className="pt-24 pb-16">
      {/* Breadcrumbs */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 mb-8">
        <nav className="flex" aria-label="Breadcrumb">
          <ol className="inline-flex items-center space-x-1 md:space-x-2 rtl:space-x-reverse">
            <li className="inline-flex items-center">
              <Link href="/" className="inline-flex items-center text-sm font-medium text-text-brown hover:text-primary-green">
                Home
              </Link>
            </li>
            <li>
              <div className="flex items-center">
                <ChevronRight className="h-4 w-4 text-text-brown/50" />
                <span className="ms-1 text-sm font-medium text-text-brown md:ms-2">Services</span>
              </div>
            </li>
            <li>
              <div className="flex items-center">
                <ChevronRight className="h-4 w-4 text-text-brown/50" />
                <span className="ms-1 text-sm font-medium text-text-brown md:ms-2">Antenatal Care</span>
              </div>
            </li>
          </ol>
        </nav>
      </div>

      {/* Hero Section */}
      <section 
        ref={heroRef}
        className="py-16 bg-accent-cream/30 relative"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={isHeroInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.7 }}
            >
              <h1 className="text-4xl md:text-5xl font-bold mb-6 green-title-text">
                Antenatal Care
              </h1>
              <p className="text-xl text-text-brown mb-6">
                Your Pregnancy Journey Starts Here - Expert Care for Every Step
              </p>
              <p className="text-lg text-text-brown/80 mb-8">
                Congratulations! You're pregnant, and this incredible journey is just beginning. 
                Whether this is your first pregnancy or you're adding to your family, you deserve 
                care that makes you feel confident, supported, and excited about the months ahead.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button asChild variant="ghost" className="btn-green">
                  <Link href="/contact">Book Consultation</Link>
                </Button>
                <Button asChild variant="outline" className="btn-outline">
                  <a href="tel:+918303222222">
                    <Phone className="mr-2 h-4 w-4" /> Call Now
                  </a>
                </Button>
              </div>
            </motion.div>

            <motion.div
              className="relative"
              initial={{ opacity: 0, x: 50 }}
              animate={isHeroInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              <div className="relative h-[500px] rounded-2xl overflow-hidden shadow-warm-lg">
                <Image
                  src="https://i.ibb.co/b5DLnkFt/Antenatal.png"
                  alt="Antenatal care with Dr. Amita Shukla"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-white p-4 rounded-xl shadow-warm">
                <div className="flex items-center gap-3 p-2">
                  <Baby className="h-10 w-10 text-primary-green" />
                  <div>
                    <p className="text-sm text-text-brown/70">Experience</p>
                    <p className="font-bold text-text-brown">4000+ Deliveries</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
        
        <GridPattern
          width={40}
          height={40}
          strokeDasharray={"1 3"}
          className="text-primary-green/5 [mask-image:radial-gradient(ellipse_at_center,white_30%,transparent_70%)]"
        />
      </section>

      {/* What You Can Expect */}
      <section 
        ref={statsRef}
        className="py-16 bg-white"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <motion.h2
              className="text-3xl md:text-4xl font-bold mb-4 green-title-text"
              initial={{ opacity: 0, y: 20 }}
              animate={isStatsInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5 }}
            >
              What You Can Expect With Our Antenatal Care
            </motion.h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { title: "Comprehensive Monitoring", description: "For you and baby's health", icon: <Monitor className="h-8 w-8 text-primary-green" /> },
              { title: "Regular Check-ups", description: "Track pregnancy progress", icon: <Calendar className="h-8 w-8 text-primary-green" /> },
              { title: "Early Detection", description: "Prevent complications", icon: <Shield className="h-8 w-8 text-primary-green" /> },
              { title: "24/7 Support", description: "Questions and concerns", icon: <Heart className="h-8 w-8 text-primary-green" /> }
            ].map((item, index) => (
              <motion.div
                key={index}
                className="text-center bg-accent-cream/30 p-6 rounded-xl shadow-warm"
                initial={{ opacity: 0, y: 20 }}
                animate={isStatsInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="flex justify-center mb-4">
                  {item.icon}
                </div>
                <h3 className="text-lg font-bold text-text-brown mb-2">{item.title}</h3>
                <p className="text-text-brown/70 text-sm">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pregnancy Journey Stages */}
      <section 
        ref={journeyRef}
        className="py-16 bg-accent-cream/30"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <motion.h2
              className="text-3xl md:text-4xl font-bold mb-4 green-title-text"
              initial={{ opacity: 0, y: 20 }}
              animate={isJourneyInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5 }}
            >
              Where Are You in Your Pregnancy Journey?
            </motion.h2>
            <motion.p
              className="text-lg text-text-brown/80"
              initial={{ opacity: 0, y: 20 }}
              animate={isJourneyInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              Every stage of pregnancy brings unique experiences and care needs
            </motion.p>
          </div>

          <div className="space-y-8">
            {pregnancyStages.map((stage, index) => (
              <motion.div
                key={index}
                className={`p-6 rounded-xl ${stage.color} shadow-warm`}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                animate={isJourneyInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.7, delay: index * 0.2 }}
              >
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-start">
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-full bg-primary-green/20 flex-shrink-0">
                      {stage.icon}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-text-brown mb-1">{stage.stage}</h3>
                      <p className="text-primary-green text-sm font-medium">{stage.weeks}</p>
                    </div>
                  </div>
                  <div>
                    <p className="text-text-brown mb-3">{stage.description}</p>
                  </div>
                  <div>
                    <p className="text-text-brown/70 text-sm mb-2">What happens now:</p>
                    <ul className="space-y-1">
                      {stage.care.map((item, idx) => (
                        <li key={idx} className="flex items-start">
                          <CheckCircle className="h-4 w-4 text-primary-green mr-2 flex-shrink-0 mt-0.5" />
                          <span className="text-text-brown text-xs">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Complete Antenatal Care Plan */}
      <section 
        ref={careRef}
        className="py-16 bg-white"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <motion.h2
              className="text-3xl md:text-4xl font-bold mb-4 green-title-text"
              initial={{ opacity: 0, y: 20 }}
              animate={isCareInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5 }}
            >
              Your Complete Antenatal Care Plan
            </motion.h2>
            <motion.p
              className="text-lg text-text-brown/80"
              initial={{ opacity: 0, y: 20 }}
              animate={isCareInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              Comprehensive care that adapts to your pregnancy's unique needs
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {careComponents.map((component, index) => (
              <motion.div
                key={index}
                className="bg-accent-cream/30 p-6 rounded-xl shadow-warm"
                initial={{ opacity: 0, y: 20 }}
                animate={isCareInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="flex items-center mb-4">
                  {component.icon}
                  <h3 className="text-xl font-bold text-text-brown ml-3">{component.title}</h3>
                </div>
                <ul className="space-y-2">
                  {component.details.map((detail, idx) => (
                    <li key={idx} className="flex items-start">
                      <CheckCircle className="h-4 w-4 text-primary-green mr-2 flex-shrink-0 mt-1" />
                      <span className="text-text-brown/80 text-sm">{detail}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* What Makes Our Care Special */}
      <section 
        ref={specialRef}
        className="py-16 bg-accent-cream/30"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <motion.h2
              className="text-3xl md:text-4xl font-bold mb-4 green-title-text"
              initial={{ opacity: 0, y: 20 }}
              animate={isSpecialInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5 }}
            >
              What Makes Our Antenatal Care Special
            </motion.h2>
            <motion.p
              className="text-lg text-text-brown/80"
              initial={{ opacity: 0, y: 20 }}
              animate={isSpecialInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              Advanced technology, proven experience, and unwavering support
            </motion.p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {specialFeatures.map((feature, index) => (
              <motion.div
                key={index}
                className="bg-white p-6 rounded-xl shadow-warm"
                initial={{ opacity: 0, y: 20 }}
                animate={isSpecialInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="flex items-center mb-4">
                  {feature.icon}
                  <h3 className="text-xl font-bold text-text-brown ml-3">{feature.title}</h3>
                </div>
                <ul className="space-y-2">
                  {feature.features.map((item, idx) => (
                    <li key={idx} className="flex items-start">
                      <CheckCircle className="h-4 w-4 text-primary-green mr-2 flex-shrink-0 mt-1" />
                      <span className="text-text-brown/80 text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section 
        ref={storiesRef}
        className="py-16 bg-white"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <motion.h2
              className="text-3xl md:text-4xl font-bold mb-4 green-title-text"
              initial={{ opacity: 0, y: 20 }}
              animate={isStoriesInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5 }}
            >
              Real Success Stories
            </motion.h2>
            <motion.p
              className="text-lg text-text-brown/80"
              initial={{ opacity: 0, y: 20 }}
              animate={isStoriesInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              Celebrating healthy pregnancies and happy families
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                className="bg-accent-cream/30 p-6 rounded-xl shadow-warm"
                initial={{ opacity: 0, y: 20 }}
                animate={isStoriesInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="mb-4">
                  <h3 className="font-bold text-text-brown">{testimonial.name}</h3>
                  <p className="text-primary-green text-sm">{testimonial.condition}</p>
                </div>
                <p className="text-text-brown/80 mb-4 italic text-sm">"{testimonial.story}"</p>
                <div className="border-t border-primary-green/20 pt-4">
                  <p className="text-primary-green font-medium text-sm">
                    <CheckCircle className="h-4 w-4 inline mr-2" />
                    {testimonial.outcome}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Emergency Contact */}
      <section 
        ref={emergencyRef}
        className="py-16 bg-accent-cream/30"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <motion.h2
              className="text-3xl md:text-4xl font-bold mb-4 green-title-text"
              initial={{ opacity: 0, y: 20 }}
              animate={isEmergencyInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5 }}
            >
              When to Contact Us Immediately
            </motion.h2>
            <motion.p
              className="text-lg text-text-brown/80"
              initial={{ opacity: 0, y: 20 }}
              animate={isEmergencyInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              Your safety is our priority - know when to seek immediate care
            </motion.p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {emergencySymptoms.map((category, index) => (
              <motion.div
                key={index}
                className={`p-6 rounded-xl border-2 ${category.color}`}
                initial={{ opacity: 0, y: 20 }}
                animate={isEmergencyInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.2 }}
              >
                <div className="flex items-center mb-4">
                  {category.icon}
                  <h3 className="text-xl font-bold text-text-brown ml-3">{category.level}</h3>
                </div>
                <ul className="space-y-3">
                  {category.symptoms.map((symptom, idx) => (
                    <li key={idx} className="flex items-start">
                      <AlertTriangle className="h-4 w-4 text-red-600 mr-2 flex-shrink-0 mt-1" />
                      <span className="text-text-brown">{symptom}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>

          <motion.div
            className="mt-8 text-center bg-primary-green/10 p-6 rounded-xl"
            initial={{ opacity: 0, y: 20 }}
            animate={isEmergencyInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <h3 className="text-xl font-bold text-text-brown mb-4">Your Contact Information</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <p className="font-medium text-text-brown">Office Hours (9 AM - 6 PM)</p>
                <p className="text-primary-green">+91 8303222222</p>
              </div>
              <div>
                <p className="font-medium text-text-brown">After Hours & Emergency</p>
                <p className="text-primary-green">SCT Trust Hospital Emergency</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <section 
        ref={faqRef}
        className="py-16 bg-white"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <motion.h2
              className="text-3xl md:text-4xl font-bold mb-4 green-title-text"
              initial={{ opacity: 0, y: 20 }}
              animate={isFaqInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5 }}
            >
              Your Questions Answered
            </motion.h2>
            <motion.p
              className="text-lg text-text-brown/80"
              initial={{ opacity: 0, y: 20 }}
              animate={isFaqInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              Common questions about antenatal care and pregnancy monitoring
            </motion.p>
          </div>

          <motion.div
            className="max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={isFaqInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Accordion type="single" collapsible className="w-full space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem 
                  key={index} 
                  value={`item-${index}`} 
                  className="bg-accent-cream/30 rounded-xl shadow-warm border-0 px-6"
                >
                  <AccordionTrigger className="text-left text-text-brown hover:no-underline py-6">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-text-brown/80 pb-6">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary-green/10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 green-title-text">
              Ready to Begin Your Antenatal Care Journey?
            </h2>
            <p className="text-lg text-text-brown/80 mb-8 max-w-2xl mx-auto">
              Take the first step in your pregnancy journey with expert care. Contact Dr. Amita Shukla's clinic 
              today to schedule your first pregnancy appointment and start receiving the care you and your baby deserve.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button asChild variant="ghost" className="btn-green">
                <Link href="/contact">
                  <Calendar className="mr-2 h-4 w-4" /> Book First Appointment
                </Link>
              </Button>
              <Button asChild variant="outline" className="btn-outline">
                <a href="tel:+918303222222">
                  <Phone className="mr-2 h-4 w-4" /> Call Now
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}