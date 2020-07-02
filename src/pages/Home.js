import React from "react";
import main from '../assets/images/main.jpg';
import familyPhoto from "../assets/images/familyPhoto.jpg";

export default function Home() {
    return (
        <div className="home-container">
            <div className="intro-container">
                <div className="text">
                    <h1>Welcome</h1>
                    <p>
                        Hey! I’m a mom, artist, and carb enthusiast.
                        Take a look around my website! Stay as long as
                        you’d like.
                    </p>
                </div>
                <div
                    style={{
                        background:
                            "url(" + main + ") no-repeat",
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                        width: "60%",
                        height: "0",
                        paddingBottom: "60%",
                    }}
                    className="image"
                ></div>
            </div>
            <div className="about-container">
                <div
                    style={{
                        background:
                            "url(" + familyPhoto + ") no-repeat",
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                        width: "60%",
                        height: "0",
                        paddingBottom: "60%",
                    }}
                    className="image"
                ></div>
                <div className="text">
                    <h1>ABOUT THE ARTIST</h1>
                    <p>
                        Sage has always been an avid doodler, but
                        became serious about art once she used it as a
                        form of therapy after traumatic life events.
                        She believes everyone should be in therapy and
                        that wearing crowns in public should be more
                        widely accepted for adults.
                        <br />
                        She is a happy wife and proud mother of a
                        darling daughter and a very round cat, both of
                        whom are frequent subjects of drawings and
                        projects. She is currently based in Utah.
                    </p>
                </div>
            </div>
        </div>
    );
}
