import { useRef } from "react";
import Xarrow from "react-xarrows";


const xArrowProps = {
  path: "straight",
  dashness: true,
  color: "rgba(255, 255, 255, 0.8)",
  showHead: false,
  startAnchor: "middle",
  endAnchor: "middle",
  zIndex: -1,
  strokeWidth: 2
};

export default function App() {
  const videoRef = useRef();
  const setPlayBack = () => {
    videoRef.current.playbackRate = 0.75;
  };

  return (
    <>
      <video
        playsInline
        autoPlay
        muted
        loop
        className="bgVideo"
        ref={videoRef}
        onCanPlay={() => setPlayBack()}
      >
        <source src="/bgVideo.mp4" type="video/mp4" />
      </video>

      <div className="overlay" />

      <div className="manifesto">
        <div className="manifestoImages">
          <div
            className="image"
            style={{ top: "-30vh", left: "-20vw" }}
            id="00-01"
          >
            <glitch-image src="./resource/example.jpg" />
          </div>

          <div
            className="image"
            style={{ top: "24vh", left: "-40vw" }}
            id="00-02"
          >
            <glitch-image src="./resource/example.jpg" />
           
          </div>

          <div
            className="image"
            style={{ top: "100vh", left: "-32vw" }}
            id="00-03"
          >
            <glitch-image src="./resource/example.jpg" />
            
          </div>
          <glitch-image src="./resource/example.jpg" />

          <div
            className="image"
            style={{ top: "50vh", left: "-12vw" }}
            id="00-04"
          >
                        <glitch-image src="./resource/example.jpg" />

          </div>

          <div
            className="image"
            style={{ top: "160vh", left: "-14vw" }}
            id="00-05"
          >
                        <glitch-image src="./resource/example.jpg" />

          </div>

          <Xarrow start="00-01" end="00-02" {...xArrowProps} />
          <Xarrow start="00-02" end="00-03" {...xArrowProps} />
          <Xarrow start="00-01" end="00-04" {...xArrowProps} />
          <Xarrow start="00-03" end="00-04" {...xArrowProps} />
          <Xarrow start="00-03" end="00-05" {...xArrowProps} />
          <Xarrow start="00-04" end="00-05" {...xArrowProps} />
        </div>

        <div className="manifestoTitle">
          <div className="glitchText">
            <div title="HOW TO DREAM">HOW TO DREAM</div>
          </div>
          <div className="glitchText">
            <div title="WITH THE MACHINE">WITH THE MACHINE</div>
          </div>
        </div>
        <p>
          .<br />.<br />.<br />.<br />.<br />.
        </p>
        <p>
          .<br />.<br />.
        </p>
        <p>
          The language of the apparatuskZjk  lsa
          0 ''
          <br />
          metabolizes new information
          <br />
          through feedback loops which
          <br />
          generate ITERATIVE KNOWLEDGE.
        </p>
        <p>
          .<br />.<br />.
        </p>
        <p>
          Playing-dancing-working together
          <br />
          situates authorial agency
          <br />
          within the INTERACTION.
        </p>
        <p>
          .<br />.<br />.
        </p>
        <p>
          .<br />.<br />.
        </p>
        <p>
          To create is to play an
          <br />
          INFINITE GAME.
        </p>
      </div>
      <div className="chapter">
        <div className="chapterHeading glitchText">
          <div title="00">00 </div>
        </div>
        <div className="intro">
          All supplemental images in this compendium were created with
          Midjourney, an art-making tool using OpenAI's Contrastive
          Language–Image Pre-training (CLIP) neural network and guided diffusion
          to generate novel images based on natural-language prompts. <br />
          <br />
          <br />
          All images in this compendium are the product of a collaboration
          between human and [tool, computer, algorithm].
        </div>
      </div>
      <div className="chapter chapter-1">
        <div className="chapterHeading glitchText">
          <div title="01 RELATIONAL MEDIA">01 RELATIONAL MEDIA</div>
        </div>
        <div className="images">
          <div className="source-image">
            <img
              src="./resource/search.svg"
              id="01-01"
            />
            <br />A digital line drawing consisting of a simplified
            black-and-white urban map overlaid with red diagrammatic accents,
            representing the migratory movements of a flock of friends in San
            Francisco over the years.
          </div>

          <div
            className="image"
            style={{ left: "40vw", top: "-10vh" }}
            id="01-02"
          >
            <glitch-image src="https://storage.googleapis.com/dream-machines-output/b205c79d-3228-48cf-9c1c-e8e310e5f0a2/0_0.png" />
            Winged creatures emerge.
          </div>
          <div
            className="image"
            style={{ left: "62vw", top: "40vh" }}
            id="01-03"
          >
            <glitch-image src="https://storage.googleapis.com/dream-machines-output/f6741871-0f3b-4208-bd37-18a6e6b8f8be/0_0.png" />
            Suspended nests for weary travelers.
          </div>

          <Xarrow start="01-01" end="01-02" {...xArrowProps} />
          <Xarrow start="01-02" end="01-03" {...xArrowProps} />
        </div>
      </div>
      <div className="chapter chapter-2">
        <div className="chapterHeading glitchText">
          <div title="02 CONFLICT, RESOLUTION">02 CONFLICT, RESOLUTION</div>
        </div>
        <div className="images">
          <div className="source-image">
            <img
              src="https://media.discordapp.net/attachments/964449528466014229/968014068361347113/2-pinup-proxemics-FINAL.jpg"
              id="02-01"
            />
            <br />A sequence of interpersonal bodily dynamics of affection,
            aggression, negotiation, and resolution; drawn to resemble an early
            handbook of partner dance choreography, in a style evocative of a
            Dance Diagram by Andy Warhol.
          </div>

          <div
            className="image"
            style={{ top: "10vh", left: "60vw" }}
            id="02-02"
          >
            <glitch-image src="https://storage.googleapis.com/dream-machines-output/8f99bce9-3c46-45ad-932b-b0f24e64efa8/0_0.png" />
            Barbed, tangled interactions.
          </div>

          <div
            className="image"
            style={{ top: "60vh", left: "36vw" }}
            id="02-03"
          >
            <glitch-image src="https://storage.googleapis.com/dream-machines-output/a4b5dc85-00a0-443f-8103-f90a582f4d02/0_0.png" />
            Bold directional marks.
          </div>

          <Xarrow start="02-01" end="02-02" {...xArrowProps} />
          <Xarrow start="02-02" end="02-03" {...xArrowProps} />
          <Xarrow start="02-01" end="02-03" {...xArrowProps} />
        </div>
      </div>
      <div className="chapter chapter-3">
        <div className="chapterHeading glitchText">
          <div title="03 EMBODIED INTELLIGENCE">03 EMBODIED INTELLIGENCES</div>
        </div>
        <div className="images">
          <div className="source-image">
            {/* <img src="/03-submission.png" id="03-01" /> */}
            <video playsInline autoPlay muted loop id="03-01">
              <source src="/03-video.mp4" type="video/mp4" />
            </video>
            <br />A monochromatic video feed from an interactive kinesthetic
            experience: the viewer uses her hands to draw trails of white light
            which are symmetrically reflected across the X- and Y-axis,
            participating in a graphical drawing game with the computer.
          </div>
          <div
            className="image"
            style={{ top: "-10vh", left: "60vw" }}
            id="03-02"
          >
            <glitch-image src="https://storage.googleapis.com/dream-machines-output/38a95fd4-c290-4f07-b0d7-bc110dbcde13/0_0.png" />
            Coalescing of trails.
          </div>
          <div
            className="image"
            style={{ top: "60vh", left: "10vw" }}
            id="03-03"
          >
            <glitch-image src="https://storage.googleapis.com/dream-machines-output/2032ce58-c876-47ae-84a3-c013df8784f8/0_0.png" />
            Tendrils streaming through a fluid substrate.
          </div>

          <div
            className="image"
            style={{ top: "50vh", left: "40vw" }}
            id="03-04"
          >
            <glitch-image src="https://storage.googleapis.com/dream-machines-output/e4b74dfb-47ec-4024-a6fa-93ef8f42ee29/0_0.png" />
            A suggestion of long hair whipping in the wind.
          </div>

          <Xarrow start="03-01" end="03-02" {...xArrowProps} />
          <Xarrow start="03-01" end="03-03" {...xArrowProps} />
          <Xarrow start="03-03" end="03-04" {...xArrowProps} />
          <Xarrow start="03-02" end="03-04" {...xArrowProps} />
        </div>
      </div>
      <div className="manifestoEnd">
        <div className="manifestoEndTitle">WE ARE MACHINES, TOO.</div>
      </div>
    </>
  );
}

{/* <glitch-image src="./resource/cloud-upload-fill.svg" /> */}
