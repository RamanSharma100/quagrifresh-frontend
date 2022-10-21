const VideoSection = () => {
  return (
    <section id="videoSection">
      <div className="video_area video_bg zigzag_bg_1 zigzag_bg_2 ">
        <div className="video_area_inner">
          <div className="container">
            <div className="row">
              <div className="col-xl-12">
                <div className="video_text">
                  <div className="info">
                    <div className="info_inner">
                      <h4>Watch Video</h4>
                      <p>You will love our execution</p>
                    </div>
                    <div className="icon_video">
                      <a
                        className="popup-video"
                        href="https://www.youtube.com/watch?v=HWnXId_Zg4k"
                      >
                        <i className="fa fa-play"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;
