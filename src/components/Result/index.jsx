import React from "react"
import * as CONSTANTS from "../../constants"
import { Label, Grid, Button, Card } from "semantic-ui-react"
import "./index.css"

const Legend = () => (
  <>
    <span class="badge" style={{ backgroundColor: "rgb(1, 152, 18)"}}>
      Excellent
    </span>
    <span class="badge" style={{ backgroundColor: "rgb(107, 202, 36)"}}>
      Bien
    </span>
    <span class="badge" style={{ backgroundColor: "rgb(255, 178, 0)"}}>
      Passable
    </span>
    <span class="badge" style={{ backgroundColor: "rgb(255, 93, 0)"}}>
      Mauvais
    </span>
    <span class="badge" style={{ backgroundColor: "rgb(178, 6, 22)"}}>
      À rejeter
    </span>
  </>
)

const GaugeView = (grades) => {
  const nbPasDAvis = grades[0];
  grades = grades.slice(1);
  const nbVotes = grades.reduce((a, b) => a + b);

  return (
    <>
    <div class='median'></div>
    <div class='median-label'>50%</div>
    <table style={{ width: "100%" }}>
      <tbody>
        <tr>
        {grades
          .reverse()
          .map((value, index) => {
            if (value > 0) {
              const percent = (value * 100) / nbVotes;
              const width = index === 0 ? "auto" : (percent + "%")
              return (
                <td
                key={index}
                className={ CONSTANTS.grades[index].color + ' result' }
                style={{ width: width }}
                >
                { Math.round(10*percent)/10 }%
                </td>
              );
            } else {
              return null;
            }
          })
        }
        </tr>
      </tbody>
    </table>
    <span style={{ fontSize: "0.8em" }}>
      {nbVotes} avis exprimés ; { nbPasDAvis} mentions « Pas d'avis »
    </span>
    </>
  )
}

const majorityValue = ( grades ) => {
  grades = grades.slice(0).reverse();
  const sum = grades.reduce((a, b) => a + b);
  let currentSum = 0;
  for (let k = 0; k < grades.length; ++k) {
    currentSum += grades[k];
    if (currentSum > sum/2) return CONSTANTS.grades[k].name;
  }
  return CONSTANTS.grades[grades.length].name;
}

const CardResult = ({ measure, grades }, rank) => {
  console.log(grades);
  console.log('measure', measure)


  return (
    <Card fluid>
      <Card.Content>
        <Card.Header style={{ marginBottom: "0.5em" }}>
          <Grid>
            <Grid.Column width={2}>
                <Label className="basic teal" ribbon>
                  <span style={
                    { backgroundColor: "#03b37f",
                    color: "white",
                    padding: "4px",
                    fontSize: "17px",
                    borderRadius: "10%",
                  }}>{ rank }</span>
                   <span
                    style={{ fontsize: "1.3em", fontweight: "normal" }}
                  >
                  { majorityValue(grades) }
                  </span>
                </Label>
              </Grid.Column>
              <Grid.Column width={14}
                style={{ fontSize:"0.8em", lineHeight: "normal", fontWeight:"normal" }}>
                { measure }
            </Grid.Column>
          </Grid>
        </Card.Header>

        <Card.Description>
          { GaugeView(grades) }
        </Card.Description>
      </Card.Content>
    </Card>
  )
}

const Result = ({ results }) => (
  <>
    { Legend() }
    {results.map((measure, i) =>
      CardResult(measure, i + 1)
    )}
  </>
)

export default Result
