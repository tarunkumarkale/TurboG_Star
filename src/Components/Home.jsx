import React from 'react'
import  photo from '../assets/ok.webp'
  import '../Styles/Home.scss'
  import { AiFillAmazonCircle, AiOutlineGoogle,AiOutlineYoutube,AiOutlineInstagram} from 'react-icons/ai';   // go react icon website samach jayega
const Home = () => {
  return (
    <>
      <div className='home' id='home'>
        <main>
          <h1>TurboG Star</h1>
          <p>Solution to all your problems</p>
        </main>
      </div>
    <div className='home2'>
        <img src={photo} alt="ok" />

        <div>
          <p> we are your one and only solution to the problem you face
             every day we are leading tech  company   whose aim is to incresase problem solving ability in children
          </p>
        </div>
    </div>
<div className='home3' id='about'>
<div>
  <h1>who we are?</h1>
  <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Necessitatibus nemo eum iure obcaecati similique minus sequi, consequatur porro laudantium fugit earum vero exercitationem error deleniti, maxime consectetur delectus repudiandae facere rerum quisquam beatae rem distinctio harum soluta! Atque deserunt molestias repellendus asperiores quia reiciendis doloribus illo praesentium quasi alias nobis provident soluta consequuntur, repellat architecto deleniti saepe temporibus voluptatibus eum. Tempore, natus nisi, quisquam, laborum modi magnam velit recusandae placeat non asperiores id error voluptatem aliquid provident iste sint perferendis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis iusto sequi perspiciatis provident sit repellat assumenda. Quibusdam itaque, quasi nam, deserunt neque, tempore porro excepturi dolores at qui placeat deleniti?</p>
</div>

</div>

<div className="home4"  id='brands'>
  <div>
    <h1>Brands</h1>
    <article>
      <div  style={{animationDelay:'0.5s'}}>
  <AiOutlineGoogle/>
        <p>Google</p>

      </div>
      <div  style={{animationDelay:'0.2s'}}>
  <AiFillAmazonCircle/>
        <p >Amazon</p>

      </div>
      <div  style={{animationDelay:'0.2s'}}>

  <AiOutlineInstagram/>
        <p >Instagram</p>

      </div>
      <div  style={{animationDelay:'0.7s'}}>
  <AiOutlineYoutube/>
        <p >Youtube</p>

      </div>
    </article>
  </div>
</div>

    </>
  )
}

export default Home
