import reactDOM from "react-dom"

function App(){
  return <Subtitle />
}

function Subtitle(){
  return <h2>Componenete Subtitle</h2>
}

reactDOM.render(
  <App />,
  document.getElementById('root'),
)