import { AVATAR, AVATAR_SRCSET } from '../../data/product';

export default function ReviewItem({ commentId, date, dateLabel, text, children }) {
  return (
    <div id={`comment-${commentId}`} className="comment_container">
      <img alt="" src={AVATAR} srcSet={AVATAR_SRCSET} className="avatar avatar-60 photo" height="60" width="60" decoding="async" />
      <div className="comment-text">
        <p className="meta">
          <strong className="woocommerce-review__author">merkulove </strong>
          <span className="woocommerce-review__dash">&#8211;</span>{' '}
          <time className="woocommerce-review__published-date" dateTime={date}>{dateLabel}</time>
        </p>
        <div className="description"><p>{text}</p></div>
      </div>
      {children}
    </div>
  );
}
