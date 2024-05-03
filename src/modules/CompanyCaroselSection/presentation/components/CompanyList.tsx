import Image from "next/image"
import { CompanyEntity } from "../../domain/entities/CompanyEntity";
import { cp } from "fs";
import Marquee from "react-fast-marquee";

interface Props{
    companies:CompanyEntity[]
}

const CompanyList:React.FC<Props> = ({companies}) => {

  return (
    <div className="w-full overflow-hidden flex mt-12 flex-row items-center justify-center">
    <Marquee autoFill speed={20}>
        {companies.map((company:CompanyEntity)=>(
          <div key ={company.name} className="mx-16">
            {company.icon}
          </div>
        ))}   
    </Marquee>
    </div>


        


  )
}

export default CompanyList