import Container from "../Container"
import Flex from "../Flex"
import Image from "../Image"
import figmaLogo from '../../assets/figma-logo.png'
import VScodeLogo from '../../assets/VScodeLogo.png'
import githubLogo from '../../assets/githubLogo.png'
import reactLogo from '../../assets/reactLogo.png'
import vercelLogo from '../../assets/vercelLogo.png'
import tailwindCssLogo from '../../assets/tailwindCssLogo.png'
import bootstrapLogo from '../../assets/bootstrapLogo.png'
import overleafLogo from '../../assets/overleafLogo.png'
import "slick-carousel/slick/slick.css";
import Slider from "react-slick";
import PrevArrow from '../PrevArrow'
import NextArrow from '../NextArrow'

const SkillLayout = ({ id }) => {
  var settings = {
    dots: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 3000, // 3 seconds
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: "20px", // This creates space between slides

    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />
  };
  return (
    <section id={id} className="p-10 text-white py-[85px]  bg-secondaryBlack">
      <Container>
        <div>
          <h1 className='text-[#F3F4F6] text-[42px] font-bold leading-16 capitalize' > My <span className="text-[#EAB308]"> Skills </span></h1>
          <h3 className='font-arvo text-[#6B7280] text-[22px] font-normal leading-16 capitalize ' >"Modern Technologies I've Gained Skills In"</h3>
        </div>

        <Slider {...settings}>
          <div>
            <div className="text-center mx-0 px-3 pt-3 w-[200px] h-[200px] bg-[#020617] rounded-[12px] border border-purple-200 ">
              <Image imgSrc={figmaLogo} imgAlt={'figmaLogo'} className={"m-auto"} />
              <h4 className="text-white text-[22px] font-bold capitalize py-3">Figma </h4>
              <p className="text-[#6B7280] text-[13px] font-normal pb-2  "> A collaborative design tool for UI/UX and prototyping </p>
            </div>
          </div>
          <div>
            <div className="text-center mx-0 px-3 pt-3 w-[200px] h-[200px]  bg-[#020617] rounded-[12px] border border-purple-200 ">
              <Image imgSrc={VScodeLogo} imgAlt={'VScodeLogo'} className={"m-auto"} />
              <h4 className="text-white text-[22px] font-bold capitalize py-3">VS Code </h4>
              <p className="text-[#6B7280] text-[13px] font-normal pb-2"> Lightweight and powerful code editor by Microsoft </p>
            </div>
          </div>
          <div>
            <div className="text-center mx-0 px-3 pt-3 w-[200px] h-[200px]  bg-[#020617] rounded-[12px] border border-purple-200 ">
              <Image imgSrc={githubLogo} imgAlt={'githubLogo'} className={"m-auto"} />
              <h4 className="text-white text-[22px] font-bold capitalize py-3">GitHub </h4>
              <p className="text-[#6B7280] text-[13px] font-normal pb-2 "> Platform for hosting and collaborating on code </p>
            </div>
          </div>
          <div>
            <div className="text-center mx-0 px-3 pt-3 w-[200px] h-[200px]  bg-[#020617] rounded-[12px] border border-purple-200 ">
              <Image imgSrc={overleafLogo} imgAlt={'overleafLogo'} className={"m-auto"} />
              <h4 className="text-white text-[22px] font-bold capitalize py-3">Overleaf </h4>
              <p className="text-[#6B7280] text-[13px] font-normal pb-2 "> Online LaTeX editor for collaborative writing </p>
            </div>
          </div>
          <div>
            <div className="text-center mx-0 px-3 pt-3 w-[200px] h-[200px] bg-[#020617] rounded-[12px] border border-purple-200 ">
              <Image imgSrc={reactLogo} imgAlt={'reactLogo'} className={"m-auto"} />
              <h4 className="text-white text-[22px] font-bold capitalize py-3">React </h4>
              <p className="text-[#6B7280] text-[13px] font-normal pb-2 "> JavaScript library for building user interfaces </p>
            </div>
          </div>
          <div>
            <div className="text-center mx-0 px-3 pt-3 w-[200px] h-[200px] bg-[#020617] rounded-[12px] border border-purple-200 ">
              <Image imgSrc={vercelLogo} imgAlt={'vercelLogo'} className={"m-auto bg-amber-50"} />
              <h4 className="text-white text-[22px] font-bold capitalize py-3">Vercel </h4>
              <p className="text-[#6B7280] text-[13px] font-normal pb-2"> Platform for frontend deployment and hosting </p>
            </div>
          </div>
          <div>
            <div className="text-center mx-0 px-3 pt-3 w-[200px] h-[200px] bg-[#020617] rounded-[12px] border border-purple-200 ">
              <Image imgSrc={tailwindCssLogo} imgAlt={'tailwindCssLogo'} className={"m-auto"} />
              <h4 className="text-white text-[22px] font-bold capitalize py-3"> Tailwind CSS </h4>
              <p className="text-[#6B7280] text-[13px] font-normal pb-2"> Utility-first CSS framework for rapid UI development </p>
            </div>
          </div>
          <div>
            <div className="text-center mx-0 px-3 pt-3 w-[200px] h-[200px]  bg-[#020617] rounded-[12px] border border-purple-200 ">
              <Image imgSrc={bootstrapLogo} imgAlt={'bootstrapLogo'} className={"m-auto"} />
              <h4 className="text-white text-[22px] font-bold capitalize py-3"> Bootstrap </h4>
              <p className="text-[#6B7280] text-[13px] font-normal pb-2"> Popular CSS framework for responsive web design </p>
            </div>
          </div>
        </Slider>
        
      </Container>

    </section>
  )
}

export default SkillLayout