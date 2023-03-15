import Wrapper from "./style"
import Logo from "../navbar/rasmlar/logo.png"
import Telegram from "../navbar/rasmlar/telegram.svg"
import Ins from "../navbar/rasmlar/instagram.svg"
import Fesubuk from "../navbar/rasmlar/fesubuk.svg"
import Yuotube from "../navbar/rasmlar/youtubee.svg"

function Navbar() {
  return (
    <Wrapper>
      <div className="container">
        <div className="logo">
          <img src={Logo} alt="" srcset="" />
        </div>
        <div className="qidiruv">
          <input type="search" name="" id="" placeholder="Qidirish..." />
        </div>
        <div className="ijtimoi_tarmoqlar">
          <div className="box_logo">
            <h2>Bizning ijtimoiy tarmoqlarimiz</h2>
            <div>
              <img src={Telegram} alt="" srcset="" />
              <img src={Ins} alt="" srcset="" />
              <img src={Fesubuk} alt="" srcset="" />
              <img src={Yuotube} alt="" srcset="" />
            </div>
          </div>
        </div>
        <div className="ariza_topshirish">
          <button>Ariza topshirish</button>
        </div>
      </div>
    </Wrapper>
  )
}
export default Navbar