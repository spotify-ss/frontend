import React from 'react'
import {ResponsiveRadar} from '@nivo/radar'

/**
 * Takes array of Audio features as props
 */
export default (props) => {
    if(!props.expandedTrack){
        return (
                <div style= {{width: '350px', height:'350px', margin: '0 auto' }}>
                <ResponsiveRadar
                    data={[
                    {
                        "feature": "acousticness",
                        "you": props.audioFeatures[0].acousticness,
                    },
                    {
                        "feature": "danceability",
                        "you": props.audioFeatures[0].danceability,
                    },
                    {
                        "feature": "duration_ms",
                        "you": props.audioFeatures[0].duration_ms/316600,
                    },
                    {
                        "feature": "energy",
                        "you": props.audioFeatures[0].energy,
                    },
                    {
                        "feature": "liveness",
                        "you": props.audioFeatures[0].liveness * 2,
                    },
                    {
                        "feature": "tempo",
                        "you": props.audioFeatures[0].tempo/250,
                    },
                    {
                        "feature": "valence",
                        "you": props.audioFeatures[0].valence,
                    }
                    ]}
                    keys={[
                        "you",
                    ]}
                    indexBy="feature"
                    maxValue="auto"
                    margin={{
                        "top": 70,
                        "right": 80,
                        "bottom": 40,
                        "left": 80
                    }}
                    curve="catmullRomClosed"
                    borderWidth={2}
                    borderColor="inherit"
                    gridLevels={5}
                    gridShape="circular"
                    gridLabelOffset={15}
                    enableDots={true}
                    dotSize={8}
                    dotColor="inherit"
                    dotBorderWidth={0}
                    dotBorderColor="#ffffff"
                    // enableDotLabel={true}
                    dotLabel="value"
                    dotLabelYOffset={-12}
                    colors= {['black']}
                    colorBy=""
                    fillOpacity={0.1}
                    animate={true}
                    motionStiffness={90}
                    motionDamping={15}
                    isInteractive={true}
                    legends={[
                        {
                            "anchor": "top-left",
                            "direction": "column",
                            "translateX": -50,
                            "translateY": -40,
                            "itemWidth": 80,
                            "itemHeight": 20,
                            "itemTextColor": "#999",
                            "symbolSize": 12,
                            "symbolShape": "circle",
                            "effects": [
                                {
                                    "on": "hover",
                                    "style": {
                                        "itemTextColor": "#000"
                                    }
                                }
                            ]
                        }
                    ]}
                />
        </div>
        )
    }

    const { expandedTrack } = props || {};

    return(
        <div style= {{width: '350px', height:'350px', margin: '0 auto' }}>
                <ResponsiveRadar
                    data={[
                    {
                        "feature": "acousticness",
                        [props.expandedTrack.name]: expandedTrack.acousticness,
                        "you": props.audioFeatures[1].acousticness,
                    },
                    {
                        "feature": "danceability",
                        [props.expandedTrack.name]: expandedTrack.danceability,
                        "you": props.audioFeatures[1].danceability,
                    },
                    {
                        "feature": "duration_ms",
                        [props.expandedTrack.name]: expandedTrack.duration_ms/316600,
                        "you": props.audioFeatures[1].duration_ms/316600,
                    },
                    {
                        "feature": "energy",
                        [props.expandedTrack.name]: expandedTrack.energy,
                        "you": props.audioFeatures[1].energy,
                    },
                    // {
                    //     "feature": "instrumentalness",
                    //     [props.expandedTrack.name]: expandedTrack.instrumentalness,
                    //     "you": .61,
                    // },
                    // {
                    //     "feature": "key",
                    //     [props.expandedTrack.name]: expandedTrack.key/11,
                    //     "you": .61,
                    // },
                    {
                        "feature": "liveness",
                        [props.expandedTrack.name]: expandedTrack.liveness * 2,
                        "you": props.audioFeatures[1].liveness * 2,
                    },
                    // {
                    //     "feature": "mode",
                    //     [props.expandedTrack.name]: expandedTrack.mode,
                    //     "you": .61,
                    // },
                    // {
                    //     "feature": "speechiness",
                    //     [props.expandedTrack.name]: expandedTrack.speechiness,
                    //     "you": .61,
                    // },
                    {
                        "feature": "tempo",
                        [props.expandedTrack.name]: expandedTrack.tempo/250,
                        "you": props.audioFeatures[1].tempo/250,
                    },
                    // {
                    //     "feature": "time_sig",
                    //     [props.expandedTrack.name]: expandedTrack.time_signature/5,
                    //     "you": props.audioFeatures[1].time_signature/5,
                    // },
                    {
                        "feature": "valence",
                        [props.expandedTrack.name]: expandedTrack.valence,
                        "you": props.audioFeatures[1].valence,
                    }
                    ]}
                    keys={[
                        props.expandedTrack.name,
                        "you",
                    ]}
                    indexBy="feature"
                    maxValue="auto"
                    margin={{
                        "top": 70,
                        "right": 80,
                        "bottom": 40,
                        "left": 80
                    }}
                    curve="catmullRomClosed"
                    borderWidth={2}
                    borderColor="inherit"
                    gridLevels={5}
                    gridShape="circular"
                    gridLabelOffset={15}
                    enableDots={true}
                    dotSize={8}
                    dotColor="inherit"
                    dotBorderWidth={0}
                    dotBorderColor="#ffffff"
                    // enableDotLabel={true}
                    dotLabel="value"
                    dotLabelYOffset={-12}
                    colors= {['orange', 'black']}
                    colorBy="key"
                    fillOpacity={0.1}
                    animate={true}
                    motionStiffness={90}
                    motionDamping={15}
                    isInteractive={true}
                    legends={[
                        {
                            "anchor": "top-left",
                            "direction": "column",
                            "translateX": -50,
                            "translateY": -40,
                            "itemWidth": 80,
                            "itemHeight": 20,
                            "itemTextColor": "#999",
                            "symbolSize": 12,
                            "symbolShape": "circle",
                            "effects": [
                                {
                                    "on": "hover",
                                    "style": {
                                        "itemTextColor": "#000"
                                    }
                                }
                            ]
                        }
                    ]}
                />
        </div>
    )
}