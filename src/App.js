import logo from './logo.svg';
import './App.css';
import living from '../src/1.jpg'
import living2 from '../src/2.jpg'
import living3 from '../src/3.jpg'
import living4 from '../src/4.jpg'
import living5 from '../src/5.jpg'
import living6 from '../src/6.jpg'
import avatar from '../src/avatar.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheckSquare, faUserAlt, faFileContract,faSearchDollar,faHouseUser,faDollarSign,faCertificate} from '@fortawesome/free-solid-svg-icons'



function App() {
  return (

    <>
      <div className="App">
        <nav>
          <ul className='navbar'>
            <a href='#' className='logo'><h1>Homly</h1></a>
            <ul className='links'>
              <li><a href='#'>Home</a></li>
              <li><a href='#'>How it works</a></li>
              <li><a href='#'>Properties</a></li>
              <li><a href='#'>Pricing</a></li>
            </ul>
            <ul className='buttons'>
              <button className='buttonclicked'>Sign up</button>
              <button>Log in</button>
            </ul>
          </ul>
        </nav>

        <div className='findContainer'>


          <section className='leftSection'>

            <h1 className='findYour'>Find Your<span><br></br>Desire House</span><br></br>Now</h1>

            <div className="SearchInputContainer">
              <div className='topSearch'>
                <button>Buy</button>
                <button>Rent</button>
                <button>Sell</button>
              </div>

              <div className='bottomSearch'>
                <input type='text' placeholder='Enter Your Location' />
                <button>Search</button>
              </div>
            </div>

            <section className='texts'>
              <div className='numberAndText'>
                <h1>100+</h1>
                <h3>Properties</h3>
              </div>

              <div className='numberAndText'>
                <h1>50+</h1>
                <h3>Agents</h3>
              </div>

              <div className='numberAndText'>
                <h1>25+</h1>
                <h3>Locations</h3>
              </div>

            </section>

          </section>

          <section className='rightSection'>
            <img
              src={living}
              className='imagesss one'
            />
            <img
              src={living2}
              className='imagesss two'
            />
          </section>
        </div>

        <h4 className="howitWork">How It Work</h4>
        <h4 className="followthiseasy">Follow this easy steps to get your dream house easily.</h4>

        <div className='lastBlueText'>
          <div className='lastBlueTextSquare'>
            <FontAwesomeIcon icon={faCheckSquare} size='3x' color='#f4d160' />
            <h5 className='headline'>Select Property</h5>
            <h5 className='detailss'>First evaluate your property by searching it and overserving it properly</h5>
          </div>

          <div className='lastBlueTextSquare'>
            <FontAwesomeIcon icon={faUserAlt} size='3x' color='#f4d160' />
            <h5 className='headline'>Meet Agent</h5>
            <h5 className='detailss'>Meet with your agent to talk about the property and see the property</h5>
          </div>

          <div className='lastBlueTextSquare'>
            <FontAwesomeIcon icon={faFileContract} size='3x' color='#f4d160' />
            <h5 className='headline'>Close The Deal</h5>
            <h5 className='detailss'>Finalize everything make payment and take the property.</h5>
          </div>
        </div>
      </div>

      <div className='SecondApp'>
            <nav>
                <li><a href='#'>Explore Good Places</a></li>
                <button className='viewAll'>View all</button>
            </nav>
            
            <div className='imagesContainer'>
            <div className='imageExplore'>
              <img
              src={living3}
              />
              <div className='imageDetails'>
                <div className='textDetails'>
                  <h1>Modern House</h1>
                  <h4>New York,USA</h4>
                  <h4>2 Bed, 2 toilet, 1 parking</h4>
                </div>
                <button>View</button>
              </div>
            </div>

            <div className='imageExplore'>
              <img
              src={living4}
              />
              <div className='imageDetails'>
                <div className='textDetails'>
                  <h1> Duplex Appartment</h1>
                  <h4>New York,USA</h4>
                  <h4>2 Bed, 2 toilet, 1 parking</h4>
                </div>
                <button>View</button>
              </div>
            </div>

            <div className='imageExplore'>
              <img
              src={living5}
              />
              <div className='imageDetails'>
                <div className='textDetails'>
                  <h1>Villa</h1>
                  <h4>New York,USA</h4>
                  <h4>2 Bed, 2 toilet, 1 parking</h4>
                </div>
                <button>View</button>
              </div>
            </div>
            </div>

            <div className='imageAndFeatures'>
                <div className='imageLeft'>
                  <img
                  src={living6}
                  className='imageLeftStyle'
                  />
                  <div className='textBox'>
                    <h1>Well maintain and fair price property</h1>
                  </div>
                </div>

                <div className='textRight'>
                  <h1>Our Main Features</h1>
                  <div className='circleAndText'>
                    <div className='circleAndIcon'>
                      <FontAwesomeIcon icon={faSearchDollar} size='2x' color='rgba(40,82,122,0.8)'/>
                      <h6>.......</h6>
                    </div>

                     <div className='text'>
                        <h1>Huge Number of Property</h1>
                        <h5>A huge Numbers of property you will find here and you can easily choose</h5>
                     </div>
                  </div>

                  <div className='circleAndText'>
                    <div className='circleAndIcon'>
                      <FontAwesomeIcon icon={faHouseUser} size='2x' color='rgba(40,82,122,0.8)'/>
                      <h6>.......</h6>
                    </div>

                     <div className='text'>
                        <h1>Good Condition Property</h1>
                        <h5>All property are in good conditions. We check all the property very smoothly</h5>
                     </div>
                  </div>

                  <div className='circleAndText'>
                    <div className='circleAndIconDollar'>
                      <FontAwesomeIcon icon={faDollarSign} size='2x' color='rgba(40,82,122,0.8)'/>
                      <h6>.......</h6>
                    </div>

                     <div className='text'>
                        <h1>Low Price</h1>
                        <h5>We are giving you a very low price for a good property than others</h5>
                     </div>
                  </div>

                  <div className='circleAndText'>
                    <div className='circleAndIcon'>
                      <FontAwesomeIcon icon={faCertificate} size='2x' color='rgba(40,82,122,0.8)'/>
                     
                    </div>

                     <div className='text'>
                        <h1>Good Deals</h1>
                        <h5>You will get a good contract with us and you will not find another like this for sure</h5>
                     </div>
                  </div>
                </div>
            </div>

            <div className='LastBoxinWhitePage'>
              <div className='ourCustomers' >
                <h1>What Our Customers Are Talking About</h1>
                <h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </h3>
              </div>
              <div className='reviews'>
                <h4>This is due to their excellent service,competitive pricing and customer support. It is throughly refreshing to get such a personal touch. Very Very satisfied and recommended to all.</h4>
                <div className='reviewerData'>
                  <img
                  src={avatar}
                  className='avatar'
                  />
                  <h1>John Walker<span><br></br>Customer</span></h1>
                  <div className='dots'>
                      <div className='dot'>

                      </div>

                      <div className='dot'>

                      </div>

                      <div className='dot'>

                      </div>
                  </div>
                </div>
              </div>
            </div>
      </div>

      <div className='lastApp'>

      </div>
    </>
  );
}

export default App;
