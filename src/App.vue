<template>
  <div id="app">
    <Navigation :user="user" @logout="logout" />
    <router-view
      :user="user"
      :rooms="rooms"
      @logout="logout"
      @addRoom="addRoom"
      @deleteRoom="deleteRoom"
      @checkIn="checkIn"
    />
  </div>
</template>

<script>
import Firebase from 'firebase'
import db from './db'
import * as Navigation from './components/Navigation'

export default {
  name: 'App',
  data: function () {
    return {
      user: null,
      rooms: []
    }
  },
  methods: {
    logout: function () {
      Firebase.auth()
        .signOut()
        .then(() => {
          this.user = null
          this.$router.push('login')
        })
    },
    addRoom: function (payload) {
      db.collection('users').doc(this.user.uid).collection('rooms').add({
        name: payload,
        createdAt: Firebase.firestore.FieldValue.serverTimestamp()
      })
    },
    deleteRoom: function (payload) {
      db.collection('users').doc(this.user.uid).collection('rooms').doc(payload).delete()
    },
    checkIn: function (payload) {
      const roomRef = db
        .collection('users')
        .doc(payload.hostID)
        .collection('rooms')
        .doc(payload.roomID)

      roomRef.get().then(doc => {
        if (doc.exists) {
          roomRef
            .collection('attendees')
            .doc(this.user.uid)
            .set({
              displayName: payload.displayName,
              createdAt: Firebase.firestore.FieldValue.serverTimestamp()
            })
            .then(() => this.$router.push('/'))
        }
      })
    }
  },
  mounted() {
    Firebase.auth().onAuthStateChanged(user => {
      if (user) {
        this.user = user
        db.collection('users')
          .doc(this.user.uid)
          .collection('rooms')
          .onSnapshot(snapShot => {
            const snapData = []
            snapShot.forEach(doc => {
              snapData.push({
                id: doc.id,
                name: doc.data().name
              })
            })
            this.rooms = snapData.sort((a, b) => {
              return a.name.toLowerCase() < b.name.toLowerCase() ? -1 : 1
            })
          })
      }
    })
  },
  components: Navigation
}
</script>


<style lang="scss">
$primary: #5f2882;
@import 'node_modules/bootstrap/scss/bootstrap';
</style>