import "./App.css";
import img1 from "./img/img1.jpeg"
import img2 from "./img/img2.jpg"
import img3 from "./img/img3.jpeg"
import img4 from "./img/img4.jpeg"
import img5 from "./img/img5.jpeg";


const pictures = [
		{id: 1, src: img1, text: 'HEY'},
		{id: 2, src: img2, text: "LET'S"},
		{id: 3, src: img3, text: "GIVE"},
		{id: 4, src: img4, text: "ALL"},
		{id: 5, src: img5, text: "YOU CAN"}
	]

export const Content = () => {
    return (
        <div className="mainContainer">
			 {pictures.map((picture) => (
					<div key={picture.id} className="picture">
						<img className={"picture__img"} src={picture.src} alt = 'Slow internet'/>
						<center className="picture__text">
							{picture.text}
						</center>
					</div>
				))
			 }
		</div>
    )
}