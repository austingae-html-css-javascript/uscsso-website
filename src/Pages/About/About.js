import React from 'react'
import uscssoLogo from "../../Images/uscsso-logo.png";

import "../../Global.css";
import "./About.css";

import TeamMemberTemplateMobileVersion from './TeamMemberTemplateMobileVersion';

import TappyLung from "../../Images/Contributors/tappy-lung.webp";
import ZackRosenfeld from "../../Images/Contributors/zack-rosenfeld.webp";
import ChloeChu from "../../Images/Contributors/chloe-chu.webp";
import MeganShen from "../../Images/Contributors/megan-shen.webp";
import XianranZang from "../../Images/Contributors/xianran-zang.webp";
import NicoleWei from "../../Images/Contributors/nicole-wei.webp";
import ZoellaOHaren from "../../Images/Contributors/zoella-haren.webp";
import IshaniChettri from "../../Images/Contributors/ishani-chettri.webp";
import KaitlynYuan from "../../Images/Contributors/kaitlyn-yuan.webp";
import AedanYohannan from "../../Images/Contributors/aedan-yohannan.webp";
import SchuylerVanTassel from "../../Images/Contributors/schuyler-van-tassel.webp";
import EmilyZimmerman from "../../Images/Contributors/emily-zimmerman.webp"
import DominicNozzarella from "../../Images/Contributors/dominic-nozzarella.webp";
import EmilyScott from "../../Images/Contributors/emily-scott.webp";
import HenryTsai from "../../Images/Contributors/henry-tsai.webp";
import DylanShepherd from "../../Images/Contributors/dylan-shepherd.webp"
import JulianAnderson from "../../Images/Contributors/julian-anderson.webp";
import SamHorner from "../../Images/Contributors/sam-horner.webp";
import ViktorOlah from "../../Images/Contributors/viktor-olah.webp";
import DanielChoi from "../../Images/Contributors/daniel-choi.webp";
import AnneLee from "../../Images/Contributors/anne-lee.webp";
import AndrewJHarding from "../../Images/Contributors/andrew-j-harding.webp";
import NickCamargo from "../../Images/Contributors/nick-camargo.webp";

