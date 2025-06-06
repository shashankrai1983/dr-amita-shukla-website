// components/home/faq-section.tsx
// Changes: Updated FAQ category headings to use jungle green (forest-green) background instead of olive green
"use client";

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { GridPattern } from '@/components/ui/grid-pattern';

const faqs = [
  {
    category: "Appointment FAQ",
    questions: [
      {
        question: "How does appointment system works",
        answer: "Our appointment system allows you to book consultations online or by phone. You can select your preferred date, time, and service. Once booked, you'll receive a confirmation."
      },
      {
        question: "Does SCT Hospital treats my condition",
        answer: "SCT Trust Hospital specializes in a wide range of gynecological and obstetric conditions. Please refer to our Services page or contact us directly to confirm if we treat your specific condition."
      },
      {
        question: "Can i request a specific provider/specialist",
        answer: "Yes, you can request a specific provider or specialist when booking your appointment, subject to their availability."
      },
      {
        question: "How long does it take to an appointment",
        answer: "Appointment wait times vary depending on the specialist and urgency. We strive to accommodate urgent concerns as quickly as possible. You can check available slots through our online booking system."
      },
      {
        question: "What can i expect if i got my appointment itinerary",
        answer: "Your appointment itinerary will include the date, time, location, and name of your doctor. It will also list any specific instructions or documents you need to bring."
      },
      {
        question: "Can I book same-day appointments for urgent concerns?",
        answer: "For urgent concerns, please call our hospital directly. While same-day appointments are subject to availability, we will do our best to accommodate you."
      },
      {
        question: "What is the online appointment booking process?",
        answer: "Our online booking process involves selecting a service, choosing a date and time from available slots, providing your contact details, and confirming your appointment. You'll receive an email confirmation."
      },
      {
        question: "Are video consultations available?",
        answer: "Please contact our reception to inquire about the availability of video consultations for certain services."
      },
      {
        question: "What should I bring for my first visit?",
        answer: "For your first visit, please bring your identification, any relevant medical records, a list of current medications, and your insurance information."
      }
    ]
  },
  {
    category: "Cost & Insurance FAQ",
    questions: [
      {
        question: "What does an appointment at SCT Hospital Cost ?",
        answer: "Costs vary depending on the service and consultation type. Please contact our billing department or refer to our service pricing for detailed information."
      },
      {
        question: "Cost Estimator",
        answer: "We can provide a cost estimate for common procedures and services. Please contact our billing team with details of the service you require."
      },
      {
        question: "Insurance Coverage",
        answer: "We accept most major insurance plans. It is recommended to verify your coverage with your insurance provider prior to your appointment."
      },
      {
        question: "Understanding your billing and cost",
        answer: "Our billing team is available to help you understand your bill and the costs associated with your treatment. We aim for full transparency in our pricing."
      },
      {
        question: "Financial Assistance",
        answer: "We understand that healthcare costs can be a concern. Please speak with our financial counselor to discuss potential financial assistance options."
      },
      {
        question: "Do you offer package deals for routine screenings?",
        answer: "Yes, we offer various health packages that include routine screenings and consultations at a bundled price. Please contact us for more details."
      },
      {
        question: "Is PM Yojna applicable ?",
        answer: "Please contact our administrative office to inquire about the applicability of government schemes like PM Yojna for your treatment."
      }
    ]
  },
  {
    category: "SCT Trust Hospital FAQ",
    questions: [
      {
        question: "About SCT Trust Hospital",
        answer: "SCT Trust Hospital is a leading healthcare facility in Lucknow, dedicated to providing comprehensive and compassionate care for women. We are equipped with state-of-the-art technology and a team of experienced medical professionals."
      },
      {
        question: "What makes SCT Trust Hospital unique in Lucknow?",
        answer: "Our hospital stands out due to our patient-centered approach, advanced medical technology, specialized expertise in women's health, and a commitment to continuous improvement and compassionate care."
      },
      {
        question: "What are the hospital's visiting hours and location details?",
        answer: "SCT Trust Hospital is located at A-1/7, Sector-H, Aliganj, Lucknow - 226024. Visiting hours vary by department; please check with the reception for specific timings. We offer 24/7 emergency services."
      },
      {
        question: "Is SCT Trust Hospital accredited and what safety protocols do you follow?",
        answer: "SCT Trust Hospital adheres to strict safety protocols and quality standards to ensure patient well-being. We are committed to maintaining a safe and sterile environment."
      },
      {
        question: "What emergency services are available 24/7?",
        answer: "We provide 24/7 emergency services, including critical care for obstetric and gynecological emergencies, and a dedicated NICU facility."
      },
      {
        question: "Do you have parking facilities and wheelchair accessibility?",
        answer: "Yes, SCT Trust Hospital offers ample parking facilities and is fully wheelchair accessible to ensure comfort and convenience for all our patients and visitors."
      }
    ]
  },
  {
    category: "Consultation Guidelines",
    questions: [
      {
        question: "What can I expect during my first gynecological visit?",
        answer: "During your first visit, Dr. Amita will review your medical history, discuss any concerns you have, and may perform a physical examination. It's an opportunity to ask questions and establish a care plan."
      },
      {
        question: "How should I prepare for different types of gynecological exams?",
        answer: "Specific preparation instructions will be provided when you book your appointment. Generally, it's advised to avoid douching or using vaginal medications for 24-48 hours before an exam."
      },
      {
        question: "Can a family member accompany me during consultation?",
        answer: "Yes, a family member or support person is welcome to accompany you during your consultation, if you wish."
      },
      {
        question: "What questions should I prepare before my visit?",
        answer: "It's helpful to prepare a list of questions or concerns you have regarding your health, symptoms, or treatment options. This ensures all your queries are addressed during the consultation."
      },
      {
        question: "How long do consultations typically take?",
        answer: "Initial consultations typically last between 15-30 minutes, depending on the complexity of your case. Follow-up appointments may be shorter."
      }
    ]
  }
];

const FaqSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.3 });

  return (
    <section
      ref={sectionRef}
      className="py-20 bg-white relative"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2
            className="text-3xl md:text-4xl font-bold mb-4 green-title-text"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
          >
            Frequently Asked Questions
          </motion.h2>
          <motion.p
            className="text-lg text-text-brown/80"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Find answers to common questions about our services, appointments, and hospital.
          </motion.p>
        </div>

        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          {faqs.map((category, index) => (
            <motion.div
              key={category.category}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
              className="bg-accent-cream/30 rounded-xl shadow-warm overflow-hidden h-fit"
            >
              <div className="bg-forest-green px-6 py-4">
                <h3 className="text-xl font-bold text-white">
                  {category.category}
                </h3>
              </div>
              <div className="p-6">
                <Accordion type="single" collapsible className="w-full">
                  {category.questions.map((faq, qIndex) => (
                    <AccordionItem key={qIndex} value={`item-${index}-${qIndex}`} className="border-b border-accent-cream/50">
                      <AccordionTrigger className="text-left text-text-brown hover:no-underline text-sm">
                        {faq.question}
                      </AccordionTrigger>
                      <AccordionContent className="text-text-brown/80 pb-4 text-sm">
                        {faq.answer}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Grid Pattern background */}
      <GridPattern
        width={40}
        height={40}
        strokeDasharray={"1 3"}
        className="text-primary-green/5 [mask-image:radial-gradient(ellipse_at_center,white_30%,transparent_70%)]"
      />
    </section>
  );
};

export default FaqSection;