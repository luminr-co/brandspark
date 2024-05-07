import { ReactHTMLElement } from "react"
import { CompanyList } from "./presentation/components"
import { CompanyEntity } from "./domain/entities/CompanyEntity"
import { MuIcon, PraisedIcon, SCIcon, SFPIcon, TCDMIcon, TasrifIcon } from "./presentation/assets"
import { SectionHeader } from "@/core/components/SectionHeader"
import { LightingAsset } from "@/core/assets/images/LightingAsset"



const CompanyCaroselSection = () => {
    const companies:CompanyEntity[]=[
        {
            name:"Praised logo",
            icon:<PraisedIcon/>
        },
        {
          name:"MU logo",
          icon:<MuIcon/>
        },
        {
          name:"Social chameleon",
          icon:<SCIcon/>
        },
        {
          name:"Silver Fox Productions",
          icon:<SFPIcon/>
        },
        {
          name:"Twin Cities Digital marketing",
          icon:<TCDMIcon/>
        },
        {
          name:"200 Percentraise",
          icon:<TasrifIcon/>
        },
    ]

  return (
    <section className="mt-10 pt-2 lg:mt-14 lg:pt-5 xl:mt-24 xl:pt-5 2xl:mt-32 2xl:pt-5 px-2">
        <h2 className="font-primary flex justify-center lg:text-4xl text-2xl md:text-3xl xl:text-5xl 2xl:text-5xl font-normal text-center relative">
          Clients Who Trust Us
          <div className="absolute -top-12 2xl:right-64  2xl:left-96 translate-x-64 xl:translate-x-72 h-28 scale-y-100 rotate-90 scale-x-100">
            <LightingAsset />
          </div>

        </h2>
        <CompanyList companies={companies}/>
    </section>
  )
}

export default CompanyCaroselSection