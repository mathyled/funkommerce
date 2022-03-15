import Styles from './Profile.module.css'

const Profile=({img,name,content})=>{
    
    
    return (
      <div className={Styles.profile}>
        <div className={Styles.imgContainer}>
          <img src={img} alt="profile" />
        </div>
        <h3>{name}</h3>
        <span>Full stack</span>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.
           Vero sequi iusto earum amet aliquam commodi eveniet eos eius
            cupiditate sed dignissimos numquam at neque, perspiciatis quo
         vitae! Pariatur, officia quisquam?
         </p>
      </div>
    );
}

export default Profile;