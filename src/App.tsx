import React from 'react';

function App() {
	return (
		<div className="min-h-screen bg-slate-900 text-white font-sans selection:bg-cyan-500 selection:text-white">
			{/* Navigation */}
			<nav className="fixed w-full z-50 bg-slate-900/80 backdrop-blur-md border-b border-slate-800">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<div className="flex items-center justify-between h-16">
						<div className="flex items-center">
							<span className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
								WebLaunch
							</span>
						</div>
						<div className="hidden md:block">
							<div className="ml-10 flex items-baseline space-x-4">
								<a href="#features" className="hover:text-cyan-400 px-3 py-2 rounded-md text-sm font-medium transition-colors">Features</a>
								<a href="#pricing" className="hover:text-cyan-400 px-3 py-2 rounded-md text-sm font-medium transition-colors">Pricing</a>
								<button className="bg-cyan-500 hover:bg-cyan-600 text-white px-4 py-2 rounded-full text-sm font-medium transition-all shadow-lg shadow-cyan-500/20">
									Get Started
								</button>
							</div>
						</div>
					</div>
				</div>
			</nav>

			{/* Hero Section */}
			<section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
				<div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-7xl pointer-events-none">
					<div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl mix-blend-screen opacity-30 animate-blob"></div>
					<div className="absolute top-0 right-1/4 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl mix-blend-screen opacity-30 animate-blob animation-delay-2000"></div>
				</div>

				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
					<h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-8">
						Deploy <span className="text-cyan-400">Faster</span>.<br />
						Scale <span className="text-blue-500">Better</span>.
					</h1>
					<p className="mt-4 max-w-2xl mx-auto text-xl text-slate-400 mb-12">
						The modern deployment platform for developers who want to ship code, not manage infrastructure. Simple, fast, and secure by default.
					</p>
					<div className="flex justify-center gap-4">
						<button className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-8 py-3 rounded-full text-lg font-semibold transition-all transform hover:scale-105 shadow-xl shadow-cyan-500/20">
							Start Deploying Now
						</button>
						<button className="bg-slate-800 hover:bg-slate-700 text-white px-8 py-3 rounded-full text-lg font-semibold transition-all border border-slate-700">
							View Documentation
						</button>
					</div>
				</div>
			</section>

			{/* Features Section */}
			<section id="features" className="py-20 bg-slate-800/50">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<div className="text-center mb-16">
						<h2 className="text-3xl font-bold text-white mb-4">Everything you need to ship</h2>
						<p className="text-slate-400">Built for modern development workflows.</p>
					</div>

					<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
						{[
							{
								title: "Global Edge Network",
								description: "Deploy your content to 35+ regions automatically. Low latency for everyone.",
								icon: "⚡"
							},
							{
								title: "Instant Rollbacks",
								description: "Made a mistake? Rollback to any previous deployment in seconds with one click.",
								icon: "🔄"
							},
							{
								title: "Preview Environments",
								description: "Automatic preview URLs for every pull request. Share progress with your team.",
								icon: "👀"
							}
						].map((feature, index) => (
							<div key={index} className="bg-slate-900 p-8 rounded-2xl border border-slate-700 hover:border-cyan-500/50 transition-colors group">
								<div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">{feature.icon}</div>
								<h3 className="text-xl font-bold text-white mb-2">{feature.title}</h3>
								<p className="text-slate-400">{feature.description}</p>
							</div>
						))}
					</div>
				</div>
			</section>

			{/* Footer */}
			<footer className="bg-slate-900 border-t border-slate-800 py-12">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center">
					<div className="mb-4 md:mb-0">
						<span className="text-xl font-bold text-white">WebLaunch</span>
						<p className="text-slate-500 text-sm mt-1">© 2024 WebLaunch Inc.</p>
					</div>
					<div className="flex space-x-6 text-slate-400">
						<a href="#" className="hover:text-white transition-colors">Privacy</a>
						<a href="#" className="hover:text-white transition-colors">Terms</a>
						<a href="#" className="hover:text-white transition-colors">Twitter</a>
						<a href="#" className="hover:text-white transition-colors">GitHub</a>
					</div>
				</div>
			</footer>
		</div>
	);
}

export default App;
