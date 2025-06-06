// app/services/laparoscopy/page.tsx
// Changes: Created comprehensive advanced laparoscopy page following the same structure as other service pages

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
  Scissors,
  UserPlus,
  Microscope,
  TestTube,
  Target,
  TrendingUp,
  Zap,
  Timer,
  Bandage,
  Eye
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { GridPattern } from '@/components/ui/grid-pattern';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function AdvancedLaparoscopy() {
  const heroRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);
  const situationRef = useRef<HTMLDivElement>(null);
  const conditionsRef = useRef<HTMLDivElement>(null);
  const journeyRef = useRef<HTMLDivElement>(null);
  const benefitsRef = useRef<HTMLDivElement>(null);
  const storiesRef = useRef<HTMLDivElement>(null);
  const emergencyRef = useRef<HTMLDivElement>(null);
  const faqRef = useRef<HTMLDivElement>(null);
  
  const isHeroInView = useInView(heroRef, { once: true });
  const isStatsInView = useInView(statsRef, { once: true });
  const isSituationInView = useInView(situationRef, { once: true });
  const isConditionsInView = useInView(conditionsRef, { once: true });
  const isJourneyInView = useInView(journeyRef, { once: true });
  const isBenefitsInView = useInView(benefitsRef, { once: true });
  const isStoriesInView = useInView(storiesRef, { once: true });
  const isEmergencyInView = useInView(emergencyRef, { once: true });
  const isFaqInView = useInView(faqRef, { once: true });

  const situations = [
    {
      title: "You've Been Told You Need Surgery",
      description: "Whether for endometriosis, ovarian cysts, fibroids, or other conditions, you're probably feeling anxious about what surgery means.",
      benefits: [
        "Most gynecological conditions can be treated laparoscopically",
        "Recovery is significantly faster than traditional surgery",
        "You'll likely return to work within 1-2 weeks",
        "Scarring is minimal and fades over time"
      ],
      icon: <Stethoscope className="h-6 w-6 text-primary-green" />,
      color: "bg-primary-green/10"
    },
    {
      title: "You Want a Second Opinion",
      description: "Perhaps another doctor recommended open surgery, or you want to explore less invasive options.",
      benefits: [
        "Less trauma to your body",
        "Reduced risk of complications",
        "Better cosmetic results",
        "Faster return to normal activities"
      ],
      icon: <Eye className="h-6 w-6 text-primary-green" />,
      color: "bg-secondary-brown/10"
    },
    {
      title: "You're Researching Treatment Options",
      description: "You've been diagnosed and want to understand all your surgical options before making a decision.",
      benefits: [
        "Understanding options leads to better outcomes",
        "Advanced laparoscopy often provides excellent results",
        "Early treatment can prevent complications",
        "Minimally invasive doesn't mean less effective"
      ],
      icon: <Target className="h-6 w-6 text-primary-green" />,
      color: "bg-accent-cream"
    }
  ];

  const conditions = [
    {
      name: "Endometriosis",
      description: "When tissue similar to your uterine lining grows outside your uterus, causing pain and potentially affecting fertility.",
      benefits: [
        "Precisely removes endometrial tissue while preserving healthy organs",
        "Reduces pain and improves quality of life",
        "Often improves fertility chances",
        "Prevents further progression of the disease"
      ],
      icon: <Heart className="h-8 w-8 text-primary-green" />
    },
    {
      name: "Ovarian Cysts",
      description: "Fluid-filled sacs on your ovaries that may cause pain or complications.",
      benefits: [
        "Removes cysts while preserving healthy ovarian tissue",
        "Minimal impact on your hormone production",
        "Quick recovery with excellent results",
        "Prevents potential complications from large cysts"
      ],
      icon: <TestTube className="h-8 w-8 text-primary-green" />
    },
    {
      name: "Uterine Fibroids",
      description: "Non-cancerous growths in your uterus that can cause heavy bleeding, pain, or pressure.",
      benefits: [
        "Myomectomy (removing fibroids while keeping your uterus)",
        "Laparoscopic hysterectomy when appropriate",
        "Preservation of fertility when desired",
        "Significant symptom relief"
      ],
      icon: <Activity className="h-8 w-8 text-primary-green" />
    },
    {
      name: "Adhesions (Scar Tissue)",
      description: "Bands of scar tissue that can cause organs to stick together, leading to pain or fertility issues.",
      benefits: [
        "Carefully removes adhesions to restore normal anatomy",
        "Uses advanced techniques to prevent new adhesion formation",
        "Often dramatically reduces chronic pain",
        "Can improve fertility outcomes"
      ],
      icon: <Scissors className="h-8 w-8 text-primary-green" />
    },
    {
      name: "Ectopic Pregnancy",
      description: "When a pregnancy develops outside the uterus, requiring prompt surgical treatment.",
      benefits: [
        "Preserves your fallopian tube when possible",
        "Minimally invasive treatment during a difficult time",
        "Faster recovery during an emotional period",
        "Maintains future fertility potential"
      ],
      icon: <Shield className="h-8 w-8 text-primary-green" />
    }
  ];

  const surgeryJourney = [
    {
      phase: "Before Surgery",
      duration: "1-2 weeks",
      focus: "Comprehensive evaluation and preparation",
      details: [
        "Detailed imaging to plan your specific procedure",
        "Pre-operative testing to ensure you're ready",
        "Clear instructions on preparation",
        "Answering all your questions and concerns"
      ]
    },
    {
      phase: "Day of Surgery",
      duration: "Surgery day",
      focus: "Professional care from arrival to discharge",
      details: [
        "Check-in process and final preparations",
        "Meeting with anesthesia team",
        "30 minutes to 2 hours depending on complexity",
        "3-4 small incisions (less than 1 cm each)"
      ]
    },
    {
      phase: "Immediate Recovery",
      duration: "Same day",
      focus: "Comfort and early mobilization",
      details: [
        "Wake up in recovery room",
        "Pain management from the start",
        "Most patients go home same day or overnight",
        "Clear discharge instructions"
      ]
    },
    {
      phase: "Recovery at Home",
      duration: "1-2 weeks",
      focus: "Quick return to normal activities",
      details: [
        "Back to desk work within 3-5 days",
        "Normal activities within 1-2 weeks",
        "Exercise cleared at 2-week follow-up",
        "Scars heal and fade over 3-6 months"
      ]
    }
  ];

  const testimonials = [
    {
      name: "Priya",
      condition: "Endometriosis Relief",
      story: "I had severe endometriosis causing terrible pain every month. Dr. Shukla performed laparoscopic surgery, and I was amazed - I went home the same day and was back to work in a week. The small scars are barely visible, and I'm pain-free for the first time in years.",
      outcome: "Pain-free with minimal scarring"
    },
    {
      name: "Meera",
      condition: "Ovarian Cyst Removal",
      story: "I was terrified when they found a large cyst on my ovary. Dr. Shukla removed it laparoscopically, saved my ovary, and I recovered so quickly. The surgery was on Friday, and I was shopping the next weekend. The scars are tiny and already fading.",
      outcome: "Ovary preserved, rapid recovery"
    },
    {
      name: "Kavya",
      condition: "Fibroid Success",
      story: "Heavy periods were ruining my life. Dr. Shukla removed multiple fibroids while keeping my uterus. The recovery was much easier than I expected - I was walking the same day and back to normal activities within 10 days. My periods are finally normal.",
      outcome: "Uterus preserved, normal periods restored"
    },
    {
      name: "Anjali",
      condition: "Adhesion Release",
      story: "Chronic pelvic pain from adhesions made every day difficult. The laparoscopic adhesion release was life-changing. Dr. Shukla's technique prevented new scar tissue from forming. Six months later, I'm still pain-free and active.",
      outcome: "Chronic pain resolved permanently"
    }
  ];

  const emergencySymptoms = [
    {
      level: "Call Immediately",
      color: "border-red-500 bg-red-50",
      icon: <AlertTriangle className="h-6 w-6 text-red-600" />,
      symptoms: [
        "Severe abdominal pain that worsens or isn't controlled by medication",
        "Heavy bleeding from incision sites",
        "Signs of infection at incision sites (redness, swelling, drainage)",
        "Severe nausea preventing fluid intake",
        "Difficulty breathing or chest pain"
      ]
    },
    {
      level: "Normal After Surgery",
      color: "border-green-500 bg-green-50",
      icon: <CheckCircle className="h-6 w-6 text-green-600" />,
      symptoms: [
        "Mild to moderate incision site tenderness",
        "Shoulder pain from surgical gas (resolves in 24-48 hours)",
        "Light bleeding or discharge for a few days",
        "Fatigue for the first week",
        "Some bloating or gas pains"
      ]
    }
  ];

  const faqs = [
    {
      question: "How small are the incisions really?",
      answer: "Each incision is typically 5-10mm (less than half an inch). You'll have 3-4 of these small cuts that heal into barely visible scars."
    },
    {
      question: "Will I have a lot of pain after surgery?",
      answer: "Most patients describe the pain as much less than expected. You'll have pain medication, and many patients only need it for 2-3 days."
    },
    {
      question: "How long will I be in the hospital?",
      answer: "Most procedures are same-day discharge or require just one overnight stay. You'll recover more comfortably at home."
    },
    {
      question: "When can I return to work?",
      answer: "Most patients with desk jobs return within 3-5 days. Physical jobs may require 1-2 weeks off, depending on the demands."
    },
    {
      question: "What about exercise and lifting?",
      answer: "Light activities immediately, normal exercise at 2 weeks, and heavy lifting restriction for 2-4 weeks depending on your procedure."
    },
    {
      question: "How long until the scars fade?",
      answer: "Scars continue improving for 6-12 months. Most patients say their scars are barely noticeable after a few months."
    },
    {
      question: "Is laparoscopic surgery as effective as open surgery?",
      answer: "Yes, studies show equal or better outcomes with laparoscopic techniques for most gynecological conditions, plus all the benefits of minimally invasive surgery."
    },
    {
      question: "What if complications arise during surgery?",
      answer: "While rare, if complications occur, we're prepared to convert to open surgery if needed. Your safety is always the top priority."
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
                <span className="ms-1 text-sm font-medium text-text-brown md:ms-2">Advanced Laparoscopy</span>
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
                Advanced Laparoscopy
              </h1>
              <p className="text-xl text-text-brown mb-6">
                Modern Surgery, Minimal Scars - Advanced Solutions for Women's Health
              </p>
              <p className="text-lg text-text-brown/80 mb-8">
                If you've been told you need gynecological surgery, you're probably worried about pain, 
                scars, and recovery time. The good news? Advanced laparoscopic surgery offers a better way - 
                with tiny incisions, faster healing, and excellent results. Dr. Amita Shukla has performed 
                over 1,000 successful laparoscopic procedures.
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
                  src="https://i.ibb.co/pvsbFHZk/Advance-Laproscopy.png"
                  alt="Advanced laparoscopy with Dr. Amita Shukla"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-white p-4 rounded-xl shadow-warm">
                <div className="flex items-center gap-3 p-2">
                  <Scissors className="h-10 w-10 text-primary-green" />
                  <div>
                    <p className="text-sm text-text-brown/70">Experience</p>
                    <p className="font-bold text-text-brown">1000+ Procedures</p>
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

      {/* Key Benefits */}
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
              What Advanced Laparoscopy Means for You
            </motion.h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { title: "Small Incisions", description: "Less than 1 cm each", icon: <Scissors className="h-8 w-8 text-primary-green" /> },
              { title: "Minimal Scarring", description: "Barely visible scars", icon: <Bandage className="h-8 w-8 text-primary-green" /> },
              { title: "Faster Recovery", description: "Back to work in 1 week", icon: <Timer className="h-8 w-8 text-primary-green" /> },
              { title: "Same-Day Discharge", description: "Most cases", icon: <CheckCircle className="h-8 w-8 text-primary-green" /> }
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

      {/* What Brings You Here */}
      <section 
        ref={situationRef}
        className="py-16 bg-accent-cream/30"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <motion.h2
              className="text-3xl md:text-4xl font-bold mb-4 green-title-text"
              initial={{ opacity: 0, y: 20 }}
              animate={isSituationInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5 }}
            >
              What Brings You Here Today?
            </motion.h2>
            <motion.p
              className="text-lg text-text-brown/80"
              initial={{ opacity: 0, y: 20 }}
              animate={isSituationInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              Understanding your situation helps us provide the best care options
            </motion.p>
          </div>

          <div className="space-y-8">
            {situations.map((situation, index) => (
              <motion.div
                key={index}
                className={`p-6 rounded-xl ${situation.color} shadow-warm`}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                animate={isSituationInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.7, delay: index * 0.2 }}
              >
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-start">
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-full bg-primary-green/20 flex-shrink-0">
                      {situation.icon}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-text-brown mb-2">{situation.title}</h3>
                    </div>
                  </div>
                  <div>
                    <p className="text-text-brown mb-3">{situation.description}</p>
                  </div>
                  <div>
                    <p className="text-text-brown/70 text-sm mb-2">What you should know:</p>
                    <ul className="space-y-1">
                      {situation.benefits.map((benefit, idx) => (
                        <li key={idx} className="flex items-start">
                          <CheckCircle className="h-4 w-4 text-primary-green mr-2 flex-shrink-0 mt-0.5" />
                          <span className="text-text-brown text-xs">{benefit}</span>
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

      {/* Conditions We Treat */}
      <section 
        ref={conditionsRef}
        className="py-16 bg-white"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <motion.h2
              className="text-3xl md:text-4xl font-bold mb-4 green-title-text"
              initial={{ opacity: 0, y: 20 }}
              animate={isConditionsInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5 }}
            >
              Conditions We Treat with Advanced Laparoscopy
            </motion.h2>
            <motion.p
              className="text-lg text-text-brown/80"
              initial={{ opacity: 0, y: 20 }}
              animate={isConditionsInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              Comprehensive laparoscopic solutions for women's health conditions
            </motion.p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {conditions.map((condition, index) => (
              <motion.div
                key={index}
                className="bg-accent-cream/30 p-6 rounded-xl shadow-warm"
                initial={{ opacity: 0, y: 20 }}
                animate={isConditionsInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className="p-3 rounded-full bg-primary-green/20 flex-shrink-0">
                    {condition.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-text-brown mb-2">{condition.name}</h3>
                    <p className="text-text-brown/80 mb-3">{condition.description}</p>
                  </div>
                </div>
                
                <div>
                  <p className="text-text-brown/70 text-sm mb-2">How laparoscopy helps:</p>
                  <ul className="space-y-1">
                    {condition.benefits.map((benefit, idx) => (
                      <li key={idx} className="flex items-start">
                        <CheckCircle className="h-4 w-4 text-primary-green mr-2 flex-shrink-0 mt-0.5" />
                        <span className="text-text-brown text-sm">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Surgery Journey */}
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
              Your Laparoscopic Surgery Journey
            </motion.h2>
            <motion.p
              className="text-lg text-text-brown/80"
              initial={{ opacity: 0, y: 20 }}
              animate={isJourneyInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              What to expect from preparation through recovery
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {surgeryJourney.map((phase, index) => (
              <motion.div
                key={index}
                className="bg-white p-6 rounded-xl shadow-warm"
                initial={{ opacity: 0, y: 20 }}
                animate={isJourneyInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="text-center mb-4">
                  <div className="w-12 h-12 bg-primary-green text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-3">
                    {index + 1}
                  </div>
                  <h3 className="text-xl font-bold text-text-brown">{phase.phase}</h3>
                  <p className="text-primary-green text-sm">{phase.duration}</p>
                </div>
                <p className="text-text-brown/80 text-sm mb-4">{phase.focus}</p>
                <ul className="space-y-2">
                  {phase.details.map((detail, idx) => (
                    <li key={idx} className="flex items-start">
                      <CheckCircle className="h-4 w-4 text-primary-green mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-text-brown text-xs">{detail}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Advanced Laparoscopy */}
      <section 
        ref={benefitsRef}
        className="py-16 bg-white"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <motion.h2
              className="text-3xl md:text-4xl font-bold mb-4 green-title-text"
              initial={{ opacity: 0, y: 20 }}
              animate={isBenefitsInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5 }}
            >
              Why Choose Advanced Laparoscopy
            </motion.h2>
            <motion.p
              className="text-lg text-text-brown/80"
              initial={{ opacity: 0, y: 20 }}
              animate={isBenefitsInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              Proven benefits, advanced techniques, and exceptional outcomes
            </motion.p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Proven Benefits Over Traditional Surgery",
                features: [
                  "Smaller incisions: 3-4 tiny cuts vs. one large incision",
                  "Less pain: Significantly reduced post-operative discomfort",
                  "Faster healing: Recovery in days rather than weeks",
                  "Better cosmetics: Minimal scarring that fades over time",
                  "Lower infection risk: Smaller wounds mean less infection risk",
                  "Quicker return to life: Back to work and activities sooner"
                ],
                icon: <TrendingUp className="h-8 w-8 text-primary-green" />
              },
              {
                title: "Dr. Shukla's Advanced Techniques",
                features: [
                  "Latest technology: High-definition cameras and precision instruments",
                  "Specialized training: Fellowship training in advanced procedures",
                  "Extensive experience: Over 1,000 successful procedures",
                  "Excellent outcomes: High success rates with minimal complications",
                  "Patient-centered approach: Surgery tailored to your specific needs"
                ],
                icon: <Star className="h-8 w-8 text-primary-green" />
              },
              {
                title: "Hospital Excellence",
                features: [
                  "Modern operating theaters: Equipped with latest technology",
                  "Experienced surgical teams: Specialized in minimally invasive surgery",
                  "Rapid recovery protocols: Designed to get you home quickly",
                  "24/7 support: Always available for post-operative questions"
                ],
                icon: <Shield className="h-8 w-8 text-primary-green" />
              }
            ].map((benefit, index) => (
              <motion.div
                key={index}
                className="bg-accent-cream/30 p-6 rounded-xl shadow-warm"
                initial={{ opacity: 0, y: 20 }}
                animate={isBenefitsInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="flex items-center mb-4">
                  {benefit.icon}
                  <h3 className="text-xl font-bold text-text-brown ml-3">{benefit.title}</h3>
                </div>
                <ul className="space-y-2">
                  {benefit.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start">
                      <CheckCircle className="h-4 w-4 text-primary-green mr-2 flex-shrink-0 mt-1" />
                      <span className="text-text-brown/80 text-sm">{feature}</span>
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
        className="py-16 bg-accent-cream/30"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <motion.h2
              className="text-3xl md:text-4xl font-bold mb-4 green-title-text"
              initial={{ opacity: 0, y: 20 }}
              animate={isStoriesInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5 }}
            >
              Real Patient Experiences
            </motion.h2>
            <motion.p
              className="text-lg text-text-brown/80"
              initial={{ opacity: 0, y: 20 }}
              animate={isStoriesInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              Stories of successful laparoscopic procedures and quick recoveries
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                className="bg-white p-6 rounded-xl shadow-warm"
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

      {/* Emergency & Recovery */}
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
              When to Contact Us
            </motion.h2>
            <motion.p
              className="text-lg text-text-brown/80"
              initial={{ opacity: 0, y: 20 }}
              animate={isEmergencyInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              Understanding what's normal vs. when to call after surgery
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
                      <div className="h-4 w-4 mr-2 flex-shrink-0 mt-1">
                        {category.level === "Call Immediately" ? 
                          <AlertTriangle className="h-4 w-4 text-red-600" /> :
                          <CheckCircle className="h-4 w-4 text-green-600" />
                        }
                      </div>
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
            <h3 className="text-xl font-bold text-text-brown mb-4">Contact Information</h3>
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
              Common questions about laparoscopic surgery
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
              Ready to Explore Advanced Laparoscopic Solutions?
            </h2>
            <p className="text-lg text-text-brown/80 mb-8 max-w-2xl mx-auto">
              Discover how minimally invasive surgery can provide maximum results with minimal disruption to your life. 
              Contact Dr. Amita Shukla's clinic today to schedule your consultation.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button asChild variant="ghost" className="btn-green">
                <Link href="/contact">
                  <Calendar className="mr-2 h-4 w-4" /> Schedule Consultation
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