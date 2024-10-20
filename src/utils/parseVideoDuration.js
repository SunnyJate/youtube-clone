// This file contains the parseVideoDuration function
export const parseVideoDuration = (duration) => {
    console.log(duration); // Logs the duration to the console
    const durationParts = duration
    .replace("H",":")
    .replace("M",":")
    .replace("S","")

    console.log(durationParts);

    if (durationParts.length===3){
        return `${durationParts[0]}:${parseInt(durationParts[1])<10 ? `0${durationParts[1]}`:durationParts[1]
        }:${parseInt(durationParts[2])<10 ? `0${durationParts[2]}`:duration [2]
        }`;
    }
    if (durationParts.length===2){
        return `${durationParts[0]}:${parseInt(durationParts[1])<10 ? `0${durationParts[1]}`:durationParts[1]
        }`
    }
    if (durationParts.length===1){
        return `0:${parseInt(durationParts[0])<10 ? `0${durationParts[0]}`:durationParts[0]
        }`
    }
    return "";
  };
  