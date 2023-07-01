export default function Travel() {
    return (
        
        <div>
            <h1>Contoso Travel Innovation</h1>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2y4IOFD5FgL0gtwvXy7EaSS-TCEOaRYSwhA&usqp=CAU" style={{float: "right", width:"60%", height:"50%"}} alt="..."></img>
            <div className="left">
            <button style={{backgroundColor: "orange", cursor: "pointer"}}>Featured</button>
            <h3 style={{color: "orange"}}>Introducing the Contoso Travel<br/> Innovation program</h3>
            <p>I'm really excited to announce that our Executive Leadership Team(ELT)<br/> has approved our proposal to expand our Contoso Travel division<br/> further with a new offering for Adventure Travel</p>
            </div>
            <img src="https://img.pikbest.com/origin/09/10/59/305pIkbEsTrgX.jpg!w700wp" alt="..." style={{float: "left", width: "50%", height: "10%"}}/>
            <div className="right">
            <button style={{backgroundColor: "orange", cursor: "pointer"}}>New</button>
            <h3 style={{color: "orange"}}>Where We Travel</h3>
            <p>our list of adventure travel destination is always growing but<br/> chech this page regularly to see the most up-to-date information.<br/> please remember that while this page does show currently. </p>
            </div>
        </div>
    )
}