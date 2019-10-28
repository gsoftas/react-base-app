import React from 'react'
const Navigation = (props) => {
  return (

  <nav className="navbar is-primary">
  <div className="navbar-brand">
    <div className="navbar-burger burger" data-target="navbarExampleTransparentExample">
      <span></span>
      <span></span>
      <span></span>
    </div>
  </div>

  <div id="navbarExampleTransparentExample" className="navbar-menu">
    <div className="navbar-start">
      <a className="navbar-item" href="https://aws.amazon.com/">
        AWS Home
      </a>
      <div className="navbar-item has-dropdown is-hoverable">
        <a className="navbar-link" href="https://docs.aws.amazon.com/index.html">
          Documentation
        </a>
        <div className="navbar-dropdown is-boxed">
          <a className="navbar-item" href="https://docs.aws.amazon.com/ec2/">
            EC2
          </a>
          <a className="navbar-item" href="https://docs.aws.amazon.com/s3/">
            S3
          </a>
        </div>
      </div>
    </div>

    <div className="navbar-end">
      <div className="navbar-item">

      </div>
    </div>
  </div>
</nav>
  )
}

export default Navigation