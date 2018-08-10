import Layout from '../components/layout'
import Link from 'next/link'

export default () => (
  <Layout title="Blog | Koen van Gilst" menu="blog">
    <section className="creations">
      <div className="wrapper">
        <div className="project project--double">
          <h1>Blog articles</h1>
          <p>
            A selection of articles. More articles can be found on{' '}
            <a href="https://medium.com/@vnglst/latest">Medium</a>.
          </p>
        </div>
        <div className="project">
          <h1>API Testing with Jest</h1>
          <p>
            Jest is a great JavaScript testing framework by Facebook. It’s often
            used for testing React components, but it’s also a pretty good
            general purpose testing framework. Appeared in Hackernoon.
          </p>
          <span className="links">
            <a href="https://hackernoon.com/api-testing-with-jest-d1ab74005c0a#.8yd4cfvvg">
              Read it here
            </a>{' '}
            [<b>2017</b>]
          </span>
        </div>
        <div className="project">
          <h1>Generating PDF's with Node</h1>
          <p>
            A fun little Node tutorial I wrote on how to generate PDF's from a
            web form using Express and Node. You can easily deploy it with Now.
            Appeared in{' '}
            <a href="http://nodeweekly.com/issues/163">Node Weekly</a> on
            November 10th.
          </p>
          <span className="links">
            <Link prefetch href="/blog/node-pdf">
              <a>Read it here</a>
            </Link>{' '}
            [<b>2016</b>]
          </span>
        </div>
      </div>
    </section>
  </Layout>
)
