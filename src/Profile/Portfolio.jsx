import React from 'react';
import '../main.scss';

const Portfolio = () => {
    return ( 
   <>
     <div style={{padding: "4%" , paddingTop: "0" , marginTop: "-50px" }}>
			<h2 style={{fontWeight: "1000", fontSize: "36px " , letterSpacing:"3px" , marginBottom: "60px" , textShadow: "-1px 0" }}>
				Portfolio
			</h2>
			
			<div className="row rowggg">

				<div className="profcardget1 profcardget " >
							<div className= "portfolioimg">
							<img src="/images/WEBSITE.png" alt="Portfolio2"  />
						</div>
			</div>

			<div className= "profcardget2 profcardget">
						<div className= "portfolioimg">
						<img src="/images/WEBSITE.png" alt="Portfolio2" />
				</div>
			</div>

		</div>

		<div className="row rowggg">

				<div className="profcardget1 profcardget ">
					<div className= "portfolioimg">
							<img src="/images/WEBSITE.png" alt="Portfolio2" />
					</div>
			</div>

			<div className= "profcardget2 profcardget">
				<div className= "portfolioimg">
						<img src="/images/WEBSITE.png" alt="Portfolio2" />
					</div>
			</div>

		</div>

	<div className="row rowggg">

				<div className="profcardget1 profcardget ">
					<div className= "portfolioimg">
							<img src="/images/WEBSITE.png" alt="Portfolio2" />
					</div>
			</div>

			<div className= "profcardget2 profcardget">
				<div className= "portfolioimg">
						<img src="/images/WEBSITE.png" alt="Portfolio2" />
					</div>
			</div>
		</div>

	</div>


   </>
    ) ;
}

export default Portfolio;