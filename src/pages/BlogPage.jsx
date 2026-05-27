import BlogHeader from '../components/blog/BlogHeader';
import BlogMain from '../components/blog/BlogMain';

export default function BlogPage() {
  return (
    <div data-elementor-type="archive" data-elementor-id="1024"
         className="elementor elementor-1024 elementor-location-archive"
         data-elementor-post-type="elementor_library">
      <BlogHeader />
      <BlogMain />
    </div>
  );
}
