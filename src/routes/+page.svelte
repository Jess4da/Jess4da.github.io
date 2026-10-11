<script lang="ts">
	import './layout.css';

	// Old site retired; meta refresh redirects without JS. Delay must match --redirect-delay.
	const target = 'https://meatchopper.xyz/portfolio';
	const host = 'meatchopper.xyz';
</script>

<svelte:head>
	<title>Jessada · moved to {host}</title>
	<meta name="description" content="Jessada's portfolio now lives at {host}." />
	<meta http-equiv="refresh" content="3; url={target}" />
	<link rel="canonical" href={target} />
	<link rel="icon" href="/favicon.ico" />
	<meta property="og:url" content={target} />
	<meta property="og:title" content="Jessada Duangpanyasawang" />
</svelte:head>

<main class="mx-auto flex min-h-svh max-w-2xl flex-col justify-center gap-10 px-6 py-16">
	<p class="font-[family-name:var(--font-mono)] text-sm text-[var(--color-muted)]">
		jess4da.github.io
	</p>

	<h1
		class="text-[clamp(1.75rem,9vw,4.5rem)] leading-[1.05] font-semibold tracking-tight [overflow-wrap:anywhere]"
	>
		This page moved to <span class="text-[var(--color-accent)]">{host}</span>
	</h1>

	<p class="max-w-prose text-lg text-[var(--color-muted)]">
		Jessada Duangpanyasawang, back-end developer working mostly in Go and Python. The portfolio and
		everything else now live on the new site. Taking you there.
	</p>

	<div class="flex flex-col gap-4">
		<div class="h-px w-full overflow-hidden bg-[var(--color-rule)]" aria-hidden="true">
			<div class="bar h-full w-full bg-[var(--color-accent)]"></div>
		</div>
		<a
			href={target}
			class="self-start font-[family-name:var(--font-mono)] text-sm whitespace-nowrap text-[var(--color-ink)] underline decoration-[var(--color-accent)] underline-offset-4 hover:text-[var(--color-accent)] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--color-accent)] sm:text-base"
		>
			Continue to {host}
		</a>
	</div>
</main>
