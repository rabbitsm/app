const electron = require('electron')
const fs = require('fs')
const path = require('path')

class Store {
  constructor(opts) {
    this.default = opts.defaults || {}

    const userDataPath = (electron.app || electron.remote.app).getPath('userData')

    this.path = path.join(userDataPath, opts.configName + '.json')

    try {
      this.data = JSON.parse(fs.readFileSync())
    } catch (err) {
      this.data = this.default
      fs.writeFileSync(this.path, JSON.stringify(this.data))
    }
  }

  get(key) {
    return this.data[key]
  }

  set(key, val) {
    this.data[key] = val

    fs.writeFileSync(this.path, JSON.stringify(this.data))
  }
}

module.exports = Store