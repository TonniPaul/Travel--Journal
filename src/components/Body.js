import location from "../images/locationicon.svg";

function Body (props){
   return (
      <>
      <section className="body">
         <div className="placeimg">
            <img src={props.img}  alt='pic' />
         </div>
         <div className="description">
            <div className="lctn">
               <img src={location} alt="location icon" />
               <h2>{props.country}</h2>
               <a href={props.glink}> View on Google Maps</a>
            </div>
            <h1>{props.title} </h1>
            <h4>{props.date}</h4>
            <p>{props.description} </p>
            
         </div>
      </section>
      <hr />
      </>
   )
}

export default Body;