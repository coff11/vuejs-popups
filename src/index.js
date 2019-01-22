import Message from './components/Message.vue'
import Loading from './components/Loading.vue'

let $messageVm
let $loadingVm

export default {
  install(Vue) {
    if (!$messageVm) {
      const MessagePlugin = Vue.extend(Message)
      $messageVm = new MessagePlugin({
        el: document.createElement('div')
      })
      document.body.appendChild($messageVm.$el)
    }

    if (!$loadingVm) {
      const LoadingPlugin = Vue.extend(Loading)
      $loadingVm = new LoadingPlugin({
        el: document.createElement('div')
      })
      document.body.appendChild($loadingVm.$el)
    }

    $messageVm.show = false
    $loadingVm.show = false

    const loading = {
      show() {
        $loadingVm.show = true
      },
      hide() {
        $loadingVm.show = false
      }
    }

    const message = {
      show(text, time) {
        $messageVm.show = true
        $messageVm.text = text
        setTimeout(() => {
          this.hide()
        }, time?time:2000)
      },
      hide() {
        $messageVm.show = false
      }
    }

    if (!Vue.$_pop_loading) {
      Vue.$_pop_loading = loading
    }
    if (!Vue.$_pop_message) {
      Vue.$_pop_message = message
    }

    Vue.mixin({
      created() {
        this.$_pop_loading = Vue.$_pop_loading
        this.$_pop_message = Vue.$_pop_message
      }
    })

  }
}