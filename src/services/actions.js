import firebase from "./Firebase"
import { useUser, useAuth } from "./User"

export const castVote = (votes, collectionName, uid) => {
  /* Store vote in the database */
  console.log(collectionName, uid, votes)
  const voteDoc = firebase.firestore().collection(collectionName).doc(uid)
  const map = {}
  for (const vote of votes) {
    map[vote.proposal] = vote.vote
  }
  voteDoc.set(map)
}

export const loadVote = (collectionName, uid) => {
  /* Store vote in the database */
  return firebase.firestore().collection(`votes/${collectionName}`).doc(uid)
}
