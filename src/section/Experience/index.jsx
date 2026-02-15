import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGoogle } from '@fortawesome/free-brands-svg-icons'
import { faSquareInstagram } from '@fortawesome/free-brands-svg-icons'
import picExp from '../../assets/meme.jpg'
import { useState } from "react";
import { faArrowAltCircleDown, faArrowAltCircleUp } from "@fortawesome/free-regular-svg-icons";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons/faArrowRight";
import { faArrowRightArrowLeft } from "@fortawesome/free-solid-svg-icons";


const Experience = () => {
    const [isMouseEnter, setIsMouseEnter] = useState(false);

    return (
        <div className="">
            <div className="text-primaryAccent font-semibold">Experience</div>
            <div className={`grid grid-cols-[25%_75%] rounded px-2 py-6 ${isMouseEnter['exp1'] ? "bg-gray-300" : ""}`}
                onMouseEnter={() => setIsMouseEnter({ 'exp1': true })}
                onMouseLeave={() => setIsMouseEnter({ 'exp1': false })}
            >
                <div>
                    <span className={`text-sm ${isMouseEnter['exp1'] ? "bg-gray-300" : ""}`}>
                        2024-2025
                    </span>
                    <div>
                        <img src={picExp} className="w-5/6 rounded-md border-2 border-primaryAccent" />
                    </div>
                </div>
                <div className="grid gap-y-4">
                    <div className={`text-primaryTitle text-xl font-semibold ${isMouseEnter['exp1'] ? "bg-gray-300" : ""}`}>
                        Title
                        <FontAwesomeIcon className={`text-xm ml-1 -rotate-90 ${isMouseEnter['exp1'] ? "bg-gray-300" : ""}`} icon={faArrowAltCircleUp}/>
                        </div>
                    <div className="flex gap-2 text-xl">
                        <a href="https://google.com/" target="_blank" className="hover:scale-125 hover:text-primaryTitle transition-all"><FontAwesomeIcon icon={faGoogle} /></a>
                        <a href="https://www.instagram.com/" target="_blank" className="hover:scale-125 hover:text-primaryTitle transition-all"><FontAwesomeIcon icon={faSquareInstagram} /></a>
                    </div>
                    <div className="text-sm">Description</div>
                    <div className="flex gap-6">
                        <div className={`rounded bg-primaryAccent px-4 py-1 hover:text-primaryBg ${isMouseEnter['exp1'] ? "bg-primaryAccent" : ""}`}>React</div>
                        <div className={`rounded bg-primaryAccent px-4 py-1 hover:text-primaryBg ${isMouseEnter['exp1'] ? "bg-primaryAccent" : ""}`}>Next</div>
                        <div className={`rounded bg-primaryAccent px-4 py-1 hover:text-primaryBg ${isMouseEnter['exp1'] ? "bg-primaryAccent" : ""}`}>Tailwild</div>
                    </div>
                </div>
            </div>


            <div className={`grid grid-cols-[25%_75%] rounded px-2 py-6 ${isMouseEnter['exp2'] ? "bg-gray-300" : ""}`}
                onMouseEnter={() => setIsMouseEnter({ 'exp2': true })}
                onMouseLeave={() => setIsMouseEnter({ 'exp2': false })}
            >
                <div>
                    <span className={`text-sm ${isMouseEnter['exp2'] ? "bg-gray-300" : ""}`}>
                        2024-2025
                    </span>
                    <div>
                        <img src={picExp} className="w-5/6 rounded-md border-2 border-primaryAccent" />
                    </div>
                </div>
                <div className="grid gap-y-4">
                    <div className={`text-primaryTitle text-xl font-semibold ${isMouseEnter['exp2'] ? "bg-gray-300" : ""}`}>
                        Title
                        <FontAwesomeIcon className={`text-xm ml-1 -rotate-90 ${isMouseEnter['exp2'] ? "bg-gray-300" : ""}`} icon={faArrowAltCircleUp}/>
                        </div>
                    <div className="flex gap-2 text-xl">
                        <a href="https://google.com/" target="_blank" className="hover:scale-125 hover:text-primaryTitle transition-all" ><FontAwesomeIcon icon={faGoogle} /></a>
                        <a href="https://www.instagram.com/" target="_blank" className="hover:scale-125 hover:text-primaryTitle transition-all" ><FontAwesomeIcon icon={faSquareInstagram} /></a>
                    </div>
                    <div className="text-sm">Description</div>
                    <div className="flex gap-6">
                        <div className={`rounded bg-primaryAccent px-4 py-1 hover:text-primaryBg ${isMouseEnter['exp2'] ? "bg-primaryAccent" : ""}`}>React</div>
                        <div className={`rounded bg-primaryAccent px-4 py-1 hover:text-primaryBg ${isMouseEnter['exp2'] ? "bg-primaryAccent" : ""}`}>Next</div>
                        <div className={`rounded bg-primaryAccent px-4 py-1 hover:text-primaryBg ${isMouseEnter['exp2'] ? "bg-primaryAccent" : ""}`}>Tailwild</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Experience;