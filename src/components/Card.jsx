
const Card = ({image, title, subtitle, link}) => {
  return (
    <a href={link} target="blank" className="m-4 block max-w-sm overflow-hidden rounded-lg">
        <div className="h-64 w-full overflow-hidden"> {/* Add fixed height and width */}
            <img className="w-full h-full object-cover" src={image} alt={title} /> {/* Ensure image covers the container */}
        </div>
        <div className="p-4 text-white"> {/* Separate text container */}
            <h2 className="mb-2 text-2xl font-bold">{title}</h2>
            <p className="mb-4 text-sm font-medium">{subtitle}</p>
        </div>
    </a>
  )
}

export default Card
