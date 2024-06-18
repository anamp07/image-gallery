import React from 'react'

const Footer = () => {
  return (
    <nav class="navbar bg-body-tertiary">
        <div class="container-fluid justify-content-center">
            <span class="navbar-brand mb-0"> {new Date().getFullYear()} </span>
        </div>
    </nav>
  )
}

export default Footer