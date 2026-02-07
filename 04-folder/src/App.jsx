import React from 'react'
import {Bookmark} from 'lucide-react'
import CompanyCards from './components/CompanyCards'
const App = () => {
  let arr = [
    {
      img: "https://imgs.search.brave.com/we4J9Nce1CapScBva4Ygw_EXcYv5Jcson02x0CePSjs/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly8xMDAw/bG9nb3MubmV0L3dw/LWNvbnRlbnQvdXBs/b2Fkcy8yMDE2LzEw/L0FtYXpvbi1Mb2dv/LTIwMDAtNTAweDI4/MS5wbmc",
      company: "Amazon",
      time: "5 days ago",
      title: "Senior UI/Ux Designer",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
      button: "Apply Now"
    },
    {
      img: "https://imgs.search.brave.com/we4J9Nce1CapScBva4Ygw_EXcYv5Jcson02x0CePSjs/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly8xMDAw/bG9nb3MubmV0L3dw/LWNvbnRlbnQvdXBs/b2Fkcy8yMDE2LzEw/L0FtYXpvbi1Mb2dv/LTIwMDAtNTAweDI4/MS5wbmc",
      company: "Amazon",
      time: "5 days ago",
      title: "Senior UI/Ux Designer",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
      button: "Apply Now"
    },
    {
      img: "https://imgs.search.brave.com/we4J9Nce1CapScBva4Ygw_EXcYv5Jcson02x0CePSjs/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly8xMDAw/bG9nb3MubmV0L3dw/LWNvbnRlbnQvdXBs/b2Fkcy8yMDE2LzEw/L0FtYXpvbi1Mb2dv/LTIwMDAtNTAweDI4/MS5wbmc",
      company: "Amazon",
      time: "5 days ago",
      title: "Senior UI/Ux Designer",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
      button: "Apply Now"
    },
    {
      img: "https://imgs.search.brave.com/we4J9Nce1CapScBva4Ygw_EXcYv5Jcson02x0CePSjs/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly8xMDAw/bG9nb3MubmV0L3dw/LWNvbnRlbnQvdXBs/b2Fkcy8yMDE2LzEw/L0FtYXpvbi1Mb2dv/LTIwMDAtNTAweDI4/MS5wbmc",
      company: "Amazon",
      time: "5 days ago",
      title: "Senior UI/Ux Designer",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
      button: "Apply Now"
    },
    {
      img: "https://imgs.search.brave.com/we4J9Nce1CapScBva4Ygw_EXcYv5Jcson02x0CePSjs/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly8xMDAw/bG9nb3MubmV0L3dw/LWNvbnRlbnQvdXBs/b2Fkcy8yMDE2LzEw/L0FtYXpvbi1Mb2dv/LTIwMDAtNTAweDI4/MS5wbmc",
      company: "Amazon",
      time: "5 days ago",
      title: "Senior UI/Ux Designer",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
      button: "Apply Now"
    },
    {
      img: "https://imgs.search.brave.com/we4J9Nce1CapScBva4Ygw_EXcYv5Jcson02x0CePSjs/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly8xMDAw/bG9nb3MubmV0L3dw/LWNvbnRlbnQvdXBs/b2Fkcy8yMDE2LzEw/L0FtYXpvbi1Mb2dv/LTIwMDAtNTAweDI4/MS5wbmc",
      company: "Amazon",
      time: "5 days ago",
      title: "Senior UI/Ux Designer",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
      button: "Apply Now"
    }
  ]
  return (
    <div>
      <h1>Props Drilling Methods</h1>
      <div className='parent'>
        {arr.map((elem, idx) => {
          return (
            <CompanyCards key={idx} img={elem.img} company={elem.company} time={elem.time} title={elem.title} description={elem.description} button={elem.button} />  
          )
        })}
      </div>
    </div>

  )
}

export default App