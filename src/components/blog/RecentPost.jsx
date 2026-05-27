import { Link } from 'react-router-dom';

export default function RecentPost({ post }) {
  return (
    <article className={`elementor-post elementor-grid-item post-${post.postId} post type-post status-publish format-standard has-post-thumbnail hentry ${post.cats} ${post.tags}`} role="listitem">
      <Link className="elementor-post__thumbnail__link" to="/blog" tabIndex={-1}>
        <div className={`elementor-post__thumbnail${post.fitHeight ? ' elementor-fit-height' : ''}`}>
          <img loading="lazy" width={post.recentW} height={post.recentH}
               src={post.recentImg}
               className={`attachment-medium_large size-medium_large wp-image-${post.wpImg}`}
               alt="" />
        </div>
      </Link>
      <div className="elementor-post__text">
        <h6 className="elementor-post__title">
          <Link to="/blog">{post.title}</Link>
        </h6>
        <div className="elementor-post__meta-data">
          <span className="elementor-post-date">{post.date}</span>
          <span className="elementor-post-avatar">No Comments</span>
        </div>
      </div>
    </article>
  );
}
