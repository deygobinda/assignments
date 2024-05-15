

const states = [
  {
    name: "Gobinda",
    description: "Web developer",
    interest : ["React", "Node.js" , "MongoDB"],
    socialLink: [{
      platform: "LinkedIn",
      link: "https://www.linkedin.com/in/deygobinda"
    }, {
      platform: "Github",
      link: "https://github.com/deygobinda"
    }]
  }, {
    name: "Gobinda",
    description: "Web developer",
    interest : ["React", "Node.js" , "MongoDB"],
    socialLink: [{
      platform: "LinkedIn",
      link: "https://www.linkedin.com/in/deygobinda"
    }, {
      platform: "Github",
      link: "https://github.com/deygobinda"
    }]
  }, {
    name: "Gobinda",
    description: "Web developer",
    interest : ["React", "Node.js" , "MongoDB"],
    socialLink: [{
      platform: "LinkedIn",
      link: "https://www.linkedin.com/in/deygobinda"
    }, {
      platform: "Github",
      link: "https://github.com/deygobinda"
    }]
  }, {
    name: "Gobinda",
    description: "Web developer",
    interest : ["React", "Node.js" , "MongoDB"],
    socialLink: [{
      platform: "LinkedIn",
      link: "https://www.linkedin.com/in/deygobinda"
    }, {
      platform: "Github",
      link: "https://github.com/deygobinda"
    }]
  }
]


function App() {
  return (
    <div style={{
      display: "flex",
      width: "100%",
      height: "100vh",
      justifyContent: "center",
      alignItems: "center",
      gap: "30px"

    }}>
      {states.map(state => <Card holder={state}/>)}
    </div>
  )
}

function Card({ holder }) {
  const media = holder.socialLink
  return (
    <div key={holder.name}>
      <div style={{
        border: "1px solid gray",
        padding: "10px",
        borderRadius: "5px",
        width: "300px",
        boxShadow: "2px 3px 3px 2px gray"
      }}>
        <h1>{holder.name}</h1>
        <p>{holder.description}</p>
        <h2>Interests</h2>
        <div style={{
          listStyle : "none"
        }}>
          {holder.interest.map(element => {
            return(
              <li key={element}>{element}</li>
            )
          })}
        </div>
        <div style={{
          display: "flex",
          gap: "5px"
        }}>
          {media.map(e => <SocialMediaButton prop={e}/>)}
        </div>
      </div>
    </div>
  )
}

function SocialMediaButton({ prop }) {
  return (
    <div style={{
      cursor : "pointer"
    }}>
      <a href={prop.link}>
        <button style={{
          padding: "10px",
          background: "rgb(0, 115, 246)",
          border: "none",
          borderRadius: "2px",
          color: "#fff",
          width: "100px"
        }}>{prop.platform}</button>
      </a>
    </div>
  )
}





export default App;