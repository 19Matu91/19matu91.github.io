import { MeepleIcon } from "@/components/meeple-icon"

interface FeatureItemProps {
  text: string
}

export function FeatureItem({ text }: FeatureItemProps) {
  return (
    <li className="flex gap-2 sm:gap-3 items-center">
      <MeepleIcon className="h-6 w-6 sm:h-7 sm:w-7 md:h-8 md:w-8 text-accent shrink-0 mt-0.5" />
      <span className="text-base sm:text-lg md:text-xl text-card tracking-wide">{text}</span>
    </li>
  )
}
