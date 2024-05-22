import React from 'react'
import Guest from '../Layouts/Guest'
import './styles.css';

export default function Home() {
  return (
    <>
            <section className="catalog" id="catalog">
                    <div className="content">
                        <div className="title-wrapper-catalog">
                        <p>Find what you want</p>
                        <h3>Catalog</h3>
                        </div>
                        <div className="filter-card">
                        <input
                            type="text"
                            className="search-input"
                            placeholder="Choose your favorite model"
                        />
                        <button className="search-button">Search</button>
                        </div>
                        <div className="card-wrapper">
                        <div className="card-item">
                            <img src="/img/home/cel-card.png" alt="Car" />
                            <div className="card-content">
                            <h3>Audi Supra TT</h3>
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                Repellendus.
                            </p>
                            <button type="button">I want this!</button>
                            </div>
                        </div>
                        <div className="card-item">
                            <img src="/img/home/cel-card.png" alt="Car" />
                            <div className="card-content">
                            <h3>Audi Supra TT</h3>
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                Repellendus.
                            </p>
                            <button type="button">I want this!</button>
                            </div>
                        </div>
                        <div className="card-item">
                            <img src="/img/home/cel-card.png" alt="Car" />
                            <div className="card-content">
                            <h3>Audi Supra TT</h3>
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                Repellendus.
                            </p>
                            <button type="button">I want this!</button>
                            </div>
                        </div>
                        <div className="card-item">
                            <img src="/img/home/cel-card.png" alt="Car" />
                            <div className="card-content">
                            <h3>Audi Supra TT</h3>
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                Repellendus.
                            </p>
                            <button type="button">I want this!</button>
                            </div>
                        </div>
                        <div className="card-item">
                            <img src="/img/home/cel-card.png" alt="Car" />
                            <div className="card-content">
                            <h3>Audi Supra TT</h3>
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                Repellendus.
                            </p>
                            <button type="button">I want this!</button>
                            </div>
                        </div>
                        <div className="card-item">
                            <img src="/img/home/cel-card.png" alt="Car" />
                            <div className="card-content">
                            <h3>Audi Supra TT</h3>
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                Repellendus.
                            </p>
                            <button type="button">I want this!</button>
                            </div>
                        </div>
                        <div className="card-item">
                            <img src="/img/home/cel-card.png" alt="Car" />
                            <div className="card-content">
                            <h3>Audi Supra TT</h3>
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                Repellendus.
                            </p>
                            <button type="button">I want this!</button>
                            </div>
                        </div>
                        <div className="card-item">
                            <img src="/img/home/cel-card.png" alt="Car" />
                            <div className="card-content">
                            <h3>Audi Supra TT</h3>
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                Repellendus.
                            </p>
                            <button type="button">I want this!</button>
                            </div>
                        </div>
                        <div className="card-item">
                            <img src="/img/home/cel-card.png" alt="Car" />
                            <div className="card-content">
                            <h3>Audi Supra TT</h3>
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                Repellendus.
                            </p>
                            <button type="button">I want this!</button>
                            </div>
                        </div>
                        </div>
                    </div>
            </section>
            <section class="about" id="about">
                <div class="content">
                    <div class="title-wrapper-about">
                    </div>
                    <div class="about-content">
                    <div class="left">
                        <img src="images/about.png" alt="About" />
                    </div>
                    <div class="right">
                        <h3>Join technology and mobility</h3>
                        <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Repudiandae ut inventore magni repellendus ab ad itaque facere. A
                        tenetur quam, nobis tempore illum laborum ipsa fuga, itaque
                        possimus repellat ad perspiciatis, velit reiciendis eos facilis
                        sapiente blanditiis quas officia hic beatae quibusdam! Quod
                        eligendi porro possimus voluptatum ad ipsum sapiente soluta,
                        maiores nobis tenetur adipisci officiis nisi illum quae natus
                        nostrum tempora accusantium blanditiis? Rem nesciunt illum
                        dolorum, perferendis quos consequatur suscipit cumque fugiat alias
                        sint repellat qui adipisci error est distinctio doloribus labore
                        sunt modi eos odio quibusdam dicta. Dignissimos voluptate illum
                        possimus quo. Ducimus repellat doloribus quisquam quidem?
                        </p>
                    </div>
                    </div>
                </div>
            </section>
    </>
  )
}

Home.layout = (page) => <Guest children={page} title={"Home"}/>
