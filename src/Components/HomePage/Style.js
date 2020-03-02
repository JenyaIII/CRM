import Background from "./img/proxyclick-visitor-management-system-3h7j04-6y3Q-unsplash.jpg";

const classes = {
  homepageHeader: {
    height: "50vh",
    background: `url(${Background})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontSize: "60px"
  },

  logo: {
    fontFamily: "'Indie Flower', cursive",
    backgroundColor: "rgba(163, 83, 83, 0.6)",
    color: "white"
  },

  sectionQuote: {
    height: "6vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  },

  footerblock: {
    padding: "0"
  },

  sectionCards: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  },

  sectionContainer: {
    alignSelf: "flex-end"
  },

  // footer: {
  //   height: "6vh",
  //   display: "flex",
  //   justifyContent: "center",
  //   alignItems: "center",
  //   backgroundColor: "#ee6e73",
  //   fontFamily: "'Indie Flower', cursive",
  //   color: "white",
  //   fontSize: "20px"
  //   // position: "relative",
  //   // top: "27px"
  // },

  footerCopyright: {
    display: "flex",
    justifyContent: "space-around",
    height: "9vh"
  },

  pageFooter: {
    paddingTop: "0px",
    position: "relative",
    top: "60px"
  },

  icon: {
    margin: "20px 0",
    color: "#ee6e73",
    fontSize: "7rem",
    display: "block"
  },

  header: {
    fontSize: "1.7rem",
    fontWeight: "500",
    marginTop: "5px",
    marginBottom: "0"
  },

  content: {
    textAlign: "center",
    verticalAlign: "middle",
    maxWidth: "28rem",
    margin: "0 auto"
  },

  cardBlock: {
    padding: "0px 3.75rem"
  }
};

export default classes;
