/// <reference types="vite/client" />

// Allow importing static PDF files (served via Vite assets)
declare module "*.pdf" {
	const src: string;
	export default src;
}
