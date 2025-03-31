import Link from "next/link";
export default function HeroPro() {
    return (
        <div
            className="hero min-h-screen"
            style={{
                backgroundImage: "url(https://static.zara.net/assets/public/3153/5814/cc564c7c924b/50ee0c18c6f3/image-small-63fe06b0-2778-45e6-abf8-b4f7a58edf16-default_0/image-small-63fe06b0-2778-45e6-abf8-b4f7a58edf16-default_0.jpg?ts=1728999723005&w=2880)",
            }}>
            <div className="hero-overlay bg-opacity-60 bg-black"></div>
            <div className="hero-content text-neutral-content text-center">
                <div className="max-w-md">
                    <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
                    <p className="mb-5">
                        Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
                        quasi. In deleniti eaque aut repudiandae et a id nisi.
                    </p>
                    <Link href="#all-products">
                    <button className="btn btn-primary">Get Started</button>
                    </Link>
                </div>
            </div>
        </div>
    );
}
