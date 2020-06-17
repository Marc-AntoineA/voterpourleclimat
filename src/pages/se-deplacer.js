import React from "react"
import { useUser } from "../services/User"
import Ballot from "../components/Ballot"
import * as TITLES from "../constants/titles"
import * as PROPOSALS from "../constants/proposals"

const SeDeplacerPage = () => {
  const { user } = useUser()
  console.log(user)
  if (!user) return <></>

  console.log("SE DEPLACER")
  const hasBallotd = user.seDeplacer.votes.length === 0
  return (
    <Ballot
      title={TITLES.SE_DEPLACER}
      hasBallotd={hasBallotd}
      proposals={PROPOSALS.SE_DEPLACER}
    />
  )
}

export default SeDeplacerPage;