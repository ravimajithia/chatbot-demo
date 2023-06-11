import style from './message.scss'

class ChatMessage extends HTMLElement {
  constructor () {
    super()

    // Generate the DOM for the chat box
    this.dom = this.generateDOM()

    // Add a shadow DOM
    const shadowDOM = this.attachShadow({ mode: 'open' })
    // Render the template
    shadowDOM.appendChild(this.dom.content.cloneNode(true))
  }

  /**
   * Called when the element is added to the DOM.
   * @returns {void}
   */
  connectedCallback () {
    const msgType = this.getAttribute('msgType')
    if (msgType) {
      const div = this.shadowRoot.querySelector('div')
      div.setAttribute('class', msgType)
    }
  }

  /**
   * Generate the DOM for the chat box.
   * @returns {HTMLTemplateElement}
   */
  generateDOM () {
    const template = document.createElement('template')
    template.innerHTML = `
      <style>${style.toString()}</style>
      <div><slot></slot></div>
    `
    return template
  }
}

export default ChatMessage
