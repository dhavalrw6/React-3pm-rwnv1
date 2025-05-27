import React from "react";
import Aside from "../components/Aside";
import Header from "../components/Header";

function Form({handleChange,product,godown,handleSubmit}) {

  return (
    <>
      <div className="wrapper">
        {/* Sidebar */}
        <div className="sidebar" data-background-color="dark">
          <div className="sidebar-logo">
            {/* Logo Header */}
            <div className="logo-header" data-background-color="dark">
              <a href="../index.html" className="logo">
                <img
                  src="../assets/img/kaiadmin/logo_light.svg"
                  alt="navbar brand"
                  className="navbar-brand"
                  height={20}
                />
              </a>
              <div className="nav-toggle">
                <button className="btn btn-toggle toggle-sidebar">
                  <i className="gg-menu-right" />
                </button>
                <button className="btn btn-toggle sidenav-toggler">
                  <i className="gg-menu-left" />
                </button>
              </div>
              <button className="topbar-toggler more">
                <i className="gg-more-vertical-alt" />
              </button>
            </div>
            {/* End Logo Header */}
          </div>
          <Aside />
        </div>
        {/* End Sidebar */}
        <div className="main-panel">
          {/* header start  */}
          <Header />
          {/* header end  */}
          <div className="container">
            <div className="page-inner">
              <div className="page-header">
                <h3 className="fw-bold mb-3">Forms</h3>
                <ul className="breadcrumbs mb-3">
                  <li className="nav-home">
                    <a href="#">
                      <i className="icon-home" />
                    </a>
                  </li>
                  <li className="separator">
                    <i className="icon-arrow-right" />
                  </li>
                  <li className="nav-item">
                    <a href="#">Forms</a>
                  </li>
                  <li className="separator">
                    <i className="icon-arrow-right" />
                  </li>
                  <li className="nav-item">
                    <a href="#">Basic Form</a>
                  </li>
                </ul>
              </div>
              <div className="row">
                <div className="col-md-12">
                  <form action="" method="post" onSubmit={handleSubmit}>
                    <div className="card">
                    <div className="card-header">
                      <div className="card-title">Form Elements</div>
                    </div>
                    <div className="card-body">
                      <div className="row">
                        <div className="col-md-6 col-lg-4">
                          <div className="form-group">
                            <label htmlFor="product_name">Product Name</label>
                            <input
                              onChange={handleChange}
                              value={product.product_name || ''}
                              type="text"
                              className="form-control"
                              id="product_name"
                              name="product_name"
                              placeholder="Enter product name"
                            />
                          </div>
                          <div className="form-group">
                            <label htmlFor="price">Product Price</label>
                            <input
                              onChange={handleChange}
                              value={product.price || ''}
                              type="text"
                              className="form-control"
                              id="price"
                              name="price"
                              placeholder="Enter product price"
                            />
                          </div>
                          <div className="form-group">
                            <label htmlFor="image">Image</label>
                            <input
                              onChange={handleChange}
                              type="file"
                              className="form-control"
                              id="image"
                              name="image"
                              placeholder="Enter product image"
                            />
                          </div>
                          <div className="form-group">
                            <label htmlFor="stock">Product Stock</label>
                            <input
                              onChange={handleChange}
                              value={product.stock || ''}
                              type="text"
                              className="form-control"
                              id="stock"
                              name="stock"
                              placeholder="Enter product stock"
                            />
                          </div>
                          <div className="form-group">
                            <label htmlFor="discription">Product Discription</label>
                            <textarea
                            onChange={handleChange}
                              type="text"
                              className="form-control"
                              id="discription"
                              name="discription"
                              placeholder="Enter product discription"
                            />
                          </div>
                          <div className="form-group">
                            <label htmlFor="godown" className="me-3">Godown</label>
                            <div className="form-check-inline">
                                <input
                                  onChange={handleChange}
                                  checked = {godown.includes('surat') ? true : false}
                                type="checkbox"
                                className="form-check-input me-2"
                                id="godown1"
                                name="godown"
                                value='surat'
                                />
                                <label htmlFor="godown1" className="form-check-label">Surat</label>
                            </div>
                            <div className="form-check-inline">
                                <input
                                  onChange={handleChange}
                                  checked = {godown.includes('bardoli') ? true : false}
                                type="checkbox"
                                className="form-check-input me-2"
                                id="godown2"
                                name="godown"
                                value='bardoli'
                                />
                                <label htmlFor="godown2" className="form-check-label">Bardoli</label>
                            </div>
                            <div className="form-check-inline">
                                <input
                                  onChange={handleChange}
                                  checked = {godown.includes('navsari') ? true : false}
                                type="checkbox"
                                className="form-check-input me-2"
                                id="godown3"
                                name="godown"
                                value='navsari'
                                />
                                <label htmlFor="godown3" className="form-check-label">Navsari</label>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="card-action">
                      <button className="btn btn-success">Submit</button>
                      <button className="btn btn-danger">Cancel</button>
                    </div>
                  </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
          <footer className="footer">
            <div className="container-fluid d-flex justify-content-between">
              <nav className="pull-left">
                <ul className="nav">
                  <li className="nav-item">
                    <a className="nav-link" href="http://www.themekita.com">
                      ThemeKita
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">
                      {" "}
                      Help{" "}
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">
                      {" "}
                      Licenses{" "}
                    </a>
                  </li>
                </ul>
              </nav>
              <div className="copyright">
                2024, made with <i className="fa fa-heart heart text-danger" />{" "}
                by
                <a href="http://www.themekita.com">ThemeKita</a>
              </div>
              <div>
                Distributed by
                <a target="_blank" href="https://themewagon.com/">
                  ThemeWagon
                </a>
                .
              </div>
            </div>
          </footer>
        </div>
      </div>
    </>
  );
}

export default Form;
