export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["favicon.png","robots.txt"]),
	mimeTypes: {".png":"image/png",".txt":"text/plain"},
	_: {
		client: {"start":"_app/immutable/entry/start.og6OUWJR.js","app":"_app/immutable/entry/app.ClHG31M1.js","imports":["_app/immutable/entry/start.og6OUWJR.js","_app/immutable/chunks/entry.CliwdigV.js","_app/immutable/chunks/scheduler.Dk-snqIU.js","_app/immutable/chunks/index.Ice1EKvx.js","_app/immutable/entry/app.ClHG31M1.js","_app/immutable/chunks/scheduler.Dk-snqIU.js","_app/immutable/chunks/index.hN5g6nR9.js"],"stylesheets":[],"fonts":[],"uses_env_dynamic_public":false},
		nodes: [
			__memo(() => import('../output/server/nodes/0.js')),
			__memo(() => import('../output/server/nodes/1.js')),
			__memo(() => import('../output/server/nodes/4.js'))
		],
		routes: [
			{
				id: "/sverdle",
				pattern: /^\/sverdle\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();
