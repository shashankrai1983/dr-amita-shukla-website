// app/services/infertility/page.tsx
// Changes: Created comprehensive infertility treatment page following the same structure as high-risk pregnancy page

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
  Target,
  TrendingUp
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { GridPattern } from '@/components/ui/grid-pattern';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function InfertilityTreatment() {
  const heroRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);
  const journeyRef = useRef<HTMLDivElement>(null);
  const treatmentRef = useRef<HTMLDivElement>(null);
  const storiesRef = useRef<HTMLDivElement>(null);
  const controlRef = useRef<HTMLDivElement>(null);
  const emergencyRef = useRef<HTMLDivElement>(null);
  const faqRef = useRef<HTMLDivElement>(null);
  
  const isHeroInView = useInView(heroRef, { once: true });
  const isStatsInView = useInView(statsRef, { once: true });
  const isJourneyInView = useInView(journeyRef, { once: true });
  const isTreatmentInView = useInView(treatmentRef, { once: true });
  const isStoriesInView = useInView(storiesRef, { once: true });
  const isControlInView = useInView(controlRef, { once: true });
  const isEmergencyInView = useInView(emergencyRef, { once: true });
  const isFaqInView = useInView(faqRef, { once: true });

  const journeyCategories = [
    {
      title: "6-12 Months Trying",
      subtitle: "Under 35: 12 months | Over 35: 6 months",
      description: "Perfect timing to seek help. Early evaluation identifies easily treatable issues.",
      outcome: "Most couples conceive within 3-6 months of starting treatment",
      icon: <Clock className="h-6 w-6 text-primary-green" />,
      color: "bg-primary-green/10"
    },
    {
      title: "1-2 Years Trying",
      subtitle: "Your persistence shows incredible strength",
      description: "This timeline often reveals specific issues that respond well to targeted treatments.",
      outcome: "Success typically achieved within 6-12 months of treatment",
      icon: <Target className="h-6 w-6 text-primary-green" />,
      color: "bg-secondary-brown/10"
    },
    {
      title: "2+ Years Trying",
      subtitle: "Your journey has been long, but options remain",
      description: "Complex fertility issues often require advanced treatments with high success rates.",
      outcome: "Many couples with long-term infertility become parents through specialized care",
      icon: <TrendingUp className="h-6 w-6 text-primary-green" />,
      color: "bg-accent-cream"
    }
  ];

  const treatmentPhases = [
    {
      phase: "Getting Answers",
      duration: "Weeks 1-4",
      focus: "Comprehensive fertility assessment for both partners",
      details: [
        "Detailed medical history and hormone testing",
        "Ovarian reserve and ovulation tracking", 
        "Semen analysis and genetic screening",
        "HSG tube testing and pelvic ultrasound"
      ]
    },
    {
      phase: "Creating Your Plan",
      duration: "Week 4-6",
      focus: "Personalized treatment options based on results",
      details: [
        "Results review in plain language",
        "Multiple treatment pathway options",
        "Success rates for your situation",
        "Timeline and cost discussion"
      ]
    },
    {
      phase: "Active Treatment",
      duration: "Varies by treatment",
      focus: "Ongoing support throughout treatment cycles",
      details: [
        "Regular monitoring and adjustments",
        "Blood tests and ultrasound tracking",
        "Medication guidance and support",
        "Cycle optimization based on response"
      ]
    },
    {
      phase: "Success & Beyond",
      duration: "Ongoing",
      focus: "Pregnancy achievement and early monitoring",
      details: [
        "Early pregnancy ultrasounds",
        "High-risk pregnancy management if needed",
        "Transition to obstetric care",
        "Support for additional cycles if needed"
      ]
    }
  ];

  const treatments = [
    {
      name: "IUI (Intrauterine Insemination)",
      subtitle: "The Gentle Approach",
      successRate: "15-20% per cycle",
      bestFor: ["Unexplained infertility", "Mild male factor issues", "Ovulation disorders", "Cervical factor infertility"],
      description: "Prepared sperm is placed directly into the uterus during ovulation window. Quick, painless procedure that dramatically increases fertilization chances.",
      icon: <Stethoscope className="h-8 w-8 text-primary-green" />
    },
    {
      name: "IVF (In Vitro Fertilization)", 
      subtitle: "Maximum Control, Maximum Hope",
      successRate: "40-50% per cycle (under 35)",
      bestFor: ["Blocked fallopian tubes", "Severe male factor infertility", "Advanced maternal age", "Failed IUI cycles"],
      description: "Complete control over fertilization and embryo selection. Involves ovarian stimulation, egg retrieval, fertilization, and embryo transfer.",
      icon: <TestTube className="h-8 w-8 text-primary-green" />
    },
    {
      name: "ICSI",
      subtitle: "Overcoming Male Factor Infertility", 
      successRate: "Similar to IVF for male factor",
      bestFor: ["Very low sperm count", "Poor sperm movement", "Abnormal sperm shape", "Previous fertilization failures"],
      description: "Single healthy sperm is injected directly into each mature egg using advanced microsurgical techniques.",
      icon: <Microscope className="h-8 w-8 text-primary-green" />
    },
    {
      name: "Laparoscopic Surgery",
      subtitle: "Minimally Invasive Solutions",
      successRate: "High success for structural issues",
      bestFor: ["Endometriosis", "Ovarian cysts", "Adhesions", "Fibroids affecting fertility"],
      description: "Advanced laparoscopic techniques with tiny incisions, faster recovery, and minimal scarring. Quick return to fertility treatments.",
      icon: <Activity className="h-8 w-8 text-primary-green" />
    }
  ];

  const testimonials = [
    {
      name: "Meera & Rajesh",
      condition: "After 3 Years of Trying",
      story: "We thought we'd never be parents. Three years of negative pregnancy tests, doctors telling us to 'just relax,' and watching friends have babies while we struggled. Dr. Shukla found that I had blocked fallopian tubes – something no one had checked before. After IVF, I got pregnant on the first try.",
      outcome: "Daughter now 2 years old, expecting second baby"
    },
    {
      name: "Priya",
      condition: "Single Mother by Choice at 38", 
      story: "I decided to become a single mother at 38, knowing time wasn't on my side. Dr. Shukla didn't judge my choice but supported it completely. We used donor sperm and IUI. It took four cycles, but I'm now the proud mother of twin boys.",
      outcome: "Twin boys via donor sperm and IUI"
    },
    {
      name: "Amit & Sonia",
      condition: "Male Factor Infertility Success",
      story: "The diagnosis was devastating – severe male factor infertility. Other doctors told us donor sperm was our only option. Dr. Shukla suggested ICSI and worked with us on improving sperm quality naturally. Six months later, we conceived using my husband's sperm through IVF with ICSI.",
      outcome: "Son has his father's eyes and smile"
    },
    {
      name: "Deepika",
      condition: "Endometriosis Warrior",
      story: "Endometriosis had taken over my life – painful periods, painful sex, and no pregnancy after 2 years of trying. Dr. Shukla performed laparoscopic surgery to remove the endometrial tissue. Three months later, I conceived naturally.",
      outcome: "Natural conception 3 months post-surgery"
    }
  ];

  const emergencySymptoms = [
    {
      level: "Call Immediately",
      color: "border-red-500 bg-red-50",
      icon: <AlertTriangle className="h-6 w-6 text-red-600" />,
      symptoms: [
        "Severe pelvic pain (could indicate ovarian torsion)",
        "Heavy bleeding between periods with severe pain",
        "Severe abdominal bloating and difficulty breathing (OHSS)",
        "Rapid weight gain (more than 2 pounds per day during treatment)"
      ]
    },
    {
      level: "Call Within 24 Hours",
      color: "border-orange-500 bg-orange-50",
      icon: <Clock className="h-6 w-6 text-orange-600" />,
      symptoms: [
        "Severe headaches that don't respond to pain relief",
        "Vision changes or unusual visual disturbances",
        "Infection signs after procedures (fever, unusual discharge)",
        "Severe nausea preventing medication intake"
      ]
    }
  ];

  const faqs = [
    {
      question: "How long will it take to get pregnant with treatment?",
      answer: "Success timing varies by treatment type and individual factors. Simple treatments like ovulation induction often work within 3-6 months. IUI typically succeeds within 3-4 cycles if it's going to work. IVF has about a 40-50% success rate per cycle for women under 35. We'll give you specific timelines based on your situation."
    },
    {
      question: "What if the first treatment doesn't work?",
      answer: "Treatment often requires multiple cycles. Each attempt teaches us more about your body's response, allowing us to optimize subsequent treatments. Many couples succeed on their second or third attempt after adjustments based on previous cycles."
    },
    {
      question: "How much does fertility treatment cost?",
      answer: "Costs vary significantly by treatment type. Basic testing ranges from ₹15,000-25,000. IUI cycles cost ₹8,000-15,000 per attempt. IVF ranges from ₹1,50,000-2,50,000 per cycle including medications. We provide detailed cost estimates and work with insurance companies for maximum coverage."
    },
    {
      question: "I'm over 40. Is it too late for me?",
      answer: "While fertility naturally declines with age, many women over 40 conceive successfully with treatment. We'll assess your ovarian reserve and discuss realistic expectations and treatment options tailored to your age group."
    },
    {
      question: "Is IVF painful?",
      answer: "Most IVF procedures involve minimal discomfort. Daily injections are typically well-tolerated. Egg retrieval is performed under sedation, so you won't feel pain during the procedure. Some patients experience mild cramping afterward, similar to menstrual cramps."
    },
    {
      question: "Can I continue working during treatment?",
      answer: "Most patients continue working normally during fertility treatments. You may need flexibility for monitoring appointments, which can be frequent during stimulation cycles. We provide work letters when needed and schedule appointments to minimize disruption."
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
                <span className="ms-1 text-sm font-medium text-text-brown md:ms-2">Infertility Treatment</span>
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
                Infertility Treatment
              </h1>
              <p className="text-xl text-text-brown mb-6">
                Your Dream of Parenthood is Not Over - Hope Begins Here
              </p>
              <p className="text-lg text-text-brown/80 mb-8">
                If you've been trying to conceive for months or years without success, you're not alone. 
                The journey to parenthood can feel overwhelming, but being here means you're taking the first 
                step toward making your dream a reality. 85% of couples struggling with infertility can conceive with proper treatment.
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
                  src="https://i.ibb.co/zT9kR7kq/Infertility-Care.png"
                  alt="Infertility treatment with Dr. Amita Shukla"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-white p-4 rounded-xl shadow-warm">
                <div className="flex items-center gap-3 p-2">
                  <Heart className="h-10 w-10 text-primary-green" />
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
              Take Comfort in These Facts
            </motion.h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { stat: "85%", label: "Couples Can Conceive", icon: <CheckCircle className="h-8 w-8 text-primary-green" /> },
              { stat: "500+", label: "Families Helped", icon: <Users className="h-8 w-8 text-primary-green" /> },
              { stat: "10+", label: "Years Experience", icon: <Star className="h-8 w-8 text-primary-green" /> },
              { stat: "24/7", label: "Support Available", icon: <Shield className="h-8 w-8 text-primary-green" /> }
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

      {/* Understanding Your Journey */}
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
              Understanding Your Journey
            </motion.h2>
            <motion.p
              className="text-lg text-text-brown/80"
              initial={{ opacity: 0, y: 20 }}
              animate={isJourneyInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              Where do you see yourself? Every fertility journey is unique.
            </motion.p>
          </div>

          <div className="space-y-8">
            {journeyCategories.map((category, index) => (
              <motion.div
                key={index}
                className={`p-6 rounded-xl ${category.color} shadow-warm`}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                animate={isJourneyInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.7, delay: index * 0.2 }}
              >
                <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 items-center">
                  <div className="flex items-center gap-4">
                    <div className="p-3 rounded-full bg-primary-green/20">
                      {category.icon}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-text-brown">{category.title}</h3>
                      <p className="text-primary-green text-sm">{category.subtitle}</p>
                    </div>
                  </div>
                  <div className="lg:col-span-2">
                    <p className="text-text-brown">{category.description}</p>
                  </div>
                  <div>
                    <p className="text-text-brown/70 text-sm mb-1">Expected Outcome</p>
                    <p className="font-semibold text-primary-green text-sm">{category.outcome}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Treatment Journey Phases */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 green-title-text">
              Your Personalized Treatment Journey
            </h2>
            <p className="text-lg text-text-brown/80">
              From answers to arms - your path to parenthood
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {treatmentPhases.map((phase, index) => (
              <motion.div
                key={index}
                className="bg-accent-cream/30 p-6 rounded-xl shadow-warm"
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

      {/* Advanced Treatment Options */}
      <section 
        ref={treatmentRef}
        className="py-16 bg-accent-cream/30"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <motion.h2
              className="text-3xl md:text-4xl font-bold mb-4 green-title-text"
              initial={{ opacity: 0, y: 20 }}
              animate={isTreatmentInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5 }}
            >
              Advanced Treatment Options
            </motion.h2>
            <motion.p
              className="text-lg text-text-brown/80"
              initial={{ opacity: 0, y: 20 }}
              animate={isTreatmentInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              Science meets hope - proven pathways to parenthood
            </motion.p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {treatments.map((treatment, index) => (
              <motion.div
                key={index}
                className="bg-white p-6 rounded-xl shadow-warm"
                initial={{ opacity: 0, y: 20 }}
                animate={isTreatmentInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className="p-3 rounded-full bg-primary-green/20 flex-shrink-0">
                    {treatment.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-text-brown">{treatment.name}</h3>
                    <p className="text-primary-green text-sm">{treatment.subtitle}</p>
                    <p className="text-text-brown/70 text-sm">Success Rate: {treatment.successRate}</p>
                  </div>
                </div>
                
                <p className="text-text-brown/80 mb-4">{treatment.description}</p>
                
                <div>
                  <p className="text-text-brown/70 text-sm mb-2">Best for:</p>
                  <ul className="space-y-1">
                    {treatment.bestFor.map((condition, idx) => (
                      <li key={idx} className="flex items-start">
                        <CheckCircle className="h-4 w-4 text-primary-green mr-2 flex-shrink-0 mt-0.5" />
                        <span className="text-text-brown text-sm">{condition}</span>
                      </li>
                    ))}
                  </ul>
                </div>
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
              Dreams becoming reality - hope through experience
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

      {/* Taking Control of Your Fertility */}
      <section 
        ref={controlRef}
        className="py-16 bg-accent-cream/30"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <motion.h2
              className="text-3xl md:text-4xl font-bold mb-4 green-title-text"
              initial={{ opacity: 0, y: 20 }}
              animate={isControlInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5 }}
            >
              Taking Control of Your Fertility
            </motion.h2>
            <motion.p
              className="text-lg text-text-brown/80"
              initial={{ opacity: 0, y: 20 }}
              animate={isControlInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              Your active role in success - partnering for optimal outcomes
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Nutrition Excellence",
                icon: <Heart className="h-8 w-8 text-primary-green" />,
                points: [
                  "Protein-rich foods support hormone production",
                  "Healthy fats improve egg quality",
                  "Antioxidant-rich foods protect reproductive cells",
                  "Fertility superfoods: pomegranates, walnuts, spinach"
                ]
              },
              {
                title: "Lifestyle Optimization",
                icon: <Activity className="h-8 w-8 text-primary-green" />,
                points: [
                  "Moderate exercise improves fertility",
                  "Stress management through meditation",
                  "Adequate sleep for hormone balance",
                  "Avoiding environmental toxins"
                ]
              },
              {
                title: "Treatment Partnership",
                icon: <UserPlus className="h-8 w-8 text-primary-green" />,
                points: [
                  "Follow medication schedules precisely",
                  "Track symptoms and cycle patterns",
                  "Communicate openly about concerns",
                  "Attend all monitoring appointments"
                ]
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                className="bg-white p-6 rounded-xl shadow-warm"
                initial={{ opacity: 0, y: 20 }}
                animate={isControlInView ? { opacity: 1, y: 0 } : {}}
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

      {/* Emergency Situations */}
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
              When to Seek Immediate Help
            </motion.h2>
            <motion.p
              className="text-lg text-text-brown/80"
              initial={{ opacity: 0, y: 20 }}
              animate={isEmergencyInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              Recognizing urgent fertility treatment concerns
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
              Real concerns, honest answers
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
              Ready to Start Your Journey to Parenthood?
            </h2>
            <p className="text-lg text-text-brown/80 mb-8 max-w-2xl mx-auto">
              Your journey to parenthood starts with a single step. Contact Dr. Amita Shukla's clinic 
              today to schedule your comprehensive fertility consultation and begin creating your personalized path to your baby.
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