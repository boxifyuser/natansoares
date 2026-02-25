"use client";

import { motion } from "framer-motion";
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Workflow, Database, Bot, GraduationCap } from "lucide-react";
import { cn } from "@/lib/utils";

const ICON_MAP = {
  workflow: Workflow,
  database: Database,
  bot: Bot,
  graduation: GraduationCap,
} as const;

export type IconKey = keyof typeof ICON_MAP;

export interface CardItem {
  title: string;
  description: string;
  iconKey: IconKey;
}

interface CardsOQueFacoProps {
  title: string;
  subtitle?: string;
  cards: CardItem[];
  className?: string;
}

export function CardsOQueFaco({ title, subtitle, cards, className }: CardsOQueFacoProps) {
  return (
    <section className={cn("py-16 md:py-24 bg-muted/50", className)}>
      <div className="container">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">{title}</h2>
          {subtitle && (
            <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
              {subtitle}
            </p>
          )}
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {cards.map((card, i) => {
            const Icon = ICON_MAP[card.iconKey];
            return (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
              >
                <Card className="h-full border-2 hover:border-primary/20 transition-colors">
                  <CardHeader>
                    <Icon className="h-10 w-10 text-primary mb-2" />
                    <CardTitle className="text-xl">{card.title}</CardTitle>
                    <CardDescription className="text-base">
                      {card.description}
                    </CardDescription>
                  </CardHeader>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
