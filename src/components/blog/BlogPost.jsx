import { Link } from 'react-router-dom';

export default function BlogPost({ post, isFirst }) {
  return (
    <article className={`elementor-post elementor-grid-item post-${post.postId} post type-post status-publish format-standard has-post-thumbnail hentry ${post.cats} ${post.tags}`} role="listitem">
      <Link className="elementor-post__thumbnail__link" to="/blog" tabIndex={-1}>
        <div className="elementor-post__thumbnail">
          <img
            {...(isFirst ? { fetchPriority: 'high' } : { loading: 'lazy' })}
            width={post.imgW} height={post.imgH}
            src={post.img}
            className={`attachment-1536x1536 size-1536x1536 wp-image-${post.wpImg}`}
            alt=""
          />
        </div>
      </Link>
      <div className="elementor-post__text">
        <h3 className="elementor-post__title">
          <Link to="/blog">{post.title}</Link>
        </h3>
        <div className="elementor-post__meta-data">
          <span className="elementor-post-author">{post.author}</span>
          <span className="elementor-post-date">{post.date}</span>
          <span className="elementor-post-avatar">No Comments</span>
        </div>
        <div className="elementor-post__excerpt">
          <p>{post.excerpt}</p>
        </div>
      </div>
    </article>
  );
}
