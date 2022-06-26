// import './App.css';
import Button from '@material-ui/core/Button'
import { makeStyles, ThemeProvider } from '@material-ui/core/styles';
import theme from './ui/Theme'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { ROUTES } from '../utils/constants';
import { useState } from 'react'
import Header from './ui/Header'
import Footer from './ui/Footer'
import LandingPage from './LandingPage'
import Services from './Services'
import CustomSoftware from './CustomSoftware'
import MobileApps from './MobileApps'
import Websites from './Websites';
import Revolution from './Revolution';
import About from './About';
import Contact from './Contact';
import Estimate from './Estimate';


function App() {
  const [selectedServicesIndex, setSelectedServicesIndex] = useState(0)
  const [selectedTab, setSelectedTab] = useState(0)

  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Header
          selectedTab={selectedTab} setSelectedTab={setSelectedTab}
          selectedServicesIndex={selectedServicesIndex}
          setSelectedServicesIndex={setSelectedServicesIndex}
        />
        <Switch>
          <Route
            exact path={ROUTES.HOME}
            render={(props) => <LandingPage {...props} selectedTab={selectedTab} setSelectedTab={setSelectedTab}
              selectedServicesIndex={selectedServicesIndex}
              setSelectedServicesIndex={setSelectedServicesIndex} />}
          />
          <Route
            exact path={ROUTES.SERVICES}
            render={(props) => <Services {...props} selectedTab={selectedTab} setSelectedTab={setSelectedTab}
              selectedServicesIndex={selectedServicesIndex}
              setSelectedServicesIndex={setSelectedServicesIndex} />}
          />
          <Route
            exact path="/customsoftware"
            render={(props) => <CustomSoftware {...props} selectedTab={selectedTab} setSelectedTab={setSelectedTab}
              selectedServicesIndex={selectedServicesIndex}
              setSelectedServicesIndex={setSelectedServicesIndex} />}

          />
          <Route
            exact path="/mobileapps"
            render={(props) => <MobileApps {...props} selectedTab={selectedTab} setSelectedTab={setSelectedTab}
              selectedServicesIndex={selectedServicesIndex}
              setSelectedServicesIndex={setSelectedServicesIndex} />}

          />
          <Route
            exact path="/websites"
            render={(props) => <Websites {...props} selectedTab={selectedTab} setSelectedTab={setSelectedTab}
              selectedServicesIndex={selectedServicesIndex}
              setSelectedServicesIndex={setSelectedServicesIndex} />}

          />
          <Route
            exact path={ROUTES.REVOLUTION}
            render={(props) => <Revolution {...props} selectedTab={selectedTab} setSelectedTab={setSelectedTab}
              selectedServicesIndex={selectedServicesIndex}
              setSelectedServicesIndex={setSelectedServicesIndex} />}

          />
          <Route
            exact path={ROUTES.ABOUT}
            render={(props) => <About {...props} selectedTab={selectedTab} setSelectedTab={setSelectedTab}
              selectedServicesIndex={selectedServicesIndex}
              setSelectedServicesIndex={setSelectedServicesIndex} />}

          />
          <Route
            exact path={ROUTES.CONTACT}
            render={(props) => <Contact {...props} selectedTab={selectedTab} setSelectedTab={setSelectedTab}
              selectedServicesIndex={selectedServicesIndex}
              setSelectedServicesIndex={setSelectedServicesIndex} />}


          />
          <Route
            exact path="/estimate"
            render={(props) => <Estimate {...props} selectedTab={selectedTab} setSelectedTab={setSelectedTab}
              selectedServicesIndex={selectedServicesIndex}
              setSelectedServicesIndex={setSelectedServicesIndex} />}

          />
        </Switch>
        <Footer
          selectedTab={selectedTab} setSelectedTab={setSelectedTab}
          selectedServicesIndex={selectedServicesIndex}
          setSelectedServicesIndex={setSelectedServicesIndex}
        />
      </Router>
    </ThemeProvider>
  );
}

export default App;
