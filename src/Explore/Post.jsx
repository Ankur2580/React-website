import React from 'react'
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
const Post = () => {
    return (
      <>

<div className="container-fluid">
                

                <div className="row  p-2">
           <div className="col-lg-7 col-md-7 col-12 pb-2 mb-2 column-2 " id="expcol">
				<h3 style={{color: "grey" , marginBottom: "20px" }}>Explore<br /></h3>
				<div className="postbox " >
					<div className="mb-2">
						<img src="images\user_pic.svg"
						style={{border: "2px solid black" , borderRadius: "50%" , margin: "15px" }} class="mb-2 ml-1" />
						Eminem Mishra

					</div>

					<p>
						
						<textarea name="Text1" placeholder="What do you have in mind? Show Your work?" cols="80" rows="3" className= "postarea" autofocus="autofocus"></textarea>
					</p>
					<div> <img src="images\Instagraam.svg" class="mb-1 ml-3" /> Photos/Videos
					</div>
				</div>

				

				<div className="container-fluid posts">
					<div className="row mb-2 ">
						

						<div className="col-lg-1 col-md-1 col-sm-1 col-1">
							<img src="images\user_pic.svg"
							style={{border: "1px solid black" , borderRadius: "50%" , marginLeft: "2px" }} className="mb-4" />

						</div>

						

						<div className="col-lg-10 col-md-10 col-sm-10 col-10">
							<div className="ml-2  mb-4">
								<h6 style={{fontWeight: "100px" }}>Eminem Mishra </h6>
								<h6 style={{color: "grey" , fontWeight: "50px" }}>Mon, 4 Sep</h6>
							</div>

							<div>
								<p style={{color: "grey" , marginTop: "15px" }}>
									Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa officia minima,
									quas
									animi qui iure. Aliquid, aliquam. Vero facere fugit enim sit ad quo dolorem
									dolor?
									Odit adipisci quod beatae nostrum architecto explicabo, repellat, voluptatum cum

								</p>
							</div>

							<div>
								<img src="images\Img_2@2x.png" class="img-fluid" />
							</div>


						</div>



						

						<div className="col-lg-1 col-md-1 col-sm-1 col-xs-1 ">
							<svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-three-dots-vertical"
							fill="currentColor" xmlns="http://www.w3.org/2000/svg">
							<path fill-rule="evenodd"
							d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z" />
						</svg>
					</div>
				</div>




			</div>
		</div>
   </div>

   </div>

      </>
    );
}

export default Post;