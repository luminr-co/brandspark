"use client";
import { InlineWidget } from "react-calendly";

export default function CalendlyComponent() {
  return (
    <div className="lg:w-3/4 mx-auto h-[600px] lg:h-full overflow-y-visible no-scrollbar px-2">
      <InlineWidget
        url="https://calendly.com/brandsparkcorp?fbclid=PAAaY21t_A_MvtAs84IADBAJsx2lkrcmArm5wBh513vYNegZ-Q2mL_baNhWIk"
        styles={{ minWidth: "320px", height: "720px" }}
      />
    </div>
  );
}
