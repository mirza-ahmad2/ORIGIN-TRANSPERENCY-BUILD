import { motion } from "motion/react";

interface Props {
  index: number;
  name: string;
  pair: string;
  dose: string;
  rationale: string;
}

export function IngredientCard({ index, name, pair, dose, rationale }: Props) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      whileHover={{ y: -4 }}
      className="group relative border border-oxblood/15 bg-cream-warm/60 p-7 md:p-10 transition-all duration-500 hover:border-gold hover:bg-cream hover:shadow-[0_18px_40px_-24px_rgba(59,18,32,0.45)]"
    >
      <div className="flex items-start justify-between mb-7 md:mb-8">
        <span className="text-xs uppercase tracking-[0.3em] text-oxblood/60">
          {String(index).padStart(2, "0")}
        </span>
        <span className="font-serif text-2xl text-gold transition-colors duration-300 group-hover:text-oxblood">
          {dose}
        </span>
      </div>
      <h3 className="font-serif text-2xl md:text-3xl text-oxblood leading-tight">{name}</h3>
      <p className="mt-1 text-sm italic text-oxblood/70">{pair}</p>
      <div className="mt-6 h-px w-12 bg-gold/60 group-hover:w-24 transition-all duration-500" />
      <p className="mt-6 text-charcoal/85 leading-relaxed text-[15px]">{rationale}</p>
    </motion.article>
  );
}
