export default function About() {
    return (
        <article className="about-us">
            <section className="hero-text">
                <h1>Little Lemon</h1>
                <h2>Yokohama</h2>
                <p className="about-subtext">"Little Lemon," is a fine dining establishment specializing in Japanese cuisine. Located in the heart of a cosmopolitan city, it offers an immersive experience in Japanese culinary traditions, blending authentic flavors with a modern twist.</p>
            </section>

            <section className="double-image">
                <img className="about-1" src={require('../../../assets/food/food3.jpeg')} alt="Little Lemon restaurant cuisine 1"></img>
                <img className="about-2" src={require('../../../assets/food/food2.jpeg')} alt="Little Lemon restaurant cuisine 2"></img>
            </section>
    </article>
    );
}