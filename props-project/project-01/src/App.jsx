import Card from "./Components/Card";

function App() {
  const jobOpenings = [
    {
      brandLogo: "https://img.icons8.com/3d-fluency/1200/amazon.jpg",

      companyName: "Amazon",
      datePosted: "5 days ago",
      post: "Software Development Engineer",
      tag1: "Full Time",
      tag2: "Junior Level",
      pay: "$1200/month",
      location: "Mumbai, India",
    },
    {
      brandLogo:
        "https://imagepng.org/wp-content/uploads/2019/08/google-icon.png",
      companyName: "Google",
      datePosted: "2 weeks ago",
      post: "Frontend Developer",
      tag1: "Full Time",
      tag2: "Mid Level",
      pay: "$1500/month",
      location: "Bangalore, India",
    },
    {
      brandLogo:
        "https://purepng.com/public/uploads/large/purepng.com-microsoft-logo-iconlogobrand-logoiconslogos-251519939091wmudn.png",
      companyName: "Microsoft",
      datePosted: "1 week ago",
      post: "Backend Engineer",
      tag1: "Full Time",
      tag2: "Senior Level",
      pay: "$2200/month",
      location: "Hyderabad, India",
    },
    {
      brandLogo:
        "https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/flipkart-icon.png",

      companyName: "Flipkart",
      datePosted: "3 days ago",
      post: "Data Analyst",
      tag1: "Part Time",
      tag2: "Junior Level",
      pay: "$800/month",
      location: "Pune, India",
    },
    {
      brandLogo:
        "https://tse1.mm.bing.net/th/id/OIP.CnlidGvyCZgGnztLkfgwUAHaHa?pid=Api&P=0&h=180",

      companyName: "Netflix",
      datePosted: "10 weeks ago",
      post: "UI/UX Designer",
      tag1: "Contract",
      tag2: "Senior Level",
      pay: "$2500/month",
      location: "Remote",
    },
    {
      brandLogo:
        "https://static.vecteezy.com/system/resources/previews/020/336/451/large_2x/infosys-logo-infosys-icon-free-free-vector.jpg",

      companyName: "Infosys",
      datePosted: "6 days ago",
      post: "Java Developer",
      tag1: "Full Time",
      tag2: "Junior Level",
      pay: "$900/month",
      location: "Chennai, India",
    },
    {
      brandLogo:
        "https://brandlogovector.com/wp-content/uploads/2022/10/TCS-Icon-Logo-PNG.png",

      companyName: "TCS",
      datePosted: "4 weeks ago",
      post: "System Engineer",
      tag1: "Full Time",
      tag2: "Mid Level",
      pay: "$1100/month",
      location: "Delhi, India",
    },
    {
      brandLogo:
        "https://static.vecteezy.com/system/resources/previews/013/949/182/non_2x/set-of-popular-adobe-apps-icons-free-vector.jpg",

      companyName: "Adobe",
      datePosted: "2 days ago",
      post: "Product Designer",
      tag1: "Full Time",
      tag2: "Senior Level",
      pay: "$2100/month",
      location: "Noida, India",
    },
    {
      brandLogo:
        "https://tse4.mm.bing.net/th/id/OIP.Vu9HA8Itmob9N6Yi8rvafAHaHa?pid=Api&P=0&h=180",

      companyName: "Uber",
      datePosted: "8 days ago",
      post: "Mobile App Developer",
      tag1: "Full Time",
      tag2: "Mid Level",
      pay: "$1700/month",
      location: "Gurgaon, India",
    },
    {
      brandLogo:
        "https://static.vecteezy.com/system/resources/previews/018/781/194/original/startup-icon-creative-simple-symbol-from-fintech-collection-line-startup-icon-for-templates-web-design-and-infographics-vector.jpg",

      companyName: "Stealth Startup",
      datePosted: "12 days ago",
      post: "AI/ML Engineer",
      tag1: "Full Time",
      tag2: "Junior Level",
      pay: "$1400/month",
      location: "Remote",
    },
  ];
  return (
    <div className="parent">
      {jobOpenings.map((elem, idx) => {
        return (
          <div key={idx}>
            <Card
              brandLogo={elem.brandLogo}
              companyName={elem.companyName}
              datePosted={elem.datePosted}
              post={elem.post}
              tag1={elem.tag1}
              tag2={elem.tag2}
              pay={elem.pay}
              location={elem.location}
            />
          </div>
        );
      })}
    </div>
  );
}

export default App;
