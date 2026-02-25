import { site } from "@/content/site";
import { Hero } from "@/components/hero";
import { CardsOQueFaco } from "@/components/cards-o-que-faco";
import { EmpresasTabsBlock } from "@/components/empresas-tabs-block";
import { ProdutosBlock } from "@/components/produtos-block";
import { ParaQuemBlock } from "@/components/para-quem-block";
import { MetodologiaBlock } from "@/components/metodologia-block";
import { SobreBlock } from "@/components/sobre-block";
import { Faq } from "@/components/faq";
import { CtaBlock } from "@/components/cta-block";

const oQueFacoCards = [
  { ...site.oQueFaco.cards[0], iconKey: "workflow" as const },
  { ...site.oQueFaco.cards[1], iconKey: "database" as const },
  { ...site.oQueFaco.cards[2], iconKey: "bot" as const },
  { ...site.oQueFaco.cards[3], iconKey: "graduation" as const },
];

export default function Home() {
  return (
    <div className="flex flex-col">
      <Hero
        headline={site.hero.headline}
        subheadline={site.hero.subheadline}
        ctaComunidade={site.hero.ctaComunidade}
        ctaMentoria={site.hero.ctaMentoria}
      />

      <CardsOQueFaco
        title={site.oQueFaco.title}
        subtitle={site.oQueFaco.subtitle}
        cards={oQueFacoCards}
      />

      <EmpresasTabsBlock
        title={site.empresas.title}
        linkText={site.empresas.linkText}
        tabEmpresas={site.empresas.tabEmpresas}
        tabProjetos={site.empresas.tabProjetos}
        empresas={[site.empresas.boxify, site.empresas.granjatexas]}
        verDetalhes={site.empresas.verDetalhes}
      />

      <ProdutosBlock
        title={site.produtos.title}
        comunidade={site.produtos.comunidade}
        mentoria={site.produtos.mentoria}
      />

      <ParaQuemBlock
        title={site.paraQuem.title}
        items={site.paraQuem.items}
      />

      <MetodologiaBlock
        title={site.metodologia.title}
        steps={site.metodologia.steps}
      />

      <SobreBlock
        title={site.sobreMim.title}
        bio={site.sobreMim.bio}
        ctaComunidade={site.sobreMim.ctaComunidade}
        ctaMentoria={site.sobreMim.ctaMentoria}
      />

      <Faq title={site.faq.title} items={site.faq.items} />

      <CtaBlock
        title={site.ctaFinal.title}
        subtitle={site.ctaFinal.subtitle}
        ctaComunidade={site.ctaFinal.ctaComunidade}
        ctaMentoria={site.ctaFinal.ctaMentoria}
      />
    </div>
  );
}
