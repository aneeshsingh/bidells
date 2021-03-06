import React, { Component } from 'react';
import axios from './instance/axios';
import { Redirect } from "react-router-dom";

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import InputGroup from 'react-bootstrap/InputGroup';
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';

// Header
import Header from './header/HeaderPost';

// assets
import Ovel_01 from '../assets/Oval-right-bottom.svg';
import SubmitArrow from '../assets/arrow-right-solid.svg';
import Ads_02 from '../assets/ads_03.png';
import Ads_03 from '../assets/ads_04.png';
import Ads from '../assets/ads.png';
import Minus from '../assets/minus.svg';
import Plus from '../assets/plus.svg';
import Oval from '../assets/Ovalpmob-left.svg';
import OvalRight from '../assets/Oval_dashboard_02.svg';


class RedeemSingle extends Component {
    constructor(props) {
        super(props);
        this.state = {
            ID: null,
            counter: 1,
            total: 0,
            redeem: [],
            totalCount: 0,
            availQuantity: 0,
            currentPoints: 0,
            message: '',
            redirect: false,
            orderID : null
        };

        
        this.buyProduct = this.buyProduct.bind(this);
        this.onIncrement = this.onIncrement.bind(this);
        this.onDecrement = this.onDecrement.bind(this);
    }

    handleChange = (e) => {
        this.setState({
            [e.target.quantity]: e.target.value
        })
    }

    getLeadData(){
        let Auth = localStorage.getItem('auth_bdGroup');
        let Id = this.props.match.params.Id;

        this.setState({
          ID : Id
        })

        axios.get(`/?itemType=getProductInformation&productID=${Id}&userID=${Auth}`)
            .then(res => {
            const redeem = res.data;
            // console.log(redeem);

            this.setState({
                redeem : redeem,
                total : parseInt(redeem.points),
                totalCount : parseInt(redeem.points),
                availQuantity : parseInt(redeem.quantityAvailable),
                currentPoints : parseInt(Number(redeem.userCurrentPoints.replace(/,/g,'')) + 1)
            })
            
        }).catch((error) => {
            console.log(error)
        })
    }

    componentDidMount() {
        this.getLeadData();        
    }

    onIncrement = () => {
      this.setState(state => ({ 
        counter: Math.min(state.counter + 1, state.availQuantity)
      }));
      
      if(this.state.counter < this.state.availQuantity){
        setTimeout(() => {
          this.setState(state => ({ 
            total: state.total + state.totalCount
          }));
        }, 100);
      }

    }
   
    onDecrement = () => {
      this.setState(state => ({ 
        counter: Math.max(state.counter - 1, 1),
        total: Math.max(state.total - state.totalCount, state.totalCount)
      }));
    }

    

    buyProduct = (e) => {
      e.preventDefault();

      let Auth = localStorage.getItem('auth_bdGroup');

      // const data = {
      //   counter: this.state.counter
      // }


      axios.get(`/?itemType=productPurchased&userID=${Auth}&quantity=${this.state.counter}&productID=${this.state.ID}`)
        .then((res) => {
          const data = res;
          console.log(data.data);

          if(data.data.order_id){
            this.setState({
                redirect: true, 
                message: data.data.message,
                orderID: data.data.order_id
            })
          }
        })
        .catch((error) => {
          console.log(error);
        });    
    }

