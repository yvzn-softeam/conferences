import { fileURLToPath, URL } from 'node:url'
import { defineConfig, Plugin } from 'vite'
import vue from '@vitejs/plugin-vue'

// @ts-ignore
import { generateNoScriptContent } from './src/noscript'

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
	const githubPagesBasePath = '/conferences/'
	return {
		base: mode === 'production' ? githubPagesBasePath : '/',
		plugins: [vue(), noScriptContent()],
		resolve: {
			alias: {
				'@': fileURLToPath(new URL('./src', import.meta.url))
			}
		}
	}
})

function noScriptContent(): Plugin {
	return {
		name: 'generate-no-script-content',
		transformIndexHtml(html) {
			let result = html

			const noScriptContent = generateNoScriptContent()
			result = result.replace(
				'<noscript>',
				`<noscript><main class=noscript>${noScriptContent}</main>`
			)
			return result
		}
	}
}
