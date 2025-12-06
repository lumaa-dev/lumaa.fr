import { createRouter, createWebHistory } from "vue-router";
import { nextTick } from "vue";

import HomeView from "../views/HomeView.vue";
import CopyrightView from "@/views/CopyrightView.vue";
import RedirectView from "@/views/RedirectView.vue";
import NotFoundView from "@/components/NotFound.vue";

const routes = [
	{
		path: "/",
		name: "home",
		meta: {
			title: "Lumaa",
		},
		component: HomeView,
	},
	{
		path: "/redirect",
		name: "redirect",
		meta: {
			title: "Redirecting...",
		},
		component: RedirectView,
	},
	{
		path: "/copyright",
		name: "copyright",
		meta: {
			title: "Lumaa - Copyrights",
		},
		component: CopyrightView,
	},
	{
		path: "/:pathMatch(.*)",
		name: "404",
		meta: {
			title: "Lumaa - 404",
		},
		component: NotFoundView,
	},
];

const redirect = (/**@type {string}*/ url) => {
	let hasParams = url.includes("?");
	return "/redirect?url=" + url + `${hasParams ? "&" : "?"}utm_source=lumaa`;
};

const customRedirections = [
	{
		path: "/support",
		redirect: redirect("https://discord.gg/Rqpn3C7yR5"),
	},
	{
		path: "/twitch",
		redirect: redirect("https://twitch.tv/lumaa_dev"),
	},
	{
		path: "/youtube",
		redirect: redirect("https://youtube.com/@Lumaa_PRO?sub_confirmation=1"),
	},
	{
		path: "/instagram",
		redirect: redirect("https://instagram.com/lumaa_dev"),
	},
	{
		path: "/reddit",
		redirect: redirect("https://reddit.com/u/UnderscoreLumination"),
	},
	{
		path: "/lemmy",
		redirect: redirect("https://lemmy.world/u/Lumaa"),
	},
	{
		path: "/twitter",
		redirect: redirect("https://twitter.com/lumaa_dev"),
		alias: "/x",
	},
	{
		path: "/github",
		redirect: redirect("https://github.com/lumaa-dev"),
	},
	{
		path: "/mastodon",
		redirect: redirect("https://techhub.social/@lumaa"),
	},
	{
		path: "/bluesky",
		redirect: redirect("https://bsky.app/profile/lumaa.fr"),
	},
	{
		path: "/v-fast",
		alias: "/vfast",
		redirect: redirect("https://github.com/v-fast"),
	},
	{
		path: "/modrinth",
		redirect: redirect("https://modrinth.com/user/Lumaa"),
	},
	{
		path: "/substack",
		redirect: redirect("https://lumaa.substack.com/"),
	},
	{
		path: "/apps",
		redirect: redirect("https://apps.lumaa.fr/"),
	},
	{
		path: "/discord",
		redirect: redirect("https://discord.gg/PdsbEddYbc"),
	},
	{
		path: "/about",
		redirect: redirect("https://nathan.lumaa.fr/"),
	},
	{
		path: "/wrapped",
		redirect: redirect("https://nathan.lumaa.fr/remap"),
	},
];

routes.push(...customRedirections);

const router = createRouter({
	history: createWebHistory(process.env.BASE_URL),
	routes,
});

const DEFAULT_TITLE = "Lumaa";
router.afterEach((to) => {
	nextTick(() => {
		document.title = to.meta.title || DEFAULT_TITLE;
	});
});

export default router;
