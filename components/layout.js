import Head from 'next/head'
import Link from 'next/link'
import Footer from './footer'
import { global } from './styles'
import { normalize } from './normalize'
import { fontAwesome } from './font-awesome'

export default ({ children, title = 'Koen van Gilst', menu = 'home' }) => (
  <div>
    <style jsx global>
      {normalize}
    </style>
    <style jsx global>
      {fontAwesome}
    </style>
    <style jsx global>
      {global}
    </style>
    <Head>
      <meta charset="utf-8" />
      <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1" />
      <title>{title}</title>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link
        rel="shortcut icon"
        type="image/png"
        href="/static/img/favicon.ico"
      />
    </Head>

    <header>
      <nav>
        <div className="nav-wrapper">
          <span className="terminal">
            <Link href="/">
              <a>
                <i className="fa fa-terminal fa-2x" aria-hidden="true" />
              </a>
            </Link>
          </span>
          <span className="nav-links">
            <Link prefetch href="/">
              <a className={menu === 'home' ? 'active' : null}>Home</a>
            </Link>
            <Link prefetch href="/profile">
              <a className={menu === 'profile' ? 'active' : null}>Profile</a>
            </Link>
            <Link prefetch href="/blog">
              <a className={menu === 'blog' ? 'active' : null}>Blog</a>
            </Link>
          </span>
        </div>
      </nav>
    </header>

    <div className="content">{children}</div>

    <Footer />
  </div>
)
