import Aside from '../components/Aside'
import Header from '../components/Header'
import { Link } from 'react-router-dom'

function Datatable({productsData}) {
  return (
    <>
     <div className="wrapper">
  {/* Sidebar */}
  <Aside/>
  {/* End Sidebar */}
  <div className="main-panel">
    {/* header start  */}
    <Header/>
    {/* header end  */}
    <div className="container">
      <div className="page-inner">
        <div className="page-header">
          <h3 className="fw-bold mb-3">DataTables.Net</h3>
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
              <a href="#">Tables</a>
            </li>
            <li className="separator">
              <i className="icon-arrow-right" />
            </li>
            <li className="nav-item">
              <a href="#">Datatables</a>
            </li>
          </ul>
        </div>
        <div className="row">
          <div className="col-md-12">
            <div className="card">
              <div className="card-header">
                <div className="d-flex align-items-center">
                  <h4 className="card-title">Add Row</h4>
                  <Link to='/form' className="btn btn-primary btn-round ms-auto" >
                    Add Row
                  </Link>
                </div>
              </div>
              <div className="card-body">
                <div className="table-responsive">
                  <table id="add-row" className="display table table-striped table-hover table-responsive">
                    <thead>
                      <tr>
                        <th>Product Name</th>
                        <th>Price</th>
                        <th>Stock</th>
                        <th>image</th>
                        <th>Discription</th>
                        <th>Godown</th>
                        <th style={{width: '10%'}}>Action</th>
                      </tr>
                    </thead>
                    <tfoot>
                      <tr>
                        <th>Product Name</th>
                        <th>Price</th>
                        <th>Stock</th>
                        <th>image</th>
                        <th>Discription</th>
                        <th>Godown</th>
                        <th style={{width: '10%'}}>Action</th>
                      </tr>
                    </tfoot>
                    <tbody>
                      {
                        productsData.map((product)=>(
                          <tr key={product.id}>
                            <td>{product.product_name}</td>
                            <td>{product.price}</td>
                            <td>{product.stock}</td>
                            <td>
                              <img width={50} src={product.image.url || ''} alt={product.image.name} />
                            </td>
                            <td>{product.discription}</td>
                            <td>{product.godown.join(', ')}</td>
                            <td>
                              <div className="form-button-action">
                                <button type="button" data-bs-toggle="tooltip" title className="btn btn-link btn-primary btn-lg" data-original-title="Edit Task">
                                  <i className="fa fa-edit" />
                                </button>
                                <button type="button" data-bs-toggle="tooltip" title className="btn btn-link btn-danger" data-original-title="Remove">
                                  <i className="fa fa-times" />
                                </button>
                              </div>
                            </td>
                          </tr>
                        ))
                      }
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
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
              <a className="nav-link" href="#"> Help </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#"> Licenses </a>
            </li>
          </ul>
        </nav>
        <div className="copyright">
          2024, made with <i className="fa fa-heart heart text-danger" /> by
          <a href="http://www.themekita.com">ThemeKita</a>
        </div>
        <div>
          Distributed by
          <a target="_blank" href="https://themewagon.com/">ThemeWagon</a>.
        </div>
      </div>
    </footer>
  </div>
  
</div>
 
    </>
  )
}

export default Datatable
