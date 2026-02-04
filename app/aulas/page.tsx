import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { MessageCircle, Check, Clock, Users, Building } from "lucide-react";
import { AulasContent } from "./aulas-content";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Aulas & Mentorias",
  description: "Aulas particulares, mentorias e treinamentos em Inteligência Artificial, Desenvolvimento Web e Tecnologia. Planos personalizados para alunos, profissionais e empresas.",
};

export default function AulasPage() {
  return <AulasContent />;
}
