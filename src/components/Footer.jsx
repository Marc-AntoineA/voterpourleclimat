import React from "react"
import { Link } from "react-router-dom"
import {
  Segment,
  Button,
  Icon,
  Grid,
  Header,
  Container,
  List,
} from "semantic-ui-react"
import Social from "./Social"
import * as ROUTES from "../constants/routes"

const Footer = () => (
  <Segment inverted vertical style={{ padding: "5em 0em" }}>
    <Container>
      <Grid divided inverted stackable>
        <Grid.Row>
          <Grid.Column width={3}>
            <Header inverted as="h4" content="À propos" />
            <List link inverted>
              <List.Item as="a" href="mailto:app@mieuxvoter.fr">
                Nous contacter
              </List.Item>
              <List.Item as="a">Mentions légales</List.Item>
              <List.Item
                as="a"
                href="https://github.com/MieuxVoter/voterpourleclimat"
              >
                Code source
              </List.Item>
            </List>
          </Grid.Column>
          <Grid.Column width={3}>
            <Header inverted as="h4" content="Partenaires" />
            <List link inverted>
              <List.Item as="a"></List.Item>
              <List.Item as="a" href="https://www.mieuxvoter.fr">
                Mieux Voter
              </List.Item>
              <List.Item as="a" href="https://www.onestpret.com">
                On est prêt
              </List.Item>
              <List.Item as="a" href="https://reseauactionclimat.org">
                Réseau Action Climat
              </List.Item>
            </List>
          </Grid.Column>
          <Grid.Column width={3}>
            <Header inverted as="h4" content="Consultations" />
            <List link inverted>
              <List.Item></List.Item>
              <List.Item as={Link} to={ROUTES.SE_NOURRIR}>
                Se nourrir
              </List.Item>
              <List.Item as={Link} to={ROUTES.SE_NOURRIR}>
                Se loger
              </List.Item>
              <List.Item as={Link} to={ROUTES.SE_NOURRIR}>
                Se déplacer
              </List.Item>
              <List.Item as={Link} to={ROUTES.PRODUIRE}>
                Produire
              </List.Item>
              <List.Item as={Link} to={ROUTES.CONSOMMER}>
                Consommer
              </List.Item>
            </List>
          </Grid.Column>
          <Grid.Column width={7}>
            <Header as="h4" inverted>
              Partager le vote
            </Header>
            <Social />
            <p style={{ marginTop: "1em" }}>
              Soyons les plus nombreux possibles pour donner une légitimité
              démocratique aux mesures de la Convention Citoyenne pour le
              Climat.
            </p>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Container>
  </Segment>
)

export default Footer
