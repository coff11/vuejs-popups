import Message from './components/Message.vue'
import Loading from './components/Loading.vue'
import Modal from './components/Modal.vue'

let $messageVm,
    $loadingVm,
    $modalVm

export default {
  install(Vue, options) {
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

    if (!$modalVm) {
      const ModalPlugin = Vue.extend(Modal)
      $modalVm = new ModalPlugin({
        el: document.createElement('div')
      })
      document.body.appendChild($modalVm.$el)
    }

    $messageVm.show = false
    $loadingVm.show = false
    $modalVm.show = false

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
      },
      hide() {
        $messageVm.show = false
      }
    }

    const modal = {
      show() {
        $modalVm.show = true
      },
      hide() {
        $modalVm.show = false
      }
    }

    if (!Vue.$loading) {
      Vue.$loading = loading
    }
    if (!Vue.$message) {
      Vue.$message = message
    }
    if (!Vue.$modal) {
      Vue.$modal = modal
    }

    Vue.mixin({
      created() {
        this.$loading = Vue.$loading
        this.$message = Vue.$message
        this.$modal = Vue.$modal
      }
    })

  }
}