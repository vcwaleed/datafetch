
import Link from "next/link"
import "./main.css"
export default function Home(){
return(

<>
<p className="paragraph">Welcome To Our WebSite </p>


<Link href='/products' className="Link">Go to Detail page Client side Rendring </Link>
<Link href='/productlistserver' className="Link">Go to Detail page Server side Rendring </Link>

</>
)

}