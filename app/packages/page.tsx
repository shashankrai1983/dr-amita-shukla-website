"use client";

import { useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, useInView } from 'framer-motion';
import { 
  ArrowRight, 
  Check, 
  Phone, 
  Calendar,
  Package,
  Shield,
  Heart,
  BadgePlus,
  Sparkles,
  CircleDollarSign,
  BookOpen,
  Stethoscope
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { GridPattern } from '@/components/ui/grid-pattern';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const PackageCard = ({ 
  title, 
  price, 
  features, 
  highlight = false,
  index,
  inView
}) => {
  return (
    <motion.div
      className={`bg-white rounded-xl shadow-warm overflow-hidden ${highlight ? 'border-2 border-primary-green' : 'border border-accent-cream/30'}`}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      {highlight && (
        <div className="bg-primary-green py-2 px-4 text-white text-center">
          <span className="text-sm font-medium">Recommended</span>
        </div>
      )}
      <div className="p-6">
        <h3 className="text-xl font-bold text-text-brown mb-3">{title}</h3>
        <p className="text-3xl font-bold text-primary-green mb-5">₹{price}</p>
        <ul className="space-y-3 mb-6">
          {features.map((feature, idx) => (
            <li key={idx} className="flex items-start">
              <Check className="h-5 w-5 text-primary-green mr-2 flex-shrink-0 mt-0.5" />
              <span className="text-text-brown/80">{feature}</span>
            </li>
          ))}
        </ul>
        <Button asChild variant="ghost" className="btn-green w-full">
          <Link href="/contact">
            Book Now
          </Link>
        </Button>
      </div>
    </motion.div>
  );
};

export default function Packages() {
  const packagesRef = useRef<HTMLDivElement>(null);
  const pregnancyRef = useRef<HTMLDivElement>(null);
  const gynaecRef = useRef<HTMLDivElement>(null);
  const featureRef = useRef<HTMLDivElement>(null);
  
  const isPackagesInView = useInView(packagesRef, { once: true });
  const isPregnancyInView = useInView(pregnancyRef, { once: true });
  const isGynaecInView = useInView(gynaecRef, { once: true });
  const isFeatureInView = useInView(featureRef, { once: true });

  const pregnancyPackages = [
    {
      title: "Basic Pregnancy Package",
      price: "15,000",
      features: [
        "9 Consultations during pregnancy",
        "3 Ultrasound scans",
        "Blood & Urine Tests",
        "Vaginal Delivery Charges",
        "1-Day Hospital Stay",
        "Labor Room Charges",
        "Baby Checkup",
        "24/7 Emergency Support"
      ],
      highlight: false
    },
    {
      title: "Premium Pregnancy Package",
      price: "25,000",
      features: [
        "12 Consultations during pregnancy",
        "5 Ultrasound scans including 3D/4D",
        "Comprehensive Blood & Urine Tests",
        "Vaginal Delivery Charges",
        "2-Day Hospital Stay in Private Room",
        "Labor Room Charges",
        "Baby Checkup & Vaccination",
        "Diet Consultation during pregnancy",
        "Lactation Support & Consultation",
        "24/7 Emergency Support",
        "Post-delivery follow-up (3 visits)"
      ],
      highlight: true
    },
    {
      title: "Advanced Pregnancy Package",
      price: "40,000",
      features: [
        "All Premium Package benefits",
        "Planned Cesarean Delivery if required",
        "3-Day Hospital Stay in Deluxe Room",
        "Antenatal Classes & Exercises",
        "Extended Baby Care (1 month)",
        "Home Visit after Delivery",
        "Special Pregnancy Nutrition Plan",
        "Post-delivery Physiotherapy",
        "Baby Care Kit"
      ],
      highlight: false
    }
  ];

  const gynaecologyPackages = [
    {
      title: "Women's Health Checkup",
      price: "5,000",
      features: [
        "Complete Gynecological Examination",
        "Pap Smear Test",
        "Breast Examination",
        "Basic Blood Profile",
        "Thyroid Function Test",
        "Urine Analysis",
        "Doctor Consultation & Report"
      ],
      highlight: false
    },
    {
      title: "PCOD/PCOS Management",
      price: "12,000",
      features: [
        "3-month Treatment Plan",
        "4 Specialist Consultations",
        "Hormonal Assessments",
        "Ultrasound (2 sessions)",
        "Diet & Lifestyle Guidance",
        "Medication as prescribed",
        "Follow-up Consultations"
      ],
      highlight: false
    },
    {
      title: "Infertility Evaluation",
      price: "18,000",
      features: [
        "Comprehensive Fertility Assessment",
        "Hormonal Tests for Both Partners",
        "Semen Analysis",
        "Ultrasound Monitoring",
        "HSG Test (Fallopian Tube Check)",
        "Ovulation Tracking",
        "Treatment Plan & Counseling"
      ],
      highlight: true
    },
    {
      title: "Laparoscopy Package",
      price: "35,000",
      features: [
        "Pre-operative Evaluation",
        "Laparoscopic Surgery",
        "1-2 Day Hospital Stay",
        "Operation Theater Charges",
        "Anesthesia Charges",
        "Medication during stay",
        "Post-operative Care",
        "Follow-up Consultations (2)"
      ],
      highlight: false
    }
  ];

  return (
    <div className="pt-24 pb-16">
      {/* Hero Section */}
      <section className="py-16 bg-accent-cream/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 green-title-text">
              Our Packages & Services
            </h1>
            <p className="text-lg text-text-brown/80 mb-6">
              Comprehensive healthcare packages designed for women at every stage of life at SCT Trust Hospital
            </p>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section 
        ref={featureRef}
        className="py-16 bg-white relative"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <motion.h2 
              className="text-3xl md:text-4xl font-bold mb-4 green-title-text"
              initial={{ opacity: 0, y: 20 }}
              animate={isFeatureInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5 }}
            >
              Why Choose Our Packages
            </motion.h2>
            <motion.p 
              className="text-lg text-text-brown/80"
              initial={{ opacity: 0, y: 20 }}
              animate={isFeatureInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              Experience comprehensive care with our specially designed packages
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <Shield className="h-10 w-10 text-primary-green" />,
                title: "Comprehensive Care",
                description: "Our packages cover all aspects of women's health with no hidden costs"
              },
              {
                icon: <Stethoscope className="h-10 w-10 text-primary-green" />,
                title: "Expert Specialists",
                description: "Care by Dr. Amita Shukla and her team of experienced healthcare professionals"
              },
              {
                icon: <Heart className="h-10 w-10 text-primary-green" />,
                title: "Personalized Approach",
                description: "Customized care plans tailored to your unique health needs"
              },
              {
                icon: <CircleDollarSign className="h-10 w-10 text-primary-green" />,
                title: "Cost-Effective",
                description: "Save money with our bundled services compared to individual treatments"
              },
              {
                icon: <Package className="h-10 w-10 text-primary-green" />,
                title: "Convenient Scheduling",
                description: "Streamlined appointments and follow-ups for all package services"
              },
              {
                icon: <BadgePlus className="h-10 w-10 text-primary-green" />,
                title: "Premium Facilities",
                description: "Access to state-of-the-art equipment and comfortable hospital amenities"
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                className="bg-white p-6 rounded-xl shadow-warm"
                initial={{ opacity: 0, y: 20 }}
                animate={isFeatureInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.1 * index }}
              >
                <div className="flex justify-center mb-4">
                  <div className="p-3 rounded-full bg-primary-green/20">
                    {feature.icon}
                  </div>
                </div>
                <h3 className="text-xl font-bold text-center text-text-brown mb-2">{feature.title}</h3>
                <p className="text-center text-text-brown/80">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
        
        {/* Grid Pattern background */}
        <GridPattern
          width={40}
          height={40}
          strokeDasharray={"2 4"}
          className="text-primary-green/5 [mask-image:radial-gradient(ellipse_at_center,transparent_20%,white_70%)]"
        />
      </section>

      {/* Packages Section */}
      <section 
        ref={packagesRef}
        className="py-16 bg-accent-cream/30 relative"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <motion.h2 
              className="text-3xl md:text-4xl font-bold mb-4 green-title-text"
              initial={{ opacity: 0, y: 20 }}
              animate={isPackagesInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5 }}
            >
              Our Healthcare Packages
            </motion.h2>
            <motion.p 
              className="text-lg text-text-brown/80"
              initial={{ opacity: 0, y: 20 }}
              animate={isPackagesInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              Choose the package that best suits your needs
            </motion.p>
          </div>

          <Tabs defaultValue="pregnancy" className="w-full">
            <TabsList className="grid w-full max-w-xl mx-auto grid-cols-2 mb-10">
              <TabsTrigger value="pregnancy" className="text-base">
                <Package className="h-4 w-4 mr-2" />
                Pregnancy Packages
              </TabsTrigger>
              <TabsTrigger value="gynaecology" className="text-base">
                <Sparkles className="h-4 w-4 mr-2" />
                Gynaecology Packages
              </TabsTrigger>
            </TabsList>
            
            <TabsContent value="pregnancy" className="mt-0">
              <div ref={pregnancyRef} className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {pregnancyPackages.map((pkg, index) => (
                  <PackageCard 
                    key={pkg.title}
                    title={pkg.title}
                    price={pkg.price}
                    features={pkg.features}
                    highlight={pkg.highlight}
                    index={index}
                    inView={isPregnancyInView}
                  />
                ))}
              </div>
            </TabsContent>
            
            <TabsContent value="gynaecology" className="mt-0">
              <div ref={gynaecRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {gynaecologyPackages.map((pkg, index) => (
                  <PackageCard 
                    key={pkg.title}
                    title={pkg.title}
                    price={pkg.price}
                    features={pkg.features}
                    highlight={pkg.highlight}
                    index={index}
                    inView={isGynaecInView}
                  />
                ))}
              </div>
            </TabsContent>
          </Tabs>

          <div className="mt-12 text-center">
            <p className="text-text-brown/70 mb-4">Need a customized package? Contact us for personalized solutions.</p>
            <Button asChild variant="outline" className="btn-outline">
              <Link href="/contact" className="inline-flex items-center">
                Contact For Custom Packages <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
        
        {/* Grid Pattern background */}
        <GridPattern
          width={40}
          height={40}
          strokeDasharray={"1 3"}
          className="text-primary-green/5 [mask-image:radial-gradient(ellipse_at_center,transparent_30%,white_80%)]"
        />
      </section>

      {/* Package Details Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 green-title-text">
                Package Details
              </h2>
              <p className="text-lg text-text-brown/80">
                Everything you need to know about our packages
              </p>
            </div>

            <div className="space-y-6">
              <div className="bg-white p-6 rounded-xl shadow-warm">
                <h3 className="text-xl font-bold text-text-brown mb-4">
                  <BookOpen className="h-5 w-5 inline-block mr-2" />
                  Terms & Conditions
                </h3>
                <ul className="space-y-3 text-text-brown/80">
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-primary-green mr-2 flex-shrink-0 mt-0.5" />
                    <span>Packages must be purchased in advance</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-primary-green mr-2 flex-shrink-0 mt-0.5" />
                    <span>Package validity is for the specified duration or service</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-primary-green mr-2 flex-shrink-0 mt-0.5" />
                    <span>Services cannot be exchanged or substituted</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-primary-green mr-2 flex-shrink-0 mt-0.5" />
                    <span>Packages are non-transferable and non-refundable</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-primary-green mr-2 flex-shrink-0 mt-0.5" />
                    <span>Any services beyond the package will be charged separately</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-warm">
                <h3 className="text-xl font-bold text-text-brown mb-4">
                  <Heart className="h-5 w-5 inline-block mr-2" />
                  Additional Information
                </h3>
                <ul className="space-y-3 text-text-brown/80">
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-primary-green mr-2 flex-shrink-0 mt-0.5" />
                    <span>All packages include consultation with Dr. Amita Shukla</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-primary-green mr-2 flex-shrink-0 mt-0.5" />
                    <span>Insurance coverage may apply for certain packages (verify with your provider)</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-primary-green mr-2 flex-shrink-0 mt-0.5" />
                    <span>High-risk pregnancy cases may require additional services</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-primary-green mr-2 flex-shrink-0 mt-0.5" />
                    <span>Medication costs are not included unless specified</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-accent-cream/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 green-title-text">
                Frequently Asked Questions
              </h2>
              <p className="text-lg text-text-brown/80">
                Get answers to common questions about our packages
              </p>
            </div>

            <div className="space-y-6">
              {[
                {
                  question: "How do I book a package?",
                  answer: "You can book a package by visiting our hospital, calling us at +91 8303222222, or using the contact form on our website."
                },
                {
                  question: "Can I upgrade my package later?",
                  answer: "Yes, you can upgrade to a higher package by paying the difference amount. Please contact our reception for assistance."
                },
                {
                  question: "Are there any hidden costs?",
                  answer: "No, our packages are transparent with no hidden costs. Any additional services required beyond the package will be informed and charged separately."
                },
                {
                  question: "Can I use insurance for these packages?",
                  answer: "Some insurance providers cover certain medical packages. We recommend confirming with your insurance company before booking."
                },
                {
                  question: "What if I need to reschedule my appointment?",
                  answer: "You can reschedule appointments 24 hours in advance by calling our reception desk. Last-minute cancellations may be subject to hospital policy."
                }
              ].map((faq, index) => (
                <div key={index} className="bg-white p-6 rounded-xl shadow-warm">
                  <h3 className="text-xl font-bold text-text-brown mb-2">{faq.question}</h3>
                  <p className="text-text-brown/80">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Appointment CTA */}
      <section className="py-16 bg-primary-green/10 relative">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 green-title-text">
              Book Your Package Today
            </h2>
            <p className="text-lg text-text-brown/80 mb-8 max-w-2xl mx-auto">
              Take the first step towards comprehensive healthcare. Schedule a consultation to discuss the right package for your needs.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button asChild variant="ghost" className="btn-green">
                <Link href="/contact">
                  <Calendar className="mr-2 h-4 w-4" /> Book Appointment
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
        
        {/* Grid Pattern background */}
        <GridPattern
          width={40}
          height={40}
          strokeDasharray={"1 2"}
          className="text-primary-green/5 [mask-image:radial-gradient(ellipse_at_center,transparent_40%,white_80%)]"
        />
      </section>
    </div>
  );
}