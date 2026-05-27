export default function GalleryContainer({ aspectRatio, items }) {
  return (
    <div className="elementor-gallery__container e-gallery-container e-gallery-grid e-gallery--ltr"
      style={{ '--hgap': '10px', '--vgap': '10px', '--animation-duration': '350ms', '--columns': '3', '--rows': '1', '--aspect-ratio': '100%', '--container-aspect-ratio': aspectRatio }}>
      {items.map((item, i) => (
        <div key={i} className="e-gallery-item elementor-gallery-item" style={{ '--column': String(i), '--row': '0' }}>
          <div className="e-gallery-image elementor-gallery-item__image"
            data-thumbnail={item.thumb} data-width={item.w} data-height={item.h}
            aria-label="" role="img"
            style={{ backgroundImage: `url("${item.thumb}")` }} />
        </div>
      ))}
    </div>
  );
}
