
import Styles from './About.module.css'
import Profile from './Profile';

const profiles = [
  {
    url: "https://iestptrt.edu.pe/wp-content/uploads/2020/07/about-man-img.jpg",
    name: "foo",
  },
  {
    url: "https://iestptrt.edu.pe/wp-content/uploads/2020/07/about-man-img.jpg",
    name: "foo",
  },
  {
    url: "https://iestptrt.edu.pe/wp-content/uploads/2020/07/about-man-img.jpg",
    name: "foo",
  },
  {
    url: "https://iestptrt.edu.pe/wp-content/uploads/2020/07/about-man-img.jpg",
    name: "foo",
  },
  {
    url: "https://iestptrt.edu.pe/wp-content/uploads/2020/07/about-man-img.jpg",
    name: "foo",
  },
  {
    url: "https://iestptrt.edu.pe/wp-content/uploads/2020/07/about-man-img.jpg",
    name: "foo",
  },
  {
    url: "https://iestptrt.edu.pe/wp-content/uploads/2020/07/about-man-img.jpg",
    name: "foo",
  },
  {
    url: "https://iestptrt.edu.pe/wp-content/uploads/2020/07/about-man-img.jpg",
    name: "foo",
  },
  {
    url: "https://iestptrt.edu.pe/wp-content/uploads/2020/07/about-man-img.jpg",
    name: "foo",
  },
];

const mitad=Math.floor(profiles.length/2)

const About=()=>{
    return (
      <main className={Styles.main}>
        {console.log("about renderizado")}
        <header>ABOUT THE TEAM</header>
        <div className={Styles.section2}>
          {profiles &&
            profiles.slice(0, mitad).map((profile, index) => {
              console.log(index);
              return <Profile img={profile.url} key={index} />;
            })}
        </div>
        <div className={Styles.section2}>
          {profiles &&
            profiles.slice(mitad, profiles.length).map((profile, index) => {
              console.log(index);
              return <Profile img={profile.url} key={index} />;
            })}
        </div>
        <div className={Styles.descripcion}>
              PEGA AQUI TU DESCRIPCION GRUPAL 
        </div>
      </main>
    );
}

export default About;


