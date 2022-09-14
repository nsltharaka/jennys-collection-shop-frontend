import Product from "./Product";

export default function FeaturedProducts() {
    return (
        <section className="featured_products">
            <div className="featured_products-text">
                <h1 className="featured_products-title">Our featured products</h1>
                <p className="featured_products-description">Lorem ipsum dolor sit amet, cons adipisicing elit. Corporis, esse maxime suscipit ab qui facere nulla voluptas accusamus magnam voluptatibus inventore provident. Molestias vero quasi nemo vel provident porro unde?</p>
            </div>

            <div className="products-container">
                <Product />
                <Product />
                <Product />
            </div>

        </section>
    )
}