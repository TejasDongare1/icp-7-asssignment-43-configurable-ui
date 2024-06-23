import "./Home.css"
import { siteDetails,features,theme} from '../../data/data'
import FeatureCard from '../../components/FeatureCard/FeatureCard'
import Footer from "../../components/Footer/Footer"



function Home() {
  return (
    <div>
        <h1 className="site-title" style={{color:theme.text, backgroundColor:theme.primaryColor}}>{siteDetails.title}</h1>
        <h2 className="site-description">{siteDetails.description}</h2>
        {siteDetails.showFeatures ?
        <div className='features'>
            {
                features.map((feature, i)=>{
                    const {title,img} = feature

                    return(
                        <FeatureCard key={i} title={title} img={img}/>
                    )
                })
            }
        </div>
        : null}
       <Footer/>
    </div>
   
  )
}

export default Home