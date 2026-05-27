export default function MdpButton({ id, text, extraCls = '' }) {
  return (
    <div className={`mdp-buttoner-container mdp-buttoner-container-${id}`}>
      <a id="" href="/home-2#" className={`mdp-buttoner-link elementor-animation-push${extraCls ? ' ' + extraCls : ''}`} target={'" _blank"'} rel={'"nofollow"'}>
        <span>
          <span className="mdp-buttoner-text">{text}</span>
          <span className="mdp-buttoner-icon ">
            <i aria-hidden="true" className="fas fa-arrow-right"></i>
          </span>
        </span>
      </a>
    </div>
  );
}
