import { Link } from '@inertiajs/inertia-react'
import React from 'react'

export default function Footer() {
    return (
        <footer>
            <div className="main">
                <div className="content footer-links">
                    <div className="footer-company">
                    <h4>Company</h4>
                    <h6>About</h6>
                    <h6>Contact</h6>
                    </div>
                    <div className="footer-rental">
                    <h4>Rental</h4>
                    <h6>Self-Drive</h6>
                    <h6>Chauffer-Driven</h6>
                    <h6>Help</h6>
                    </div>
                    <div className="footer-social">
                    <h4>Stay connected</h4>
                    <div className="social-icons">
                        <img src="images/instagram.png" alt="Instagram" />
                        <img src="images/facebook.png" alt="Facebook" />
                    </div>
                    </div>
                    <div className="footer-contact">
                    <h4>Contact US</h4>
                    <h6>+55 31 988776655</h6>
                    <h6>contato@devsuperior.com.br</h6>
                    <h6>Nome da Rua, belo horizonte MG</h6>
                    </div>
                </div>
            </div>
            <div className="last">DevSuperior 2021 - Use like you want</div>
      </footer>
    )
}
