import React, { Component } from 'react';
// import axios from './instance/axios';

import Container from 'react-bootstrap/Container';
import Table from 'react-bootstrap/Table';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

// Header
import Header from './header/Header';

// assets
// import Image from '../assets/about-image.png';
import Oval from '../assets/oval_01.svg';
import OvalRight from '../assets/Oval_dashboard_02.svg';

class PrivacyPolicy extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
            about: {}
        }
    }

    componentDidMount() {        
        // axios.get(`/?itemType=about`)
        //     .then(res => {
        //     const data = res.data;
        //     console.log(data);
        //     this.setState({ about : data });
        // })
    }
    render() {
        return (
          <div className="outer-view">
            <Header />

            <img
              src={Oval}
              className="ovel-bottom-left d-none d-lg-block"
              alt="ovel shape"
            />
            <img
              src={OvalRight}
              className="ovel-bottom-right d-block d-lg-none"
              alt="ovel shape"
            />
            <Container>
              <Row className="mh-100 justify-content-center content-area information-content text-secondary top_offset">
                <Col md={8}>
                  <div className="mb-4">
                    <h1>Important Information</h1>
                    
                    <div className="pt-4 lead">
                        <h3>This website</h3>
                        <p>This website is operated by and on behalf of Macquarie Group Limited and its related bodies corporate (Macquarie Group).</p>
                        <p>The information on this site is subject to change without notice and, accordingly, Macquarie Group recommends that you make direct contact with Macquarie Group staff before acting upon material on this site.</p>
                        <p>The information on this internet site is not an offer or solicitation for the purchase of securities, units or investments, unless expressly stated otherwise. While Macquarie Group provides the information in good faith, it accepts no responsibility for the accuracy, completeness or timeliness of the information.</p>

                        <h3>Website links</h3>
                        <p>This site may contain links to other websites operated by entities which do not belong to Macquarie Group. These links have been provided solely for you to obtain further information about other relevant products and entities in the market. Macquarie Group has no control over the information on these sites or the products or services on them, and therefore makes no representations regarding the accuracy or suitability of the information, services, or products described on them. You are advised to make your own enquiries in relation to third parties described or linked on this site. Inclusion of a link to a third party site should not be construed as that party's endorsement of this site.</p>
                        <p>By linking to sites operated by third parties, Macquarie Group is not authorizing the reproduction of any material on such sites, as such material may be the subject of intellectual property rights.</p>

                        <h3>Software applications accessible from this site</h3>
                        <p>Some of the software programs that may be downloaded via links from this site are products belonging to third parties. You use such third party software at your own risk. Such software is likely to be subject to licensing terms imposed by the owner of the software.</p>
                        <p>To the full extent permitted by law, Macquarie Group excludes all liability in relation to using or downloading any software (third party or otherwise) that may be accessed from this site. Macquarie Group makes no representations and provides no warranties in relation to such software. In particular, to the full extent permitted by law, Macquarie Group excludes all liability for any damage (including, without limitation, loss of data, interruption to business and loss of profits) resulting from viruses or any other consequence of using or downloading any software (third party or otherwise) accessible via this site.</p>

                        <h3>Accessibility statement</h3>
                        <p>This website has been designed to run on a broad range of browsers and operating systems. The page sets out information on:</p>

                        <ul>
                            <li>the site's navigation processes</li>
                            <li>the technical requirements to run the site properly</li>
                            <li>the design standards used when developing the site</li>
                            <li>some shortcuts for navigation.</li>
                        </ul>

                        <p>Ensuring easy access to the site for all users is important to us - so please contact us if you have difficulties using this site or if you have any further questions or comments.</p>

                        <h4>Standards compliance</h4>
                        <p>Page design and layout is controlled by Cascading Style Sheets (CSS) and has been written according to the CSS 2.1 specifications.</p>
                        <p>Structured and meaningful Hypertext Mark-up Language (HTML) has been used to assist users accessing the site via non-visual means, such as users of screen-reading software.</p>

                        <h4>Navigation</h4>
                        <p>The primary navigation menus are text-based lists and will still work for users using alternative browsing technologies, or who have javascript and/or CSS disabled.</p>
                        <p>A comprehensive site map provides one-click access to content deep within the site.</p>

                        <h4>Supported browsers</h4>

                        <Table striped bordered hover variant="dark" className="mb-0">
                            <tbody>
                              <tr>
                                  <th>Internet Explorer</th>
                                  <th>v11 and up</th>
                              </tr>
                              <tr>
                                  <th>Firefox</th>
                                  <th>Latest version</th>
                              </tr>
                              <tr>
                                  <th>Safari</th>
                                  <th>Latest version</th>
                              </tr>
                              <tr>
                                  <th>Chrome</th>
                                  <th>Latest version</th>
                              </tr>
                            </tbody>
                        </Table>
                        <p><small>Please note:</small></p>

                        <ul>
                            <li>versions in bold are ones that we have tested and are certain about supporting. Other versions should work, but have not been thoroughly tested</li>
                            <li>we do not currently support operating systems or browsers not listed above. For instance, we don't support Windows 95.</li>
                        </ul>

                        <p>You can use the links below to download current versions of the browsers listed above.</p>

                        <ul>
                            <li>Internet Explorer from <a href="https://www.microsoft.com/windows/downloads/ie/getitnow.mspx" target="_blank" rel="noopener noreferrer">https://www.microsoft.com/windows/downloads/ie/getitnow.mspx</a></li>
                            <li>Firefox from <a href="https://www.mozilla.com/firefox/" target="_blank" rel="noopener noreferrer">https://www.mozilla.com/firefox/</a></li>
                            <li>Safari from <a href="https://www.apple.com/safari/download/" target="_blank" rel="noopener noreferrer">https://www.apple.com/safari/download/</a></li>
                            <li>Chrome from <a href="https://www.google.com/chrome/browser/desktop/index.html" target="_blank" rel="noopener noreferrer">https://www.google.com/chrome/browser/desktop/index.html</a></li>
                        </ul>

                        <h3>Other technical requirements</h3>
                        <p>The design of this site has been optimised for monitors set at 1024 by 768 pixel resolution with 16-bit colour depth. The site should still function for users on lower settings, but it may not be as visually appealing.</p>
                        <p>A number of other technologies are used on this site:</p>

                        <ul>
                          <li>JavaScript is used to add progressive enhancements to this site. However, where possible, site content should still be accessible to users with JavaScript disabled</li>
                          <li>Adobe Acrobat Reader is used to present documents for printing. If you need to install the newest version of Acrobat Reader, this is available for free from <a href="http://www.adobe.com/products/acrobat/readstep2.html">http://www.adobe.com/products/acrobat/readstep2.html</a>.</li>
                        </ul>

                        <h3>Copyright and trade marks</h3>
                        <p>Macquarie Group is either the owner or licensed user of the copyright in the material on this site. You may not reproduce, adapt, upload, link, frame, broadcast, distribute or in any way transmit the material on this site without the written consent of Macquarie Group, other than to the extent necessary to view the material or as permitted by law.</p>
                        <p>The Macquarie name and all its associated trade marks (including, without limitation, the Holey Dollar device mark and Forward Thinking tagline) are trade marks of Macquarie Group.</p>

                        <h3>Privacy</h3>
                        <p>Macquarie Group is committed to providing the highest quality of financial services within a trusted environment. Please read the <a href="https://www.bidells.com/au/about/disclosures/privacy-and-cookies">Macquarie Group Privacy Policy</a> to understand how your personal information will be treated by Macquarie Group.</p>

                        <h3>Fraud</h3>
                        <p>Macquarie Group is committed to providing the highest quality of financial services within a trusted environment. Please read the <a href="https://www.bidells.com/au/about/disclosures/email-scams-and-frauds">fraudulent email statement</a> for more information.</p>

                    </div>
                    
                  </div>
                </Col>
              </Row>
            </Container>
          </div>
        );
    }
}

export default PrivacyPolicy;
