function App() {
  return (
    <>
      <div className="preloader-wrapper">
        <div className="preloader-inner">
          <div className="spinner-border text-red"></div>
        </div>
      </div>

      <section className="d-flex">
        <aside>
          <div className="sidenav position-sticky d-flex flex-column justify-content-between">
            <a className="navbar-brand logo" href="index.html">
              <img src="images/logo.png" alt="" />
            </a>

            <div className="navbar navbar-dark my-4 p-0 font-primary">
              <ul className="navbar-nav w-100">
                <li className="nav-item active">
                  <a className="nav-link text-white px-0 pt-0" href="index.html">
                    Home
                  </a>
                </li>
                <li className="nav-item ">
                  <a className="nav-link text-white px-0" href="about.html">
                    About
                  </a>
                </li>
                <li className="nav-item ">
                  <a className="nav-link text-white px-0" href="contact.html">
                    Contact
                  </a>
                </li>
                <li className="nav-item  accordion">
                  <div id="drop-menu" className="drop-menu collapse">
                    <a className="d-block " href="index-2.html">
                      Home 2
                    </a>
                    <a className="d-block " href="category.html">
                      Category
                    </a>
                    <a className="d-block " href="post-details.html">
                      Post Details
                    </a>
                    <a className="d-block " href="privacy.html">
                      Privacy &amp; Policy
                    </a>
                  </div>
                  <a
                    className="nav-link text-white"
                    href="#!"
                    role="button"
                    data-toggle="collapse"
                    data-target="#drop-menu"
                    aria-expanded="false"
                    aria-controls="drop-menu"
                  >
                    Pages
                  </a>
                </li>
                <li className="nav-item mt-3">
                  <select
                    className="custom-select bg-transparent rounded-0 text-white shadow-none"
                    id="pick-lang"
                  >
                    <option value="en">
                      English
                    </option>
                    <option value="fr">French</option>
                  </select>
                </li>
              </ul>
            </div>

            <ul className="list-inline nml-2">
              <li className="list-inline-item">
                <a href="#!" className="text-white text-red-onHover pr-2">
                  <span className="fab fa-twitter"></span>
                </a>
              </li>
              <li className="list-inline-item">
                <a href="#!" className="text-white text-red-onHover p-2">
                  <span className="fab fa-facebook-f"></span>
                </a>
              </li>
              <li className="list-inline-item">
                <a href="#!" className="text-white text-red-onHover p-2">
                  <span className="fab fa-instagram"></span>
                </a>
              </li>
              <li className="list-inline-item">
                <a href="#!" className="text-white text-red-onHover p-2">
                  <span className="fab fa-linkedin-in"></span>
                </a>
              </li>
            </ul>
          </div>
        </aside>

        <div className="main-content">
          <header className="mobile-nav pt-4">
            <div className="container">
              <div className="row align-items-center">
                <div className="col-6">
                  <a href="index.html">
                    <img src="images/logo.png" alt="" />
                  </a>
                </div>
                <div className="col-6 text-right">
                  <button className="nav-toggle bg-transparent border text-white">
                    <span className="fas fa-bars"></span>
                  </button>
                </div>
              </div>
            </div>
          </header>
          <div className="nav-toggle-overlay"></div>
          <div className="container pt-4 mt-5">
            <div className="row justify-content-between">
              <div className="col-lg-7">
                {/* Blog List Map here... */}
                <div className="card post-item bg-transparent border-0 mb-5">
                  <a href="post-details.html">
                    <img
                      className="card-img-top rounded-0"
                      src="images/post/post-lg/01.png"
                      alt=""
                    />
                  </a>
                  <div className="card-body px-0">
                    <h2 className="card-title">
                      <a
                        className="text-white opacity-75-onHover"
                        href="post-details.html"
                      >
                        Id reprehrenderit mollit in tempor naid incididunt
                        cupidatat consectetura
                      </a>
                    </h2>
                    <ul className="post-meta mt-3">
                      <li className="d-inline-block mr-3">
                        <span className="fas fa-clock text-primary"></span>
                        <a className="ml-1" href="#">
                          24 April, 2016
                        </a>
                      </li>
                      <li className="d-inline-block">
                        <span className="fas fa-list-alt text-primary"></span>
                        <a className="ml-1" href="#">
                          Photography
                        </a>
                      </li>
                    </ul>
                    <p className="card-text my-4">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Tincidunt leo mi, viverra urna. Arcu velit risus,
                      condimentum ut vulputate cursus porttitor turpis in. Diam
                      egestas nec massa, habitasse. Tincidt dui.
                    </p>
                    <a href="post-details.html" className="btn btn-primary">
                      Read More <img src="images/arrow-right.png" alt="" />
                    </a>
                  </div>
                </div>
                {/* Blog List Map here... */}
              </div>
              <div className="col-lg-4 col-md-5">
                <div className="widget text-center">
                  <img
                    className="author-thumb-sm rounded-circle d-block mx-auto"
                    src="images/author-sm.png"
                    alt=""
                  />
                  <h2 className="widget-title text-white d-inline-block mt-4">
                    About Me
                  </h2>
                  <p className="mt-4">
                    Lorem ipsum dolor sit coectetur adiing elit. Tincidunfywjt
                    leo mi, viearra urna. Arcu ve isus, condimentum ut vulpate
                    cursus por turpis.
                  </p>
                  <ul className="list-inline mt-3">
                    <li className="list-inline-item">
                      <a href="#!" className="text-white text-primary-onHover p-2">
                        <span className="fab fa-twitter"></span>
                      </a>
                    </li>
                    <li className="list-inline-item">
                      <a href="#!" className="text-white text-primary-onHover p-2">
                        <span className="fab fa-facebook-f"></span>
                      </a>
                    </li>
                    <li className="list-inline-item">
                      <a href="#!" className="text-white text-primary-onHover p-2">
                        <span className="fab fa-instagram"></span>
                      </a>
                    </li>
                    <li className="list-inline-item">
                      <a href="#!" className="text-white text-primary-onHover p-2">
                        <span className="fab fa-linkedin-in"></span>
                      </a>
                    </li>
                  </ul>
                </div>

                <div className="widget bg-dark p-4 text-center">
                  <h2 className="widget-title text-white d-inline-block mt-4">
                    Subscribe Blog
                  </h2>
                  <p className="mt-4">
                    Lorem ipsum dolor sit coectetur elit. Tincidu nfywjt leo mi,
                    urna. Arcu ve isus, condimentum ut vulpate cursus por.
                  </p>
                  <form action="#">
                    <div className="form-group">
                      <input
                        type="email"
                        className="form-control bg-transparent rounded-0 my-4"
                        placeholder="Your Email Address"
                      />
                      <button className="btn btn-primary">
                        Subscribe Now{" "}
                        <img src="images/arrow-right.png" alt="" />
                      </button>
                    </div>
                  </form>
                </div>

                <div className="widget">
                  <div className="mb-5 text-center">
                    <h2 className="widget-title text-white d-inline-block">
                      Featured Posts
                    </h2>
                  </div>
                  <div className="card post-item bg-transparent border-0 mb-5">
                    <a href="post-details.html">
                      <img
                        className="card-img-top rounded-0"
                        src="images/post/post-sm/01.png"
                        alt=""
                      />
                    </a>
                    <div className="card-body px-0">
                      <h2 className="card-title">
                        <a
                          className="text-white opacity-75-onHover"
                          href="post-details.html"
                        >
                          Excepteur ado Do minimal duis laborum Fugiat ea
                        </a>
                      </h2>
                      <ul className="post-meta mt-3 mb-4">
                        <li className="d-inline-block mr-3">
                          <span className="fas fa-clock text-primary"></span>
                          <a className="ml-1" href="#">
                            24 April, 2016
                          </a>
                        </li>
                        <li className="d-inline-block">
                          <span className="fas fa-list-alt text-primary"></span>
                          <a className="ml-1" href="#">
                            Photography
                          </a>
                        </li>
                      </ul>
                      <a href="post-details.html" className="btn btn-primary">
                        Read More <img src="images/arrow-right.png" alt="" />
                      </a>
                    </div>
                  </div>

                  <div className="card post-item bg-transparent border-0 mb-5">
                    <a href="post-details.html">
                      <img
                        className="card-img-top rounded-0"
                        src="images/post/post-sm/02.png"
                        alt=""
                      />
                    </a>
                    <div className="card-body px-0">
                      <h2 className="card-title">
                        <a
                          className="text-white opacity-75-onHover"
                          href="post-details.html"
                        >
                          Excepteur ado Do minimal duis laborum Fugiat ea
                        </a>
                      </h2>
                      <ul className="post-meta mt-3 mb-4">
                        <li className="d-inline-block mr-3">
                          <span className="fas fa-clock text-primary"></span>
                          <a className="ml-1" href="#">
                            24 April, 2016
                          </a>
                        </li>
                        <li className="d-inline-block">
                          <span className="fas fa-list-alt text-primary"></span>
                          <a className="ml-1" href="#">
                            Photography
                          </a>
                        </li>
                      </ul>
                      <a href="post-details.html" className="btn btn-primary">
                        Read More <img src="images/arrow-right.png" alt="" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <footer className="bg-dark">
            <div className="container">
              <div className="row text-center">
                <div className="col-lg-3 col-sm-6 mb-5">
                  <h5 className="font-primary text-white mb-4">Inspirations</h5>
                  <ul className="list-unstyled">
                    <li>
                      <a href="#!">Privacy State</a>
                    </li>
                    <li>
                      <a href="#!">Privacy</a>
                    </li>
                    <li>
                      <a href="#!">State</a>
                    </li>
                    <li>
                      <a href="#!">Privacy</a>
                    </li>
                  </ul>
                </div>
                <div className="col-lg-3 col-sm-6 mb-5">
                  <h5 className="font-primary text-white mb-4">Templates</h5>
                  <ul className="list-unstyled">
                    <li>
                      <a href="#!">Privacy State</a>
                    </li>
                    <li>
                      <a href="#!">Privacy</a>
                    </li>
                    <li>
                      <a href="#!">State</a>
                    </li>
                    <li>
                      <a href="#!">Privacy</a>
                    </li>
                  </ul>
                </div>
                <div className="col-lg-3 col-sm-6 mb-5">
                  <h5 className="font-primary text-white mb-4">Resource</h5>
                  <ul className="list-unstyled">
                    <li>
                      <a href="#!">Privacy State</a>
                    </li>
                    <li>
                      <a href="#!">Privacy</a>
                    </li>
                    <li>
                      <a href="#!">State</a>
                    </li>
                    <li>
                      <a href="#!">Privacy</a>
                    </li>
                  </ul>
                </div>
                <div className="col-lg-3 col-sm-6 mb-5">
                  <h5 className="font-primary text-white mb-4">Company</h5>
                  <ul className="list-unstyled">
                    <li>
                      <a href="#!">Privacy State</a>
                    </li>
                    <li>
                      <a href="#!">Privacy</a>
                    </li>
                    <li>
                      <a href="#!">State</a>
                    </li>
                    <li>
                      <a href="#!">Privacy</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </footer>
        </div>
      </section>
    </>
  );
}

export default App;
