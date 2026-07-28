import { createServer, version as viteVersion } from "vite"
import { ViteNodeRunner } from "vite-node/client"
import { ViteNodeServer } from "vite-node/server"
import { installSourcemapsSupport } from "vite-node/source-map"

const viteMajor = Number(viteVersion.split(".")[0])

// create vite server
const server = await createServer({
	mode: "development",
	root: process.cwd(),
	server: {
		preTransformRequests: false,
		hmr: false,
		watch: null,
	},

	optimizeDeps: {
		noDiscovery: true,
	},
	configFile: false,
	// Vite 8 deprecated `envFile` in favour of `envDir: false` and warns when
	// it is passed. Older peers (>=5) only understand `envFile`, so pick the
	// key the installed Vite expects.
	...(viteMajor >= 8 ? ({ envDir: false } as const) : ({ envFile: false } as const)),
	plugins: [],
})
// For old Vite, this is need to initialize the plugins.
if (viteMajor < 6) {
	await server.pluginContainer.buildStart({})
}

// create vite-node server
const node = new ViteNodeServer(server)

// fixes stacktraces in Errors
installSourcemapsSupport({
	getSourceMap: (source) => node.getSourceMap(source),
})

// create vite-node runner
const runner = new ViteNodeRunner({
	root: server.config.root,
	base: server.config.base,
	// when having the server and runner in a different context,
	// you will need to handle the communication between them
	// and pass to this function
	fetchModule(id) {
		return node.fetchModule(id)
	},
	resolveId(id, importer) {
		return node.resolveId(id, importer)
	},
})

export { runner }
