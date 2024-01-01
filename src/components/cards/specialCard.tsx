import RoundButton from "../roundButton.tsx";

interface SpecialProps {
    price:number,
    time:string,
    width:number,
    height:number,
    image:string,
    onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
    heroText:string,
    list1:string,
    list2:string,
    list3:string,
    list4?:string,
    ml?:number,
    top:number

}

function SpecialCard({image,height,width,heroText,price,time,top,ml,list1,list2,list3,list4,onClick}:SpecialProps) {
    console.log(ml)
    return (
        <div className={`h-[${height}vh] shadow z-[1] w-[${width}rem] overflow-hidden relative`}>
            <div className={"absolute text-6xl text-shadow-sm shadow-blue-950 top-7 left-5 leading-relaxed text-tertiary font-bold font-kadwa"}>Rs {price}</div>
            <div className={"absolute text-5xl text-shadow-sm shadow-blue-950 top-[8rem] left-5 leading-relaxed text-tertiary font-normal font-kadwa"}>{time}</div>
            <img src={image} className={`object-cover  h-[${height}vh] rounded-3xl`} alt=""/>
            <div className={`absolute z-[3] top-[${top}rem]  left-14 ml-[${ml}rem]`}>
                <RoundButton color={"quaternary"} fontColor={"white"} width={"30rem"} height={"10rem"} text={heroText}/>
            </div>
        </div>
    );
}

export default SpecialCard;