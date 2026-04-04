import {
  MotionContainer,
  MotionHeading,
  MotionItem,
} from "@/components/motion/MotionWrapper";
import { fadeInUp, staggerContainer } from "@/lib/animation-variants";
import { faqItems } from "@/lib/site.config";

export function FaqSection() {
  return (
    <section id="faq" className="py-12 lg:py-16" aria-labelledby="faq-heading">
      <div className="max-w-[800px] mx-auto px-4 sm:px-6">
        <MotionContainer variants={staggerContainer}>
          <MotionHeading
            id="faq-heading"
            variants={fadeInUp}
            className="text-xl sm:text-2xl lg:text-3xl font-mono tracking-tight text-gray-900 dark:text-white mb-16"
          >
            Questions fréquentes
          </MotionHeading>

          <div className="flex flex-col gap-12">
            {faqItems.map((item) => (
              <MotionItem key={item.question} variants={fadeInUp}>
                <h3 className="text-lg font-display font-medium text-gray-900 dark:text-white mb-2">
                  {item.question}
                </h3>
                <p className="text-gray-500 dark:text-white/50 leading-relaxed">
                  {item.answer}
                </p>
              </MotionItem>
            ))}
          </div>
        </MotionContainer>
      </div>
    </section>
  );
}
