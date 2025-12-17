import { Header } from "@/components/header"
import { MeepleIcon } from "@/components/meeple-icon"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle, MessageCircle, Key, Trophy, Users, Tag } from "lucide-react"
import texts from "@/texts.json"
import { SPACING } from "@/lib/constants"

export default function SocioPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1">
        {/* Hero Section */}
        <section className={`${SPACING.section} bg-secondary text-background opacity-100`}>
          <div className={`${SPACING.container} text-center`}>
            <h1 className="text-6xl md:text-7xl font-bold text-balance leading-tight font-display lg:text-6xl">
              {texts.member.hero.title}
            </h1>
          </div>
        </section>

        {/* How to Join */}
        <section className={SPACING.section}>
          <div className={SPACING.container}>
            <div className={SPACING.maxWidthContent}>
              <p
                className={`text-3xl text-center text-balance ${SPACING.headingMargin} ${SPACING.maxWidthNarrow} leading-relaxed`}
              >
                {texts.member.howToJoin.text1}
              </p>
              <p
                className={`text-3xl text-center text-balance ${SPACING.headingMargin} ${SPACING.maxWidthNarrow} leading-relaxed`}
              >
                {texts.member.howToJoin.text2}
              </p>
              <h2
                className={`text-5xl md:text-6xl font-bold ${SPACING.headingMargin} text-center text-balance font-display`}
              >
                {texts.member.howToJoin.title}
              </h2>

              <div className="grid gap-8 max-w-5xl mx-auto">
                {/* Steps 1 and 2 */}
                <div className="grid md:grid-cols-2 gap-8">
                  {/* Step 1 */}
                  <div className="bg-accent rounded-lg p-8 relative pt-12 text-center shadow-md">
                    <div className="absolute -top-6 -left-6 w-16 h-16 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-3xl font-display font-bold">
                      1
                    </div>
                    <h3 className="text-3xl font-display font-bold text-primary mb-2">
                      {texts.member.howToJoin.steps[0].title}
                    </h3>
                    <p className="text-xl text-primary font-bold leading-tight">
                      <span className="block font-bold">Gasta tus 3 invitaciones</span>
                      <span className="block font-normal">gratuitas para conocernos.</span>
                    </p>
                  </div>

                  {/* Step 2 */}
                  <div className="bg-accent rounded-lg p-8 relative pt-12 text-center shadow-md">
                    <div className="absolute -top-6 -left-6 w-16 h-16 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-3xl font-display font-bold">
                      2
                    </div>
                    <h3 className="text-3xl font-display font-bold text-primary mb-2">
                      {texts.member.howToJoin.steps[1].title}
                    </h3>
                    <p className="text-xl text-primary leading-tight">
                      <span className="block">Con pase de día por 4€</span>
                      <span className="block font-bold">o hazte socio.</span>
                    </p>
                  </div>
                </div>

                {/* Step 3 */}
                <div className="bg-secondary rounded-lg p-8 md:p-12 relative mt-8 shadow-md text-primary-foreground">
                  <div className="absolute -top-6 -left-6 w-16 h-16 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-3xl font-display font-bold">
                    3
                  </div>
                  <h3 className="text-4xl font-display font-bold text-center mb-12">
                    {texts.member.howToJoin.steps[2].title}
                  </h3>

                  <div className="grid md:grid-cols-3 gap-8 items-center">
                    <div className="flex flex-col items-center text-center gap-2">
                      {/* <MeepleIcon className="h-8 w-8 text-accent mb-2" /> */}
                      <p className="text-xl leading-tight">
                        {texts.member.howToJoin.steps[2].items?.[0]}
                      </p>
                    </div>

                    <div className="bg-background text-secondary rounded-lg py-6 px-4 text-center transform scale-110 shadow-lg">
                      <div className="flex items-center justify-center gap-2 mb-0">
                        <MeepleIcon className="h-6 w-6 text-secondary" />
                        <p className="text-2xl font-bold">{texts.member.howToJoin.steps[2].items?.[1]}</p>
                      </div>
                    </div>

                    <div className="flex flex-col items-center text-center gap-2">
                      {/* <MeepleIcon className="h-8 w-8 text-accent mb-2" /> */}
                      <p className="text-xl leading-tight">
                        {texts.member.howToJoin.steps[2].items?.[2]}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section className={`${SPACING.section}  bg-accent `}>
          <div className={SPACING.container}>
            <h2
              className={`text-5xl md:text-6xl font-bold ${SPACING.headingMargin} text-center text-primary font-display`}
            >
              {texts.member.benefits.title}
            </h2>

            <div className={`grid md:grid-cols-2 lg:grid-cols-3 ${SPACING.itemsGap} ${SPACING.maxWidthWide}`}>
              {texts.member.benefits.items.map((benefit, i) => {
                return (
                  <Card key={i} className="bg-background">
                    <CardContent className={`${SPACING.cardPadding} flex flex-col items-center text-center`}>
                      <MeepleIcon className="h-8 w-8 text-accent mb-2" />
                      <p className="text-xl leading-relaxed"> {benefit}</p>
                    </CardContent>
                  </Card>
                )
              })}
            </div>
          </div >
        </section >

        {/* CTA Section */}
        < section className={`${SPACING.section} bg-secondary`
        }>
          <div className={`${SPACING.container} text-center`}>
            <h2 className={`text-5xl md:text-6xl font-bold ${SPACING.smallMargin} text-background font-display`}>
              {texts.member.cta.title}
            </h2>
            <p
              className={`text-xl ${SPACING.subheadingMargin} ${SPACING.maxWidthForm} leading-relaxed text-background`}
            >
              {texts.member.cta.subtitle}
            </p>
            <Button
              size="lg"
              asChild
              className="text-2xl bg-background text-secondary rounded-full border-0 p-6 font-display "
            >
              <a href="https://chat.whatsapp.com" target="_blank" rel="noopener noreferrer">
                {texts.common.whatsappGroup}
              </a>
            </Button>
          </div>
        </section >
      </main >

      <Footer />
    </div >
  )
}
