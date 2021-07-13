import App from './src/js/App'
import '../styles/style.css'

const Index = async () => {
  const root = document.querySelector('#app')
  root.innerHTML = await App.render()
  await App.after_render()
}
Index()
