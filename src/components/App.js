import "../styles/App.css";
import AnchorTags from "./AnchorTags";
import Footer from "./Footer";
import Profile from "./Profile";
import SocialLinks from "./SocialLinks";

const App = () => {
    return (
        <div className="app">
            <Profile />
            <AnchorTags />
            <SocialLinks />
            <Footer />
        </div>
    );
};

export default App;
