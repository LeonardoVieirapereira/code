* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Poppins', sans-serif;
}

body {
    background-color: #f4f7f6;
    color: #333;
    line-height: 1.6;
}

.navbar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1.5rem 5%;
    background: #0f382c;
    color: white;
    position: sticky;
    top: 0;
    z-index: 1000;
}

.navbar .logo {
    font-size: 1.5rem;
    font-weight: 700;
}

.navbar .logo span {
    color: #2ecc71;
}

.navbar nav a {
    color: white;
    text-decoration: none;
    margin-left: 1.5rem;
    transition: color 0.3s;
}

.navbar nav a:hover {
    color: #2ecc71;
}

.hero {
    height: 70vh;
    background: linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url('https://images.unsplash.com/photo-1544644181-1484b3fdfc62?auto=format&fit=crop&w=1500&q=80') center/cover;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    color: white;
    padding: 0 1rem;
}

.hero h1 {
    font-size: 2.5rem;
    margin-bottom: 1rem;
}

.btn {
    display: inline-block;
    padding: 0.8rem 1.8rem;
    background: #2ecc71;
    color: white;
    text-decoration: none;
    border-radius: 25px;
    margin-top: 1rem;
    transition: transform 0.3s, background 0.3s;
}

.btn:hover {
    background: #27ae60;
    transform: translateY(-3px);
}

.cards-container, .interactive-section, .media-section {
    padding: 4rem 5%;
    text-align: center;
}

.grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 2rem;
    margin-top: 2rem;
}

.card {
    background: white;
    border-radius: 12px;
    overflow: hidden;
    box-shadow: 0 4px 15px rgba(0,0,0,0.1);
    transition: transform 0.3s;
}

.card:hover {
    transform: translateY(-8px);
}

.card img {
    width: 100%;
    height: 200px;
    object-fit: cover;
}

.card-info {
    padding: 1.5rem;
}

.map-container {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    gap: 2rem;
    margin-top: 2rem;
}

.mapa-svg {
    width: 100%;
    max-width: 400px;
    height: auto;
}

.regiao {
    fill: #2ecc71;
    stroke: #ffffff;
    stroke-width: 2;
    cursor: pointer;
    transition: fill 0.3s, transform 0.2s;
}

.regiao:hover {
    fill: #0f382c;
}

.info-box {
    background: white;
    padding: 2rem;
    border-radius: 10px;
    box-shadow: 0 4px 10px rgba(0,0,0,0.08);
    max-width: 350px;
    text-align: left;
}

.video-container {
    margin-top: 2rem;
    position: relative;
    padding-bottom: 56.25%;
    height: 0;
    overflow: hidden;
    max-width: 800px;
    margin-left: auto;
    margin-right: auto;
    border-radius: 12px;
}

.video-container iframe {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
}

footer {
    background: #0f382c;
    color: white;
    text-align: center;
    padding: 1.5rem;
}
