import "../styles/SocialLinks.css";

const SocialLinks = () => {
    return (
        <div className="social-links">
            <a href="www.p.com" className="social-link">
                <img src="./images/slack.png" alt="" />
            </a>
            <a href="https://github.com/PraiseImmanuel" className="social-link">
                <img src="./images/git.png" alt="" />
            </a>
        </div>
    );
};

export default SocialLinks;
