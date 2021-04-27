import React from "react";

export default function LessonVideo({videoUrl}) {
    return (
        <iframe width="100%"
                height="400"
                src={videoUrl}
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
        />
    )

}
