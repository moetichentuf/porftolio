import React, { useState } from 'react'
import Gallery from 'react-grid-gallery';
import { useTransition, animated, config } from 'react-spring'

import gd1 from './images/gd1.jpeg';
import gd2 from './images/gd2.jpeg';
import gd3 from './images/gd3.jpeg'
import gd4 from './images/gd4.jpeg'
import gd5 from './images/gd5.jpeg'
import gd6 from './images/gd6.jpeg'
import gd7 from './images/gd7.jpeg'
import gd8 from './images/gd8.jpeg'
import gd9 from './images/gd9.jpeg'
import gd10 from './images/gd10.jpeg'

import da1 from './images/da1.jpeg'
import da2 from './images/da2.jpeg'
import da3 from './images/da3.jpeg'
import da4 from './images/da4.jpeg'
import da5 from './images/da5.gif'
import da6 from './images/da6.jpeg'
import da7 from './images/da7.jpeg'
import da8 from './images/da8.jpeg'

import web1 from './images/web1.png'
import web2 from './images/web2.png'
import web3 from './images/web3.png'
import web4 from './images/web4.png'


function Home() {
    const [toggle, set] = useState(false)
    const transition = useTransition(toggle, null, {
        from: { position: 'absolute', opacity: 0 },
        enter: { opacity: 1 },
        leave: { opacity: 0 }
    })

    const IMAGES =
        [{
            src: gd1,
            thumbnail: gd1,
            thumbnailWidth: 320,
            thumbnailHeight: 174,
            tags: [{value: "Graphic design", title: "Graphic Design"}],
            isSelected: false,
            caption: "After Rain (Jeshu John - designerspics.com)"
        },
            {
                src: gd2,
                thumbnail: gd2,
                thumbnailWidth: 220,
                thumbnailHeight: 212,
                tags: [{value: "Graphic design", title: "Graphic Design"}],
                caption: "Boats (Jeshu John - designerspics.com)"
            },

            {
                src: gd6,
                thumbnail: gd6,
                thumbnailWidth: 320,
                thumbnailHeight: 212,
                tags: [{value: "Graphic design", title: "Graphic Design"}],

            },
            // {
            //     src: gd4,
            //     thumbnail: gd4,
            //     thumbnailWidth: 320,
            //     thumbnailHeight: 212,
            //     tags: [{value: "Graphic design", title: "Graphic Design"}],
            //     caption: "Boats (Jeshu John - designerspics.com)"
            // },
            // {
            //     src: gd5,
            //     thumbnail: gd5,
            //     thumbnailWidth: 320,
            //     thumbnailHeight: 212,
            //     tags: [{value: "Graphic design", title: "Graphic Design"}],
            //     caption: "Boats (Jeshu John - designerspics.com)"
            // },
            {
                src: gd3,
                thumbnail: gd3,
                thumbnailWidth: 320,
                thumbnailHeight: 312,
                tags: [{value: "Graphic design", title: "Graphic Design"}],
                caption: "Boats (Jeshu John - designerspics.com)"
            },
            {
                src: gd7,
                thumbnail: gd7,
                thumbnailWidth: 320,
                thumbnailHeight: 212,
                tags: [{value: "Graphic design", title: "Graphic Design"}],
                caption: "Boats (Jeshu John - designerspics.com)"
            },
            {
                src: gd8,
                thumbnail: gd8,
                thumbnailWidth: 320,
                thumbnailHeight: 212,
                tags: [{value: "Graphic design", title: "Graphic Design"}],
                caption: "Boats (Jeshu John - designerspics.com)"
            },
            {
                src: gd9,
                thumbnail: gd9,
                thumbnailWidth: 220,
                thumbnailHeight: 412,
                tags: [{value: "Graphic design", title: "Graphic Design"}],
                caption: "Boats (Jeshu John - designerspics.com)"
            },
            {
                src: gd10,
                thumbnail: gd10,
                thumbnailWidth: 320,
                thumbnailHeight: 212,
                tags: [{value: "Graphic design", title: "Graphic Design"}],
                caption: "Boats (Jeshu John - designerspics.com)"
            },
            {
                src: da1,
                thumbnail: da1,
                thumbnailWidth: 320,
                thumbnailHeight: 212,
                tags: [{value: "Digital Art", title: "Digital Art"}],
                caption: "Boats (Jeshu John - designerspics.com)"
            },
            {
                src: da2,
                thumbnail: da2,
                thumbnailWidth: 320,
                thumbnailHeight: 212,
                tags: [{value: "Digital Art", title: "Digital Art"}],
                caption: "Boats (Jeshu John - designerspics.com)"
            },
            {
                src: da3,
                thumbnail: da3,
                thumbnailWidth: 320,
                thumbnailHeight: 212,
                tags: [{value: "Digital Art", title: "Digital Art"}],
                caption: "Boats (Jeshu John - designerspics.com)"
            },
            {
                src: da4,
                thumbnail: da4,
                thumbnailWidth: 220,
                thumbnailHeight: 212,
                tags: [{value: "Digital Art", title: "Digital Art"}],
                caption: "Boats (Jeshu John - designerspics.com)"
            },
            {
                src: da5,
                thumbnail: da5,
                thumbnailWidth: 220,
                thumbnailHeight: 212,
                tags: [{value: "Digital Art", title: "Digital Art", }, {value: "GIF", title: "GIF", }],
                caption: "Boats (Jeshu John - designerspics.com)"
            },
            {
                src: da6,
                thumbnail: da6,
                thumbnailWidth: 320,
                thumbnailHeight: 212,
                tags: [{value: "Digital Art", title: "Digital Art"}],
                caption: "Boats (Jeshu John - designerspics.com)"
            },
            {
                src: da7,
                thumbnail: da7,
                thumbnailWidth: 320,
                thumbnailHeight: 212,
                tags: [{value: "Digital Art", title: "Digital Art"}],
                caption: "Boats (Jeshu John - designerspics.com)"
            },
            {
                src: da8,
                thumbnail: da8,
                thumbnailWidth: 220,
                thumbnailHeight: 212,
                tags: [{value: "Digital Art", title: "Digital Art"}],
                caption: "Boats (Jeshu John - designerspics.com)"
            },
        ]


    return (
        <div className="home">
            <button style={{marginLeft:'85%', marginTop:'1%', position:'absolute',zIndex:'1'}}  onClick={() => set(!toggle)}>Next</button>

            <div class="container">
                <div class="row align-items-center my-5">

                    <div class="col-lg-2">


                    </div>
                    <div class="col-lg-8">
                        {transition.map(({ item, key, props }) =>
                            item ? <animated.div style={props}><h1
                                style={{marginBottom: '6%'}} className="font-weight-light">Graphic Design</h1><Gallery images={IMAGES} /> </animated.div> : <animated.div style={props}><h1
                                style={{marginBottom: '6%'}} className="font-weight-light">Webdesign</h1>
                                <a href="https://moetichentuf.github.io/news"><img
                                    className="web"
                                    src={web1}
                                    alt=""
                                /></a>
                                <a href="https://moetichentuf.github.io/social-impact-Kwikkopie/"><img
                                    className="web"
                                    src={web2}
                                    alt=""
                                /></a>
                                <a href="https://moetichentuf.github.io/weather-api/"><img
                                    className="web"
                                    src={web3}
                                    alt=""
                                /></a>
                                <a href="https://xenoxinius.github.io/LuckyBox/"><img
                                    className="web"
                                    src={web4}
                                    alt=""
                                /></a>

                                </animated.div>
                        )}
                        {/*<a style={{right:'5%', top:'1%', position:'absolute'}}><h2>Next></h2></a>*/}

                        {/*<h1 style={{marginBottom: '6%'}} className="font-weight-light">Webdesign</h1>*/}
                        {/*<Gallery images={IMAGETWO}/>*/}

                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;