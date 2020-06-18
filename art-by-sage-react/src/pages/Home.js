import React from "react";
import sageAndBaby from "../assets/images/sageandbaby.jpg";
import familyPic from "../assets/images/familypic.jpg";

export default function Home() {
    return (
        <div className='home-container'>
            <div className="intro-container">
                <div className="text">
                    <h1>Howdy</h1>
                    <p>
                        Thanks for your interest in my art! I’m a
                        new(ish) mom who documents highlights of
                        parenthood through comics among other artsy
                        projects.
                    </p>
                </div>
                <div
                    style={{
                        background:
                            "url(" + sageAndBaby + ") no-repeat",
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
                            "url(" + familyPic + ") no-repeat",
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                        width: "60%",
                        height: "0",
                        paddingBottom: "60%",
                    }}
                    className="image"
                ></div>
                <div className="text">
                    <h1>A Little About Me</h1>
                    <p>
                        I grew up loving all aspects of art, but
                        didn’t really get serious about drawing until
                        my young adulthood where I used it as a form
                        of therapy. Now, I strive for my art to be a
                        safe space for all. I’m currently based in
                        Sandy, UT with my husband, daughter, and
                        cuddle cat. We enjoy hiking, making pretzels,
                        and giving our kitty lots of snuggles.
                        Consider following me on social media! You’ll
                        be able to interact with me in a way that
                        influences what I create. I love asking my
                        followers, “what should I draw next?” and I’d
                        love to hear your perspectives and ideas!
                    </p>
                </div>
            </div>
        </div>
    );
}
