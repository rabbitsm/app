import { join } from 'path'
import { format } from 'url'
import { app } from 'electron'
import { createWindow, enableHotReload } from './helpers'
import Store from '../storage'

const env = require('env')
const isProd = (env.name === 'production')

const store = new Store({
  configName: 'user-preference',
  defaults: {
    windowBounds: {
      width: 800,
      height: 600
    }
  }
})

if (!isProd) {
  enableHotReload()

  const userDataPath = app.getPath('userData')
  app.setPath('userData', `${userDataPath} (${env.name})`)
}

app.on('ready', () => {
  let { width, height } = store.get('windowBounds')
  console.log(width, height)
  const mainWindow = createWindow('main', {
    width,
    height
  })

  const homeUrl = isProd ? format({
    pathname: join(__dirname, 'signup/index.html'),
    protocol: 'file:',
    slashes: true
  }) : 'http://localhost:8888/signup'

  mainWindow.loadURL(homeUrl)
})

app.on('window-all-closed', () => {
  app.quit()
})
