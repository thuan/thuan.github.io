import { loadEnv } from 'vite';

const { GITHUB_PERSONAL_ACCESS_TOKEN } = loadEnv(process.env.NODE_ENV || 'production', process.cwd(), '');

export const slugify = (input: string) => {
	if (!input) return '';

	// make lower case and trim
	var slug = input.toLowerCase().trim();

	// remove accents from charaters
	slug = slug.normalize('NFD').replace(/[\u0300-\u036f]/g, '');

	// replace invalid chars with spaces
	slug = slug.replace(/[^a-z0-9\s-]/g, ' ').trim();

	// replace multiple spaces or hyphens with a single hyphen
	slug = slug.replace(/[\s-]+/g, '-');

	return slug;
};

export const unslugify = (slug: string) =>
	slug.replace(/\-/g, ' ').replace(/\w\S*/g, (text) => text.charAt(0).toUpperCase() + text.slice(1).toLowerCase());

export const kFormatter = (num: number) => {
	return Math.abs(num) > 999 ? (Math.sign(num) * (Math.abs(num) / 1000)).toFixed(1) + 'k' : Math.sign(num) * Math.abs(num);
};

const getGitHubToken = () => {
	const token = GITHUB_PERSONAL_ACCESS_TOKEN || process.env.GITHUB_PERSONAL_ACCESS_TOKEN;
	return token?.trim() ? token.trim() : undefined;
};

export const getRepositoryDetails = async (repositoryFullname: string) => {
	if (!repositoryFullname) {
		return { message: 'Repository name is required.', repositoryFullname, success: false };
	}

	const token = getGitHubToken();
	if (!token) {
		return {
			message: 'GitHub personal access token is not configured for this build.',
			repositoryFullname,
			success: false,
		};
	}

	const repoDetails = await fetch('https://api.github.com/repos/' + repositoryFullname, {
		method: 'GET',
		headers: {
			Accept: 'application/vnd.github+json',
			Authorization: `Bearer ${token}`,
			'X-GitHub-Api-Version': '2022-11-28'
		}
	});

	if (!repoDetails.ok) {
		return {
			message: `GitHub API request failed with status ${repoDetails.status}`,
			repositoryFullname,
			success: false,
		};
	}

	const response = await repoDetails.json();
	return { ...response, success: true };
};
