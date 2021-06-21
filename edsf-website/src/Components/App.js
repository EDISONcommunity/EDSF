import NavBar from "./NavBar";
import Home from "./Home";
import Contact from "./Contact";
import PrivacyPolicy from "./PrivacyPolicy";
import Copyright from "./Copyright";
import Upcoming from "./Upcoming";
import CFDS from "../EDSFComponents/CFDS";
import DSBoK from "../EDSFComponents/DSBoK";
import DSPP from "../EDSFComponents/DSPP";
import MCDS from "../EDSFComponents/MCDS";
import about from "../EDSF.wiki/EDSFhome.md";
import tutorial2019Bdit4dal from "../EDSF.wiki/(4)-BDIT4DA-Tutorial-HPCS2019.md";
import tutorial2019Edsf from "../EDSF.wiki/(3)-EDSF-Tutorial-Summer-2019-Data-Science-Competence-and-Education.md";
import tutorial2020MatesBdit4da from '../EDSF.wiki/Webinar-MATES-ED2MIT-"Introduction-to-Big-Data-and-Data-Management-for-Maritime-Industry".md';
import tutorial2021MatesDsfa from '../EDSF.wiki/MATES-ED2MIT-Training-"Introduction-to-Data-Science-&-Analytics-Foundations-for-the-Maritime-Sector".md';
import tutorial2021MatesDmg from '../EDSF.wiki/MATES-ED2MIT-2021-"Industrial-Data-Spaces,-Organisational-Data-Management-&-Governance-for-the-Maritime-Sector".md';
import tutorial2021MatesBdit4da from '../EDSF.wiki/MATES-ED2MIT-2021-"Big-Data-Infrastructure-Technologies-for-Data-Analytics".md';
import workshop2018Edison from "../EDSF.wiki/EDISON-Workshop-31-May-2018-Denmark.md";
import workshop2018Edsfr3Agenda from "../EDSF.wiki/Agenda---EDSFr3-Design-Workshop-(18-19-July-2018).md";
import workshop2018Edsfr3Uva from "../EDSF.wiki/EDSF-Release-3-Design-Workshop-18-19-July-2018-(UvA).md";
import workshop2019Dtw from "../EDSF.wiki/(1)-DTW2019-Data-Teaching-Workshop-September-2019,-San-Diego.md";
import workshop2019Edfsr4 from "../EDSF.wiki/(2)-EDSF-Release-4-Design-Workshop-20-November-2019.md";
import workshop2020Fair from "../EDSF.wiki/(5)-FAIR-Competences-for-Higher-Education-Design-Workshop-8-9-October-2020-Agenda-and-documents.md";
import release2CFDS from "../files/EDSFReleases/EDISON_CF-DS-release2-v08.pdf";
import releasep3CFDS from "../files/EDSFReleases/EDISON_CF-DS-release3-v09.pdf";
import release3CFDS from "../files/EDSFReleases/EDISON_CF-DS-release3-v10.pdf";
import release2DSBoK from "../files/EDSFReleases/EDISON_DS-BoK-release2-v04.pdf";
import releasep3DSBoK from "../files/EDSFReleases/EDISON_DS-BoK-release3-v05.pdf";
import release3DSBoK from "../files/EDSFReleases/EDISON_DS-BoK-release3-v06.pdf";
import release2DSPP from "../files/EDSFReleases/EDISON_DSPP-release2-v05.pdf";
import releasep3DSPP from "../files/EDSFReleases/EDISON_DSPP-release3-v06.pdf";
import release3DSPP from "../files/EDSFReleases/EDISON_DSPP-release3-v07.pdf";
import release2MCDS from "../files/EDSFReleases/EDISON_MC-DS-release2-v03.pdf";
import releasep3MCDS from "../files/EDSFReleases/EDISON_MC-DS-release3-v04.pdf";
import release3MCDS from "../files/EDSFReleases/EDISON_MC-DS-release3-v05.pdf";
import DSPandFAIR from "../EDSFComponents/Resources/DSPandFAIR";
import Books from "../EDSFComponents/Resources/Books";
import CurriculaDesign from "../EDSFComponents/Resources/CurriculaDesign";
import Datasets from "../EDSFComponents/Resources/Datasets";
import Deliverables from "../EDSFComponents/Resources/Deliverables";
import Presentations from "../EDSFComponents/Resources/Presentations";
import Projects from "../EDSFComponents/Resources/Projects";
import Publications from "../EDSFComponents/Resources/Publications";
import Releases from "../EDSFComponents/Resources/Releases";
import Trainings from "./Trainings";
import Box from "@material-ui/core/Box";
import MarkDownComponent from "../ReactComponents/MarkDownComponent";
import PDFPage from "../ReactComponents/PDFPage";
import { Switch, Route } from "react-router-dom";
import Cookiesnackbar from "../ReactComponents/Cookiesnackbar";
import React, { Component } from "react";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      twitterEnabled: false,
    };
    this.twitterEnable = this.twitterEnable.bind(this);
  }

  twitterEnable() {
    this.setState({ twitterEnabled: true });
  }

  render() {
    return (
      <Box>
        <Box height="10vh">
          <NavBar />
        </Box>
        <Box height="90vh">
          <Switch>
            <Route exact path="/">
              <Home
                cookiesEnabled={this.props.cookiesEnabled}
                onTwitterEnable={this.twitterEnable}
                twitterEnabled={this.state.twitterEnabled}
                trackingId={this.props.trackingId}
              />
            </Route>
            <Route path="/contact">
              <Contact />
            </Route>
            <Route path="/privacy-policy">
              <PrivacyPolicy />
            </Route>
            <Route path="/copyright">
              <Copyright />
            </Route>
            <Route path="/upcoming">
              <Upcoming />
            </Route>
            <Route path="/data-science-competence-framework-cf-ds">
              <CFDS />
            </Route>
            <Route path="/data-science-body-knowledge-ds-bok">
              <DSBoK />
            </Route>
            <Route path="/data-science-model-curriculum-mc-ds">
              <MCDS />
            </Route>
            <Route path="/data-science-professional-profiles-definition-dsp">
              <DSPP />
            </Route>
            <Route path="/edison-community">
              <MarkDownComponent markdown={about} key={0} />
            </Route>
            <Route path="/tutorials-2019-edsf-data-science-competence-and-education">
              <MarkDownComponent markdown={tutorial2019Edsf} key={1} />
            </Route>
            <Route path="/tutorials-2019-bdit4da-hpcs">
              <MarkDownComponent markdown={tutorial2019Bdit4dal} key={2} />
            </Route>
            <Route path="/tutorials-2020-mates-ed2mit-bdit4da">
              <MarkDownComponent markdown={tutorial2020MatesBdit4da} key={3} />
            </Route>
            <Route path="/tutorials-2021-mates-ed2mit-dsaf">
              <MarkDownComponent markdown={tutorial2021MatesDsfa} key={4} />
            </Route>
            <Route path="/tutorials-2021-mates-ed2mit-bdit4da-january-february">
              <MarkDownComponent markdown={tutorial2021MatesBdit4da} key={5} />
            </Route>
            <Route path="/tutorials-2021-mates-ed2mit-dmg-february">
              <MarkDownComponent markdown={tutorial2021MatesDmg} key={6} />
            </Route>
            <Route path="/workshops-2018-edison-may-denmark">
              <MarkDownComponent markdown={workshop2018Edison} key={7} />
            </Route>
            <Route path="/workshops-2018-edsf-release3-july-agenda">
              <MarkDownComponent markdown={workshop2018Edsfr3Agenda} key={8} />
            </Route>
            <Route path="/workshops-2018-edsf-release3-july-uva">
              <MarkDownComponent markdown={workshop2018Edsfr3Uva} key={9} />
            </Route>
            <Route path="/workshops-2019-dtw-september-sandiego">
              <MarkDownComponent markdown={workshop2019Dtw} key={10} />
            </Route>
            <Route path="/workshops-2019-edsf-release4-november">
              <MarkDownComponent markdown={workshop2019Edfsr4} key={11} />
            </Route>
            <Route path="/workshops-2020-fair-competences-october">
              <MarkDownComponent markdown={workshop2020Fair} key={12} />
            </Route>
            <Route path="/resources-edsf-release3-cfds">
              <PDFPage pdf={release3CFDS} />
            </Route>
            <Route path="/resources-edsf-release3-dsbok">
              <PDFPage pdf={release3DSBoK} />
            </Route>
            <Route path="/resources-edsf-release3-dspp">
              <PDFPage pdf={release3DSPP} />
            </Route>
            <Route path="/resources-edsf-release3-mcds">
              <PDFPage pdf={release3MCDS} />
            </Route>
            <Route path="/resources-edsf-prerelease3-cfds">
              <PDFPage pdf={releasep3CFDS} />
            </Route>
            <Route path="/resources-edsf-prerelease3-dsbok">
              <PDFPage pdf={releasep3DSBoK} />
            </Route>
            <Route path="/resources-edsf-prerelease3-dspp">
              <PDFPage pdf={releasep3DSPP} />
            </Route>
            <Route path="/resources-edsf-prerelease3-mcds">
              <PDFPage pdf={releasep3MCDS} />
            </Route>
            <Route path="/resources-edsf-release2-cfds">
              <PDFPage pdf={release2CFDS} />
            </Route>
            <Route path="/resources-edsf-release2-dsbok">
              <PDFPage pdf={release2DSBoK} />
            </Route>
            <Route path="/resources-edsf-release2-dspp">
              <PDFPage pdf={release2DSPP} />
            </Route>
            <Route path="/resources-edsf-release2-mcds">
              <PDFPage pdf={release2MCDS} />
            </Route>
            <Route path="/data-stewardship-professional-and-fair-competence-framework">
              <DSPandFAIR />
            </Route>
            <Route path="/releases">
              <Releases />
            </Route>
            <Route path="/curricula-design">
              <CurriculaDesign />
            </Route>
            <Route path="/deliverables">
              <Deliverables />
            </Route>
            <Route path="/projects">
              <Projects />
            </Route>
            <Route path="/presentations">
              <Presentations />
            </Route>
            <Route path="/publications">
              <Publications />
            </Route>
            <Route path="/books-and-articles">
              <Books />
            </Route>
            <Route path="/datasets">
              <Datasets />
            </Route>
            <Route path="/trainings-and-workshops">
              <Trainings />
            </Route>
          </Switch>
          <Cookiesnackbar
            cookiesSet={this.props.cookiesSet}
            cookiesEnabled={this.props.cookiesEnabled}
            trackingId={this.props.trackingId}
            onCookiesEnable={this.props.cookiesEnable}
            onCookiesDisable={this.props.cookiesDisable}
          />
        </Box>
      </Box>
    );
  }
}
