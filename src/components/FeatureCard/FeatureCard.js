import "./FeatureCard.css"
import { theme } from "../../data/data"

function FeatureCard( {title , img}) {
  return (
    <div className='feature-card' style={{backgroundColor: theme.primaryColor}}>
        <img src={img} alt={title} className='feature-img'/>
        <h2 className='feature-title' style={{color: theme.text}}>{title}</h2>
    </div>
  )
}

export default FeatureCard
