import { useState } from 'react'
function Footer() {

  return (
    <footer className="bg-dark">
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-6 col-lg-4 text-white" >
            <br />
            <h4 className="py-2">
              SNOW WHITE
            </h4>

            <br />

            <p>Unika smycken i svensk. Get ready to make a good outfit great with our edit of women’s jewellery.</p>

            

            <h4>HELP & INFORMATION</h4>
            <br />
            <p>
              <a className="text-white">Rules regulations</a>
            </p>
          </div>



          <div className="col-12 col-md-6 col-lg-4 text-white" >
            <br />
            <h4 className="py-2">
            MORE FROM SNOW WHITE
            </h4>
            <br />
            <p><i className="fas fa-home mr-3"></i> Linneplatsen 10
              412 11 Göteborg</p>
            <p><i className="fas fa-envelope mr-3"></i> info@snowwhite.se</p>
            <p><i className="fas fa-phone mr-3"></i> + 07 054 44 01</p>
            <p><i className="fas fa-print mr-3"></i> + 07 355 67 57</p>
          </div>

          <div className="col-12 col-md-6 col-lg-4 text-white" >
            <br />
            <h4 className="py-2" >
              FOLLOW US
            </h4>
            <br />
            <a
              className="btn btn-primary btn-floating m-1"
              href="#!"
              role="button"
            ><i className="fab fa-facebook-f"></i
            ></a>
            <a
              className="btn btn-primary btn-floating m-1"
              href="#!"
              role="button"
            ><i className="fab fa-twitter"></i
            ></a>
            <a
              className="btn btn-primary btn-floating m-1"
              href="#!"
              role="button"
            ><i className="fab fa-google"></i
            ></a>

            <a
              className="btn btn-primary btn-floating m-1"
              href="#!"
              role="button"
            ><i className="fab fa-instagram"></i
            ></a>

            <a
              className="btn btn-primary btn-floating m-1"
              href="#!"
              role="button"
            ><i className="fab fa-linkedin-in"></i
            ></a>
            <a
              className="btn btn-primary btn-floating m-1"
              href="#!"
              role="button"
            ><i className="fab fa-github"></i
            ></a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
