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
  UserPlus
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { GridPattern } from '@/components/ui/grid-pattern';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function HighRiskPregnancy() {
  const heroRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);
  const journeyRef = useRef<HTMLDivElement>(null);
  const careRef = useRef<HTMLDivElement>(null);
  const storiesRef = useRef<HTMLDivElement>(null);
  const roleRef = useRef<HTMLDivElement>(null);
  const emergencyRef = useRef<HTMLDivElement>(null);
  const faqRef = useRef<HTMLDivElement>(null);
  
  const isHeroInView = useInView(heroRef, { once: true });
  const isStatsInView = useInView(statsRef, { once: true });
  const isJourneyInView = useInView(journeyRef, { once: true });
  const isCareInView = useInView(careRef, { once: true });
  const isStoriesInView = useInView(storiesRef, { once: true });
  const isRoleInView = useInView(roleRef, { once: true });
  const isEmergencyInView = useInView(emergencyRef, { once: true });
  const isFaqInView = useInView(faqRef, { once: true });

  const riskFactors = [
    {
      title: "Age-Related Factors",
      description: "Over 35 or under 17 years old",
      icon: <Users className="h-6 w-6 text-primary-green" />,
      details: "Closer monitoring and age-specific care protocols"
    },
    {
      title: "Medical Conditions",
      description: "Diabetes, hypertension, heart conditions",
      icon: <Stethoscope className="h-6 w-6 text-primary-green" />,
      details: "Coordinated care with specialists"
    },
    {
      title: "Previous Complications",
      description: "History of pregnancy complications",
      icon: <Activity className="h-6 w-6 text-primary-green" />,
      details: "Personalized prevention plans"
    },
    {
      title: "Multiple Pregnancies",
      description: "Twins, triplets, or higher-order multiples",
      icon: <Baby className="h-6 w-6 text-primary-green" />,
      details: "Specialized monitoring and delivery planning"
    }
  ];

  const pregnancyPhases = [
    {
      phase: "First Trimester",
      weeks: "Weeks 1-12",
      frequency: "Every 2-3 weeks",
      focus: "Comprehensive assessment, baseline testing, personalized care plan",
      color: "bg-primary-green/10"
    },
    {
      phase: "Second Trimester", 
      weeks: "Weeks 13-27",
      frequency: "Every 2 weeks",
      focus: "Enhanced monitoring, specialized testing, symptom management",
      color: "bg-secondary-brown/10"
    },
    {
      phase: "Third Trimester",
      weeks: "Weeks 28-40+", 
      frequency: "Weekly visits",
      focus: "Intensive monitoring, delivery planning, emergency preparedness",
      color: "bg-accent-cream"
    }
  ];

  const testimonials = [
    {
      name: "Sarah Sharma",
      condition: "Gestational Diabetes",
      story: "When I was diagnosed with gestational diabetes at 28 weeks, I was terrified. Dr. Shukla explained everything clearly and helped me create a management plan. With careful monitoring and dietary changes, my blood sugar stayed perfect. I delivered a healthy 7-pound baby boy at 39 weeks.",
      outcome: "Healthy delivery at 39 weeks"
    },
    {
      name: "Priya Gupta", 
      condition: "Twin Pregnancy After 35",
      story: "At 37, pregnant with twins, I felt like everything was working against me. Dr. Shukla's team monitored us closely throughout the pregnancy. Both babies grew perfectly, and I delivered two healthy girls at 36 weeks.",
      outcome: "Two healthy girls delivered at 36 weeks"
    },
    {
      name: "Meera Agarwal",
      condition: "Managing Hypertension",
      story: "My blood pressure has always been high, and I was worried about how pregnancy would affect it. Dr. Shukla worked with my cardiologist to adjust my medications safely. We monitored my blood pressure twice weekly.",
      outcome: "Healthy baby delivered at 38 weeks"
    }
  ];

  const emergencySymptoms = [
    {
      level: "Call Immediately",
      color: "border-red-500 bg-red-50",
      icon: <AlertTriangle className="h-6 w-6 text-red-600" />,
      symptoms: [
        "Heavy vaginal bleeding (soaking more than one pad per hour)",
        "Severe headaches with blurred vision or swelling",
        "Regular contractions before 37 weeks", 
        "Decreased fetal movement (less than 10 movements in 2 hours)"
      ]
    },
    {
      level: "Call Within 24 Hours",
      color: "border-orange-500 bg-orange-50", 
      icon: <Clock className="h-6 w-6 text-orange-600" />,
      symptoms: [
        "Persistent nausea preventing food/fluid intake",
        "Fever over 100.4°F (38°C)",
        "Burning or pain during urination",
        "Sudden weight gain (more than 2 pounds in a week)"
      ]
    }
  ];

  const faqs = [
    {
      question: "How often will I need to visit compared to a normal pregnancy?",
      answer: "You'll typically visit every 2-3 weeks in the first trimester, every 2 weeks in the second trimester, and weekly in the third trimester. This closer monitoring helps us catch and prevent complications early."
    },
    {
      question: "Will I be able to have a normal delivery?",
      answer: "Many high-risk pregnancies result in normal vaginal deliveries. However, we prepare for all possibilities and will recommend a C-section only if it's the safest option for you and your baby."
    },
    {
      question: "Will my insurance cover the additional monitoring and tests?",
      answer: "Most insurance plans cover medically necessary monitoring for high-risk pregnancies. Our staff will work with your insurance company to ensure proper coverage and pre-authorization."
    },
    {
      question: "I have diabetes. Will this definitely affect my baby?",
      answer: "With proper blood sugar control, diabetic mothers can have perfectly healthy babies. We work closely with your endocrinologist to maintain optimal glucose levels throughout pregnancy."
    },
    {
      question: "Can I exercise during my high-risk pregnancy?",
      answer: "Most women can continue modified exercise routines. We'll create a safe exercise plan based on your specific condition and fitness level."
    },
    {
      question: "What if I need to deliver early? Will my baby be okay?",
      answer: "We work closely with Level 3 NICU facilities. Babies born after 32 weeks generally do very well, and we have excellent success rates even with earlier deliveries when necessary."
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
                <span className="ms-1 text-sm font-medium text-text-brown md:ms-2">High-Risk Pregnancy</span>
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
                High-Risk Pregnancy Care
              </h1>
              <p className="text-xl text-text-brown mb-6">
                You're Not Alone - Your Journey to a Healthy Baby Starts Here
              </p>
              <p className="text-lg text-text-brown/80 mb-8">
                Being told you have a "high-risk pregnancy" can feel overwhelming. Take a deep breath – 
                you're in the right place, and with proper care, over 85% of high-risk pregnancies result 
                in healthy babies and mothers.
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
                  src="https://i.ibb.co/ycn9SnhQ/High-Risk-Pregnancy-Care.png"
                  alt="High-risk pregnancy care with Dr. Amita Shukla"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-white p-4 rounded-xl shadow-warm">
                <div className="flex items-center gap-3 p-2">
                  <Shield className="h-10 w-10 text-primary-green" />
                  <div>
                    <p className="text-sm text-text-brown/70">Success Rate</p>
                    <p className="font-bold text-text-brown">85%+</p>
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

      {/* Key Facts */}
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
              What You Need to Know Right Now
            </motion.h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { stat: "85%+", label: "Successful Outcomes", icon: <CheckCircle className="h-8 w-8 text-primary-green" /> },
              { stat: "24/7", label: "Emergency Support", icon: <Shield className="h-8 w-8 text-primary-green" /> },
              { stat: "10+", label: "Years Experience", icon: <Star className="h-8 w-8 text-primary-green" /> },
              { stat: "4000+", label: "Safe Deliveries", icon: <Heart className="h-8 w-8 text-primary-green" /> }
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
                <div className="text-3xl font-bold text-primary-green mb-2">{item.stat}</div>
                <p className="text-text-brown/70">{item.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Understanding Your Situation */}
      <section className="py-16 bg-accent-cream/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 green-title-text">
              Understanding Your Situation
            </h2>
            <p className="text-lg text-text-brown/80">
              Which category describes you? Every high-risk pregnancy is unique.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {riskFactors.map((factor, index) => (
              <motion.div
                key={index}
                className="bg-white p-6 rounded-xl shadow-warm"
                initial={{ opacity: 0, y: 20 }}
                animate={isStatsInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-full bg-primary-green/20 flex-shrink-0">
                    {factor.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-text-brown mb-2">{factor.title}</h3>
                    <p className="text-text-brown/80 mb-3">{factor.description}</p>
                    <p className="text-primary-green font-medium">{factor.details}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pregnancy Journey */}
      <section 
        ref={journeyRef}
        className="py-16 bg-white"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <motion.h2
              className="text-3xl md:text-4xl font-bold mb-4 green-title-text"
              initial={{ opacity: 0, y: 20 }}
              animate={isJourneyInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5 }}
            >
              Your Pregnancy Journey
            </motion.h2>
            <motion.p
              className="text-lg text-text-brown/80"
              initial={{ opacity: 0, y: 20 }}
              animate={isJourneyInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              What to expect at each stage of your high-risk pregnancy
            </motion.p>
          </div>

          <div className="space-y-8">
            {pregnancyPhases.map((phase, index) => (
              <motion.div
                key={index}
                className={`p-6 rounded-xl ${phase.color} shadow-warm`}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                animate={isJourneyInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.7, delay: index * 0.2 }}
              >
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-center">
                  <div>
                    <h3 className="text-2xl font-bold text-text-brown mb-2">{phase.phase}</h3>
                    <p className="text-primary-green font-medium">{phase.weeks}</p>
                  </div>
                  <div>
                    <p className="text-text-brown/70 text-sm mb-1">Visit Frequency</p>
                    <p className="font-semibold text-text-brown">{phase.frequency}</p>
                  </div>
                  <div>
                    <p className="text-text-brown/70 text-sm mb-1">Focus Areas</p>
                    <p className="text-text-brown">{phase.focus}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Specialized Care Plan */}
      <section 
        ref={careRef}
        className="py-16 bg-accent-cream/30"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <motion.h2
              className="text-3xl md:text-4xl font-bold mb-4 green-title-text"
              initial={{ opacity: 0, y: 20 }}
              animate={isCareInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5 }}
            >
              Your Specialized Care Plan
            </motion.h2>
            <motion.p
              className="text-lg text-text-brown/80"
              initial={{ opacity: 0, y: 20 }}
              animate={isCareInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              Advanced technology meets compassionate care
            </motion.p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={isCareInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.7 }}
            >
              <div className="space-y-6">
                <div className="bg-white p-6 rounded-xl shadow-warm">
                  <h3 className="text-xl font-bold text-text-brown mb-4">Advanced Monitoring</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-primary-green mr-3 flex-shrink-0 mt-1" />
                      <span>High-resolution 4D ultrasounds for detailed development tracking</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-primary-green mr-3 flex-shrink-0 mt-1" />
                      <span>Continuous fetal heart monitoring during visits</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-primary-green mr-3 flex-shrink-0 mt-1" />
                      <span>Precise growth tracking and measurements</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-white p-6 rounded-xl shadow-warm">
                  <h3 className="text-xl font-bold text-text-brown mb-4">Laboratory Excellence</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-primary-green mr-3 flex-shrink-0 mt-1" />
                      <span>Comprehensive blood panels and hormone monitoring</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-primary-green mr-3 flex-shrink-0 mt-1" />
                      <span>Advanced genetic screening options</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-primary-green mr-3 flex-shrink-0 mt-1" />
                      <span>Regular infection screening protocols</span>
                    </li>
                  </ul>
                </div>
              </div>
            </motion.div>

            <motion.div
              className="relative"
              initial={{ opacity: 0, x: 50 }}
              animate={isCareInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.3 }}
            >
              <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-warm-lg">
                <Image
                  src="https://i.ibb.co/rG65J8x6/high-risk-pregnancy-advance-machine.png"
                  alt="High-risk pregnancy advanced monitoring equipment"
                  fill
                  className="object-cover"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Real Stories */}
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
              Real Stories, Real Outcomes
            </motion.h2>
            <motion.p
              className="text-lg text-text-brown/80"
              initial={{ opacity: 0, y: 20 }}
              animate={isStoriesInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              Hope through experience - success stories from our patients
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
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
                <p className="text-text-brown/80 mb-4 italic">"{testimonial.story}"</p>
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

      {/* Your Role */}
      <section 
        ref={roleRef}
        className="py-16 bg-accent-cream/30"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <motion.h2
              className="text-3xl md:text-4xl font-bold mb-4 green-title-text"
              initial={{ opacity: 0, y: 20 }}
              animate={isRoleInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5 }}
            >
              Your Role in Ensuring Success
            </motion.h2>
            <motion.p
              className="text-lg text-text-brown/80"
              initial={{ opacity: 0, y: 20 }}
              animate={isRoleInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              Becoming your baby's first advocate
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Monitor & Track",
                icon: <Activity className="h-8 w-8 text-primary-green" />,
                points: [
                  "Keep a symptom journal",
                  "Track vital signs as requested",
                  "Monitor fetal movements",
                  "Note changes between visits"
                ]
              },
              {
                title: "Lifestyle Excellence",
                icon: <Heart className="h-8 w-8 text-primary-green" />,
                points: [
                  "Follow specialized nutrition plan",
                  "Take medications as prescribed",
                  "Maintain safe exercise routine",
                  "Practice stress management"
                ]
              },
              {
                title: "Communication",
                icon: <UserPlus className="h-8 w-8 text-primary-green" />,
                points: [
                  "Report changes immediately",
                  "Ask questions during visits",
                  "Be honest about symptoms",
                  "Follow up on concerns"
                ]
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                className="bg-white p-6 rounded-xl shadow-warm"
                initial={{ opacity: 0, y: 20 }}
                animate={isRoleInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="flex items-center mb-4">
                  {item.icon}
                  <h3 className="text-xl font-bold text-text-brown ml-3">{item.title}</h3>
                </div>
                <ul className="space-y-2">
                  {item.points.map((point, idx) => (
                    <li key={idx} className="flex items-start">
                      <CheckCircle className="h-4 w-4 text-primary-green mr-2 flex-shrink-0 mt-1" />
                      <span className="text-text-brown/80 text-sm">{point}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Emergency Red Flags */}
      <section 
        ref={emergencyRef}
        className="py-16 bg-white"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <motion.h2
              className="text-3xl md:text-4xl font-bold mb-4 green-title-text"
              initial={{ opacity: 0, y: 20 }}
              animate={isEmergencyInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5 }}
            >
              Red Flags: When to Act Fast
            </motion.h2>
            <motion.p
              className="text-lg text-text-brown/80"
              initial={{ opacity: 0, y: 20 }}
              animate={isEmergencyInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              Your emergency action plan - knowing when to seek immediate care
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
            <h3 className="text-xl font-bold text-text-brown mb-4">Emergency Contact Information</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <p className="font-medium text-text-brown">During Office Hours (9 AM - 6 PM)</p>
                <p className="text-primary-green">+91 8303222222</p>
              </div>
              <div>
                <p className="font-medium text-text-brown">After Hours & Weekends</p>
                <p className="text-primary-green">24/7 Emergency Hotline</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <section 
        ref={faqRef}
        className="py-16 bg-accent-cream/30"
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
              Real concerns from real patients
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
                  className="bg-white rounded-xl shadow-warm border-0 px-6"
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
              Ready to Start Your Journey?
            </h2>
            <p className="text-lg text-text-brown/80 mb-8 max-w-2xl mx-auto">
              Take the next step in your high-risk pregnancy journey. Contact Dr. Amita Shukla's clinic 
              today to schedule your comprehensive consultation and begin your personalized care plan.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button asChild variant="ghost" className="btn-green">
                <Link href="/contact">
                  <Calendar className="mr-2 h-4 w-4" /> Book Consultation
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