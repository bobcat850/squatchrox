import type { NextPage } from "next";
import Link from "next/link";
import Image from "next/image";

/**
 * Landing page with a simple gradient background and a hero asset.
 * Free to customize as you see fit.
 */
const Home: NextPage = () => {
  return (
    <div className="">
      <div className="flex justify-center p-2">
        <Image
          src="/hero-asset.png"
          width={860}
          height={540}
          alt="Hero asset, Squatch Rox"
          quality={100}
          className="mb-4 max-w-screen"
        />
      </div>
      <div className="px-8 mx-auto text-center">
        <h1 className="mb-5 text-6xl font-bold text-white">
          <span className="text-transparent bg-clip-text gradient">
						Welcome to Squatch Rox Mining Club
          </span>
          <br />
					Home of the Squatch Family of Conecuh County, Alabama
        </h1>
        <div><iframe width="360" height="639" src="https://www.youtube.com/embed/A2p43Ul8PbU" title="October 18, 2024" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        </div>
        <p className="max-w-xl mx-auto text-lg text-white/60">
          <Link
            className="hover:underline"
            href="https://x.com/squatchroxmine"
            target="_blank"
          >
						Squatch Rox Mining Club on X
          </Link>{" "}
				</p>
        <p>
          Check out our <b>Rox</b> and <b>Jewelry</b> in the Squatch Market 
        </p>
        <p>
          Get your Mining Pass below and become a memeber of the Squatch Family!
        </p>

        <div className="flex items-center justify-center gap-4 mt-12 text-lg font-medium">
          <Link
            className="w-56 p-3 transition-all border rounded-lg hover:shadow-lg gradient border-white/10"
            href="https://mint-chi-beige.vercel.app/"
          >
					Honey Island Swamp Pass
          </Link>
          <Link
            className="w-56 p-3 rounded-lg bg-white/[.04] transition-all hover:bg-white/[.06] border-white/10 border"
            href="https://github.com/thirdweb-example/marketplace-v3"
            target="_blank"
          >
						Squatch Rox 
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;

