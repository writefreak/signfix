import Image from "next/image";

export function HeroBackground() {
  return (
    <>
      <Image
        src="/signfix 2.png"
        alt="Signfix signage installation"
        fill
        priority
        className="object-cover brightness-50"
      />
      <div
        className="absolute inset-0 bg-linear-to-r from-black/85 from-30% to-transparent to-100%"
        aria-hidden="true"
      />
    </>
  );
}
