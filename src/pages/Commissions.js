import React from "react";
import headshot from "../assets/images/head.jpg";
import halfBody from "../assets/images/halfBody.jpg";
import fullBody from "../assets/images/fullBody.jpg";

export default function Commissions() {
    return (
        <div className="commissions-container">
            <div className="commission-intro">
                <img
                    src="https://via.placeholder.com/150"
                    alt=""
                    className="portrait"
                />
                <div className="text">
                    <h1>Commissions</h1>
                    <p>
                        Thank you so much for beings interested in my
                        art! I’d love to create for you. Let’s talk
                        through pricing and move along to the process.
                    </p>
                </div>
            </div>
            <div className="prices commission-div">
                <div className="commission-type">
                    <img
                        src={headshot}
                        alt=""
                        className="price-image"
                    />
                    <div className="text">
                        <h2>Headshots</h2>
                        <p>
                            $20 for first subject and $8 for each
                            additional subject.
                            <br />
                            These are great as social media icons but
                            can be used for anything!
                        </p>
                    </div>
                </div>
                <div className="commission-type">
                    <img
                        src={halfBody}
                        alt=""
                        className="price-image"
                    />
                    <div className="text">
                        <h2>Half Body</h2>
                        <p>
                            $25 for first subject and $10 for each
                            additional subject
                            <br />
                            Need a drawing of just the waist up?
                            Perfect. This half body is just for you.
                        </p>
                    </div>
                </div>
                <div className="commission-type">
                    <img
                        src={fullBody}
                        alt=""
                        className="price-image"
                    />
                    <div className="text">
                        <h2>Full Body</h2>
                        <p>
                            $30 for first subject and $12 for each
                            additional subject
                            <br />
                            Whether the subject is standing or dancing
                            or jumping, we’ll get it in its full
                            glory.
                        </p>
                    </div>
                </div>
                <div className="commission-type">
                    <img
                        src="https://via.placeholder.com/150"
                        alt=""
                        className="price-image"
                    />
                    <div className="text">
                        <h2>Pets</h2>
                        <p>
                            $10 each.
                            <br />
                            Pets are part of the family and deserve to
                            be included in your family portrait!
                        </p>
                    </div>
                </div>
            </div>
            <div className="how-commissions-work commission-div">
                <h1>How Commissions Work</h1>
                <p>
                    Once you’ve contacted me and we’ve discussed your
                    ideas, we have a detailed plan, and payment has
                    been sent, I’ll start on the preliminary sketch.
                    Once that’s finished, I’ll send it to you. If
                    anything needs to be edited, this would be the
                    time to let me know. I’ll edit the sketch up to
                    two times. I’ll do the line art and coloring.
                    Before I add finishing touches, I’ll have you look
                    over it once more and will edit the colors one
                    time if need be. Once I get the okay, I’ll
                    complete the portrait and email you the full file
                    of both the finished piece and the line art (so
                    you can print it out and color it). And hooray!!
                    You have a custom art work.
                </p>
                <h2>Did I Miss Anything?</h2>
                <p>
                    Want to add a background or wreath or lettering or
                    something else?Let me know when you initially
                    contact me. These things vary widely so it’s
                    difficult to pin a price point on it. We can
                    discuss ideas to make sure your portrait meets all
                    your expectations. Ready to commission me? Click
                    the “commission me” button in the top right corner
                    of your screen! Can’t wait to hear from you!
                </p>
                <h2>
                    Ready to commission me? Send me an email! Can’t
                    wait to hear from you!
                </h2>
            </div>
        </div>
    );
}
