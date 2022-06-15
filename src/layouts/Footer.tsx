import { useState } from 'react'
import TwitterIcon from '@mui/icons-material/Twitter'
import FacebookIcon from '@mui/icons-material/Facebook'
import InstagramIcon from '@mui/icons-material/Instagram'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import GitHubIcon from '@mui/icons-material/GitHub';


function Footer() {

  return (
    <footer className="bg-dark">
      <div className="container">
        <div className="row">

          <div className="col-12 col-md-6 col-lg-3 text-white" >
            <br />
            <h4 className="py-2">
              SNOW WHITE
            </h4>

            <br />

            <p>Unika smycken i svensk. Get ready to make a good outfit great with our edit of women’s jewellery.</p>
</div>
            
            <div className="col-12 col-md-6 col-lg-3 text-white" >
            <br />
            <h4 className="py-2">
              INFORMATION
              </h4>
            <br />
            <p>
              <a className="text-white">Rules regulations</a>
            </p>
          </div>



          <div className="col-12 col-md-6 col-lg-3 text-white" >
            <br />
            <h4 className="py-2">
            MORE FROM US
            </h4>
            <br />
            <p><i className="fas fa-home mr-3"></i> Linneplatsen 10 412 11 Gothenburg</p>
            <p><i className="fas fa-envelope mr-3"></i> info@snowwhite.se</p>
            <p><i className="fas fa-phone mr-3"></i> + 07 054 44 01</p>
            <p><i className="fas fa-print mr-3"></i> + 07 355 67 57</p>
          </div>

          <div className="col-12 col-md-6 col-lg-3 text-white" >
            <br />
            <h4 className="py-2" >
              FOLLOW US
            </h4>
            <br />


<FacebookIcon/>           
            
<TwitterIcon/>
          
<InstagramIcon/>
    
<LinkedInIcon/>
            
<GitHubIcon/>
         

          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer