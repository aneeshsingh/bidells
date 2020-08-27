import React, { Component } from 'react';
import {
  Switch,
  Route,
  withRouter
} from "react-router-dom";

// Components
import Login from './components/login';
import SignUp from './components/SignUp';
import ForgotPassword from './components/forgotPassword';
import Verification from './components/verification';
import Welcome  from './components/Welcome';
import UnlimitedAccess  from './components/unlimitedAccess';
import PaymentDetails  from './components/PaymentDetails';
import PersonalDetails  from './components/PersonalDetails';
import Categories  from './components/Categories';
import GetAllBets  from './components/GetAllBets';
import GetBetDetails  from './components/GetBetDetails';
import Leaderboard  from './components/Leaderboard';
import LeaderboardView  from './components/LeaderboardView';
import GetResults  from './components/GetResults';
import RedeemPoints  from './components/redeemPoints';
import RedeemSingle  from './components/RedeemSingle';
import BidellsPurchase  from './components/BidellsPurchase';
import RedeemCongrats  from './components/RedeemCongrats';
import RedeemOrder  from './components/RedeemOrder';
import Activities  from './components/activites';
import Refer  from './components/refer';
import UserSettings  from './components/userSettings';
import CreateBets  from './components/CreateBets';
import PointSummary  from './components/PointSummary';
import CreateRefer  from './components/CreateRefer';
import SiteMap  from './components/SiteMap';
import Footer from './components/footer/Footer';

// information
import Faq  from './components/faq';
import About  from './components/About';
import Contact  from './components/contact';
import Devices  from './components/Devices';
import PrivacyPolicy  from './components/privacyPolicy';
import TermsConditions  from './components/termsConditions';
import ImportantInformation  from './components/importantInformation';

class App extends Component {
  componentDidUpdate(prevProps) {
		if (this.props.location !== prevProps.location) {
			window.scrollTo(0, 0);
		}
	}
  render() {
    return (      
      <div className="page-content">
        <Switch>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/forgot-password">
            <ForgotPassword />
          </Route>
          {/* <Route path="/verification">
            <Verification />
          </Route> */}
          <Route path="/verification" component={Verification} />
          <Route path="/sign-up">
            <SignUp />
          </Route>

          <Route path="/about">
            <About />
          </Route>
          <Route path="/faq">
            <Faq />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
          <Route path="/privacy-policy">
            <PrivacyPolicy />
          </Route>
          <Route path="/terms-and-conditions">
            <TermsConditions />
          </Route>
          <Route path="/important-information">
            <ImportantInformation />
          </Route>
          <Route path="/devices">
            <Devices />
          </Route>
          
          <Route path="/unlimited-access">
            <UnlimitedAccess />
          </Route>
          <Route path="/payment-details">
            <PaymentDetails />
          </Route>
          <Route path="/personal-details">
            <PersonalDetails />
          </Route>
          <Route path="/categories">
            <Categories />
          </Route>
          <Route path="/get-all-bets">
            <GetAllBets />
          </Route>
          <Route exact path="/get-bet-details/:betId" component={GetBetDetails} />

          <Route path="/leaderboard">
            <Leaderboard />
          </Route>
          <Route exact path="/leaderboard-view/:Id" component={LeaderboardView} />
          
          <Route path="/get-results">
            <GetResults />
          </Route>
          <Route path="/redeem-points">
            <RedeemPoints />
          </Route>
          <Route exact path="/redeem-single/:Id" component={RedeemSingle} />

          <Route exact path="/bidells-purchase" component={BidellsPurchase} />
          
          <Route path="/redeem-congrats">
            <RedeemCongrats />
          </Route>
          <Route path="/redeem-order">
            <RedeemOrder />
          </Route>
          <Route path="/activities">
            <Activities />
          </Route>
          <Route path="/refer">
            <Refer />
          </Route>
          <Route path="/user-settings">
            <UserSettings />
          </Route>
          <Route path="/create-bets">
            <CreateBets />
          </Route>
          <Route path="/point-summary">
            <PointSummary />
          </Route>
          <Route path="/create-refer">
            <CreateRefer />
          </Route>
          <Route path="/sitemap">
            <SiteMap />
          </Route>
          <Route path="/">
            <Welcome />
          </Route>
        </Switch>
        <Footer />
      </div>
    );
  }
}

export default withRouter(App);