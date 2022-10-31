import "../styles/App.css";
import AnchorTags from "./AnchorTags";
import Profile from "./Profile";

const App = () => {
    return (
        <div className="app">
            <Profile />
            <AnchorTags />
        </div>
    );
};

export default App;
