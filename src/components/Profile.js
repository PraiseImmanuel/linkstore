import "../styles/Profile.css";

const Profile = () => {
    return (
        <div className="profile">
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
