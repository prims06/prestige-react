export default function WhoWeAreLeft() {
  return (
    <div className="elementor-column elementor-col-50 elementor-top-column elementor-element elementor-element-4284c6e"
         data-id="4284c6e" data-element_type="column" data-e-type="column"
         data-settings='{"background_background":"classic","mdp_selection_sticky_column_effect_enable":false}'>
      <div className="elementor-widget-wrap elementor-element-populated">

        {/* Image principale — fetchPriority high (première image de la page) */}
        <div className="elementor-element elementor-element-62d6990 elementor-widget elementor-widget-image"
             data-id="62d6990" data-element_type="widget" data-e-type="widget" data-widget_type="image.default">
          <div className="elementor-widget-container">
            <img fetchPriority="high" decoding="async" width="800" height="800"
                 src="/images/about/ferhat-deniz-fors-e1qoosfnAvA-unsplash-1024x1024.jpg"
                 className="attachment-large size-large wp-image-4225" alt=""
                 sizes="(max-width: 800px) 100vw, 800px" />
          </div>
        </div>

        {/* Élément flottant 1 */}
        <div className="elementor-element elementor-element-ec7af39 elementor-widget__width-initial elementor-widget-tablet__width-initial elementor-widget-mobile__width-initial elementor-absolute elementor-hidden-mobile elementor-hidden-tablet elementor-widget elementor-widget-image elementor-motion-effects-parent"
             data-id="ec7af39" data-element_type="widget" data-e-type="widget"
             data-settings='{"_position":"absolute","motion_fx_motion_fx_mouse":"yes","motion_fx_mouseTrack_effect":"yes","motion_fx_mouseTrack_direction":"negative","motion_fx_mouseTrack_speed":{"unit":"px","size":0.2,"sizes":[]}}'
             data-widget_type="image.default">
          <div className="elementor-widget-container elementor-motion-effects-element">
            <img loading="lazy" decoding="async" width="400" height="274"
                 src="/images/about/element-2-e1655113849501.png"
                 className="attachment-full size-full wp-image-5507" alt=""
                 sizes="(max-width: 400px) 100vw, 400px" />
          </div>
        </div>

        {/* Élément flottant 2 */}
        <div className="elementor-element elementor-element-7515ccd elementor-widget__width-initial elementor-widget-tablet__width-initial elementor-widget-mobile__width-initial elementor-absolute elementor-hidden-mobile elementor-hidden-tablet elementor-widget elementor-widget-image elementor-motion-effects-parent"
             data-id="7515ccd" data-element_type="widget" data-e-type="widget"
             data-settings='{"_position":"absolute","motion_fx_motion_fx_mouse":"yes","motion_fx_mouseTrack_effect":"yes","motion_fx_mouseTrack_speed":{"unit":"px","size":0.2,"sizes":[]}}'
             data-widget_type="image.default">
          <div className="elementor-widget-container elementor-motion-effects-element">
            <img loading="lazy" decoding="async" width="400" height="143"
                 src="/images/about/element-3-e1655113712872.png"
                 className="attachment-full size-full wp-image-5508" alt=""
                 sizes="(max-width: 400px) 100vw, 400px" />
          </div>
        </div>

        {/* Élément flottant 3 */}
        <div className="elementor-element elementor-element-3de6102 elementor-widget__width-initial elementor-widget-tablet__width-initial elementor-widget-mobile__width-initial elementor-absolute elementor-hidden-mobile elementor-hidden-tablet elementor-widget elementor-widget-image elementor-motion-effects-parent"
             data-id="3de6102" data-element_type="widget" data-e-type="widget"
             data-settings='{"_position":"absolute","motion_fx_motion_fx_mouse":"yes","motion_fx_mouseTrack_effect":"yes","motion_fx_mouseTrack_direction":"negative","motion_fx_mouseTrack_speed":{"unit":"px","size":0.2,"sizes":[]}}'
             data-widget_type="image.default">
          <div className="elementor-widget-container elementor-motion-effects-element">
            <img loading="lazy" decoding="async" width="400" height="237"
                 src="/images/about/element-4-e1655113726369.png"
                 className="attachment-full size-full wp-image-5509" alt=""
                 sizes="(max-width: 400px) 100vw, 400px" />
          </div>
        </div>

      </div>
    </div>
  );
}
