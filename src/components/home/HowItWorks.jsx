const HOW_IT_WORKS = [
  { icon: '/images/index/wallet-4-2.png',  iconW: 50, iconH: 50, title: 'Set up your wallet',      desc: 'Malesuada pellentesque elit eget gravida cum sociis natoque penatibus. Proin libero nunc consequat interdum.',           colId: '3f12900', imgWId: '483b01a', titleWId: '6c7a34f', textWId: '1b3316e' },
  { icon: '/images/index/folder-plus.png', iconW: 50, iconH: 50, title: 'Create your collection', desc: 'Consectetur adipiscing elit ut aliquam purus sit amet luctus venenatis. Risus nullam eget felis eget nunc lobortis.',    colId: '4e4e626', imgWId: 'b1541cf', titleWId: '454e357', textWId: '42851d6' },
  { icon: '/images/index/cloud-plus.png',  iconW: 62, iconH: 50, title: 'Add your NFTs',          desc: 'Volutpat commodo sed egestas egestas. Mollis aliquam ut porttitor leo a diam sollicitudin tempor.',                   colId: 'fc36e2a', imgWId: 'ee0615f', titleWId: 'cc2975b', textWId: 'e18dbb8' },
  { icon: '/images/index/tags.png',        iconW: 50, iconH: 50, title: 'List them for sale',     desc: 'Diam sit amet nisl suscipit adipiscing bibendum est. Porttitor eget dolor morbi non arcu risus quis varius quam.',    colId: '738c49a', imgWId: 'e0d7b1a', titleWId: '3a45e15', textWId: '767d109' },
];

export default function HowItWorks() {
  return (
    <section className="elementor-section elementor-top-section elementor-element elementor-element-4ecb8ec elementor-section-boxed elementor-section-height-default elementor-invisible" data-id="4ecb8ec" data-element_type="section" data-e-type="section" data-settings='{"animation":"fadeInUp","mdp_selection_sticky_effect_enable":false}'>
      <div className="elementor-container elementor-column-gap-wide">
        {HOW_IT_WORKS.map((step) => (
          <div className={`elementor-column elementor-col-25 elementor-top-column elementor-element elementor-element-${step.colId}`} key={step.colId} data-id={step.colId} data-element_type="column" data-e-type="column" data-settings='{"mdp_selection_sticky_column_effect_enable":false}'>
            <div className="elementor-widget-wrap elementor-element-populated">
              <div className={`elementor-element elementor-element-${step.imgWId} elementor-widget elementor-widget-image`} data-id={step.imgWId} data-element_type="widget" data-e-type="widget" data-widget_type="image.default">
                <div className="elementor-widget-container"><img loading="lazy" decoding="async" width={step.iconW} height={step.iconH} src={step.icon} className="attachment-thumbnail size-thumbnail" alt="" /></div>
              </div>
              <div className={`elementor-element elementor-element-${step.titleWId} elementor-widget elementor-widget-heading`} data-id={step.titleWId} data-element_type="widget" data-e-type="widget" data-widget_type="heading.default">
                <div className="elementor-widget-container"><h5 className="elementor-heading-title elementor-size-default">{step.title}</h5></div>
              </div>
              <div className={`elementor-element elementor-element-${step.textWId} elementor-widget elementor-widget-text-editor`} data-id={step.textWId} data-element_type="widget" data-e-type="widget" data-widget_type="text-editor.default">
                <div className="elementor-widget-container">{step.desc}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
