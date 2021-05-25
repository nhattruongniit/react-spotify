
// components
import Sliders from 'components/molecules/Silders';

function App() {
  return (
    <div className="container">
      <aside className="sidebar">
        <div className="w-60 h-16 flex px-6 fixed -top-0">
          <img className="sidebar__logo" src="assets/images/logo-dark.svg" alt="Zing MP3" />
        </div>
        <nav className="sidebar__nav">
          <ul className="sidebar__list">
            <li>
              <a href="#title" title="Cá Nhân" className="sidebar__link">
                <i className="icon ic-library" />
                <span className="ml-2.5">Cá Nhân</span>
              </a>
            </li>
            <li className="is-active">
              <a href="#title" title="Khám Phá" className="sidebar__link">
                <i className="icon ic-mn-home" />
                <span className="ml-2.5">Khám Phá</span>
              </a>
            </li>
            <li>
              <a href="#title" title="#zingchart" className="sidebar__link">
                <i className="icon ic-mn-zingchart" />
                <span className="ml-2.5">#zingchart</span>
              </a>
            </li>
            <li>
              <a href="#title" title="Theo Dõi" className="sidebar__link">
                <i className="icon ic-feed" />
                <span className="ml-2.5">Theo Dõi</span>
              </a>
            </li>
            <li className="my-4 sidebar__divide" />
            <li>
              <a href="#title" title="Nhạc mới" className="sidebar__link">
                <i className="icon ic-mn-song" />
                <span className="ml-2.5">Nhạc mới</span>
              </a>
            </li>
            <li>
              <a href="#title" title="Thể Loại" className="sidebar__link">
                <i className="icon ic-mn-catalogue" />
                <span className="ml-2.5">Thể Loại</span>
              </a>
            </li>
            <li>
              <a href="#title" title="Top 100" className="sidebar__link">
                <i className="icon ic-mn-top100" />
                <span className="ml-2.5">Top 100</span>
              </a>
            </li>
            <li>
              <a href="#title" title="MV" className="sidebar__link">
                <i className="icon ic-mn-mv" />
                <span className="ml-2.5">MV</span>
              </a>
            </li>
          </ul>
        </nav>
      </aside>

      <main>
        <div className="topbar">
          <div className="topbar__left">
            <button className="topbar__button">
              <i className="icon ic-back" />
            </button>
            <button className="topbar__button is-disabled">
              <i className="icon ic-forward" />
            </button>
            <div className="topbar__search">
              <button className="topbar__button">
                <i className="icon icon--xlarge ic-search" />
              </button>
              <input className="topbar__input" type="text" placeholder="Nhập tên bài hát, nghệ sĩ hoặc MV ..." />
            </div>
          </div>
          <div className="topbar__right">
            <a href="#upload" className="tooltip mr-2.5" title="upload">
              <i className="icon icon--xlarge ic-upload" />
            </a>
            <a href="#settings" className="tooltip mr-2.5" title="settings">
              <i className="icon icon--xlarge ic-settings" />
            </a>
            <a href="#settings" className="tooltip" title="settings">
              <img src="https://cdn.iconscout.com/icon/free/png-256/avatar-366-456318.png" title="Avatar" alt="Avatar" />
            </a>
          </div>
        </div>
        <div className="mainpage">
          <div className="mainpage__container">
            <div className="mainpage__content">
              <Sliders />
              <div className="channel">
                <div className="title text-primary mb-2.5">Có Thể Bạn Sẽ Thích Đấy</div>
                <div className="channel__carousel -mx-3.5">
                  <div className="card px-3.5">
                    <div className="card__image">
                      <img src="https://photo-resize-zmp3.zadn.vn/w320_r1x1_jpeg/cover/c/5/f/c/c5fc615c43215c6b72676f42767855ee.jpg" alt="" />
                    </div>
                    <h4 className="my-2">
                      <a href="#top">
                        Top 100 Nhạc Electronic/Dance Âu Mỹ Hay Nhất
                      </a>
                    </h4>
                  </div>
                  <div className="card px-3.5">
                    <div className="card__image">
                      <img src="https://photo-resize-zmp3.zadn.vn/w320_r1x1_jpeg/cover/1/8/8/e/188e45098127c7f75cc4b715bf01bcd6.jpg" alt="" />
                    </div>
                    <h4 className="my-2">
                      <a href="#top">
                        Top 100 Nhạc Rap Việt Nam Hay Nhất
                      </a>
                    </h4>
                  </div>
                  <div className="card px-3.5">
                    <div className="card__image">
                      <img src="https://photo-resize-zmp3.zadn.vn/w320_r1x1_jpeg/cover/2/d/d/0/2dd000bcd585f01edd235c0c3f21c2f9.jpg" alt="" />
                    </div>
                    <h4 className="my-2">
                      <a href="#top">
                        Top 100 Nhạc Hàn Quốc Hay Nhất
                      </a>
                    </h4>
                  </div>
                  <div className="card px-3.5">
                    <div className="card__image">
                      <img src="https://photo-resize-zmp3.zadn.vn/w320_r1x1_jpeg/cover/b/f/b/f/bfbfbdb38f8ad75d575228b2d72e4246.jpg" alt="" />
                    </div>
                    <h4 className="my-2">
                      <a href="#top">
                        Top 100 Bài Hát Nhạc Trẻ Hay Nhất
                      </a>
                    </h4>
                  </div>
                  <div className="card px-3.5">
                    <div className="card__image">
                      <img src="https://photo-resize-zmp3.zadn.vn/w320_r1x1_jpeg/cover/e/9/f/6/e9f6c74d1651a3dcf0be456822f1eefd.jpg" alt="" />
                    </div>
                    <h4 className="my-2">
                      <a href="#top">
                        Top 100 Pop Âu Mỹ Hay Nhất
                      </a>
                    </h4>
                  </div>
                </div>
              </div>
              <div className="channel">
                <div className="title text-primary mb-2.5">Nghe Gần Đây</div>
                <div className="channel__carousel -mx-3.5">
                  <div className="card px-3.5">
                    <div className="card__image">
                      <img src="https://photo-resize-zmp3.zadn.vn/w320_r1x1_jpeg/cover/8/0/1/3/80137e6c72aadcab2c2f901a3e2c4c79.jpg" alt="" />
                    </div>
                    <h4 className="my-2">
                      <a href="#top">
                        Rap Việt Mới Nhất
                      </a>
                    </h4>
                  </div>
                  <div className="card px-3.5">
                    <div className="card__image">
                      <img src="https://photo-resize-zmp3.zadn.vn/w320_r1x1_jpeg/cover/b/f/b/f/bfbfbdb38f8ad75d575228b2d72e4246.jpg" alt="" />
                    </div>
                    <h4 className="my-2">
                      <a href="#top">
                        Top 100 Bài Hát Nhạc Trẻ Hay Nhất
                      </a>
                    </h4>
                  </div>
                  <div className="card px-3.5">
                    <div className="card__image">
                      <img src="https://photo-resize-zmp3.zadn.vn/w320_r1x1_jpeg/cover/1/8/8/e/188e45098127c7f75cc4b715bf01bcd6.jpg" alt="" />
                    </div>
                    <h4 className="my-2">
                      <a href="#top">
                        Top 100 Nhạc Rap Việt Nam Hay Nhất
                      </a>
                    </h4>
                  </div>
                </div>
              </div>
              <div className="channel">
                <div className="title text-primary mb-2.5">Radio Nổi Bật</div>
                <div className="channel__carousel -mx-3.5">
                  <div className="card px-3.5">
                    <div className="card__image">
                      <img src="https://photo-playlist-zmp3.zadn.vn/s3/v3/radio?src=HavwqN7EYmrDGr6VBegSG044GDzXmDv02GGItsdVZGrLLa68F8xS30PJGuazZzXR000JtMhOYmXLLaU88jUPNraG5ODfbT1iKniGg6-2d28K2btaA9FSCbuRNROenjnW4Xb4vIhAtM96HqVcAStTOHCM5U5yoemqG1OKio6UYIqI1K2_Pyo2Pb1CSwHWmBLW6n4viosCyd5RNtFoBORoUrjLR_axZgDyKm0z_3_JftG22JptRTAY9WnSRg5WqVCZNHGtusFTjN5EKsErDOBlmVo8-jhB17Ga-YbgjEsb0hHLzJ5jB5fPRHlMrV5WIG8nN82Mitq&cv=1&size=thumb/240_240" alt="" />
                    </div>
                    <h4 className="my-2">
                      <a href="#top">
                        Mixtape Đừng Như Người Dưng
                      </a>
                    </h4>
                    <h3 className="text-xs text-secondary">
                      Nhật Phong
                    </h3>
                  </div>
                  <div className="card px-3.5">
                    <div className="card__image">
                      <img src="https://photo-playlist-zmp3.zadn.vn/v3/radio?src=HavwqN7EYmrDGr6VBegSG044GDyymDP0LGH9tsZNrru72qcDEjY2NWTH5DTfZue5L0P1ZMc8tWG8KqA5VzASKWGL48uqaDLX3XuLfJA7cIz93rZfTPRPR0CPMErrbzbeI4qIkt2NtpzCIKJgTfEFQKiQ5-rnb8jaIqeTiI30XYyJMq-zPfADP54IVAPXdhfY6aysiIpI_NDQ2dobBD7z9be9DQOmswDpNrOzfJ_PgY9U0MQcCzkkSbi5EF9dtV8ZN1WsusBHj75FNsArD8xkIOpUnzcHG12gOiMUJlY2NfQ3HT9IezuPm3eoVG&cv=1&size=thumb/240_240" alt="" />
                    </div>
                    <h4 className="my-2">
                      <a href="#top">
                        Mixtape Lệ Duyên Tình
                      </a>
                    </h4>
                    <h3 className="text-xs text-secondary">
                      K-ICM
                    </h3>
                  </div>
                  <div className="card px-3.5">
                    <div className="card__image">
                      <img src="https://photo-playlist-zmp3.zadn.vn/s3/v3/radio?src=HavwqN7EYmrDGr6VBegSG044GDzlmDf01WH1tsZRtrfI1aUCRT_O2mDGHOzlZ8fTL5OGY3lPY05I1nRL9OR80bv1HDvkn84nL4f1zMZJpNyJMmovByADE5aO3B0lmuqnHn0JudlDYcj15X3hAf-FFKj44RWXduSmIH0UitN9rIr6KXo_CvlUPWGRBwGqb-bWJqPbitdRhd4F0I-dUTkkTWy1PlStYF1pN5i_-Zs3zt85NsxoRDQc8rG8FQeyrA8f1n5cwJdOv7iKLZA_RuU-IbjCGvjxXx_AcVzuMEmsef75k2uRCdq&cv=1&size=thumb/240_240" alt="" />
                    </div>
                    <h4 className="my-2">
                      <a href="#top">
                        Mixtape Em Say Rồi
                      </a>
                    </h4>
                    <h3 className="text-xs text-secondary">
                      Hương Ly
                    </h3>
                  </div>
                  <div className="card px-3.5">
                    <div className="card__image">
                      <img src="https://photo-playlist-zmp3.zadn.vn/s1/v3/radio?src=HavwqN7EYmrDGr6VBegSG044GDzgmDv0K0H8tplVXLTG11E2Fjo815S67um_Y8bOLG4VtMxPrLbKKnYD8zB6MbWLIePea8zfKXvFhMw7moSL3mBXAPQ3DLz50hKfduDXI4GSvoQVqJD74HpdVCABO10PHxGhbz5W5qr6w7wKsNPD3n3aECRIFGz68_y_okKxH1jfw7A6eYe4N2FxSjIYBGGERVuxqAPzLmvi_ZtSztTML6trQuto9m1MRAuyZVek04W-xZw1l7mJ3sguQDxcGD2FwT3Af_KEingT3YnGNTbLzHBJet3RGTQv0OZ_Duq2Cdq&cv=1&size=thumb/240_240" alt="" />
                    </div>
                    <h4 className="my-2">
                      <a href="#top">
                        Mixtape Hạ Còn Vương Nắng
                      </a>
                    </h4>
                    <h3 className="text-xs text-secondary">
                      Kido
                    </h3>
                  </div>
                  <div className="card px-3.5">
                    <div className="card__image">
                      <img src="https://photo-playlist-zmp3.zadn.vn/v3/radio?src=HavwqN7EYmrDGr6VBegSG044GDzWm8n0NGGQtpoDq5TTKXpMO8wA05y74TDWYenNMbGIr3FTYWLPLHRMBjJ80LKJHDrbbe4oNnX1zcE1pNmO2Gow992DEr8Q3EWaburf71z5x237tcaT7qFWSStVCnmK5R5qdOan7Kz2iNoKYIzF3q2zEiQ2P0r6SwOzohLYHXiviN26ydC62tEWSDJo9WPPFw9fX_0g1rjh_6g4yoq7M3wjE8EcAbODRQqvqVj-KnG_lctTlIn0KsleEuBd6w7TQMzertn6KXo4CBinY-w5-XTyy3FDjTczGJyoVG&cv=1&size=thumb/240_240" alt="" />
                    </div>
                    <h4 className="my-2">
                      <a href="#top">
                        Mixtape Cô Độc Vương 2
                      </a>
                    </h4>
                    <h3 className="text-xs text-secondary">
                      Thiên Tú
                    </h3>
                  </div>
                </div>
              </div>
              <div className="channel">
                <div className="title text-primary mb-2.5">Sôi Động Cùng EDM</div>
                <div className="channel__carousel -mx-3.5">
                  <div className="card px-3.5">
                    <div className="card__image">
                      <img src="https://photo-resize-zmp3.zadn.vn/w320_r1x1_jpeg/cover/f/9/5/1/f951a16b840ab15fde37383c42b7596b.jpg" alt="" />
                    </div>
                    <h4 className="my-2">
                      <a href="#top">
                        Deep House Hits
                      </a>
                    </h4>
                  </div>
                  <div className="card px-3.5">
                    <div className="card__image">
                      <img src="https://photo-resize-zmp3.zadn.vn/w320_r1x1_jpeg/cover/8/f/c/b/8fcbe8f6b383e7b57adb29896089ce27.jpg" alt="" />
                    </div>
                    <h4 className="my-2">
                      <a href="#top">
                        EDM Now
                      </a>
                    </h4>
                  </div>
                  <div className="card px-3.5">
                    <div className="card__image">
                      <img src="https://photo-resize-zmp3.zadn.vn/w320_r1x1_jpeg/cover/5/9/e/6/59e65639be900128d85521396771e1ce.jpg" alt="" />
                    </div>
                    <h4 className="my-2">
                      <a href="#top">
                        Dance Pop
                      </a>
                    </h4>
                  </div>
                  <div className="card px-3.5">
                    <div className="card__image">
                      <img src="https://photo-resize-zmp3.zadn.vn/w320_r1x1_jpeg/cover/5/1/5/3/51538ab5b46988dc94e10705fb5d974c.jpg" alt="" />
                    </div>
                    <h4 className="my-2">
                      <a href="#top">
                        Dance Rewind
                      </a>
                    </h4>
                  </div>
                  <div className="card px-3.5">
                    <div className="card__image">
                      <img src="https://photo-resize-zmp3.zadn.vn/w320_r1x1_jpeg/cover/2/b/5/d/2b5d44213fe4ec71cc673f92c20c21b7.jpg" alt="" />
                    </div>
                    <h4 className="my-2">
                      <a href="#top">
                        Nhạc Việt Tropical Hay Nhất
                      </a>
                    </h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

export default App;