const About = () => {

  const teamMemberList =[
    {
      image: TappyLung,
      name:"Tappy Lung",
      year:"2024",
      major:"International Affairs and Political Communications",
      role:"President"
    },
    {
      image: ZackRosenfeld,
      name: "Zack Rosenfeld",
      year: "2023",
      major: "International Affairs and Economics",
      role: "Co-Founder"
    },
    {
      image: ChloeChu,
      name: "Chloe Chu",
      year: "2023",
      major: "International Business & Finance",
      role: "Academic Contributor"
    },
    {
      image: MeganShen,
      name: "Megan Shen",
      year: "2024",
      major: "International Affairs",
      role: "Director of Operations"
    },
    {
      image: XianranZang,
      name: "Xianran Zang",
      year: "2024",
      major: "International Affairs",
      role: "Operations and Outreach Contributor"
    },
    {
      image: NicoleWei,
      name: "Nicole Wei",
      year: "2025",
      major: "International Affairs",
      role: "Social Media Director"
    },
    {
      image: ZoellaOHaren,
      name: "Zoella O Haren",
      year: "2024",
      major: "International Affairs",
      role: "Website Developer"
    },
    {
      image: IshaniChettri,
      name: "Ishani Chettri",
      year: "2024",
      major: "Journalism & International Affairs",
      role: "Director of Research"
    },
    {
      image: KaitlynYuan,
      name: "Kaitlyn Yuan",
      year: "2023",
      major: "International Affairs with Conflict Resolution & Asia Concentration",
      role: "Director of Academic Engagement"
    },
    {
      image: AedanYohannan,
      name: "Aedan Yohannan",
      year: "2024",
      major: "International Affairs & Chinese",
      role: "Director of Newsletter"
    },
    {
      image: SchuylerVanTassel,
      name: "Schuyler Van Tassel",
      year: "2024",
      major: "International Affairs & Chinese",
      role: "Newsletter Director"
    },
    {
      image: EmilyZimmerman,
      name: "Emily Zimmerman",
      year: "2023",
      major: "International Affairs ",
      role: "Director of Discussion"
    },
    {
      image: DominicNozzarella,
      name: "Dominic Nozzarella",
      year: "2023",
      major: "International Affairs ",
      role: "Academic Engagement"
    },
    {
      image: EmilyScott,
      name: "Emily Scott",
      year: "",
      major: "",
      role: ""
    },
    {
      image: HenryTsai,
      name: "Henry Tsai",
      year: "2024",
      major: "International Affairs ",
      role: "Newsletter Contributor"
    },
    {
      image: DylanShepherd,
      name: "Dylan Shepherd",
      year: "2025",
      major: "International Affairs and Economics",
      role: "Academic Engagement"
    },
    {
      image: JulianAnderson,
      name: "Julian Anderson",
      year: "2023",
      major: "International Affairs and Economics",
      role: "Newsletter Contributor"
    },
    {
      image: SamHorner,
      name: "Sam Horner",
      year: "2024",
      major: "Chinese Language & Literature, International Affairs",
      role: "Contributor"
    },
    {
      image: ViktorOlah,
      name: "Viktor Olah",
      year: "2025",
      major: "International Affairs ",
      role: "Newsletter Contributor"
    },
    {
      image: DanielChoi,
      name: "Daniel Choi",
      year: "2025",
      major: "International Affairs",
      role: "Academic Engagement"
    },
    {
      image: AnneLee,
      name: "Anne Lee",
      year: "2024",
      major: "Political Science, International Affairs, and Economics ",
      role: "Academic Engagement"
    },
    {
      image: AndrewJHarding,
      name: "Andrew J Harding",
      year: "2022",
      major: "International Affairs, Asian Studies, Political Science ",
      role: "Academic Engagement"
    },
    {
      image: NickCamargo,
      name: "Nick Camargo",
      year: "2024",
      major: "International Affairs",
      role: "Academic Engagement"
    },



  ]
  return (
    <main>
      <section className='our-story'>
        <h1 className='our-story__title'>Our Story</h1>
        <hr className='our-story__line'></hr>
        <p className='our-story__description our-story__description--rounded-corners-version-1'>Founded in February 2020 at the George Washington University, the US-China Strategic Studies Organization was built to address the lack of holistic and unbiased study of Sino-American relations.</p>
        <div className='our-story__bottom-container'>
          <p className='our-story__description our-story__description--rounded-corners-version-2'>Since its founding, the USCSSO has grown into a community of forward-thinking students analyzing, discussing, and building an understanding of US-China relations. Through weekly newsletters, events and community engagement, high-level research in various mediums, and a firm willingness to objectively analyze complex issues, USCSSO uplifts hardworking students and educates a wide audience on Sino-American relations.</p>
          <div className='our-story__logo-container'>
            <img className='our-story__logo' src={uscssoLogo} />
          </div>
        </div>
      </section>

      <section className='meet-our-team'>
        <h1>Meet Our Team</h1>
        <TeamMemberTemplateMobileVersion 
        image={teamMemberList[0].image}
        name={teamMemberList[0].name} 
        year={teamMemberList[0].year} 
        major={teamMemberList[0].major} 
        role={teamMemberList[0].role}
        />       
        <TeamMemberTemplateMobileVersion 
          image={teamMemberList[1].image}
          name={teamMemberList[1].name} 
          year={teamMemberList[1].year} 
          major={teamMemberList[1].major} 
          role={teamMemberList[1].role}
        />
        <TeamMemberTemplateMobileVersion 
          image={teamMemberList[2].image}
          name={teamMemberList[2].name} 
          year={teamMemberList[2].year} 
          major={teamMemberList[2].major} 
          role={teamMemberList[2].role}
        />
        <TeamMemberTemplateMobileVersion 
          image={teamMemberList[3].image}
          name={teamMemberList[3].name} 
          year={teamMemberList[3].year} 
          major={teamMemberList[3].major} 
          role={teamMemberList[3].role}
        />
        <TeamMemberTemplateMobileVersion 
          image={teamMemberList[4].image}
          name={teamMemberList[4].name} 
          year={teamMemberList[4].year} 
          major={teamMemberList[4].major} 
          role={teamMemberList[4].role}
        />
        <TeamMemberTemplateMobileVersion 
          image={teamMemberList[5].image}
          name={teamMemberList[5].name} 
          year={teamMemberList[5].year} 
          major={teamMemberList[5].major} 
          role={teamMemberList[5].role}
        />
        <TeamMemberTemplateMobileVersion 
          image={teamMemberList[6].image}
          name={teamMemberList[6].name} 
          year={teamMemberList[6].year} 
          major={teamMemberList[6].major} 
          role={teamMemberList[6].role}
        />                
        <TeamMemberTemplateMobileVersion 
          image={teamMemberList[7].image}
          name={teamMemberList[7].name} 
          year={teamMemberList[7].year} 
          major={teamMemberList[7].major} 
          role={teamMemberList[7].role}
        />
        <TeamMemberTemplateMobileVersion 
          image={teamMemberList[8].image}
          name={teamMemberList[8].name} 
          year={teamMemberList[8].year} 
          major={teamMemberList[8].major} 
          role={teamMemberList[8].role}
        />
        <TeamMemberTemplateMobileVersion 
          image={teamMemberList[9].image}
          name={teamMemberList[9].name} 
          year={teamMemberList[9].year} 
          major={teamMemberList[9].major} 
          role={teamMemberList[9].role}
        />
        <TeamMemberTemplateMobileVersion 
          image={teamMemberList[10].image}
          name={teamMemberList[10].name} 
          year={teamMemberList[10].year} 
          major={teamMemberList[10].major} 
          role={teamMemberList[10].role}
        /> 
        <TeamMemberTemplateMobileVersion 
          image={teamMemberList[11].image}
          name={teamMemberList[11].name} 
          year={teamMemberList[11].year} 
          major={teamMemberList[11].major} 
          role={teamMemberList[11].role}
        />
        <TeamMemberTemplateMobileVersion 
          image={teamMemberList[12].image}
          name={teamMemberList[12].name} 
          year={teamMemberList[12].year} 
          major={teamMemberList[12].major} 
          role={teamMemberList[12].role}
        />
        <TeamMemberTemplateMobileVersion 
          image={teamMemberList[13].image}
          name={teamMemberList[13].name} 
          year={teamMemberList[13].year} 
          major={teamMemberList[13].major} 
          role={teamMemberList[13].role}
        />
        <TeamMemberTemplateMobileVersion 
          image={teamMemberList[14].image}
          name={teamMemberList[14].name} 
          year={teamMemberList[14].year} 
          major={teamMemberList[14].major} 
          role={teamMemberList[14].role}
        />
        <TeamMemberTemplateMobileVersion 
          image={teamMemberList[15].image}
          name={teamMemberList[15].name} 
          year={teamMemberList[15].year} 
          major={teamMemberList[15].major} 
          role={teamMemberList[15].role}
        />
        <TeamMemberTemplateMobileVersion 
          image={teamMemberList[16].image}
          name={teamMemberList[16].name} 
          year={teamMemberList[16].year} 
          major={teamMemberList[16].major} 
          role={teamMemberList[16].role}
        />
        <TeamMemberTemplateMobileVersion 
          image={teamMemberList[17].image}
          name={teamMemberList[17].name} 
          year={teamMemberList[17].year} 
          major={teamMemberList[17].major} 
          role={teamMemberList[17].role}
        />
        <TeamMemberTemplateMobileVersion 
          image={teamMemberList[18].image}
          name={teamMemberList[18].name} 
          year={teamMemberList[18].year} 
          major={teamMemberList[18].major} 
          role={teamMemberList[18].role}
        />
        <TeamMemberTemplateMobileVersion 
          image={teamMemberList[19].image}
          name={teamMemberList[19].name} 
          year={teamMemberList[19].year} 
          major={teamMemberList[19].major} 
          role={teamMemberList[19].role}
        />
        <TeamMemberTemplateMobileVersion 
          image={teamMemberList[20].image}
          name={teamMemberList[20].name} 
          year={teamMemberList[20].year} 
          major={teamMemberList[20].major} 
          role={teamMemberList[20].role}
        />
        <TeamMemberTemplateMobileVersion 
          image={teamMemberList[21].image}
          name={teamMemberList[21].name} 
          year={teamMemberList[21].year} 
          major={teamMemberList[21].major} 
          role={teamMemberList[21].role}
        />
        <TeamMemberTemplateMobileVersion 
          image={teamMemberList[22].image}
          name={teamMemberList[22].name} 
          year={teamMemberList[22].year} 
          major={teamMemberList[22].major} 
          role={teamMemberList[22].role}
        />
      </section>
    </main>
  )
}

export default About

/*
  1) Mobile First Approach - 
  2) Create the HTML layout -
  <section>
    <div class="container">
    </div>
  </section>
  3) Create the HTML elements - 
  4) Decorate the HTML elements - 
    1) Imagine how you want it to look like.
    2) Then use width, padding, border, and margin.
    3) Then calculate: 
        If * {box-sizing: content-box}
        - Parent Div's Width = Child Div's Width+Padding+Border+Margin
        - Parent Div's Width = Block Element's Width+Padding+Border+Margin
        - However, Parent Div's Width != Inline Element's Width+Padding+Border+Margin
*/