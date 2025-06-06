// app/international-patients/page.tsx
// Changes: Removed the Key Stats section as requested

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
  Globe,
  Star,
  Activity,
  Clock,
  ChevronRight,
  MapPin,
  UserPlus,
  Building2,
  Plane,
  CreditCard,
  Award,
  Headphones,
  Mail,
  Video,
  AlertTriangle,
  Home
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { GridPattern } from '@/components/ui/grid-pattern';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function InternationalPatients() {
  const heroRef = useRef<HTMLDivElement>(null);
  const servicesRef = useRef<HTMLDivElement>(null);
  const journeyRef = useRef<HTMLDivElement>(null);
  const facilitiesRef = useRef<HTMLDivElement>(null);
  const supportRef = useRef<HTMLDivElement>(null);
  const testimonialsRef = useRef<HTMLDivElement>(null);
  const faqRef = useRef<HTMLDivElement>(null);
  
  const isHeroInView = useInView(heroRef, { once: true });
  const isServicesInView = useInView(servicesRef, { once: true });
  const isJourneyInView = useInView(journeyRef, { once: true });
  const isFacilitiesInView = useInView(facilitiesRef, { once: true });
  const isSupportInView = useInView(supportRef, { once: true });
  const isTestimonialsInView = useInView(testimonialsRef, { once: true });
  const isFaqInView = useInView(faqRef, { once: true });

  const whyChooseUs = [
    {
      title: "World-Class Medical Excellence",
      description: "International healthcare standards with state-of-the-art technology",
      icon: <Award className="h-8 w-8 text-primary-green" />
    },
    {
      title: "Comprehensive Care Under One Roof",
      description: "End-to-end healthcare services eliminating coordination needs",
      icon: <Building2 className="h-8 w-8 text-primary-green" />
    },
    {
      title: "Dedicated International Support",
      description: "24/7 assistance with specialized international patient coordinators",
      icon: <Headphones className="h-8 w-8 text-primary-green" />
    },
    {
      title: "Cost-Effective Treatment",
      description: "World-class healthcare at a fraction of international costs",
      icon: <CreditCard className="h-8 w-8 text-primary-green" />
    }
  ];

  const specializedServices = [
    {
      title: "Long Term Care",
      subtitle: "Comprehensive Extended Care for Sustained Recovery",
      description: "Continuous medical monitoring and rehabilitation for extended treatment periods with personalized care plans.",
      features: [
        "Post-surgical rehabilitation and recovery",
        "Chronic disease management programs",
        "Extended medical stability monitoring",
        "Complex medication management",
        "Rehabilitation therapy programs"
      ],
      icon: <Clock className="h-8 w-8 text-primary-green" />
    },
    {
      title: "Geriatric Center",
      subtitle: "Specialized Elder Care Excellence",
      description: "Comprehensive medical management and quality of life enhancement for elderly international patients.",
      features: [
        "Age-related medical conditions",
        "Memory care and dementia support",
        "Mobility rehabilitation programs",
        "Comprehensive geriatric assessments",
        "Medication optimization for seniors"
      ],
      icon: <Users className="h-8 w-8 text-primary-green" />
    },
    {
      title: "Terminal Care",
      subtitle: "Compassionate End-of-Life Medical Support",
      description: "Comfort-focused care with expert symptom management preserving dignity during end-of-life.",
      features: [
        "Advanced illness symptom management",
        "Pain control and comfort measures",
        "Emotional and spiritual support",
        "Family counseling and guidance",
        "Dignity-focused end-of-life care"
      ],
      icon: <Heart className="h-8 w-8 text-primary-green" />
    },
    {
      title: "Assisted Living",
      subtitle: "Supported Independent Living",
      description: "Bridge between independence and comprehensive care while maintaining autonomy.",
      features: [
        "Partial medical supervision needs",
        "Social engagement and community programs",
        "Safety monitoring and emergency response",
        "Lifestyle support and daily assistance",
        "Transitional care planning"
      ],
      icon: <Home className="h-8 w-8 text-primary-green" />
    },
    {
      title: "Hospice Care",
      subtitle: "Dignified Comfort Care",
      description: "Quality of life emphasis with comfort and emotional well-being for life-limiting conditions.",
      features: [
        "Life-limiting illness management",
        "Advanced pain and symptom control",
        "Emotional and psychological support",
        "Family counseling and education",
        "Bereavement support services"
      ],
      icon: <Shield className="h-8 w-8 text-primary-green" />
    },
    {
      title: "Cancer Care",
      subtitle: "Comprehensive Oncology Treatment",
      description: "Cutting-edge treatment with supportive care services using multidisciplinary approach.",
      features: [
        "Cancer diagnosis and staging",
        "Chemotherapy and radiation therapy",
        "Palliative oncology care",
        "Cancer rehabilitation programs",
        "Survivorship support and follow-up"
      ],
      icon: <Activity className="h-8 w-8 text-primary-green" />
    }
  ];

  const journeySteps = [
    {
      step: "1",
      title: "Initial Consultation & Assessment",
      details: [
        "Free medical opinion with guaranteed appointment",
        "Medical record review by specialists",
        "Detailed treatment plan with timeline and costs",
        "Second opinion services for existing diagnoses"
      ]
    },
    {
      step: "2", 
      title: "Pre-Arrival Support",
      details: [
        "Visa assistance and invitation letters",
        "Travel coordination and flight booking",
        "Accommodation booking near hospital",
        "Transparent cost breakdown with no hidden charges"
      ]
    },
    {
      step: "3",
      title: "Arrival & Welcome",
      details: [
        "Complimentary airport transfer service",
        "Comprehensive hospital orientation",
        "Documentation and insurance processing",
        "Cultural orientation and local customs introduction"
      ]
    },
    {
      step: "4",
      title: "Medical Care & Treatment",
      details: [
        "Expert treatment under Dr. Amita's supervision",
        "Dedicated patient assistant for support",
        "Free medical interpreters and language support",
        "Regular family updates and medical reports"
      ]
    },
    {
      step: "5",
      title: "Recovery & Discharge",
      details: [
        "Comprehensive discharge planning",
        "Follow-up coordination with home physicians",
        "Complete medical documentation",
        "Continued telemedicine support"
      ]
    }
  ];

  const facilities = [
    {
      name: "SCT Trust Hospital - Main Campus",
      location: "Puraniya Square, Aliganj, Lucknow, India",
      features: [
        "Advanced medical technology and diagnostics",
        "International patient accommodation wings",
        "24/7 emergency and critical care",
        "Multi-specialty treatment capabilities",
        "Modern operation theaters and ICUs",
        "On-site pharmacy and medical supplies"
      ]
    },
    {
      name: "Aastha Hospice",
      location: "Mahanagar, Lucknow, India", 
      features: [
        "Peaceful, home-like healing environment",
        "Specialized hospice and palliative care",
        "Family accommodation and support",
        "Spiritual care and counseling services",
        "Beautiful gardens and meditation spaces",
        "24/7 nursing care and medical support"
      ]
    },
    {
      name: "Kukrail Center",
      location: "Lucknow, India",
      features: [
        "Long-term rehabilitation services",
        "Assisted living accommodation options",
        "Geriatric care programs and activities",
        "Recovery and wellness facilities",
        "Community spaces for social interaction",
        "Therapeutic recreation programs"
      ]
    }
  ];

  const testimonials = [
    {
      name: "Sarah M.",
      country: "Canada",
      quote: "Dr. Amita Shukla and her team provided exceptional care during my mother's extended treatment at SCT Trust Hospital. The international patient support made our journey from Canada seamless and stress-free. The quality of care exceeded our expectations."
    },
    {
      name: "Ahmed R.",
      country: "UAE", 
      quote: "The geriatric care program at SCT Trust Hospital gave my father the dignity and comfort he deserved. The staff's compassion and Dr. Shukla's expertise made all the difference during a difficult time."
    },
    {
      name: "John D.",
      country: "Australia",
      quote: "From the moment we contacted SCT Trust Hospital to the final follow-up call, everything was professionally managed. The cancer care program saved my life, and I'll be forever grateful."
    }
  ];

  const faqs = [
    {
      question: "What languages does your medical team speak?",
      answer: "Our medical team is fluent in English and Hindi, with interpreters available for other languages including Arabic, French, Russian, and regional Indian languages."
    },
    {
      question: "How do I get a second medical opinion?",
      answer: "We provide complimentary consultation over the phone where you can share your medical records for expert review by Dr. Amita Shukla's team."
    },
    {
      question: "What if I need emergency care during my stay?",
      answer: "Our hospitals operate 24/7 with full emergency care capabilities, intensive care units, and specialized emergency response teams."
    },
    {
      question: "Do you assist with medical visas?",
      answer: "Yes, we provide assured guidance in arranging visa extensions and invitation letters required for medical treatment in India."
    },
    {
      question: "Where will I stay during treatment?",
      answer: "We assist in arranging accommodation for patients and attendants near the hospital, including our guest house facilities and nearby hotels."
    },
    {
      question: "How much will my treatment cost?",
      answer: "We provide detailed, transparent cost estimates based on your specific medical needs. Contact our international team for a personalized treatment cost assessment."
    },
    {
      question: "What payment methods do you accept?",
      answer: "We accept international wire transfers, major credit/debit cards, and can coordinate with international insurance providers for direct billing."
    },
    {
      question: "Are there any hidden costs?",
      answer: "No, we believe in complete transparency. All costs including treatment, accommodation, and support services are clearly communicated upfront."
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
                <span className="ms-1 text-sm font-medium text-text-brown md:ms-2">International Patients</span>
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
          <div className="max-w-4xl mx-auto text-center">
            <motion.h1 
              className="text-4xl md:text-5xl font-bold mb-6 green-title-text"
              initial={{ opacity: 0, y: 20 }}
              animate={isHeroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7 }}
            >
              International Patients - SCT Trust Hospital
            </motion.h1>
            <motion.p 
              className="text-xl text-text-brown mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={isHeroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.1 }}
            >
              Experience World-Class Healthcare with Dr. Amita Shukla
            </motion.p>
            <motion.p 
              className="text-lg text-text-brown/80 mb-8 max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={isHeroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              At SCT Trust Hospital, we understand that seeking medical care abroad is a significant decision. 
              Under the expert guidance of Dr. Amita Shukla, we have created a comprehensive international 
              patient program that combines cutting-edge medical care with compassionate support.
            </motion.p>
            <motion.div 
              className="flex flex-wrap justify-center gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={isHeroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.3 }}
            >
              <Button asChild variant="ghost" className="btn-green">
                <Link href="#contact">Get Free Consultation</Link>
              </Button>
              <Button asChild variant="outline" className="btn-outline">
                <a href="tel:+91522XXXXXXX">
                  <Phone className="mr-2 h-4 w-4" /> Call Now
                </a>
              </Button>
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

      {/* Why Choose Us */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 green-title-text">
              Why International Patients Choose SCT Trust Hospital
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyChooseUs.map((item, index) => (
              <motion.div
                key={index}
                className="bg-accent-cream/30 p-6 rounded-xl shadow-warm text-center"
                initial={{ opacity: 0, y: 20 }}
                animate={isHeroInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="flex justify-center mb-4">
                  {item.icon}
                </div>
                <h3 className="text-lg font-bold text-text-brown mb-3">{item.title}</h3>
                <p className="text-text-brown/80 text-sm">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Specialized Services */}
      <section 
        ref={servicesRef}
        className="py-16 bg-accent-cream/30"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <motion.h2
              className="text-3xl md:text-4xl font-bold mb-4 green-title-text"
              initial={{ opacity: 0, y: 20 }}
              animate={isServicesInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5 }}
            >
              Our International Department - Specialized Services
            </motion.h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {specializedServices.map((service, index) => (
              <motion.div
                key={index}
                className="bg-white p-6 rounded-xl shadow-warm"
                initial={{ opacity: 0, y: 20 }}
                animate={isServicesInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="flex items-center mb-4">
                  {service.icon}
                  <h3 className="text-xl font-bold text-text-brown ml-3">{service.title}</h3>
                </div>
                <p className="text-primary-green text-sm font-medium mb-2">{service.subtitle}</p>
                <p className="text-text-brown/80 mb-4">{service.description}</p>
                <div>
                  <p className="text-text-brown/70 text-sm mb-2">Ideal for:</p>
                  <ul className="space-y-1">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start">
                        <CheckCircle className="h-4 w-4 text-primary-green mr-2 flex-shrink-0 mt-0.5" />
                        <span className="text-text-brown text-xs">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Patient Journey */}
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
              Your Complete Patient Journey
            </motion.h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
            {journeySteps.map((step, index) => (
              <motion.div
                key={index}
                className="bg-accent-cream/30 p-6 rounded-xl shadow-warm"
                initial={{ opacity: 0, y: 20 }}
                animate={isJourneyInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="text-center mb-4">
                  <div className="w-12 h-12 bg-primary-green text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-3">
                    {step.step}
                  </div>
                  <h3 className="text-lg font-bold text-text-brown">{step.title}</h3>
                </div>
                <ul className="space-y-2">
                  {step.details.map((detail, idx) => (
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

      {/* Healthcare Facilities */}
      <section 
        ref={facilitiesRef}
        className="py-16 bg-accent-cream/30"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <motion.h2
              className="text-3xl md:text-4xl font-bold mb-4 green-title-text"
              initial={{ opacity: 0, y: 20 }}
              animate={isFacilitiesInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5 }}
            >
              Our Healthcare Facilities Network
            </motion.h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {facilities.map((facility, index) => (
              <motion.div
                key={index}
                className="bg-white p-6 rounded-xl shadow-warm"
                initial={{ opacity: 0, y: 20 }}
                animate={isFacilitiesInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="flex items-center mb-4">
                  <Building2 className="h-8 w-8 text-primary-green" />
                  <h3 className="text-xl font-bold text-text-brown ml-3">{facility.name}</h3>
                </div>
                <div className="flex items-center mb-4 text-primary-green">
                  <MapPin className="h-4 w-4 mr-2" />
                  <p className="text-sm">{facility.location}</p>
                </div>
                <ul className="space-y-2">
                  {facility.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start">
                      <CheckCircle className="h-4 w-4 text-primary-green mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-text-brown text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Support Services */}
      <section 
        ref={supportRef}
        className="py-16 bg-white"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <motion.h2
              className="text-3xl md:text-4xl font-bold mb-4 green-title-text"
              initial={{ opacity: 0, y: 20 }}
              animate={isSupportInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5 }}
            >
              International Patient Support Services
            </motion.h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Pre-Arrival Assistance",
                icon: <Plane className="h-8 w-8 text-primary-green" />,
                services: [
                  "Medical consultation and treatment planning",
                  "Visa support and invitation letters",
                  "Cost estimation and travel planning",
                  "Accommodation and insurance guidance"
                ]
              },
              {
                title: "During Your Stay",
                icon: <Headphones className="h-8 w-8 text-primary-green" />,
                services: [
                  "24/7 support and emergency assistance",
                  "Language services and cultural support",
                  "Family updates and local assistance",
                  "Concierge services and local coordination"
                ]
              },
              {
                title: "Post-Treatment Care",
                icon: <Video className="h-8 w-8 text-primary-green" />,
                services: [
                  "Discharge planning and medical reports",
                  "Follow-up coordination and telemedicine",
                  "Emergency support and medication guidance"
                ]
              }
            ].map((support, index) => (
              <motion.div
                key={index}
                className="bg-accent-cream/30 p-6 rounded-xl shadow-warm"
                initial={{ opacity: 0, y: 20 }}
                animate={isSupportInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="flex items-center mb-4">
                  {support.icon}
                  <h3 className="text-xl font-bold text-text-brown ml-3">{support.title}</h3>
                </div>
                <ul className="space-y-2">
                  {support.services.map((service, idx) => (
                    <li key={idx} className="flex items-start">
                      <CheckCircle className="h-4 w-4 text-primary-green mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-text-brown text-sm">{service}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Patient Testimonials */}
      <section 
        ref={testimonialsRef}
        className="py-16 bg-accent-cream/30"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <motion.h2
              className="text-3xl md:text-4xl font-bold mb-4 green-title-text"
              initial={{ opacity: 0, y: 20 }}
              animate={isTestimonialsInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5 }}
            >
              Patient Testimonials
            </motion.h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                className="bg-white p-6 rounded-xl shadow-warm"
                initial={{ opacity: 0, y: 20 }}
                animate={isTestimonialsInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <p className="text-text-brown/80 mb-4 italic">"{testimonial.quote}"</p>
                <div className="border-t border-primary-green/20 pt-4">
                  <p className="font-bold text-text-brown">{testimonial.name}</p>
                  <p className="text-primary-green text-sm">{testimonial.country}</p>
                </div>
              </motion.div>
            ))}
          </div>
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
              Frequently Asked Questions
            </motion.h2>
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

      {/* Contact Section */}
      <section id="contact" className="py-16 bg-primary-green/10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 green-title-text">
              Contact Our International Patient Team
            </h2>
            <p className="text-lg text-text-brown/80 mb-8 max-w-2xl mx-auto">
              Start your healthcare journey today with our dedicated international patient support team.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
              <div className="bg-white p-6 rounded-xl shadow-warm">
                <Phone className="h-8 w-8 text-primary-green mx-auto mb-4" />
                <h3 className="font-bold text-text-brown mb-2">24/7 Helpline</h3>
                <p className="text-primary-green">+91 8303222222</p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-warm">
                <Mail className="h-8 w-8 text-primary-green mx-auto mb-4" />
                <h3 className="font-bold text-text-brown mb-2">Email Support</h3>
                <p className="text-primary-green">amitaobg@gmail.com</p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-warm">
                <Video className="h-8 w-8 text-primary-green mx-auto mb-4" />
                <h3 className="font-bold text-text-brown mb-2">Virtual Consultation</h3>
                <p className="text-primary-green">Online with Dr. Amita's team</p>
              </div>
            </div>

            <div className="flex flex-wrap justify-center gap-4">
              <Button asChild variant="ghost" className="btn-green">
                <Link href="/contact">
                  <Calendar className="mr-2 h-4 w-4" /> Schedule Free Consultation
                </Link>
              </Button>
              <Button asChild variant="outline" className="btn-outline">
                <a href="tel:+91 8303222222">
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