import { Link } from '@inertiajs/inertia-react'
import React from 'react'

export default function Header() {
    return (
        <header>
            <div className="content">
            <nav>
                <p className="brand">Up<strong>Celulares</strong></p>
                {/* <ul>
                <li><a href="#catalog">Catalog</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#feature">Features</a></li>
                <button>Login</button>
                </ul> */}
            </nav>
                <div className="header-block">
                    <div className="text">
                    <h2>Perfeito para você</h2>
                    {/* <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia,
                        asperiores?
                    </p> */}
                    </div>
                    <img src="/img/home/cel-header.png" alt="Car" />
                </div>
            </div>
      </header>
    )
}
