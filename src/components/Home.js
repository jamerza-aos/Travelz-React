import Header from './Header'

const Home = () => {
    return ( 
        
        <main>
             <Header />
        <article className='newWay'>
            <div>
            <img src="../assets/img/Thousand2.png" alt=""/>
            </div>
            <div className='newText'>
                <div><img src="../assets/img/scoar.png" alt=""/></div>
                <h1>A new way to explore the <br/> world </h1>
                <h4>For decades travellers have reached for Lonely Planet <br/> books when looking to plan and execute their perfect <br/>
                   trip, but now, they can also let Lonely Planet Experiences <br/> lead the way</h4>
                   <div id='ring'><img src="../assets/img/plus.png" alt=""/></div>
                   <button id='btn'>Learn more</button>
            </div>
        </article>

   </main>
    );
}
 
export default Home;