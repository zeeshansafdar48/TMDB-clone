export default function MoviePlayer() {
  return (
    <div className="w-full max-w-4xl mx-auto p-4 bg-black">
      <video
        controls
        className="w-full rounded-lg"
        // src="https://ia804509.us.archive.org/35/items/ikaos-som-dragon-ball-complete-001-153-r2j-dragon-box-multi-audio-v4_202301/Dragon%20Ball.001.DBOX.480p.x264-iKaos%20%5Bv4%5D%20%5BCED9F4DB%5D.mp4"
        src="https://assets.afcdn.com/video49/20210722/v_645516.m3u8"
      >
        Your browser does not support the video tag.
      </video>
    </div>
  );
}
