import Image from "next/image";
import styles from '@/styles/LandingPage.module.scss';
export default function LandingPage(){

return(
<>
  
  <div className="container  text-center">
    <div className="row">
    <div className="col">
    <Image src="/img/logo.png" alt="Picture of the author" width={250} height={69.5} />
    </div>
    </div>
    <div className="row ">
    <div className="col-md-6">
    <h2 className={styles.headerh2}>WHAT WE DO...</h2>
      <h1 className={styles.header}>We Help Local Dealerships Bring More Customers Through The Door With Social Media Marketing.</h1>
      <button className={styles.btn}><b>Book Your Call Now</b></button>
    </div>
    <div className="col-md-6">
      <Image className={styles.landingPageImg} src="/img/landingpage.png" alt="landingpage" width={500} height={300}/>
    </div>
    </div>

  </div>

</>
)
}