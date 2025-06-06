// app/services/pcos-pcod/page.tsx
// Changes: Created comprehensive PCOS/PCOD treatment page following the same structure as other service pages

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
  Scale,
  UserPlus,
  Pill,
  Target,
  TrendingUp,
  Zap,
  Flower2
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { GridPattern } from '@/components/ui/grid-pattern';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function PCOSPCODTreatment() {
  const heroRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);
  const understandingRef = useRef<HTMLDivElement>(null);
  const journeyRef = useRef<HTMLDivElement>(null);
  const treatmentRef = useRef<HTMLDivElement>(null);
  const storiesRef = useRef<HTMLDivElement>(null);
  const controlRef = useRef<HTMLDivElement>(null);
  const emergencyRef = useRef<HTMLDivElement>(null);
  const faqRef = useRef<HTMLDivElement>(null);
  
  const isHeroInView = useInView(heroRef, { once: true });
  const isStatsInView = useInView(statsRef, { once: true });
  const isUnderstandingInView = useInView(understandingRef, { once: true });
  const isJourneyInView = useInView(journeyRef, { once: true });
  const isTreatmentInView = useInView(treatmentRef, { once: true });
  const isStoriesInView = useInView(storiesRef, { once: true });
  const isControlInView = useInView(controlRef, { once: true });
  const isEmergencyInView = useInView(emergencyRef, { once: true });
  const isFaqInView = useInView(faqRef, { once: true });

  const pcosTypes = [
    {
      title: "Classic PCOS",
      subtitle: "Most Common Type",
      description: "Irregular periods, elevated androgens, multiple ovarian cysts",
      features: ["Often includes weight gain", "Insulin resistance common", "Responds well to comprehensive treatment"],
      icon: <Target className="h-6 w-6 text-primary-green" />,
      color: "bg-primary-green/10"
    },
    {
      title: "Lean PCOS",
      subtitle: "Normal Weight PCOS",
      description: "Normal weight but other PCOS symptoms present",
      features: ["Pronounced hormonal symptoms", "Often genetic component", "Requires different treatment approach"],
      icon: <Scale className="h-6 w-6 text-primary-green" />,
      color: "bg-secondary-brown/10"
    },
    {
      title: "Insulin-Resistant PCOS",
      subtitle: "Metabolic Focus",
      description: "Significant weight gain, especially abdominal",
      features: ["Difficulty losing weight", "Dark skin patches", "Strong family history of diabetes"],
      icon: <TrendingUp className="h-6 w-6 text-primary-green" />,
      color: "bg-accent-cream"
    },
    {
      title: "Inflammatory PCOS",
      subtitle: "Inflammation-Driven",
      description: "Chronic inflammation markers present",
      features: ["May include digestive issues", "Stress-related triggers", "Benefits from anti-inflammatory approaches"],
      icon: <Zap className="h-6 w-6 text-primary-green" />,
      color: "bg-primary-green/5"
    }
  ];

  const treatmentPhases = [
    {
      phase: "Understanding Your Unique PCOS",
      duration: "Weeks 1-3",
      focus: "Comprehensive PCOS assessment beyond basic diagnosis",
      details: [
        "Detailed hormone testing (androgens, reproductive, metabolic)",
        "Advanced imaging and ovarian volume assessment",
        "Metabolic evaluation and body composition analysis",
        "Lifestyle assessment and stress evaluation"
      ]
    },
    {
      phase: "Creating Your Personalized Plan",
      duration: "Weeks 3-4",
      focus: "Treatment goals and multi-modal approach",
      details: [
        "Results review and education",
        "Goal setting based on your priorities",
        "Medical management options",
        "Nutritional therapy and lifestyle modifications"
      ]
    },
    {
      phase: "Active Treatment & Monitoring",
      duration: "Months 1-6",
      focus: "Regular progress monitoring and adjustments",
      details: [
        "Monthly check-ins and cycle tracking",
        "Quarterly comprehensive reviews",
        "Treatment modifications as needed",
        "Continuous support and guidance"
      ]
    },
    {
      phase: "Long-term Health & Maintenance",
      duration: "Ongoing",
      focus: "Sustained wellness and life stage adaptations",
      details: [
        "Annual comprehensive health screenings",
        "Diabetes and cardiovascular prevention",
        "Reproductive health monitoring",
        "Life stage adaptation (pregnancy, menopause)"
      ]
    }
  ];

  const treatments = [
    {
      name: "Hormonal Balance Restoration",
      description: "Birth control pills, progesterone therapy, or natural cycle regulation",
      benefits: ["Regularizes cycles within 1-3 months", "Reduces androgen symptoms", "Protects uterine lining"],
      icon: <Flower2 className="h-8 w-8 text-primary-green" />,
      approach: "Personalized hormonal approach based on your goals and preferences"
    },
    {
      name: "Metabolic Management",
      description: "Insulin sensitization and weight management strategies",
      benefits: ["Improves insulin function", "Often leads to weight loss", "Reduces diabetes risk"],
      icon: <Target className="h-8 w-8 text-primary-green" />,
      approach: "PCOS-specific nutrition and exercise protocols"
    },
    {
      name: "Androgen Symptom Management",
      description: "Anti-androgen medications and topical treatments",
      benefits: ["Reduces unwanted hair growth", "Improves acne", "Slows hair loss"],
      icon: <Pill className="h-8 w-8 text-primary-green" />,
      approach: "Results typically seen within 3-6 months"
    },
    {
      name: "Fertility Treatment for PCOS",
      description: "Ovulation induction and advanced fertility options",
      benefits: ["70-80% ovulation success", "60-70% conception within 6 months", "Similar pregnancy rates to non-PCOS"],
      icon: <Heart className="h-8 w-8 text-primary-green" />,
      approach: "From simple ovulation induction to advanced IVF"
    }
  ];

  const testimonials = [
    {
      name: "Anjali",
      condition: "From Chaos to Control",
      story: "At 25, I hadn't had a period in 8 months, had gained 30 pounds despite exercising daily, and was growing hair on my face. I felt like my body was betraying me. Dr. Shukla explained that my insulin resistance was driving everything. Within 3 months of starting metformin and following her PCOS diet plan, my periods returned, I lost 20 pounds, and my energy came back.",
      outcome: "Regular periods, 20 pounds lost, energy restored"
    },
    {
      name: "Priya",
      condition: "Conceiving with PCOS",
      story: "We tried to get pregnant for 18 months with no success. My periods were so irregular I never knew when I was ovulating. Dr. Shukla started me on letrozole to induce ovulation, and I got pregnant in the second cycle. My son is now 3, and we're expecting our second baby.",
      outcome: "Two successful pregnancies with treatment"
    },
    {
      name: "Kavya",
      condition: "Weight Loss Success",
      story: "I was told by other doctors to 'just eat less and exercise more,' but nothing worked. Dr. Shukla explained that PCOS makes weight loss different - it's not just calories in, calories out. Her insulin-focused approach, combined with the right exercise plan, helped me lose 40 pounds.",
      outcome: "40 pounds lost in 8 months, maintained"
    },
    {
      name: "Meera",
      condition: "Hair Growth Victory",
      story: "The unwanted facial hair was destroying my confidence. I was spending hours every week tweezing and hiding. Dr. Shukla started me on spironolactone and recommended laser hair removal. After 6 months, the new growth slowed dramatically, and the laser removed most of the existing hair.",
      outcome: "Confidence restored, hair growth controlled"
    },
    {
      name: "Deepika",
      condition: "Diabetes Prevention",
      story: "My mother has diabetes, and my blood tests showed I was pre-diabetic at just 28. Dr. Shukla created a comprehensive plan to reverse my insulin resistance. Two years later, my blood sugar is completely normal, and my last A1C was 5.2%.",
      outcome: "Prevented diabetes, optimal health achieved"
    },
    {
      name: "Sonia",
      condition: "Natural Cycle Success",
      story: "I wanted to manage my PCOS naturally while trying to conceive. Dr. Shukla worked with me to regulate my cycles through diet, supplements, and lifestyle changes. It took longer than medication might have, but I achieved regular 28-day cycles and conceived naturally after 6 months.",
      outcome: "Natural conception with lifestyle approach"
    }
  ];

  const emergencySymptoms = [
    {
      level: "Call Immediately",
      color: "border-red-500 bg-red-50",
      icon: <AlertTriangle className="h-6 w-6 text-red-600" />,
      symptoms: [
        "Severe pelvic pain (could indicate ovarian torsion or rupture)",
        "Symptoms of diabetic ketoacidosis (excessive thirst, confusion)",
        "Severe hypoglycemia (dizziness, sweating, rapid heartbeat)",
        "Allergic reactions to PCOS medications (rash, swelling, difficulty breathing)"
      ]
    },
    {
      level: "Call Within 24 Hours",
      color: "border-orange-500 bg-orange-50",
      icon: <Clock className="h-6 w-6 text-orange-600" />,
      symptoms: [
        "Sudden severe hair loss or rapid hair growth changes",
        "Extreme mood changes or unmanageable depression",
        "Significant unexplained weight gain (5+ pounds in a week)",
        "No period for 3+ months while on treatment"
      ]
    }
  ];

  const faqs = [
    {
      question: "How do I know if I have PCOS or PCOD? Is there a difference?",
      answer: "PCOS (Polycystic Ovary Syndrome) and PCOD (Polycystic Ovarian Disease) refer to the same condition. PCOS is the medically preferred term. Diagnosis requires two of three criteria: irregular ovulation, elevated androgens, or polycystic ovaries on ultrasound."
    },
    {
      question: "Can PCOS go away on its own?",
      answer: "PCOS is a lifelong hormonal condition, but symptoms can be managed so effectively that many women feel completely normal. Some women see significant improvement during pregnancy or with major lifestyle changes, but the underlying tendency usually remains."
    },
    {
      question: "Do I have to take medication forever?",
      answer: "Not necessarily. Many women can manage PCOS with lifestyle modifications alone, especially if caught early. Others use medications temporarily to achieve hormonal balance, then maintain it with lifestyle. Some need ongoing medical support, which is perfectly fine and safe."
    },
    {
      question: "Why is it so hard to lose weight with PCOS?",
      answer: "PCOS causes insulin resistance, which makes your body store fat more easily and burn it less efficiently. Additionally, higher androgen levels can increase appetite and change where fat is stored. This is why PCOS requires specific weight loss approaches, not generic advice."
    },
    {
      question: "Can I get pregnant naturally with PCOS?",
      answer: "Yes, many women with PCOS conceive naturally. About 70-80% of women with PCOS can achieve pregnancy with appropriate treatment to restore ovulation. Even those with irregular cycles often ovulate occasionally and can conceive during those cycles."
    },
    {
      question: "Will I definitely develop diabetes?",
      answer: "Having PCOS increases diabetes risk, but it's not inevitable. With proper lifestyle management and medical care, many women with PCOS maintain normal blood sugar throughout their lives. The key is early intervention and consistent management."
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
                <span className="ms-1 text-sm font-medium text-text-brown md:ms-2">PCOS/PCOD Treatment</span>
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
                PCOS/PCOD Treatment
              </h1>
              <p className="text-xl text-text-brown mb-6">
                You Are Not Alone in This Journey - PCOS is Manageable, and You Can Thrive
              </p>
              <p className="text-lg text-text-brown/80 mb-8">
                If you've been diagnosed with PCOS, you might be feeling overwhelmed or scared. 
                Here's what you need to know: PCOS affects 1 in 10 women, 80% can achieve regular periods 
                with proper treatment, and you can live a completely normal, healthy life with PCOS.
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
                  src="https://i.ibb.co/LXHkZKWc/PCOS-PCOD-care.png"
                  alt="PCOS/PCOD treatment with Dr. Amita Shukla"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-white p-4 rounded-xl shadow-warm">
                <div className="flex items-center gap-3 p-2">
                  <Target className="h-10 w-10 text-primary-green" />
                  <div>
                    <p className="text-sm text-text-brown/70">Success Rate</p>
                    <p className="font-bold text-text-brown">80%+</p>
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
              { stat: "80%", label: "Achieve Regular Periods", icon: <CheckCircle className="h-8 w-8 text-primary-green" /> },
              { stat: "800+", label: "Women Helped", icon: <Users className="h-8 w-8 text-primary-green" /> },
              { stat: "10+", label: "Years Experience", icon: <Star className="h-8 w-8 text-primary-green" /> },
              { stat: "1 in 10", label: "Women Have PCOS", icon: <Heart className="h-8 w-8 text-primary-green" /> }
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

      {/* Understanding Your PCOS */}
      <section 
        ref={understandingRef}
        className="py-16 bg-accent-cream/30"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <motion.h2
              className="text-3xl md:text-4xl font-bold mb-4 green-title-text"
              initial={{ opacity: 0, y: 20 }}
              animate={isUnderstandingInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5 }}
            >
              Understanding Your PCOS
            </motion.h2>
            <motion.p
              className="text-lg text-text-brown/80"
              initial={{ opacity: 0, y: 20 }}
              animate={isUnderstandingInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              What type of PCOS do you have? Understanding helps create the most effective treatment plan.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {pcosTypes.map((type, index) => (
              <motion.div
                key={index}
                className={`p-6 rounded-xl ${type.color} shadow-warm`}
                initial={{ opacity: 0, y: 20 }}
                animate={isUnderstandingInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className="p-3 rounded-full bg-primary-green/20 flex-shrink-0">
                    {type.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-text-brown">{type.title}</h3>
                    <p className="text-primary-green text-sm">{type.subtitle}</p>
                  </div>
                </div>
                <p className="text-text-brown/80 mb-4">{type.description}</p>
                <ul className="space-y-2">
                  {type.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start">
                      <CheckCircle className="h-4 w-4 text-primary-green mr-2 flex-shrink-0 mt-1" />
                      <span className="text-text-brown text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Treatment Journey */}
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
              Your Personalized Treatment Journey
            </motion.h2>
            <motion.p
              className="text-lg text-text-brown/80"
              initial={{ opacity: 0, y: 20 }}
              animate={isJourneyInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              From chaos to balance - restoring your body's natural harmony
            </motion.p>
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

      {/* Treatment Options */}
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
              Comprehensive Treatment Options
            </motion.h2>
            <motion.p
              className="text-lg text-text-brown/80"
              initial={{ opacity: 0, y: 20 }}
              animate={isTreatmentInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              Science-based solutions that work for your unique PCOS type
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
                    <h3 className="text-xl font-bold text-text-brown mb-2">{treatment.name}</h3>
                    <p className="text-text-brown/80 mb-3">{treatment.description}</p>
                    <p className="text-primary-green text-sm font-medium">{treatment.approach}</p>
                  </div>
                </div>
                
                <div>
                  <p className="text-text-brown/70 text-sm mb-2">Key Benefits:</p>
                  <ul className="space-y-1">
                    {treatment.benefits.map((benefit, idx) => (
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
              PCOS warriors thriving - hope through real experiences
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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

      {/* Taking Control */}
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
              Taking Control of Your PCOS
            </motion.h2>
            <motion.p
              className="text-lg text-text-brown/80"
              initial={{ opacity: 0, y: 20 }}
              animate={isControlInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              Your daily actions for success - becoming an active partner in your healing
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "PCOS-Specific Nutrition",
                icon: <Heart className="h-8 w-8 text-primary-green" />,
                points: [
                  "Low glycemic index foods prevent blood sugar spikes",
                  "Anti-inflammatory foods reduce PCOS symptoms",
                  "Protein with every meal stabilizes hormones",
                  "Limit refined sugars and processed foods"
                ]
              },
              {
                title: "Exercise That Heals",
                icon: <Activity className="h-8 w-8 text-primary-green" />,
                points: [
                  "Resistance training builds insulin-sensitive muscle",
                  "Moderate cardio without excessive stress",
                  "Yoga reduces cortisol and improves flexibility",
                  "Walking after meals controls blood sugar"
                ]
              },
              {
                title: "Stress & Sleep Management",
                icon: <Shield className="h-8 w-8 text-primary-green" />,
                points: [
                  "Daily meditation reduces cortisol levels",
                  "7-9 hours nightly sleep improves insulin sensitivity",
                  "Consistent bedtime regulates hormones",
                  "Stress reduction improves ovulation"
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
              Recognizing urgent PCOS-related situations
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
              PCOS concerns addressed honestly
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
              Ready to Take Control of Your PCOS?
            </h2>
            <p className="text-lg text-text-brown/80 mb-8 max-w-2xl mx-auto">
              Take control of your PCOS and reclaim your health. Contact Dr. Amita Shukla's clinic 
              today to schedule your comprehensive PCOS evaluation and begin your personalized journey 
              to hormonal balance and optimal wellness.
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