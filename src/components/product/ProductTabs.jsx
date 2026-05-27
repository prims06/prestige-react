import { Link } from 'react-router-dom';
import ReviewsTab from './ReviewsTab';

export default function ProductTabs() {
  return (
    <div className="elementor-element elementor-element-703f087 elementor-widget elementor-widget-woocommerce-product-data-tabs" data-id="703f087" data-element_type="widget" data-e-type="widget" data-widget_type="woocommerce-product-data-tabs.default">
      <div className="elementor-widget-container">
        <div className="woocommerce-tabs wc-tabs-wrapper">
          <ul className="tabs wc-tabs" role="tablist">
            <li role="presentation" className="description_tab active" id="tab-title-description">
              <Link to="/product" role="tab" aria-controls="tab-description" aria-selected="true" tabIndex={0}>Description</Link>
            </li>
            <li role="presentation" className="additional_information_tab" id="tab-title-additional_information">
              <Link to="/product" role="tab" aria-controls="tab-additional_information" aria-selected="false" tabIndex={-1}>Additional information</Link>
            </li>
            <li role="presentation" className="reviews_tab" id="tab-title-reviews">
              <Link to="/product" role="tab" aria-controls="tab-reviews" aria-selected="false" tabIndex={-1}>Reviews (2)</Link>
            </li>
          </ul>
          <DescriptionTab />
          <AdditionalInfoTab />
          <ReviewsTab />
        </div>
      </div>
    </div>
  );
}

function DescriptionTab() {
  return (
    <div className="woocommerce-Tabs-panel woocommerce-Tabs-panel--description panel entry-content wc-tab" id="tab-description" role="tabpanel" aria-labelledby="tab-title-description">
      <h2>Description</h2>
      <p>Vestibulum eget felis aliquet, auctor nisl non, tincidunt nisl. Mauris et eros sapien. In ornare sapien eu nunc aliquam iaculis. Ut risus sem, accumsan eu aliquet non, tempor eget nisl. Fusce condimentum in diam non ultrices. Nulla urna ex, varius ut odio quis, condimentum ullamcorper nibh. Vivamus dapibus ligula dictum efficitur pulvinar. Curabitur a vehicula massa, quis commodo libero.</p>
      <p>Praesent ut sapien vitae est porttitor lobortis. Ut ultrices arcu ut lorem lacinia vestibulum. Donec convallis lectus risus. Ut porta commodo lorem vel ultricies. Nam at blandit mauris. Donec tempus, velit at blandit commodo, mi tellus vestibulum lacus, sed semper risus arcu porta tortor. Cras consequat, nibh in maximus lacinia, tellus ipsum placerat turpis, id lobortis orci lacus eu erat. Cras facilisis venenatis orci vitae efficitur. Nulla pulvinar pretium cursus. Etiam elementum, nulla nec eleifend fringilla, ligula leo eleifend eros, et aliquam orci nunc eleifend mauris. Phasellus ultricies sapien at risus sagittis, ut euismod leo scelerisque. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.</p>
    </div>
  );
}

function AdditionalInfoTab() {
  return (
    <div className="woocommerce-Tabs-panel woocommerce-Tabs-panel--additional_information panel entry-content wc-tab" id="tab-additional_information" role="tabpanel" aria-labelledby="tab-title-additional_information" style={{display:'none'}}>
      <h2>Additional information</h2>
      <table className="woocommerce-product-attributes shop_attributes" aria-label="Product Details">
        <tbody>
          <tr className="woocommerce-product-attributes-item woocommerce-product-attributes-item--attribute_owner">
            <th className="woocommerce-product-attributes-item__label" scope="row">Owner</th>
            <td className="woocommerce-product-attributes-item__value"><p>0x1435fabhf&#x2026;b3ec</p></td>
          </tr>
          <tr className="woocommerce-product-attributes-item woocommerce-product-attributes-item--attribute_background">
            <th className="woocommerce-product-attributes-item__label" scope="row">Background</th>
            <td className="woocommerce-product-attributes-item__value"><p>Сolorful</p></td>
          </tr>
          <tr className="woocommerce-product-attributes-item woocommerce-product-attributes-item--attribute_blockchain">
            <th className="woocommerce-product-attributes-item__label" scope="row">Blockchain</th>
            <td className="woocommerce-product-attributes-item__value"><p>Ethereum</p></td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
