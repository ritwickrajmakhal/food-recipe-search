import PropTypes from 'prop-types'

function Card(props) {
    const ingredientLines = props.recipe.ingredientLines.map((ingredientLine, index) => {
        return <li key={index} className="list-group-item">{ingredientLine}</li>
    })
    return (
        <div className="card" style={{ width: "18rem" }}>
            <img src={props.recipe.image} className="card-img-top" alt={props.recipe.label} />
            <div className="card-body">
                <h5 className="card-title">{props.recipe.label}</h5>
            </div>
            <ul className="list-group list-group-flush">
                {ingredientLines}
            </ul>
        </div>
    );
}

export default Card;

Card.propTypes = {
    recipe: PropTypes.shape({
        image: PropTypes.string.isRequired,
        label: PropTypes.string.isRequired,
        ingredientLines: PropTypes.array.isRequired
    })

}