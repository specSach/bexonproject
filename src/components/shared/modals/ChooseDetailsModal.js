"use client";

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";

const initialFormState = {
	name: "",
	email: "",
	phone: "",
};

const ChooseDetailsModal = ({ item, isOpen, onClose }) => {
	const [formData, setFormData] = useState(initialFormState);
	const [isSubmitted, setIsSubmitted] = useState(false);
	const [isMounted, setIsMounted] = useState(false);

	useEffect(() => {
		setIsMounted(true);
	}, []);

	useEffect(() => {
		if (!isOpen) return;

		const previousOverflow = document.body.style.overflow;
		const handleKeyDown = (event) => {
			if (event.key === "Escape") {
				onClose?.();
			}
		};

		document.body.style.overflow = "hidden";
		document.addEventListener("keydown", handleKeyDown);

		return () => {
			document.body.style.overflow = previousOverflow;
			document.removeEventListener("keydown", handleKeyDown);
		};
	}, [isOpen, onClose]);

	useEffect(() => {
		if (!isOpen) return;
		setFormData(initialFormState);
		setIsSubmitted(false);
	}, [isOpen, item?.id]);

	if (!isMounted || !isOpen || !item) return null;

	const handleChange = (event) => {
		const { name, value } = event.target;
		setFormData((prev) => ({
			...prev,
			[name]: value,
		}));
	};

	const handleSubmit = (event) => {
		event.preventDefault();
		setIsSubmitted(true);
	};

	return createPortal(
		<div className="choose-details-modal" role="dialog" aria-modal="true" onClick={onClose}>
			<div className="choose-details-dialog" onClick={(event) => event.stopPropagation()}>
				<button
					type="button"
					className="choose-details-close"
					aria-label="\u0417\u0430\u043a\u0440\u044b\u0442\u044c \u043e\u043a\u043d\u043e"
					onClick={onClose}
				>
					&times;
				</button>

				<div className="choose-details-body">
					<div className="choose-details-intro">
						{item.title ? <h3 className="choose-details-title">{item.title}</h3> : null}
						<p className="choose-details-desc">{item.description}</p>
						{item.manufacturer ? (
							<p className="choose-details-manufacturer">
								<strong>
									{"\u041f\u0440\u043e\u0438\u0437\u0432\u043e\u0434\u0438\u0442\u0435\u043b\u044c:"}
								</strong>{" "}
								{item.manufacturer}
							</p>
						) : null}
					</div>

					{item.table?.columns?.length && item.table?.rows?.length ? (
						<div className="choose-details-table-wrap">
							<table className="choose-details-table">
								<thead>
									<tr>
										{item.table.columns.map((column) => (
											<th key={`${item.id}-${column}`}>{column}</th>
										))}
									</tr>
								</thead>
								<tbody>
									{item.table.rows.map((row, rowIdx) => (
										<tr key={`${item.id}-row-${rowIdx}`}>
											{row.map((cell, cellIdx) => (
												<td key={`${item.id}-cell-${rowIdx}-${cellIdx}`}>{cell}</td>
											))}
										</tr>
									))}
								</tbody>
							</table>
						</div>
					) : null}

					<div className="choose-details-form-wrap">
						<h4 className="choose-details-form-title">
							{"\u041e\u0441\u0442\u0430\u0432\u044c\u0442\u0435 \u0437\u0430\u044f\u0432\u043a\u0443"}
						</h4>
						<p className="choose-details-form-subtitle">
							{"\u041c\u044b \u0441\u0432\u044f\u0436\u0435\u043c\u0441\u044f \u0441 \u0432\u0430\u043c\u0438 \u0438 \u043f\u043e\u0434\u0431\u0435\u0440\u0435\u043c \u043e\u043f\u0442\u0438\u043c\u0430\u043b\u044c\u043d\u044b\u0439 \u0432\u0430\u0440\u0438\u0430\u043d\u0442."}
						</p>
						<form className="choose-details-form" onSubmit={handleSubmit}>
							<div className="choose-details-form-grid">
								<label className="choose-details-field">
									<span>{"\u0418\u043c\u044f"}</span>
									<input
										type="text"
										name="name"
										value={formData.name}
										onChange={handleChange}
										placeholder="Иван"
										required
									/>
								</label>
								<label className="choose-details-field">
									<span>{"\u041f\u043e\u0447\u0442\u0430"}</span>
									<input
										type="email"
										name="email"
										value={formData.email}
										onChange={handleChange}
										placeholder="glsrtap@gmail.com"
										required
									/>
								</label>
								<label className="choose-details-field">
									<span>{"\u0422\u0435\u043b\u0435\u0444\u043e\u043d"}</span>
									<input
										type="tel"
										name="phone"
										value={formData.phone}
										onChange={handleChange}
										placeholder="+7 (___) ___-__-__"
										required
									/>
								</label>
							</div>
							<div className="choose-details-form-actions">
								<button type="submit" className="choose-details-submit">
									{"\u041e\u0442\u043f\u0440\u0430\u0432\u0438\u0442\u044c \u0437\u0430\u044f\u0432\u043a\u0443"}
								</button>
								{isSubmitted ? (
									<p className="choose-details-success">
										{
											"\u0421\u043f\u0430\u0441\u0438\u0431\u043e! \u0417\u0430\u044f\u0432\u043a\u0430 \u0437\u0430\u0444\u0438\u043a\u0441\u0438\u0440\u043e\u0432\u0430\u043d\u0430."
										}
									</p>
								) : null}
							</div>
						</form>
					</div>
				</div>
			</div>
		</div>,
		document.body
	);
};

export default ChooseDetailsModal;
