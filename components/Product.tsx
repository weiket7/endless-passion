export const Product = () => {
    return <div className="col-sm-6 col-lg-4">
                <div className="product mb-0">
                  <div className="product-thumb-info border-0 mb-3">

                    <div className="product-thumb-info-badges-wrapper">
<span className="badge badge-ecommerce badge-success">NEW</span>

                    </div>

                    <div className="addtocart-btn-wrapper">
                      <a href="shop-cart.html" className="text-decoration-none addtocart-btn" title="Add to Cart">
                        <i className="icons icon-bag"></i>
                      </a>
                    </div>

                    <a href="ajax/shop-product-quick-view.html" className="quick-view text-uppercase font-weight-semibold text-2">
                      QUICK VIEW
                    </a>
                    <a href="shop-product-sidebar-left.html">
                      <div className="product-thumb-info-image">
                        <img alt="" className="img-fluid" src="/products/haste wireless.webp"/>

                      </div>
                    </a>
                  </div>
                  <div className="d-flex justify-content-between">
                    <div>
                      <a href="#" className="d-block text-uppercase text-decoration-none text-color-default text-color-hover-primary line-height-1 text-0 mb-1">electronics</a>
                      <h3 className="text-3-5 font-weight-medium font-alternative text-transform-none line-height-3 mb-0">
                        <a href="shop-product-sidebar-right.html" className="text-color-dark text-color-hover-primary">
                          HyperX Pulsefire Haste Wireless Gaming Mouse
                        </a>
                      </h3>
                    </div>
                    <a href="#" className="text-decoration-none text-color-default text-color-hover-dark text-4"><i className="far fa-heart"></i></a>
                  </div>
                  <div title="Rated 5 out of 5">
                    <input type="text" className="d-none" value="5" title="" data-plugin-star-rating data-plugin-options="{'displayOnly': true, 'color': 'default', 'size':'xs'}"/>
                  </div>
                  <p className="price text-5 mb-3">
                    <span className="sale text-color-dark font-weight-semi-bold">$107.10</span>
                    <span className="amount">$119</span>
                  </p>
                </div>
              </div>
}