import React, { Fragment } from 'react'
// import Nav from 'react-bootstrap/Nav'

class Homepage extends React.Component {
  render () {
    return (
      <Fragment>
        <section className="homepage-section">
          <div className="homepage-container">
            <div className="homepage-items">
              <p className="homepage-items_header">LinePass</p>
              <p className="homepage-items_tagline">Never Wait In Line Again</p>
              <div className="homepage-items_links">
                <a className="homepage-items_links-signin" href='#sign-in'> Sign In</a>
                <a className="homepage-items_links-signup" href='#sign-up'> Sign Up</a>
              </div>
            </div>
          </div>
        </section>
      </Fragment>
    )
  }
}

export default Homepage
