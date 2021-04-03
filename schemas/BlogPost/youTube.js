export default {
  name: "youTube",
  title: "YouTube Embed:",
  type: "object",
  fields: [
    {
      name: "videoTitle",
      title: "Video Title:",
      description: "What is the title of this video?",
      type: "string",
    },
    {
      name: "videoId",
      title: "Video Id:",
      description:
        "Just the video Id: watch?v=oPVte6aMprI - The part after the v=",
      type: "string",
    },
  ],
}
