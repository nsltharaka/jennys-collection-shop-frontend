import Product from "./Product";
import featured from "../../data/featuredProducts.json"

export default function FeaturedProducts() {

    const products = featured.map(product => <Product
        key={product.id}
        image={product.image}
        title={product.title}
        description={product.description}
    />)

    return (
        <section className="featured_products">
            <div className="featured_products-text">
                <h1 className="featured_products-title">Our featured products</h1>
                <p className="featured_products-description">Lorem ipsum dolor sit amet, cons adipisicing elit. Corporis, esse maxime suscipit ab qui facere nulla voluptas accusamus magnam voluptatibus inventore provident. Molestias vero quasi nemo vel provident porro unde?</p>
            </div>

            <div className="products-container">
                {products}
            </div>

        </section>
    )
}