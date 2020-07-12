import React, { useState } from "react"
import { Link } from "react-router-dom"
import {
  Icon,
  Segment,
  Progress,
  Grid,
  Image,
  Header,
  Responsive,
  Button,
} from "semantic-ui-react"
import "../index.css"
import styled from "styled-components"
import * as themes from "../constants/themes"
import * as proposals from "../constants/objectives"

import Result from "../components/Result/"

import gradesSeDeplacer from "../assets/results/seDeplacer.json"
import gradesSeNourrir from "../assets/results/seNourrir.json"
import gradesConsommer from "../assets/results/consommer.json"
import gradesProduire from "../assets/results/produire.json"
import gradesConstitution from "../assets/results/constitution.json"
import gradesSeLoger from "../assets/results/seLoger.json"

const LandingPage = () => (
  <>
  {
    // <Segment
    //   style={{ padding: "3em 0em", textAlign: "justify", fontSize: "1.33em" }}
    //   vertical
    // >
    //   <Grid container stackable>
    //     <Grid.Row>
    //       <Grid.Column width={16}>
    //         <Header>Résultats de la consultation</Header>
    //         <p>
    //           Paragraphe d'introduction
    //         </p>
    //       </Grid.Column>
    //     </Grid.Row>
    //   </Grid>
    // </Segment>
  }

    <Segment
      style={{ padding: "3em 0em", textAlign: "justify", fontSize: "1.33em" }}
      vertical
    >
      <Grid container stackable>
        <Grid.Row>
          <Grid.Column width={16}>
            <Header>Se Déplacer</Header>
            <Result results={ gradesSeDeplacer } />
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Segment>
    {
    // <Segment
    //   style={{ padding: "3em 0em", textAlign: "justify", fontSize: "1.33em" }}
    //   vertical
    // >
    //   <Grid container stackable>
    //     <Grid.Row>
    //       <Grid.Column width={16}>
    //         <Header>Se Nourrir</Header>
    //         <Result results={ gradesSeNourrir } />
    //       </Grid.Column>
    //     </Grid.Row>
    //   </Grid>
    // </Segment>
    //
    // <Segment
    //   style={{ padding: "3em 0em", textAlign: "justify", fontSize: "1.33em" }}
    //   vertical
    // >
    //   <Grid container stackable>
    //     <Grid.Row>
    //       <Grid.Column width={16}>
    //         <Header>Produire et Travailler</Header>
    //         <Result results={ gradesProduire } />
    //       </Grid.Column>
    //     </Grid.Row>
    //   </Grid>
    // </Segment>
    //
    // <Segment
    //   style={{ padding: "3em 0em", textAlign: "justify", fontSize: "1.33em" }}
    //   vertical
    // >
    //   <Grid container stackable>
    //     <Grid.Row>
    //       <Grid.Column width={16}>
    //         <Header>Consommer</Header>
    //         <Result results={ gradesConsommer } />
    //       </Grid.Column>
    //     </Grid.Row>
    //   </Grid>
    // </Segment>
    //
    // <Segment
    //   style={{ padding: "3em 0em", textAlign: "justify", fontSize: "1.33em" }}
    //   vertical
    // >
    //   <Grid container stackable>
    //     <Grid.Row>
    //       <Grid.Column width={16}>
    //         <Header>Se loger</Header>
    //         <Result results={ gradesSeLoger } />
    //       </Grid.Column>
    //     </Grid.Row>
    //   </Grid>
    // </Segment>
    //
    // <Segment
    //   style={{ padding: "3em 0em", textAlign: "justify", fontSize: "1.33em" }}
    //   vertical
    // >
    //   <Grid container stackable>
    //     <Grid.Row>
    //       <Grid.Column width={16}>
    //         <Header>Constitution</Header>
    //         <Result results={ gradesConstitution } />
    //       </Grid.Column>
    //     </Grid.Row>
    //   </Grid>
    // </Segment>
  }
  </>
)

export default LandingPage
