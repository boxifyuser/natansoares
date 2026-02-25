"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Users, GraduationCap, Building2, Factory } from "lucide-react";
import { cn } from "@/lib/utils";

interface HeroProps {
  headline: string;
  subheadline: string;
  ctaComunidade: string;
  ctaMentoria: string;
  className?: string;
}

const pillCards = [
  { label: "Comunidade", icon: Users },
  { label: "Mentoria", icon: GraduationCap },
  { label: "Boxify", icon: Building2 },
  { label: "Granja Texas", icon: Factory },
];

export function Hero({
  headline,
  subheadline,
  ctaComunidade,
  ctaMentoria,
  className,
}: HeroProps) {
  return (
    <section
      className={cn(
        "container py-20 md:py-28 lg:py-32",
        className
      )}
    >
      <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        <div className="space-y-8">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-tight"
          >
            {headline}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-lg md:text-xl text-muted-foreground max-w-xl"
          >
            {subheadline}
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <Button size="lg" className="text-base" asChild>
              <Link href="/comunidade">{ctaComunidade}</Link>
            </Button>
            <Button size="lg" variant="outline" className="text-base" asChild>
              <Link href="/mentoria">{ctaMentoria}</Link>
            </Button>
          </motion.div>
        </div>
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="hidden lg:grid grid-cols-2 gap-3"
        >
          {pillCards.map((item, i) => (
            <Card
              key={item.label}
              className="flex items-center gap-3 p-4 border-2 hover:border-primary/30 transition-colors"
            >
              <item.icon className="h-8 w-8 text-primary shrink-0" />
              <CardContent className="p-0">
                <span className="font-semibold">{item.label}</span>
              </CardContent>
            </Card>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
