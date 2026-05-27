const NOTABLE_DROPS = [
  {
    title: 'Colourfull assests', desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor',
    author: '@robix2x2x', avatar: '/images/index/and-machines-vqTWfa4DjEk-unsplash-1-pqla82xeu3kfil50wf8t5e2n12hu9dw8g753c6p5g4.jpg',
    colId: '132bbb9', colClass: '', sectionId: '4975d6f', innerColId: 'bb8acbc',
    liveId: '5578234', spacerId: '56a14cf', titleId: '65aeaf1', textId: 'f419817', imgBoxId: '631af61', mobileHeadId: 'e740c31',
  },
  {
    title: '3D vector arts', desc: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur',
    author: '@gomim', avatar: '/images/index/aldi-sigun-unt3066GV-E-unsplash-1-pqla26hvxjhmmpplcvf4hvogrzkvxsgwazpcvng4ic.jpg',
    colId: '33aaf04', colClass: '', sectionId: '310e3b8', innerColId: '1551aa2',
    liveId: '62ec3c8', spacerId: '4d9dec7', titleId: '1a41106', textId: '6574de6', imgBoxId: '980757c', mobileHeadId: '6aadff2',
  },
  {
    title: '3D figure', desc: 'Excepteur sint occaecat cupidatat non proident sunt in culpa qui officia',
    author: '@acenjoeneltin', avatar: '/images/index/milad-fakurian-58Z17lnVS4U-unsplash-1-1-pq1w0t7dtt9zv9is82btyosnox1j1tm5o5u8cx0ic4.jpg',
    colId: 'bc209be', colClass: 'elementor-hidden-tablet', sectionId: '66626b5', innerColId: '5ccdb30',
    liveId: '88b85f6', spacerId: '5973a51', titleId: 'f9e47c5', textId: 'dcba84f', imgBoxId: 'f41515a', mobileHeadId: 'c17a19d',
  },
];

function NotableDropCard({ drop }) {
  return (
    <div className={`elementor-column elementor-col-33 elementor-top-column elementor-element elementor-element-${drop.colId}${drop.colClass ? ' ' + drop.colClass : ''}`} data-id={drop.colId} data-element_type="column" data-e-type="column" data-settings='{"mdp_selection_sticky_column_effect_enable":false}'>
      <div className="elementor-widget-wrap elementor-element-populated">
        <section className={`elementor-section elementor-inner-section elementor-element elementor-element-${drop.sectionId} elementor-section-boxed elementor-section-height-default`} data-id={drop.sectionId} data-element_type="section" data-e-type="section" data-settings='{"mdp_selection_sticky_effect_enable":false}'>
          <div className="elementor-container elementor-column-gap-no">
            <div className={`elementor-column elementor-col-100 elementor-inner-column elementor-element elementor-element-${drop.innerColId}`} data-id={drop.innerColId} data-element_type="column" data-e-type="column" data-settings='{"background_background":"classic","mdp_selection_sticky_column_effect_enable":false}'>
              <div className="elementor-widget-wrap elementor-element-populated">
                <div className="elementor-background-overlay"></div>
                <div className={`elementor-element elementor-element-${drop.liveId} elementor-widget__width-auto elementor-widget elementor-widget-heading`} data-id={drop.liveId} data-element_type="widget" data-e-type="widget" data-widget_type="heading.default">
                  <div className="elementor-widget-container">
                    <div className="elementor-heading-title elementor-size-default">Live</div>
                  </div>
                </div>
                <div className={`elementor-element elementor-element-${drop.spacerId} elementor-widget elementor-widget-spacer`} data-id={drop.spacerId} data-element_type="widget" data-e-type="widget" data-widget_type="spacer.default">
                  <div className="elementor-widget-container">
                    <div className="elementor-spacer"><div className="elementor-spacer-inner"></div></div>
                  </div>
                </div>
                <div className={`elementor-element elementor-element-${drop.titleId} elementor-widget elementor-widget-heading`} data-id={drop.titleId} data-element_type="widget" data-e-type="widget" data-widget_type="heading.default">
                  <div className="elementor-widget-container">
                    <h5 className="elementor-heading-title elementor-size-default">{drop.title}</h5>
                  </div>
                </div>
                <div className={`elementor-element elementor-element-${drop.textId} elementor-widget elementor-widget-text-editor`} data-id={drop.textId} data-element_type="widget" data-e-type="widget" data-widget_type="text-editor.default">
                  <div className="elementor-widget-container">{drop.desc}</div>
                </div>
                <div className={`elementor-element elementor-element-${drop.imgBoxId} elementor-position-left elementor-vertical-align-middle elementor-widget__width-auto elementor-widget-mobile__width-auto elementor-hidden-mobile elementor-widget elementor-widget-image-box`} data-id={drop.imgBoxId} data-element_type="widget" data-e-type="widget" data-widget_type="image-box.default">
                  <div className="elementor-widget-container">
                    <div className="elementor-image-box-wrapper">
                      <figure className="elementor-image-box-img">
                        <img decoding="async" src={drop.avatar} title="" alt="" loading="lazy" />
                      </figure>
                      <div className="elementor-image-box-content">
                        <h3 className="elementor-image-box-title">{drop.author}</h3>
                      </div>
                    </div>
                  </div>
                </div>
                <div className={`elementor-element elementor-element-${drop.mobileHeadId} elementor-widget__width-auto elementor-hidden-desktop elementor-hidden-tablet elementor-widget elementor-widget-heading`} data-id={drop.mobileHeadId} data-element_type="widget" data-e-type="widget" data-widget_type="heading.default">
                  <div className="elementor-widget-container">
                    <div className="elementor-heading-title elementor-size-default">{drop.author}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export function NotableDropsTitle() {
  return (
    <section className="elementor-section elementor-top-section elementor-element elementor-element-ea95e8f elementor-section-boxed elementor-section-height-default" data-id="ea95e8f" data-element_type="section" data-e-type="section" data-settings='{"mdp_selection_sticky_effect_enable":false}'>
      <div className="elementor-container elementor-column-gap-no">
        <div className="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-40b3cc0" data-id="40b3cc0" data-element_type="column" data-e-type="column" data-settings='{"mdp_selection_sticky_column_effect_enable":false}'>
          <div className="elementor-widget-wrap elementor-element-populated">
            <div className="elementor-element elementor-element-4392e5c elementor-widget elementor-widget-heading" data-id="4392e5c" data-element_type="widget" data-e-type="widget" data-widget_type="heading.default">
              <div className="elementor-widget-container"><h3 className="elementor-heading-title elementor-size-default">Notable drops</h3></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function NotableDropsGrid() {
  return (
    <section className="elementor-section elementor-top-section elementor-element elementor-element-2348f8a elementor-section-boxed elementor-section-height-default elementor-invisible" data-id="2348f8a" data-element_type="section" data-e-type="section" data-settings='{"animation":"fadeInUp","mdp_selection_sticky_effect_enable":false}'>
      <div className="elementor-container elementor-column-gap-no">
        {NOTABLE_DROPS.map((drop, i) => (<NotableDropCard key={i} drop={drop} />))}
      </div>
    </section>
  );
}
