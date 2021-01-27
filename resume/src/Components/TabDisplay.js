import React from "react";
import {Carousel} from "react-bootstrap";
import "react-responsive-carousel/lib/styles/carousel.min.css"
import "holderjs"
import slideBackground from "../Constants/slideBackground.jpg"

export default class TabDisplay extends React.Component {
/*move display outside of content? all the way to the left with blanc space on the right?
 *also change background it is ugly. Start filling content with tab passed variable. contact info
 * procets can go on the right with space on the left then contact info can span the width and be
 * centered :) nice.... when i finally actually do it
 *
 * */
    render() {
        return(
            <Carousel>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={slideBackground}
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3>First slide label</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={slideBackground}
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <h3>Second slide label</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={slideBackground}
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <h3>Third slide label</h3>
                        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        )
    }
}