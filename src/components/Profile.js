import "../styles/Profile.css";

const Profile = () => {
    return (
        <div className="profile">
            <picture className="share-button">
                <source
                    srcSet="./images/share-button.png"
                    media="(min-width: 768px)"
                />
                <source srcSet="./images/share-button-mobile.png" />
                <img src="./images/share-button-mobile.png" alt="" />
            </picture>
            <div className="avatar">
                <div className="pressed">
                    <img src="./images/Icon.png" alt="" />
                </div>
                <img
                    src="./images/praise-headshot.png"
                    alt="avatar"
                    id="profile_img"
                />
            </div>
            <div className="username">
                <a id="twitter" href="https://twitter.com/_PraiseImmanuel">
                    _PraiseImmanuel
                </a>
                <a id="slack" href="https://twitter.com/_PraiseImmanuel">
                    praiseimmanuel
                </a>
            </div>
        </div>
    );
};

export default Profile;
