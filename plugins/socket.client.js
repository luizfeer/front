import Vue from 'vue'
import VueSocketIO from 'vue-socket.io'
import SocketIO from 'socket.io-client'

const socketConnection = SocketIO('https://alemdoportaomovement.com/')

export default function () {
  Vue.use(new VueSocketIO({
    debug: true,
    connection: socketConnection,
    options: { path: '/api/' }
  })
  )
}
