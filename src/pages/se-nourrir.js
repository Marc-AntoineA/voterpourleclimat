import React from "react"
import Ballot from "../components/Ballot"
import { SE_NOURRIR as theme } from "../constants/themes"

const SeNourrirPage = () => {
  return (
    <Ballot
      title={theme.title}
      icon={theme.icon}
      name={theme.name}
      description={theme.description}
      proposals={theme.proposals}
      objectives={theme.objectives}
      collectionName={theme.collection}
      groupUrl={theme.groupUrl}
    />
  )
}

export default SeNourrirPage
