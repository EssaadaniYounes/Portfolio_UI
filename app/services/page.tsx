export default function ProjectOverview() {
    return (
        <section className="mx-auto max-w-5xl px-6 py-24">

            {/* Header */}
            <header className="mb-16">
                <p className="text-sm uppercase tracking-widest text-[#b6b4bd33]">
                    Case Study
                </p>
                <h1 className="mt-4 text-4xl font-semibold text-white">
                    SuperIntro
                </h1>
                <p className="mt-4 max-w-2xl text-gray-400">
                    An AI-powered networking platform that automatically matches people,
                    assigns them to events, and enables meaningful conversations.
                </p>
            </header>

            {/* Meta grid */}
            <div className="mb-20 grid grid-cols-2 gap-8 md:grid-cols-4">
                <Meta label="Role" value="Full Stack Engineer" />
                <Meta label="Stack" value="Next.js, Node, AI" />
                <Meta label="Duration" value="8 months" />
                <Meta label="Status" value="Live MVP" />
            </div>

            {/* Problem */}
            <Block title="Problem">
                Networking platforms fail because matches are manual, conversations are
                forced, and engagement drops quickly after onboarding.
            </Block>

            {/* Solution */}
            <Block title="Solution">
                SuperIntro automatically matches users based on intent and behavior,
                assigns them to curated events, and enables both 1:1 and persona-based
                chats powered by AI.
            </Block>

            {/* Features */}
            <Block title="Key Features">
                <ul className="space-y-3 text-gray-300">
                    <li>• Automatic user matching</li>
                    <li>• Event-based grouping</li>
                    <li>• Real-time 1:1 chat</li>
                    <li>• AI persona conversations</li>
                    <li>• Profile & preference system</li>
                </ul>
            </Block>

            {/* Architecture */}
            <Block title="Architecture">
                <p className="text-gray-400">
                    Built with a modular MERN architecture, real-time WebSocket
                    communication, JWT-based auth, and scalable AI integrations.
                </p>
            </Block>

            {/* CTA */}
            <div className="mt-24 border-t border-[#b6b4bd33] pt-10">
                <a
                    href="/contact"
                    className="inline-flex items-center gap-2 text-sm text-white transition hover:opacity-70"
                >
                    Interested in a similar build?
                    <span className="text-gray-400">→ Let’s talk</span>
                </a>
            </div>
        </section>
    );
}

/* ---------- Components ---------- */

function Meta({ label, value }: { label: string; value: string }) {
    return (
        <div>
            <p className="text-xs uppercase tracking-wide text-[#b6b4bd33]">
                {label}
            </p>
            <p className="mt-2 text-sm text-white">{value}</p>
        </div>
    );
}

function Block({
    title,
    children,
}: {
    title: string;
    children: React.ReactNode;
}) {
    return (
        <div className="mb-16">
            <h2 className="mb-4 text-xl font-medium text-white">{title}</h2>
            <div className="max-w-3xl text-gray-400">{children}</div>
        </div>
    );
}
