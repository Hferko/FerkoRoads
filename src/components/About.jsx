import aboutImg from '../images/about.jpeg';
const About = () => {
    return (
        <section className="section" id="about">
            <div className="section-title">
                <h2>R<span>ólunk</span></h2>
            </div>

            <div className="section-center about-center">
                <div className="about-img">
                    <img
                        src={aboutImg}
                        className="about-photo"
                        alt="awesome beach"
                    />
                </div>
                <article className="about-info">
                    <h3>fedezze fel a lehetőséget</h3>
                    <p>
                        Egyediségével és újító képességeivel a FerkoRoads a turisztikai élet meghatározó szereplője. A szokványos utazási irodákhoz képest a lehetséges utazási szolgáltatások teljes körét vállalja fel, azaz kivételesen komplex szolgáltatást képes kínálni mind egyéni, mind csoportos partnereinek. A cég utasait különleges hangulatú környezetben, fiatal, dinamikus és szakavatott munkatársak várják.
                    </p>
                    <p>
                        Valljuk, hogy az emberi kapcsolatokat egyetlen weboldal sem helyettesíti, ugyanakkor kiegészítheti, dinamikusabbá teheti.
                        Ennek jegyében javasoljuk, hogy tekintsék meg honlapunkon utasaink által készített képeket, beszámolókat és aktuális árainkat.
                    </p>

                    <a href="#" className="btn">Tudj meg többet</a>
                </article>
            </div>
        </section>
    )
}
export default About;