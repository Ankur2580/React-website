import React from 'react';
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";


const Work = () => {
    return (
        <>
        <section className="pagebody">
            <article style={{padding:"4%" , paddingBottom: "0" , margin:"30px 0px" }}>
			<div>
				<h2 style={{fontWeight: "1000" , fontSize: "36px" , letterSpacing:"3px" , marginBottom: "20px" , textShadow: "-1px 0" }}>
					Work Experience
				</h2>
			</div>

			<div className="container-fluid">

				<ul className="timeline">
					<li>
						<div className="timeline-badge"><img src="/images/dot.png" /> </div>
						<div className="timeline-panel">
							<div className="timeline-heading">
								<h4 className="timeline-title">Web Developer At Microsoft Inc.</h4>

							</div>
							<div className="timeline-body">
								<p>Mussum ipsum cacilds, vidis litro abertis. Consetis adipiscings elitis. Pra lá , depois divoltis porris, paradis. Paisis, filhis, espiritis santis. Mé faiz elementum girarzis, nisi eros vermeio, in elementis mé pra quem é amistosis quis leo. Manduma pindureta quium dia nois paga. Sapien in monti palavris qui num significa nadis i pareci latim. Interessantiss quisso pudia ce receita de bolis, mais bolis eu num gostis.</p>
							</div>
							<p><small className="text-muted">https://example.com</small></p>
						</div>
					</li>
					<li className="timeline-inverted">
						<div className="timeline-badge "><img src="/images/dot.png" /></div>
						<div className="timeline-panel">          
							<div className="timeline-heading">
								<h4 className="timeline-title">Mussum ipsum cacilds</h4>
							</div>
							<div className="timeline-body">
								<p>Mussum ipsum cacilds, vidis litro abertis. Consetis adipiscings elitis. Pra lá , depois divoltis porris, paradis. Paisis, filhis, espiritis santis. Mé faiz elementum girarzis, nisi eros vermeio, in elementis mé pra quem é amistosis quis leo. Manduma pindureta quium dia nois paga. Sapien in monti palavris qui num significa nadis i pareci latim. Interessantiss quisso pudia ce receita de bolis, mais bolis eu num gostis.</p>
							</div>
							<p><small className="text-muted">https://example.com</small></p>
						</div>
					</li>
					<li>
						<div className="timeline-badge danger"><img src="/images/dot.png" /></div>
						<div className="timeline-panel">
							<div className="timeline-heading">
								<h4 className="timeline-title">Mussum ipsum cacilds</h4>
							</div>
							<div class="timeline-body">
								<p>Mussum ipsum cacilds, vidis litro abertis. Consetis adipiscings elitis. Pra lá , depois divoltis porris, paradis. Paisis, filhis, espiritis santis. Mé faiz elementum girarzis, nisi eros vermeio, in elementis mé pra quem é amistosis quis leo. Manduma pindureta quium dia nois paga. Sapien in monti palavris qui num significa nadis i pareci latim. Interessantiss quisso pudia ce receita de bolis, mais bolis eu num gostis.</p>
							</div>
							<p><small class="text-muted">https://example.com</small></p>
						</div>
					</li>
				</ul>
			</div>

		</article>

        </section>


        </>
    );
}

export default Work;