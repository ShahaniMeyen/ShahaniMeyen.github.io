import { defineConfig } from 'vite'
import { readFileSync } from 'node:fs'
import { fileURLToPath } from 'node:url'

const portfolioPath = fileURLToPath(new URL('./src/portfolio.html', import.meta.url))

function portfolioEntry() {
  return {
    name: 'portfolio-html-entry',
    enforce: 'pre',
    transformIndexHtml() {
      return readFileSync(portfolioPath, 'utf8')
    },
    configureServer(server) {
      server.watcher.add(portfolioPath)
      server.watcher.on('change', (file) => {
        if (file === portfolioPath) {
          server.ws.send({ type: 'full-reload', path: '*' })
        }
      })
    },
  }
}

export default defineConfig({
  base: './',
  plugins: [portfolioEntry()],
})
