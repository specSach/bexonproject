import FunfactSingle from "@/components/shared/funfact/FunfactSingle";

const Funfact1 = () => {
	return (
		<div className="tj-countup-section">
			<div className="container">
				<div className="row">
					<div className="col-12">
						<div className="countup-wrap">
							<div className="countup-item">
								<FunfactSingle currentValue={12} symbol={"+"} />
								<span className="count-text">
									{"\u043b\u0435\u0442 \u043f\u043e\u0441\u0442\u0430\u0432\u043e\u043a \u0441\u0442\u0440\u043e\u043f \u0434\u043b\u044f \u0431\u0438\u0437\u043d\u0435\u0441\u0430"}
								</span>
								<span
									className="count-separator"
									style={{
										backgroundImage: "url('/images/shape/separator.svg')",
									}}
								></span>
							</div>

							<div className="countup-item">
								<FunfactSingle currentValue={30} symbol={"+"} />
								<span className="count-text">
									{
										"\u0442\u0438\u043f\u043e\u0440\u0430\u0437\u043c\u0435\u0440\u043e\u0432 \u0441\u0442\u0440\u043e\u043f \u0432 \u043d\u0430\u043b\u0438\u0447\u0438\u0438"
									}
								</span>
								<span
									className="count-separator"
									style={{
										backgroundImage: "url('/images/shape/separator.svg')",
									}}
								></span>
							</div>

							<div className="countup-item">
								<FunfactSingle currentValue={98} symbol={"%"} />
								<span className="count-text">
									{"\u043e\u0442\u0433\u0440\u0443\u0437\u043e\u043a \u0432\u044b\u043f\u043e\u043b\u043d\u044f\u0435\u043c \u0432 \u0441\u0440\u043e\u043a"}
								</span>
								<span
									className="count-separator"
									style={{
										backgroundImage: "url('/images/shape/separator.svg')",
									}}
								></span>
							</div>

							<div className="countup-item">
								<FunfactSingle currentValue={8} symbol={"+"} />
								<span className="count-text">
									{"\u043e\u0442\u0440\u0430\u0441\u043b\u0435\u0439, \u0433\u0434\u0435 \u043f\u0440\u0438\u043c\u0435\u043d\u044f\u044e\u0442 \u043d\u0430\u0448\u0438 \u0441\u0442\u0440\u043e\u043f\u044b"}
								</span>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Funfact1;
