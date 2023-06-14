import './index.css'

const DestinationItem = props => {
  const {destinationDetails} = props
  const {name, imgUrl} = destinationDetails
  return (
    <li className="destination-card-container">
      <img src={imgUrl} className="image" alt="searchIcon" />
      <h1 className="name">{name}</h1>
    </li>
  )
}
export default DestinationItem
