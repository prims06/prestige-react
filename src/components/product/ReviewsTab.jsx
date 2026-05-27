import ReviewItem from './ReviewItem';
import ReviewForm from './ReviewForm';

export default function ReviewsTab() {
  return (
    <div className="woocommerce-Tabs-panel woocommerce-Tabs-panel--reviews panel entry-content wc-tab" id="tab-reviews" role="tabpanel" aria-labelledby="tab-title-reviews" style={{display:'none'}}>
      <div id="reviews" className="woocommerce-Reviews">
        <div id="comments">
          <h2 className="woocommerce-Reviews-title">2 reviews for <span>Logical impact</span></h2>
          <ol className="commentlist">
            <li className="comment byuser comment-author-merkulove bypostauthor even thread-even depth-1" id="li-comment-3">
              <ReviewItem commentId={3} date="2022-05-25T15:20:57+00:00" dateLabel="May 25, 2022" text="Suspendisse sed nisi lacus sed viverra tellus.">
                <ul className="children">
                  <li className="comment byuser comment-author-merkulove bypostauthor odd alt depth-2" id="li-comment-4">
                    <ReviewItem commentId={4} date="2022-05-25T15:33:04+00:00" dateLabel="May 25, 2022" text="Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur." />
                  </li>
                </ul>
              </ReviewItem>
            </li>
            <li className="comment byuser comment-author-merkulove bypostauthor even thread-odd thread-alt depth-1" id="li-comment-5">
              <ReviewItem commentId={5} date="2022-05-25T15:35:59+00:00" dateLabel="May 25, 2022" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." />
            </li>
          </ol>
        </div>
        <ReviewForm />
        <div className="clear"></div>
      </div>
    </div>
  );
}
