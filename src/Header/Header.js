import "./Header.css"

import React from 'react'

export default function Header() {
    return (
        <div>
            <meta charSet="UTF-8" />
            <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <title>Document</title>
            <style dangerouslySetInnerHTML={{ __html: "\n        .one{width: 300px;}\n        .two{text-align: center;\n              margin-left: 10%; \n               margin-right: 10%}\n        .three{margin-left: 35%;\n                margin-right: 30%;}\n         .four{text-align: center;}    \n         #one{margin-left: 45%;} \n         #two{margin-left: 8%;}  \n         #four{border: 1px solid gray;\n        text-align: center;}\n         #ten{margin-left: 10%;\n        margin-bottom: 5%;}\n        span{color: orange;}\n    " }} />
            <link rel="stylesheet" href="	https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css" />
            <div className="container">
                <div className="row">
                    <div className="col">
                        <img src="https://previews.123rf.com/images/vectorstockcompany/vectorstockcompany1808/vectorstockcompany180819725/108456826-orange-vector-icon-isolated-on-transparent-background-orange-logo-concept.jpg" alt="not found" width="50px" />TROPICO
                    </div>
                    <div className="col">home</div>
                    <div className="col">Fruits</div>
                    <div className="col">Services</div>
                    <div className="col"> Contect Us</div>
                    <div className="col"><img src="https://media.istockphoto.com/id/924437708/vector/magnifying-glass-icon.jpg?s=612x612&w=0&k=20&c=VXDoaQ6Ns61N2v6CsMXX-vYlG5oUY3ufoUncvUp1zNY=" alt="not found" width="50px" /></div>
                    <div className="col"> <button type="button" className="btn btn-primary">  Get A QUOTE</button></div>
                </div>

            </div>
            <div className="container">
                <div className="row">
                    <div className="col-lg-8 col-sm-12  ">
                        <h1>Welcome To Our Fruits Shops</h1>
                        <p>There are many variation of passages of lorem ipsum avaliable, but the majority have suffered alternation in some form, by injected homour, and randomised words which don't look even slightly bleaveable.</p>
                    </div>
                    <div className="col-lg-4">
                        <img className="one" src="https://obesitycanada.ca/wp-content/uploads/2017/07/pexels-photo-218844-e151493172899422.jpeg" alt="not found" width="300px" />
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <button type="button" className="btn btn-primary">  shop now</button>
                        <button type="button" className="btn btn-primary">contect us</button>
                    </div>
                </div>
                
                </div>
                <div>
                <h1 id="two">Our Services</h1>
                <p id="two">There are many variation of passages of lorem ipsum avaliable, but the majority have</p>
              </div>
              <div className="container">
                <div className="row">
                  <div id="four" className="col-4">
                    <img id="ten" src="https://st4.depositphotos.com/1431107/31628/v/600/depositphotos_316287078-stock-illustration-orange-silhouette-vector-icon.jpg" alt="not found" width="120px" />
                    <h6><span>Orange</span> </h6>
                    <p>There are many variation of passages of lorem ipsum avaliable, but the majority have suffered alternation in some form, by injected homour, and randomised words which don't look even slightly bleaveable.</p>
                  </div>
                  <div id="four" className="col">
                    <img id="ten" src="https://static.vecteezy.com/system/resources/previews/005/162/746/original/grape-outline-icon-fruit-free-vector.jpg" alt="not found" width="70px" />
                    <h6><span>Grapes</span> </h6>
                    <p>There are many variation of passages of lorem ipsum avaliable, but the majority have suffered alternation in some form, by injected homour, and randomised words which don't look even slightly bleaveable.</p>
                  </div>
                  <div id="four" className="col">
                    <img id="ten" src="https://cdn-icons-png.flaticon.com/512/1135/1135445.png" alt="not found" width="100px" />
                    <h6><span>Gavua</span> </h6>
                    <p>There are many variation of passages of lorem ipsum avaliable, but the majority have suffered alternation in some form, by injected homour, and randomised words which don't look even slightly bleaveable.</p>
                  </div>
                </div>
              </div>
              <button id="one" type="button" className="btn btn-primary">Read More</button>
        <div>
          <h2 className="four">Fresh Fruite</h2>
          <p className="four">There are many variation of passages of lorem ipsum avaliable, but the majority have</p>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-lg-8 col-sm-12">
              <h2>Best Fresh Orange</h2>
              <p>but the majority have suffered alternation in some form, by injected homour, and randomised words which don't look even slightly bleaveable.If you aare going to use apassage of lorem Ipsem, you need to be</p>
              <button type="button" className="btn btn-primary">Buy Now</button>
            </div>
            <br /><br />  
            <div className="col-4">
              <img src="https://www.freepnglogos.com/uploads/orange-png/orange-png-web-icons-png-15.png" alt="not found" width="300px" />
            </div>     
          </div>
          <br /><br /><br /><br />
          <div className="row">
            <div className="col-lg-8 col-sm-12">
              <h2> Best Fresh Grapes</h2>
              <p>but the majority have suffered alternation in some form, by injected homour, and randomised words which don't look even slightly bleaveable.If you aare going to use apassage of lorem Ipsem, you need to be</p>
              <button type="button" className="btn btn-primary">Buy Now</button>
            </div>       
            <div className="col-4">
              <img src="https://magamarket.in/wp-content/uploads/2021/08/black-grapes.jpg" alt="not found" width="300px" />
            </div>
          </div>
          <div className="row">
            <div className="col-lg-8 col-sm-12">
              <h2>Best Fresh Gauva</h2>
              <p>but the majority have suffered alternation in some form, by injected homour, and randomised words which don't look even slightly bleaveable.If you are going to use apassage of lorem Ipsem, you need to be</p>
              <button type="button" className="btn btn-primary">Buy Now</button>
            </div>
            <div className="col-4">
              <img src="https://i.pinimg.com/originals/d3/a6/34/d3a634005ab9413e1676f695b9fa0f13.jpg" alt="not found" width="300px" />
            </div>
          </div>
        </div>
        {/* part of definations are compete */}
        <div style={{float: 'center'}}>
          <h2 className="two">Testimonial</h2>
          <p className="two">There are many variation of passages of lorem ipsum avaliable, but the majority have</p>
          <img className="three" src="https://miro.medium.com/v2/resize:fit:720/format:webp/1*1CjXvUCQCpMlCzUX1L_5iQ.jpeg" alt="not found" width="400px" />
          <h4 className="two">Johnhex</h4>
          <p className="two">There are many variation of passages of lorem ipsum avaliable, but the majority have suffered alternation in some form, by injected homour, and randomised words which don't look even slightly bleaveable. If you are going to use apassage of lorem Ipsem, you need to be sure</p>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-lg-8 col-sm-12">
              <h2>
                Contect Us
              </h2>
              <form> 
                <label htmlFor>Name</label><hr />
                <label htmlFor> Phone number</label><hr />
                <label htmlFor>Email</label><hr />
                <br /><br />
                <label htmlFor>Message</label><hr />
              </form> 
            </div>
            <div className="col-4">
              <img src="https://img.freepik.com/free-photo/close-up-juicy-lemon_23-2147636454.jpg?w=740&t=st=1675858960~exp=1675859560~hmac=8f2e5e939c279a7bb0e1757fb71b79ffe75b24c9f7663ce09fd226b92b032e3e" alt="not found" width="300px" />
            </div>
          </div>
        </div>
        {/* next we start menues */}
        <div className="container">
          <div className="row">
            <div className="col-3">
              <div>Fruites </div>
              <div>randomised</div>
              <div>words which</div>
              <div>dont look even</div>
              <div>slightly</div>
              <div>believable if you</div>
              <div>are going to use</div>
              <div>a passage of</div>
              <div>Lorem Ipsem</div>
            </div>
            <div className="col-3">
              <div> <b>Services</b> </div>
              <div>randomised</div>
              <div>words which</div>
              <div>dont look even</div>
              <div>slightly</div>
              <div>believable if you</div>
              <div>are going to use</div>
              <div>a passage of</div>
              <div>Lorem Ipsem</div>
            </div>
            <div className="col-3">
              <div><b>List</b> </div>
              <div>randomised</div>
              <div>words which</div>
              <div>dont look even</div>
              <div>slightly</div>
              <div>believable if you</div>
              <div>are going to use</div>
              <div>a passage of</div>
              <div>Lorem Ipsem</div>
            </div>
            <div className="col-3">
              <div> <b>Follow Us</b> </div> 
              <div>
                <img src="https://www.citypng.com/public/uploads/preview/-11595326936asbkomoamd.png" alt="" width="40px" />
                <img src="https://assets.stickpng.com/images/5ecec6ef73e4440004f09e75.png" alt="" width="65px" />
                <img src="https://cdn.icon-icons.com/icons2/2428/PNG/512/linkedin_black_logo_icon_147114.png" alt="" width="40px" />
                <img src="https://simg.nicepng.com/png/small/2-28328_twitter-png-clipart-twitter-logo-png-black.png" alt="" width="40px" />
              </div>
              <div>Subscribe Now</div>
              <div><input type="text" /></div>
              <button type="button" className="btn btn-primary">Subscribe</button>
            </div>
          </div>
        </div>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js" />
      </div>
            )
}
