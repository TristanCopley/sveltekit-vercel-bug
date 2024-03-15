import * as server from '../entries/pages/sverdle/_page.server.ts.js';

export const index = 4;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/sverdle/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/sverdle/+page.server.ts";
export const imports = ["_app/immutable/nodes/4._YKfFUzg.js","_app/immutable/chunks/scheduler.Dk-snqIU.js","_app/immutable/chunks/index.hN5g6nR9.js","_app/immutable/chunks/entry.CliwdigV.js","_app/immutable/chunks/index.Ice1EKvx.js"];
export const stylesheets = ["_app/immutable/assets/4.N8fmVrOe.css"];
export const fonts = [];
