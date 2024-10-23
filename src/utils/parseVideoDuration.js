export const parseVideoDuration = (duration) => {
    // Replace H, M, S with colons and split into parts
    const durationParts = duration
      .replace("H", ":")
      .replace("M", ":")
      .replace("S", "")
      .split(":");
  
    console.log(durationParts); // Log the split parts for debugging
  
    // Format as HH:MM:SS
    if (durationParts.length === 3) {
      return `${durationParts[0]}:${parseInt(durationParts[1]) < 10 ? `0${durationParts[1]}` : durationParts[1]}:${parseInt(durationParts[2]) < 10 ? `0${durationParts[2]}` : durationParts[2]}`;
    }
  
    // Format as MM:SS
    if (durationParts.length === 2) {
      return `${durationParts[0]}:${parseInt(durationParts[1]) < 10 ? `0${durationParts[1]}` : durationParts[1]}`;
    }
  
    // Format as 0:SS
    if (durationParts.length === 1) {
      return `0:${parseInt(durationParts[0]) < 10 ? `0${durationParts[0]}` : durationParts[0]}`;
    }
  
    // Return empty string if format is unexpected
    return "";
  };
  