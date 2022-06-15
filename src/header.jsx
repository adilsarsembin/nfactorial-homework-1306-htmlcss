import logo from "./img/react.png";
import {format} from 'date-fns';
import "./headerStyle.css"

export const Header = () => {
    const today = format(new Date(), 'dd.MM.yyyy hh:mm');
    return (
        <header>
            <div className='headerTop'>
                <div className="leftSide">
                    <img className='logoReact' src={logo}></img>
                    <input></input>
                </div>
                <div className="dateTime">
                    <p>{today}</p>
                </div>
                
            </div>
        </header>

    )
}