import "../styles/AnchorTags.css";

const renderAnchorTag = (href, id, linkText, linkSubText) => {
    return (
        <a
            href={href}
            id={id}
            className="anchor-tag"
            target="_blank"
            rel="noreferrer"
            title={linkSubText}
        >
            {linkText}
            {/* <span>{linkSubText}</span> */}
        </a>
    );
};

const AnchorTags = () => {
    return (
        <div className="anchortags">
            {renderAnchorTag(
                "https://training.zuri.team/",
                "btn_zuri",
                "Join Zuri Team Today",
                "Learn from the best, become the best"
            )}
            {renderAnchorTag(
                "http://books.zuri.team",
                "books",
                "Get Zuri Books",
                "Learn more about design and coding"
            )}

            {renderAnchorTag(
                "https://books.zuri.team/python-for-beginners?ref_id=praiseimmanuel",
                "book__python",
                "Python Book for Beginners",
                "Buy Book Now!"
            )}

            {renderAnchorTag(
                "https://background.zuri.team",
                "pitch",
                "Background Check for Coders",
                "Tired of frauds? Verify coder before employment now!"
            )}

            {renderAnchorTag(
                "https://books.zuri.team/design-rules",
                "book__design",
                "HNG Design Rules Book",
                "Get book for free, while the offer lasts."
            )}
        </div>
    );
};

export default AnchorTags;
