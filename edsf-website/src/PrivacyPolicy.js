import React from "react";
import Typography from "@material-ui/core/Typography";
import Card from "@material-ui/core/Card";
import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Link from "@material-ui/core/Link";

const useStyles = makeStyles((theme) => ({
  contactCard: {
    width: "50%",
    height: "50%",
    display: "flex",
    flexDirection: "column",
    textAlign: "center",
    padding: "5%",
    overflow: "scroll",
    [theme.breakpoints.down("sm")]: {
      padding: "10%",
    },
  },
  contactBox: {
    height: "100%",
    width: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    paddingTop: "3%",
  },
  title: {
    paddingBottom: "3%",
  },
}));

export default function PrivacyPolicy() {
  const classes = useStyles();

  return (
    <Box className={classes.contactBox}>
      <Card variant="outlined" className={classes.contactCard}>
        <Typography variant="h4" className={classes.title}>
          Privacy Policy
        </Typography>
        <Typography variant="caption" align="left" className={classes.text}>
          We do not store any personal information via our website unless
          anonymized data about user behaviour that is retrieved via external
          tools, as described below. All the data we retrieve via external tools
          is analyzed solely for educational purposes within the EDISON
          community and the EU-funded MATES project, and will not be handed out
          to any other parties.
        </Typography>
        <Typography variant="h6">
          The use of external tools on our website
        </Typography>
        <Typography variant="subtitle1" align="left">
          Google Analytics
        </Typography>
        <Typography variant="caption" align="left">
          {" "}
          <Typography variant="caption" align="left" className={classes.text}>
            We have integrated Google Analytics into our website with an
            IP-anonymization function, which allow us to evaluate user behavior
            and user interests for educational purposes. If the use of Google
            Analytics cookies has been accepted by the user, we retrieve
            geolocational data of users - the country from where the website has
            been requested. This can help us to adapt our educational offer to
            local interests, e.g. by providing courses with a specific focus on
            a certain country and its infrastructure if there is a high
            interest. Further, we retrieve the route travel of subpages within
            our website - for how long and from which subpage to which subpage
            users move. This can help us to analyze which topics or courses are
            of most interest for users, being potential course attendees.
            Finally, we retrieve data about clicked links that redirect to
            external websites - for example, as it is the case for educational
            material offered and uploaded via external providers. This can help
            us to know which course material is most often used and looked up,
            what can eventually motivate us to broadcast the course material on
            more open platforms, such as Youtube.
            <br /> <br />
            Google Analytics is a web analytics service. Web analysis is the
            gathering, collection and analysis of data about the behavior of
            visitors to websites. Among other things, a web analysis service
            collects data on which website a data subject has come to a website
            from so-called referrers, which or how often subpages of the website
            were accessed and for which time period a subpage was viewed. A web
            analysis is mainly used to optimize a website and for the
            cost-benefit analysis of Internet advertising. However, we do not
            use it for any advertising or commercial purposes, but solely for
            educational purposes. The operator of the Google Analytics component
            is Google Inc., 1600 Amphitheatre Pkwy, Mountain View, CA
            94043-1351, USA. Google Analytics uses cookies. The information
            generated by the cookie about your use of this website is usually
            transmitted to a Google server in the USA and stored there. Google
            might transfer the personal information collected via this technical
            procedure to third parties. As IP anonymization is activated on our
            website, your IP address will be shortened by Google within Member
            States of the European Union or other states in agreement with the
            European Economic Area. Only in exceptional cases, the full IP
            address is sent to and shortened by a Google server in the USA. On
            behalf of the website operator, Google can use this information to
            evaluate your website use, compile reports on your activity and
            provide further services related to the website use to us. The IP
            address transferred through your browser to Google Analytics will
            not be combined with other data held by Google.
            <br /> <br />
            You can prevent the storage of cookies by a corresponding setting of
            your browser software; except for embedded Twitter components, you
            will be able to use all the features of this website to the fullest
            extent possible. In addition, you may prevent the collection of the
            data generated by the cookie and related to your use of the website
            including your IP address by Google as well as the processing of
            this data by Google by downloading and installing the browser
            plug-in available under the following{" "}
            <a href="https://tools.google.com/dlpage/gaoptout?hl=en">link</a>.
            This browser add-on informs Google Analytics via JavaScript that no
            data and information about website visits may be transmitted to
            Google Analytics. In addition, a set cookie by Google Analytics can
            be deleted at any time via your Internet browser or other software
            programs. Further information and Google‘s applicable privacy
            regulations can be found{" "}
            <a href="https://policies.google.com/privacy?hl=en">here</a> and{" "}
            <a href="https://marketingplatform.google.com/about/"> here</a>.{" "}
            <br /> <br />
          </Typography>{" "}
        </Typography>
        <Typography variant="subtitle1" align="left">
          Twitter
        </Typography>
        <Typography variant="caption" align="left">
          Our website employs components provided by Twitter, which is a service
          of Twitter Inc., 795 Folsom St., Suite 600, San Francisco, CA 94107,
          USA. If you accept that the employed Twitter component is displayed,
          each time you visit our website this component causes your browser to
          download a corresponding representation of the Twitter component.
          Through this process, Twitter has information about the page of our
          website which is currently being visited. You can undo your choice by
          deleting set cookies and your browser history. We have no control over
          the information collected by Twitter, nor about the amount of data
          collected by Twitter. To our knowledge, Twitter collects the URL of
          the accessed website and the user's IP address, but this information
          is not used for purposes other than the presentation of the Twitter
          component. Further information can be found in the{" "}
          <a href="https://twitter.com/en/privacy">privacy policy</a> of
          Twitter.
        </Typography>
        {/* <Typography variant="h6">
          1. What is the personal information we collect?
        </Typography>
        <Typography variant="caption" align="left" className={classes.text}>
          If users give consent to our use of Google Analytics cookies, we
          collect and store geolocational data - the country from where the
          website query was done - in order to adapt our educational programme
          to the potential participants' background. For example, if we observe
          a high request for specific training material from a certain country,
          we can design specific courses that relate close to this country's
          involvement on big data technologie education.
        </Typography>
        <Typography variant="caption" align="left" className={classes.text}>
          Further, we collect and store the amount of clicks for internal and
          external links. This gives us an impression on which sites are
          considered interesting or useful by our target audience, and allows us
          to put more focus on the highly-demanded content.
        </Typography>
        <Typography variant="caption" align="left">
          For internal links, we track the page routing of a user with Google
          Analytics - meaning that we gain insight on how users travel between
          internal pages. Here, also the amount of time spent on a specific page
          is saved.
        </Typography>
        <Typography variant="h6">
          2. What are the external services we use?
        </Typography>
        <Typography variant="caption" align="left" className={classes.text}>
          We have integrated Google Analytics into our website, which allow us
          to evaluate user behavior or to establish links with other websites.
          Google Analytics The controller has integrated the component Google
          Analytics with an anonymization functino on this website. Google
          Analytics is a web analytics service. Web analysis is the gathering,
          collection and analysis of data about the behavior of visitors to
          websites. Among other things, a web analysis service collects data on
          which website a data subject has come to a website from so-called
          referrers, which subpages of the website were accessed or how often
          and for which period of time a subpage was viewed. A web analysis is
          mainly used to optimize a website and for the cost-benefit analysis of
          Internet advertising. The operator of the Google Analytics component
          is Google Inc., 1600 Amphitheatre Pkwy, Mountain View, CA 94043-1351,
          USA. Google Analytics uses cookies. The information generated by the
          cookie about your use of this website is usually transmitted to a
          Google server in the USA and stored there. Google might transfer the
          personal information collected via this technical procedure to third
          parties. As IP anonymization is activated on our website, your IP
          address will be shortened by Google within Member States of the
          European Union or other states in agreement with the European Economic
          Area. Only in exceptional cases, the full IP address is sent to and
          shortened by a Google server in the USA. On behalf of the operator of
          the website, Google will use this information to evaluate your use of
          the website, compile reports on website activity and to provide
          further services related to website and internet use to us. The IP
          address transferred through your browser to Google Analytics will not
          be combined with other data held by Google. In addition, this website
          uses the Analytics feature UserID to track interaction data. This User
          ID will be additionally anonymized and encrypted and will not be
          linked with other data. You can prevent the storage of cookies by a
          corresponding setting of your browser software; however, please note
          that if you do this, you may not be able to use all the features of
          this website to the fullest extent possible. In addition, you may
          prevent the collection of the data generated by the cookie and related
          to your use of the website including your IP address by Google as well
          as the processing of this data by Google by downloading and installing
          the browser plug-in available under the following{" "}
          <a href="https://tools.google.com/dlpage/gaoptout?hl=en">link</a>.
          This browser add-on informs Google Analytics via JavaScript that no
          data and information about website visits may be transmitted to Google
          Analytics. In addition, a cookie already set by Google Analytics can
          be deleted at any time via the Internet browser or other software
          programs. Further information and Google‘s applicable privacy
          regulations can be found{" "}
          <a href="https://policies.google.com/privacy?hl=en">here</a> and{" "}
          <a href="https://marketingplatform.google.com/about/"> here</a>. The
          latter link provides a further explanation of Google Analytics. Our
          website also uses Google Analytics performance reports relating to
          demographics and interests and reports on Google Display Network
          impressions. You can disable Google Analytics for display advertising
          and customize the ads on the Google Display Network by visiting the ad
          settings at this{" "}
          <a href="https://www.google.com/ads/preferences?continue=aHR0cHM6Ly9hZHNzZXR0aW5ncy5nb29nbGUuY29tL2Fub255bW91cw%3D%3D">
            link
          </a>
          .
        </Typography> 
        */}
      </Card>
    </Box>
  );
}