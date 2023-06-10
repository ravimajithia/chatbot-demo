import style from './room.scss'
import { retrievePong } from '@utils/helper'

class ChatRoom extends HTMLElement {
  constructor () {
    super()
    // Generate the DOM for the chat box
    this.dom = this.generateDOM()

    // Create a shadow dom
    const shadowDOM = this.attachShadow({ mode: 'open' })
    shadowDOM.appendChild(this.dom.content.cloneNode(true))

    // Method binding
    this.sendMessage = this.sendMessage.bind(this)
    this.addMessageToList = this.addMessageToList.bind(this)
    this.channel = null
  }

  /**
   * Called when the element is added to the DOM.
   * @returns {void}
   */
  connectedCallback () {
    const textArea = this.shadowRoot.querySelector('textArea')
    // textArea.disabled = true
    textArea.onkeypress = this.sendMessage
  }

  /**
   * Called when user tyoe the message and press enter.
   * @param {Event} e
   * @returns {void}
   */
  sendMessage (e) {
    // get message
    const textArea = this.shadowRoot.querySelector('textArea')
    if (e.key === 'Enter' && textArea.value) {
      e.preventDefault()
      this.addMessageToList({ body: textArea.value, author: 'm1' })
      retrievePong(textArea.value).then(
        (data) => {
          this.addMessageToList({ body: data.body, author: data.author })
        })
      textArea.value = ''
    }
  }

  /**
   * Add the message to the list.
   * @param {Object} pongMessage
   * @returns {void}
   */
  addMessageToList (pongMessage) {
    const item = document.createElement('chat-message')
    item.innerHTML = pongMessage.body
    item.setAttribute('msgType', pongMessage.author === 'admin' ? 'msg-receive' : 'msg-send')
    // Add it to the light DOM
    this.appendChild(item)
  }

  /**
   * Generate the DOM for the chat box.
   * @returns {HTMLTemplateElement}
   */
  generateDOM () {
    const template = document.createElement('template')
    template.innerHTML = `
      <style>${style.toString()}</style>
      <div class="chat-room">
        <div class="chat-head">
          <h2>Welcom to my chat room</h2>
        </div>
        <div class="chat-body">
          <div class="msg-insert">
            <slot></slot>
          </div>
        </div>
        <div class="chat-text">
          <textarea placeholder="Suggestion - start with hi"></textarea>
        </div>
      </div>
    `
    return template
  }
}

export default ChatRoom
