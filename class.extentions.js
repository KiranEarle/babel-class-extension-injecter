import Notification from './Notification'

module.exports = {
  JourneyStore: {
    notification: new Notification(),
    strings: 'strings',
    objects: {},
  },
  RedStore: {
    strings: 'strings',
    notification: new Notification()
  },
}