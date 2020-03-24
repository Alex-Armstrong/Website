import "./styles.css";

const pages = {
  bio: {
    url: "/bio",
    header: "Hi! I'm Alex"
  },
  pics: {
    url: "/pics",
    header: "Here are some dope pics I took"
  },
  index: {
    url: "/",
    header: "Welcome to this sick ass site!"
  },
  sam: {
    url: "/sam",
    header: "Sma was here",
  },
  boner: {
    url: "/boner",
    header: "Check out my boner bro",
  }
};

const getPageInfo = path => {
  const DefaultPage = "index";
  let page = Object.keys(pages).find(pageName => {
    return pages[pageName].url === path;
  });

  if (!page) {
    page = DefaultPage;
  }

  return pages[page];
};
// const page = "pics";
const path = window.location.pathname;
const page = getPageInfo(path);

document.getElementById("app").innerHTML = `
<h1>${page.header}</h1>
<div>
  We use Parcel to bundle this sandbox, you can find more info about Parcel
  <a href="https://parceljs.org" target="_blank" rel="noopener noreferrer">here</a>.
  <br/><br/>path: "${path}"
</div>
`;
