import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import axios from "axios";

import sport from "../img/sport.jpg";
import biznis from "../img/biznis.jpg";
import lifestyle from "../img/lifestyle.jpg";
import auto from "../img/auto.jpg";
import hrana from "../img/hrana.jpg";
import umjetnost from "../img/umjetnost.jpg";



const Home = () => {
  const [posts, setPosts] = useState([]);

  const cat = useLocation().search

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(`/posts${cat}`);
        setPosts(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, [cat]);
   /*  const posts = [
        {
         id: 1,
         title: "Dobar nastup Marka Šljivića, završio je na 23. mjestu u olimpijskom slalomu",
         desc: "Bosanskohercegovački alpski skijaš Marko Šljivić zauzeo je 23. mjesto u disciplini slalom na Zimskim olimpijskim igrama Milano-Cortina.",
         img: sport,
        },
        {
         id: 2,
         title: "1. mart kao državni praznik neće se prenositi, privrednici pozvani da uvećaju platu onima koji će raditi u nedjelju",
         desc: "Iz Federalnog ministarstva rada i socijalne politike saopćili su da se u skladu sa Zakonom o proglašenju 1. marta Danom nezavisnosti Bosne i Hercegovine, Dan nezavisnosti obilježava 1. marta te da je na dan praznika neradni dan za državne organe, preduzeća i druga pravna lica.",
         img: biznis,
        },
        {
         id: 3,
         title: "Priča majmuna iz Japana raznježila internet: Ne razdvaja se od plišane igračke nakon što ga je majka odbacila",
         desc: "Punch je šestomjesečni majmun iz zoološkog vrta Ichikawa City Zoo u Japanu koji je postao internet senzacija nakon što su se na mrežama pojavili snimci na kojima se čvrsto grli sa svojom plišanom igračkom orangutanom.",
         img: lifestyle,
        },
        {
         id: 4,
         title: "Nissan Skyline GT-R Nismo 400R bi mogao biti prodan za više od milion dolara",
         desc: "S obzirom na to da je proizvedeno samo 44 od planiranih 100, ne čudi što se primjerci modela Nismo 400R rijetko pojavljuju u prodaji. A kada se pojave, oni koji ih žele kupiti moraju pripremiti ogroman novčani iznos.",
         img: auto,
        },
        {
         id: 5,
         title: "Kineski fine dining ruši stereotipe o hrani za ponijeti: Kuhari navode da su visoke cijene opravdane",
         desc: "Kuhar George Chen, rođen na Tajvanu, čija se porodica doselila u Los Angeles 1967. godine, prisjetio se kako su njegovi školski drugovi sa čuđenjem posmatrali njegov ručak. Danas je kineska popularna, ne samo u Americi, već i širom svijeta. Sve popularniji je i kineski fine dining.",
         img: hrana,
        },
        {
         id: 6,
         title: "Udala se zvijezda serije Stranger Things Maya Hawke, intimna ceremonija održana za Valentinovo",
         desc: "Zvijezda popularne Netflixove serije Stranger Things Maya Hawke udala se za muzičara Christiana Leeja Hutsona na intimnoj ceremoniji održanoj na Dan zaljubljenih u New Yorku.",
         img: umjetnost,
        },
     ]; */

  const getText = (html) =>{
    const doc = new DOMParser().parseFromString(html, "text/html")
    return doc.body.textContent
  }


  return (
     <div className="home">
      <div className="posts">
        {posts.map((post) => (
          <div className="post" key={post.id}>
            <div className="img">
              <img src={`../upload/${post.img}`} alt="" />
            </div>
            <div className="content">
              <Link className="link" to={`/post/${post.id}`}>
                <h1>{post.title}</h1>
              </Link>
              <p>{getText(post.desc)}</p>
              <Link className="link" to={`/post/${post.id}`}>
              <button>Pročitaj više</button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;