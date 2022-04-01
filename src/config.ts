export const SITE = {
	title: 'Platzi Fake Store API',
	description: 'platzi Fake Store API',
	defaultLanguage: 'en_US',
};

export const OPEN_GRAPH = {
	image: {
		src: 'https://github.com/withastro/astro/blob/main/assets/social/banner.jpg?raw=true',
		alt: 'astro logo on a starry expanse of space,' + ' with a purple saturn-like planet floating in the right foreground',
	},
	twitter: 'astrodotbuild',
};

export const KNOWN_LANGUAGES = {
	English: 'doc',
};

// Uncomment this to add an "Edit this page" button to every page of documentation.
export const GITHUB_EDIT_URL = `https://github.com/PlatziMaster/fake-store-site/tree/master/src/pages/doc`;

// Uncomment this to add an "Join our Community" button to every page of documentation.
// export const COMMUNITY_INVITE_URL = `https://astro.build/chat`;

// Uncomment this to enable site search.
// See "Algolia" section of the README for more information.
// export const ALGOLIA = {
//   indexName: 'XXXXXXXXXX',
//   appId: 'XXXXXXXXXX',
//   apiKey: 'XXXXXXXXXX',
// }

export const SIDEBAR = {
	doc: [
		{ text: 'Documentation', header: true },
		{ text: 'Introduction', link: 'en/introduction' },
		{ text: 'Products', link: 'en/products' },
		{ text: 'Categories', link: 'en/categories' },
		{ text: 'Users', link: 'en/users' },
		{ text: 'Auth JWT', link: 'en/auth' },
		{ text: 'Files', link: 'en/files' },
    { text: 'Resources', header: true },
		{ text: 'Insomnia', link: 'en/insomnia' },
		{ text: 'Swagger Docs', link: 'https://api.escuelajs.co/docs', external: true },
	],
  es: [
		{ text: 'Documentation', header: true },
		{ text: 'Introduction', link: 'en/introduction' },
		{ text: 'Products', link: 'en/products' },
		{ text: 'Categories', link: 'en/categories' },
		{ text: 'Users', link: 'en/users' },
		{ text: 'Auth JWT', link: 'en/auth' },
		{ text: 'Files', link: 'en/files' },
    { text: 'Resources', header: true },
		{ text: 'Insomnia', link: 'en/insomnia' },
		{ text: 'Swagger Docs', link: 'https://api.escuelajs.co/docs', external: true },
	],
};
