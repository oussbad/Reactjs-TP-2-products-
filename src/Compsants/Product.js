
function Product(el){
    return (
        <div className="col">
        <div className="card shadow-sm">
            <img className="bd-placeholder-img card-img-top" src={`pictures/${el.data.thumbnail}`} alt="" />
            <div className="card-body">
                <p className="card-title">{el.data.title}</p>
                <p className="card-text">{el.data.price}</p>
                <div className="d-flex justify-content-between align-items-center">
                    <div className="btn-group">
                        <button type="button" className="btn btn-sm btn-outline-secondary">Ajouter au panier</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
}
export default Product;