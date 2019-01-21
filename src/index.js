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
      show(text) {
        $messageVm.show = true
        $messageVm.text = text
        setTimeout(() => {
          this.hide()
        }, 2000)
      },
      hide() {
        $messageVm.show = false
      }
    }

    if (!Vue.$loading) {
      Vue.$loading = loading
    }
    if (!Vue.$message) {
      Vue.$message = message
    }

    Vue.mixin({
      created() {
        this.$loading = Vue.$loading
        this.$message = Vue.$message
      }
    })

  }
}