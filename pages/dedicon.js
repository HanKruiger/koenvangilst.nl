import Layout from '../components/layout'

export default () =>
  <Layout>
    <section className='creations'>
      <div className='wrapper'>
        <div className='project project--double'>
          <h1>
            Project Online Player <span>[OLP]</span>
          </h1>
          <p>
            Ontwikkeling van een online audiospeler in opdracht van Dedicon voor
            Stichting Passend Lezen.
          </p>
          <p>
            Met de OLP krijgt de gebruiker op verschillende manieren
            ondersteuning bij het lezen. De ondersteuning bestaat o.a. uit een
            markering van de zin/woorden van de door een menselijke stem
            voorgelezen tekst. Daarnaast kunnen voorleessnelheid, lettergrootte,
            kleuren etc. worden aangepast.
          </p>
          <p>
            De OLP is geschikt gemaakt voor gebruik met een schermlezer en kan
            met een brailleleesregel of andere screenreader worden gebruikt.
          </p>
        </div>

        <div className='project'>
          <h1>Voorbeeld audioboek</h1>
          <p>
            Hierbij opent de OLP het boek "Harry Potter en het vervloekte kind"
            in de audiomodus.
          </p>
          <br />
          <a
            target='_blank'
            href='https://demo.vangilst.eu/v2.2.0-12/?bookUrl=https://demo.vangilst.eu/boeken/harry-potter/ncc.html'
          >
            Harry Potter en het vervloekte kind
          </a>
        </div>

        <div className='project'>
          <h1>Voorbeeld combiboek</h1>
          <p>
            Hierbij opent de OLP het boek "Geel Gras" in de combimodus, waarbij
            de tekst en het woord wordt gemarkeerd.
          </p>
          <br />
          <a
            target='_blank'
            href='https://demo.vangilst.eu/v2.2.0-12/?bookUrl=https://demo.vangilst.eu/boeken/geel-gras/ncc.html'
          >
            Geel Gras
          </a>
        </div>
      </div>
    </section>
  </Layout>
