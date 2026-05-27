import { Link } from 'react-router-dom';

export default function ReviewForm() {
  return (
    <div id="review_form_wrapper">
      <div id="review_form">
        <div id="respond" className="comment-respond">
          <span id="reply-title" className="comment-reply-title" role="heading" aria-level="3">
            Add a review{' '}
            <small><Link rel="nofollow" id="cancel-comment-reply-link" to="/product" style={{display:'none'}}>Cancel reply</Link></small>
          </span>
          <form action="#" method="post" id="commentform" className="comment-form">
            <p className="comment-notes"><span id="email-notes">Your email address will not be published.</span> <span className="required-field-message">Required fields are marked <span className="required">*</span></span></p>
            <div className="comment-form-rating">
              <label htmlFor="rating" id="comment-form-rating-label">Your rating&nbsp;<span className="required">*</span></label>
              <p className="stars">
                <span role="group" aria-labelledby="comment-form-rating-label">
                  <Link role="radio" tabIndex={0} aria-checked="false" className="star-1" to="/product">1 of 5 stars</Link>
                  <Link role="radio" tabIndex={-1} aria-checked="false" className="star-2" to="/product">2 of 5 stars</Link>
                  <Link role="radio" tabIndex={-1} aria-checked="false" className="star-3" to="/product">3 of 5 stars</Link>
                  <Link role="radio" tabIndex={-1} aria-checked="false" className="star-4" to="/product">4 of 5 stars</Link>
                  <Link role="radio" tabIndex={-1} aria-checked="false" className="star-5" to="/product">5 of 5 stars</Link>
                </span>
              </p>
              <select name="rating" id="rating" required style={{display:'none'}}>
                <option value="">Rate&#x2026;</option>
                <option value="5">Perfect</option>
                <option value="4">Good</option>
                <option value="3">Average</option>
                <option value="2">Not that bad</option>
                <option value="1">Very poor</option>
              </select>
            </div>
            <p className="comment-form-comment"><label htmlFor="comment">Your review&nbsp;<span className="required">*</span></label><textarea id="comment" name="comment" cols={45} rows={8} required></textarea></p>
            <p className="comment-form-author"><label htmlFor="author">Name&nbsp;<span className="required">*</span></label><input id="author" name="author" type="text" autoComplete="name" defaultValue="" size={30} required /></p>
            <p className="comment-form-email"><label htmlFor="email">Email&nbsp;<span className="required">*</span></label><input id="email" name="email" type="email" autoComplete="email" defaultValue="" size={30} required /></p>
            <p className="comment-form-cookies-consent"><input id="wp-comment-cookies-consent" name="wp-comment-cookies-consent" type="checkbox" value="yes" /> <label htmlFor="wp-comment-cookies-consent">Save my name, email, and website in this browser for the next time I comment.</label></p>
            <p className="form-submit">
              <input name="submit" type="submit" id="submit" className="submit" value="Submit" />{' '}
              <input type="hidden" name="comment_post_ID" value="214" id="comment_post_ID" />
              <input type="hidden" name="comment_parent" id="comment_parent" value="0" />
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}
