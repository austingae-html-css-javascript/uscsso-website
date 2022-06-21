import React from 'react'

import "../../../Global.css";
import "./Articles.css";

import ArticleTemplate from './ArticleTemplate';

/*Article Images*/
import ImageTen from "../../../Images/OurWorkImages/us-china-russia-ukraine-war.webp";
import ImageNine from "../../../Images/OurWorkImages/energy-planet.webp";
import ImageEight from "../../../Images/OurWorkImages/politics-of-energy.webp";
import ImageSeven from "../../../Images/OurWorkImages/chinese-military.webp";
import ImageSix from "../../../Images/OurWorkImages/trump.webp";
import ImageFive from "../../../Images/OurWorkImages/xi.webp";
import ImageFour from "../../../Images/OurWorkImages/tsmc.webp";
import ImageThree from "../../../Images/OurWorkImages/huawei.webp";
import ImageOne from "../../../Images/OurWorkImages/uyghur.webp";

/*Contributor Profile Picture*/
import USCSSO from "../../../Images/uscsso-logo.png";
import AnneLee from "../../../Images/Contributors/anne-lee.webp";
import DominicNozzarella from "../../../Images/Contributors/dominic-nozzarella.webp";
import AndrewJHarding from "../../../Images/Contributors/andrew-j-harding.webp";
import NicoleWei from "../../../Images/Contributors/nicole-wei.webp"
import DylanShepherd from "../../../Images/Contributors/dylan-shepherd.webp"
import EmilyZimmerman from "../../../Images/Contributors/emily-zimmerman.webp"

const Articles = () => {
  return (
    <main>
      <div className='article-container'>
        <ArticleTemplate 
          articleImage={ImageTen}
          articleAuthorPicture={AnneLee} 
          articleAuthor="Anne Lee" 
          articleDate="March 29" 
          articleMinToRead="6 Min"
          articleTitle="The Responses of US and China towards the Russia-Ukraine War: An Overview"
          articleShortDescription="A residential building destroyed by shelling in the settlement of Borodyanka in the Kyiv region..."
        /> {/*ArticleTemplate runs, which returns ArticleTemplate Lines 8-24*/}

        <ArticleTemplate 
          articleImage={ImageNine}
          articleAuthorPicture={DominicNozzarella} 
          articleAuthor="Dominic Nozzarella" 
          articleDate="Mar 9" 
          articleMinToRead="2 Min"
          articleTitle="Beijing's Commitment to the Planet"
          articleShortDescription="China has taken several steps to tackle climate change, but China’s status as the world’s largest carbon emitter..."
        />

        <ArticleTemplate 
            articleImage={ImageEight}
            articleAuthorPicture={AndrewJHarding} 
            articleAuthor="Andrew J Harding" 
            articleDate="Mar 9" 
            articleMinToRead="2 Min"
            articleTitle="The Politics of Energy: The BRI's Role in Energy Development"
            articleShortDescription="As China continues to rise, so does its energy usage, dependencies, and vulnerabilities. These complicated relationships are..."
        />

        <ArticleTemplate 
            articleImage={ImageSeven}
            articleAuthorPicture={AndrewJHarding} 
            articleAuthor="Andrew J Harding" 
            articleDate="Feb 24" 
            articleMinToRead="2 Min"
            articleTitle="Annual Pentagon Report Confirms Notable Chinese Military Developments"
            articleShortDescription="As the United States continues to keep a close eye on China’s military, the Pentagon released its annual report to Congress on China’s military and security..."
        />        
        <ArticleTemplate 
          articleImage={ImageSix}
          articleAuthorPicture={NicoleWei} 
          articleAuthor="Nicole Wei" 
          articleDate="Jan 29" 
          articleMinToRead="4 Min"
          articleTitle="This Day in History: January 15, 2020 - Phase One Trade Deal Agreement"
          articleShortDescription='On January 15, 2020…then-US President Donald Trump and China’s Vice Premier Liu He signed a “historic, enforceable agreement"...'
        />
        <ArticleTemplate 
          articleImage={ImageFive}
          articleAuthorPicture={DylanShepherd} 
          articleAuthor="Dylan Shepherd" 
          articleDate="Dec 1" 
          articleMinToRead="14 Min"
          articleTitle="Understanding The Changing Nature of Chinese Factional Politics"
          articleShortDescription="Many in the West think of politics in China as a monolithic institution controlled top-down by Xi Jinping. After numerous reports..."
        />
        <ArticleTemplate 
          articleImage={ImageFour}
          articleAuthorPicture={EmilyZimmerman} 
          articleAuthor="Emily Zimmerman" 
          articleDate="Nov 16" 
          articleMinToRead="8 Min"
          articleTitle="Semiconductor Supply Chains"
          articleShortDescription="Since its invention by engineers in the United States in the 1950s, the semiconductor chip has become a focal point of trade relations between the United States and East Asian powers..."
        />
        <ArticleTemplate 
          articleImage={ImageThree}
          articleAuthorPicture={NicoleWei} 
          articleAuthor="Nicole Wei" 
          articleDate="Nov 5" 
          articleMinToRead="4 Min"
          articleTitle="A Case of Collateral Damage: American Suppliers Impacted By Huawei Sanctions"
          articleShortDescription="The global 5G industry is emerging as the newest technological frontier, with promises of revolutionizing communication and bringing the world closer..."
        />
        <ArticleTemplate 
          articleImage={ImageOne}
          articleAuthorPicture={USCSSO} 
          articleAuthor="USCSSO" 
          articleDate="March 9" 
          articleMinToRead="2 Min"
          articleTitle="IS THE UNITED STATES' RESPONSE TO THE UYGHUR HUMAN RIGHTS CRISIS IN CHINA APPROPRIATE?"
          articleShortDescription="The human rights violations carried out by the Chinese government against Uyghur and other minority Muslim groups such as Kazakhs and Uzbeks in the semi-autonomous region of Xinjiang should be condemned in all..."
        />

      </div>
    </main>
  )
}

export default Articles

/*
  1) Mobile First Approach - Yes. 
  2) Create the HTML layout - Yes. 
  <section>
    <div class="container">
    </div>
  </section>
  3) Create the HTML elements
  4) Decorate the HTML elements
    1) Imagine how you want it to look like.
    2) Then use width, padding, border, and margin.
    3) Then calculate: 
        If * {box-sizing: content-box}
        - Parent Div's Width = Child Div's Width+Padding+Border+Margin
        - Parent Div's Width = Block Element's Width+Padding+Border+Margin
        - However, Parent Div's Width != Inline Element's Width+Padding+Border+Margin
*/