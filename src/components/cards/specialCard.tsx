
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
    className?:string
}

function SpecialCard({image,height,width,className,heroText,price,time,list1,list2,list3,list4,onClick}:SpecialProps) {
    return (
        <div className={`h-[${height}vh] shadow w-[${width}rem] overflow-hidden relative`}>
            <img src={image} className={`object-cover h-[${height}vh] rounded-3xl`} alt=""/>
        </div>
    );
}

export default SpecialCard;