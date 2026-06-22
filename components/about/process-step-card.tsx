const STEPS = [
  {
    title: "Consultation",
    description:
      "We take the time to understand your business before creating the right sign for your space. We're happy to meet you on site or at our showroom.",
    image:
      "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=800&auto=format&fit=crop",
  },
  {
    title: "Design & Production",
    description:
      "Each sign is designed and crafted at your local store by our graphic designers and expert production team.",
    image:
      "https://images.unsplash.com/photo-1581092160562-40aa08e78837?q=80&w=800&auto=format&fit=crop",
  },
  {
    title: "Project Management",
    description:
      "A dedicated account manager keeps you informed every step of the way, providing personal service and ensuring a hassle free process.",
    image:
      "https://images.unsplash.com/photo-1581578731548-c64695cc6952?q=80&w=800&auto=format&fit=crop",
  },
  {
    title: "Installation & Fulfill",
    description:
      "We will contact you to arrange collection or to schedule a time for our specialists to install your sign.",
    image:
      "https://images.unsplash.com/photo-1556740758-90de374c12ad?q=80&w=800&auto=format&fit=crop",
  },
];

export default function ProcessSteps() {
  return (
    <section className="md:grid md:grid-cols-4 md:gap-6 flex overflow-x-auto snap-x snap-mandatory gap-4 pb-4 md:pb-0 scrollbar-none">
      {STEPS.map((step) => (
        <article
          key={step.title}
          className="group border rounded-2xl relative flex shadow-sm flex-col gap-4 md:h-full h-80 w-72 md:w-auto shrink-0 snap-start"
        >
          <div className="relative overflow-hidden rounded-t-2xl aspect-4/3">
            <img
              src={step.image}
              alt={step.title}
              draggable={false}
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
            />
          </div>
          <div className="p-4 space-y-2">
            <h3 className="font-display text-sm md:text-base font-bold text-foreground">
              {step.title}
            </h3>
            <p className="font-sans line-clamp-3 text-xs md:text-sm text-muted-foreground leading-relaxed">
              {step.description}
            </p>
          </div>
        </article>
      ))}
    </section>
  );
}
