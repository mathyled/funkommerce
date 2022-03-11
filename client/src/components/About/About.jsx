
import Styles from './About.module.css'
import Profile from './Profile';

const profiles = [
  {
    url: "https://media-exp1.licdn.com/dms/image/D4D35AQEXF_HeZ19P9Q/profile-framedphoto-shrink_400_400/0/1645148341909?e=1647028800&v=beta&t=9EQtyvr4BuTq0ErmA6YZalNs0BLdOEYz9fKW6cVbdG8",
    name: "Paul Jhon",
  },
  {
    url: "https://iestptrt.edu.pe/wp-content/uploads/2020/07/about-man-img.jpg",
    name: "Paul Jhon",
  },
  {
    url: "https://iestptrt.edu.pe/wp-content/uploads/2020/07/about-man-img.jpg",
    name: "Paul Jhon",
  },
  {
    url: "https://iestptrt.edu.pe/wp-content/uploads/2020/07/about-man-img.jpg",
    name: "Paul Jhon",
  },
  {
    url: "https://iestptrt.edu.pe/wp-content/uploads/2020/07/about-man-img.jpg",
    name: "Paul Jhon",
  },
  {
    url: "https://iestptrt.edu.pe/wp-content/uploads/2020/07/about-man-img.jpg",
    name: "Paul Jhon",
  },
  {
    url: "https://media-exp1.licdn.com/dms/image/D4D35AQEXF_HeZ19P9Q/profile-framedphoto-shrink_400_400/0/1645148341909?e=1647028800&v=beta&t=9EQtyvr4BuTq0ErmA6YZalNs0BLdOEYz9fKW6cVbdG8",
    name: "Paul Jhon",
  },
  {
    url: "https://iestptrt.edu.pe/wp-content/uploads/2020/07/about-man-img.jpg",
    name: "Paul Jhon",
  },
  {
    url: "https://iestptrt.edu.pe/wp-content/uploads/2020/07/about-man-img.jpg",
    name: "Paul Jhon",
  },
];

const contenido='extotextooooo ca da rima es un campo nuevo de sabiduria jajajajajajaj'


const About=()=>{
    return (
      <main className={Styles.main}>
        {console.log("about renderizado")}
        <h1>Our Team</h1>
        <section>
          {profiles && profiles.map((profile, i)=>{

            return (
              <Profile
                name={profile.name}
                img={profile.url}
                key={i}
                content={contenido}
              />
            );

          })}
        </section>
      </main>
    );
}

export default About;


