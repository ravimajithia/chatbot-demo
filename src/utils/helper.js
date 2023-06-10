import { ping, pong, random } from '@utils/responses'

/**
 * Retrieve the pong message.
 * @param {string} userMessage
 * @returns {Promise}
 */
export function retrievePong (userMessage) {
  // stripe the message
  userMessage = userMessage.replace(/[^\w\s]/gi, '').toLowerCase()

  let message = ''; let responseFound = false
  // compare the message with the ping message
  for (let i = 0; i < ping.length; i++) {
    for (let j = 0; j < pong.length; j++) {
      if (ping[i][j] === userMessage) {
        message = pong[i][Math.floor(Math.random() * pong[i].length)]
        responseFound = true
        break
      }
    }
    if (responseFound) {
      break
    }
  }

  // if the message is not in the ping message, send the random response
  message = message || random[Math.floor(Math.random() * random.length)]
  return generateMessage(message)
}

/**
 * Generate the message with delay.
 * @param {string} message
 * @returns {Promise}
 */
function generateMessage (message) {
  return new Promise(resolve => {
    // keep it real ;)
    setTimeout(() => {
      resolve({
        body: message,
        author: 'admin'
      })
    }, 2000)
  })
}
