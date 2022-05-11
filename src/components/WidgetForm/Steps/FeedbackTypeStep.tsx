import React from 'react';
import {FeedbackType, feedbackTypes} from "../feedbackOptions";
import {CloseButton} from "../../index";

type FeedbackTypeStepType = {
	handleSelectFeedbackType: (type: FeedbackType ) => void
}

function FeedbackTypeStep({ handleSelectFeedbackType }:FeedbackTypeStepType) {
	return (
		<>
			<header>
				<span className={"text-xl leading-6"}>
					Deixe seu feedback
				</span>
				<CloseButton/>
			</header>
			<div className={"flex py-8 gap-2 2-full"}>
				{ Object.entries(feedbackTypes).map(([key , value]) => (
					<button
						key={key}
						className={"bg-zinc-800 rounded-lg py-5 w-24 flex-1 flex-col items-center gap-2 border-2 border-transparent focus:border-brand-500 hover:border-brand-500 focus:outline-none"}
						type={"button"}
						onClick={() => handleSelectFeedbackType(key as FeedbackType )}
					>
						<img src={value.image.source} alt={value.image.alt}/>
						<span>{value.title}</span>
					</button>
				))}
			</div>
		</>
	);
}

export default FeedbackTypeStep;