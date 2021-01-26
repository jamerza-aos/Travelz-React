const Header = () => {
    return ( 
        <main className="HomeMain">
            <img className="scoar" src="../assets/img/scoar.png" alt=""/>
            <img className="plus" src="../assets/img/plus.png" alt=""/>

            {/* <Navigation /> */}
            <section className="HomeSection">
                <div className="Explore">
                    <h1>Explore and Travel</h1>
                    <h4>Holiday finder</h4>
                    <img src="../assets/img/Line.png" alt=""/>
                    <br/>
                    <div className="SS">
                    <select name="Location" id="select">
                        <option value="volvo">Location</option>
                        <option value="london">London</option>
                    </select>

                    <select name="Activity" id="select1">
                        <option value="Activity">Activity</option>
                        <option value="Somthing">Somthing</option>
                    </select>
                     <br/>
                    <select name="Grade" id="select">
                        <option value="Grade">Grade </option>
                        <option value="Grade1">Grade1</option>
                    </select>

                    <select name="Date" id="select1">
                        <option value="Date">Date</option>
                        <option value="date">Date1</option>
                    </select>
                    </div>
                    <button id="EA">Explore</button>

                    <img className="scor1" src="../assets/img/scoar.png" alt=""/>
                </div>


                <div className="headDiv">
                <img src="../assets/img/thousand.png" alt=""/>
                </div>

    
            </section>
        </main>
    );
}
 
export default Header;