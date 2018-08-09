import React from 'react'
import Helmet from 'react-helmet'
import Link from 'gatsby-link'

import './style.scss'

const Success = (props) => (
    <div>
        <Helmet>
            <title>Kontakt</title>
            <meta name="description" content="Success Page" />
        </Helmet>

        <div id="texkt" className="alt pt-7">
            <section id="one">
                <div className="text-center">
                        <h1>Uspesno</h1>
                    <p>Hvala na kontaktu!</p>
                    <Link to="/kontakt/" className="tekst">
                    ⟵ Nazad
            </Link>
                </div>
            </section>
        </div>

    </div>
)

export default Success