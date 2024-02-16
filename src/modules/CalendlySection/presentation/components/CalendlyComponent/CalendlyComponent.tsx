"use client"
import { InlineWidget } from "react-calendly";

export default function CalendlyComponent() {
  return (
    <div className="w-3/4 mx-auto no-scrollbar">
      <InlineWidget url="https://calendly.com/brandsparkcorp?fbclid=PAAaY21t_A_MvtAs84IADBAJsx2lkrcmArm5wBh513vYNegZ-Q2mL_baNhWIk"/>
    </div>
  );
}
