import { NavLink } from "react-router-dom";
import { Btn } from "../../../Settings";
import { InstagramOutlined, FacebookOutlined, YoutubeOutlined } from "@ant-design/icons";
export const DefaultFooter = ({type}) => {
  // const handleSub = async (event) => {
  //   const data = new FormData(event.target)
  //   const request = await axios.post(`https://formsubmit.co/shohijahonmusinkulov@email.com`, {
  //     name: data.get("name"),
  //     email: data.get("email")
  //   })
  //   const response = await request.data
  //   console.log(response)
  // }
  return (
    <footer>
      <div className="container">
        <div className="footer__items">
          <div className="footer_item">
            <h4>Подпишитесь на нашу рассылку и узнавайте о акция быстрее</h4>
            <form action="https://formsubmit.co/shohijahonmusinkulov@email.com" method="Post">
                <input name="email" type="email"  placeholder="Введите ваш e-mail:" className="border-transparent" />
                 <Btn type="submit" className="kupit_btn">Отправить</Btn>
            </form>
          </div>
          <ul className="footer_item">
            <li> <h5>Информация</h5> </li>
           {type ? (
            <>
            <li><NavLink to={"/О-компании"}> О компании </NavLink></li>
             <li><NavLink to={"/Магазины"}>Магазины</NavLink></li>
             <li><NavLink to={"/Доставка_и_оплата"}>Доставка и оплата</NavLink></li>
            </>
           ):(
            <>
            <li><NavLink to={"/О-компании"}> О компании </NavLink></li>
             <li><NavLink to={"/Контакты"}>Контакты</NavLink></li>
             <li><NavLink to={"/Акции"}>Акции</NavLink></li>
             <li><NavLink to={"/Магазины"}>Магазины</NavLink></li>
       
            </>
           
           )}
          </ul>
          <ul className="footer_item">
            <li> <h5>Информация</h5> </li>
            {type ? (
            <>
            <li><NavLink to={"/О-компании"}> О компании </NavLink></li>
             <li><NavLink to={"/Магазины"}>Магазины</NavLink></li>
             <li><NavLink to={"/Доставка_и_оплата"}>Доставка и оплата</NavLink></li>
            </>
           ):(
            <>
            <li><NavLink to={"/О-компании"}> О компании </NavLink></li>
             <li><NavLink to={"/Контакты"}>Контакты</NavLink></li>
             <li><NavLink to={"/Акции"}>Акции</NavLink></li>
             <li><NavLink to={"/Магазины"}>Магазины</NavLink></li>
       
            </>
           
           )}
          </ul>
         
          <ul className="footer_item">
            <li><a href="https://youtube.com"><YoutubeOutlined/></a></li>
            <li><a href="https://instagram.com"><InstagramOutlined/></a></li>
            <li><a href="https://facebook.com"><FacebookOutlined/></a></li>
            <li><a href="https://youtube.com"><YoutubeOutlined/></a></li>
            </ul>
        </div>
        <div className="footer__bottom">
          <div className="footer_bottom__child">
            <p>Договор оферты</p>
          </div>
          <div className="footer_bottom__child">
            <p>Политика обработки персональных данных</p>
          </div>
        </div>
      </div>
    </footer>
  );
};
