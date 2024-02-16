import { SectionHeader } from "@/core/components/SectionHeader";
import { WhyChooseBrandsparkList } from "./components/WhyChooseBrandsparkSection";
import { WhyChooseBrandsparkEntity } from "../domain/entities/WhyChooseBrandsparkEntity";
import { ElectricVoltIcon } from "./assets/ElectricVoltIcon";
import { InfiniteIcon } from "./assets/InfiniteIcon";
import { ClockIcon } from "./assets/ClockIcon";

export default function WhyChooseBrandsparkSection() {
  const list: WhyChooseBrandsparkEntity[] = [
    {
      icon: <ElectricVoltIcon />,
      title: "10X Fast",
      description: (
        <p>
          We don&apos;t just meet deadlines; we surpass them. Experience content
          creation at lightning speed – <b>10 times faster.</b>
        </p>
      ),
    },
    {
      icon: <InfiniteIcon />,
      title: "Unlimited Revisions",
      description: (
        <p>
          Refine and perfect your message until it&apos;s exactly as you
          envision, ensuring every word resonates with your brand&apos;s unique
          identity.
        </p>
      ),
    },
    {
      icon: <ClockIcon />,
      title: "24/7 Support",
      description: (
        <p>
          Our commitment to your success is unwavering. You have access to our
          around-the-clock support, ensuring immediate assistance whenever you
          need it.
        </p>
      ),
    },
  ];

  return (
    <section className="flex flex-col lg:gap-24 xl:gap-24 2xl:gap-24 gap-20 mt-44 md:mt-48 lg:mt-52 xl:mt-52 2xl:mt-52">
      <SectionHeader>
        Why Choose Brand
        <span className="block text-center lg:inline-block xl:inline-block 2xl:inline-block">
          Spark?
        </span>
      </SectionHeader>
      <WhyChooseBrandsparkList list={list} />
    </section>
  );
}
