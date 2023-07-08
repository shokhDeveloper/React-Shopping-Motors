import { NavLink } from "react-router-dom";
import { Btn } from "../../../Settings";
import { InstagramOutlined, FacebookOutlined, YoutubeOutlined } from "@ant-design/icons";
import axios from "axios";
export const DefaultFooter = () => {
  const handleSub = async (event) => {
    const data = new FormData(event.target)
    const request = await axios.post(`https://formsubmit.co/shohijahonmusinkulov@gmail.com`, {
      value: data.get("email")
    })
    const response = await request.data
    console.log(response)
  }
  return (
    <footer>
      <div className="container">
        <div className="footer__items">
          <div className="footer_item">
            <h4>Подпишитесь на нашу рассылку и узнавайте о акция быстрее</h4>
            <form onSubmit={handleSub}>
                <input name="email" type="email" required placeholder="Введите ваш e-mail:" className="border-transparent" />
                <Btn className="kupit_btn">Отправить</Btn>
            </form>
          </div>
          <ul className="footer_item">
            <li> <h5>Информация</h5> </li>
            <li><NavLink to={"/О-компании"}> О компании </NavLink></li>
            <li><NavLink to={"/Контакты"}>Контакты</NavLink></li>
            <li><NavLink to={"/Акции"}>Акции</NavLink></li>
            <li><NavLink to={"/Магазины"}>Магазины</NavLink></li>
          </ul>
          <ul className="footer_item">
            <li> <h5>Информация</h5> </li>
            <li><NavLink to={"/О-компании"}> О компании </NavLink></li>
            <li><NavLink to={"/Контакты"}>Контакты</NavLink></li>
            <li><NavLink to={"/Акции"}>Акции</NavLink></li>
            <li><NavLink to={"/Магазины"}>Магазины</NavLink></li>
          </ul>
          <ul className="footer_item">
            <li> <h5>Информация</h5> </li>
            <li><NavLink to={"/О-компании"}> О компании </NavLink></li>
            <li><NavLink to={"/Контакты"}>Контакты</NavLink></li>
            <li><NavLink to={"/Акции"}>Акции</NavLink></li>
            <li><NavLink to={"/Магазины"}>Магазины</NavLink></li>
          </ul>
          <ul className="footer_item">
            <li> <h5>Информация</h5> </li>
            <li><a href="https://instagram.com"><InstagramOutlined/></a></li>
            <li><a href="https://facebook.com"><FacebookOutlined/></a></li>
            <li><a href="https://youtube.com"><YoutubeOutlined/></a></li>
            </ul>
        </div>
      </div>
    </footer>
  );
};