    render() {
      if (this.state.redirect) {
        return <Redirect to={{
          pathname: '/congratulation',
          state: { order_id: this.state.orderID }
        }} />;
      }

        return (
          <div className="outer-view">
            <Header />

            <img
              src={Oval}
              className="oval-top-left d-block d-md-none"
              alt="ovel shape"
            />
            <img
              src={OvalRight}
              className="ovel-bottom-right d-block d-md-none"
              style={{ top: "0px" }}
              alt="ovel shape"
            />
            <div className="top_offset position-relative">
              <img
                src={Ovel_01}
                className="place-oval-Rbottom"
                alt="ovel shape"
              />

              <Container fluid="md">
                <Row className="align-items-center content-area mb-5">
                  <Col md={6}>
                    <div className="heading-area">
                      <div className="post_type">EXPERIENCE</div>
                      <h1>{this.state.redeem.title}</h1>
                      <p>{this.state.redeem.content}</p>
                    </div>
                  </Col>
                  <Col md={6} className="py-3 d-none d-md-block">
                    {this.state.redeem.get_first_image_url ? (
                      <img
                        src={this.state.redeem.get_first_image_url}
                        className="img-fluid redeem-product-image d-block m-auto mr-md-0"
                        alt="logo"
                      />
                    ) : null}
                  </Col>
                </Row>

                <Row className="justify-content-between">
                  <Col md={8} lg={8} className="mb-2 pr-md-5">
                    <Form onSubmit={this.buyProduct}>
                      <Row className="mb-md-4 mb-5">
                        <Col sm={6} md={5} className="mb-md-4">
                          <div className="box-grid my-3 li-grad p-md-5 p-4">
                            <div className="box-grid-info py-2">
                              <span className="mb-4 d-block">Quantity</span>

                              <InputGroup className="form-quality">
                                <InputGroup.Prepend>
                                  <Button
                                    variant="minus"
                                    onClick={this.onDecrement}
                                  >
                                    <img src={Minus} alt="minus" />
                                  </Button>
                                </InputGroup.Prepend>
                                <Form.Control
                                  value={this.state.counter}
                                  onChange={(e) => this.handleChange(e)}
                                />
                                <InputGroup.Append>
                                  <Button
                                    variant="plus"
                                    onClick={this.onIncrement}
                                  >
                                    <img src={Plus} alt="plus" />
                                  </Button>
                                </InputGroup.Append>
                              </InputGroup>
                            </div>
                          </div>
                        </Col>
                        <Col sm={6} md={5} className="mb-md-4">
                          <div className="box-grid my-3 li-grad p-md-5 p-4">
                            <div className="box-grid-info py-2">
                              <span className="mb-4 d-block">Total</span>
                              <strong>
                                {parseFloat(this.state.total).toLocaleString()}
                              </strong>
                            </div>
                          </div>
                        </Col>

                        <Col sm={12} md={10} className="mt-3">
                          {
                              this.state.total < this.state.currentPoints 
                              ?                            
                              <Button
                                type="submit"
                                variant=""
                                className="form-bet-amount d-flex align-items-center"
                              >
                                <span className="submitText">CONTINUE</span>
                                <span className="btn-arrow">
                                  <img src={SubmitArrow} alt="arrow" />
                                </span>
                              </Button>
                             :
                                <Button
                                type="button"
                                disabled
                                variant=""
                                className="form-bet-amount d-flex align-items-center"
                              >
                                <span className="submitText">CONTINUE</span>
                                <span className="btn-arrow">
                                  <img src={SubmitArrow} alt="arrow" />
                                </span>
                              </Button>
                            }

                            {
                              this.state.total >= this.state.currentPoints 
                              ?   
                              <p className="lead mt-4 text-danger "><strong>You have Less Points is you balance!</strong></p>
                             :
                              null
                            }                            
                            {
                              this.state.message 
                              ?   
                              <p className="lead mt-4 text-danger "><strong>You have Less Points is you balance!</strong></p>
                             :
                              null
                            }                            
                        </Col>
                      </Row>
                    </Form>

                    <div className="mt-5 d-none d-md-block tabs-content">
                      <Tabs defaultActiveKey="detail" fill id="tab-redeem">
                        <Tab eventKey="detail" title="Detail">
                          <p>{this.state.redeem.content}</p>
                        </Tab>
                        <Tab eventKey="shipping" title="Shipping">
                          <p>{this.state.redeem.shippingDetails}</p>
                        </Tab>
                        <Tab eventKey="payment" title="Payment">
                          <p>{this.state.redeem.paymentDetails}</p>
                        </Tab>
                      </Tabs>
                    </div>
                  </Col>
                  <Col md={4} lg={3} className="mb-md-2">
                    <div className="ads-portFrame p-md-5 p-4">
                      <img src={Ads_03} alt="ads" />
                    </div>

                    <div className="ads-portFrame mt-md-5 mt-4 d-none d-md-block">
                      <img src={Ads_02} alt="ads" />
                    </div>
                    <div className="ads-frame mx-auto mt-4 d-block d-md-none">
                      <img src={Ads} alt="Ads Poster" />
                    </div>
                  </Col>
                </Row>
              </Container>
            </div>
          </div>
        );
    }
}

export default RedeemSingle;
