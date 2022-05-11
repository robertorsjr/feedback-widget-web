import React, {useState} from 'react';
import {CloseButton} from "../../index";
import {FeedbackType, feedbackTypes} from "../feedbackOptions";
import {ArrowLeft} from "phosphor-react";
import ScreenshotButton from "../ScreenshotButton";

type FeedbackContentStepProps = {
	feedbackType: FeedbackType
	onResetFeedback: () => void
}

function FeedbackContentStep({ feedbackType, onResetFeedback }:FeedbackContentStepProps) {
	const [screenshot, setScreenshot] = useState<string | null>(null)
	const feedbackTypeInfo = feedbackTypes[feedbackType]

	return (
		<>
			<header>
				<button type={"button"} className={"top-5 left-5 absolute text-zinc-400 hover:text-zinc-100"} onClick={onResetFeedback}>
					<ArrowLeft weight={"bold"} className={"w-4 h-4"}/>
				</button>

				<span className={"text-xl leading-6 flex items-center gap-2"}>
						<img className={"w-6 h-6"} src={feedbackTypeInfo.image.source} alt={feedbackTypeInfo.image.alt}/>
					{feedbackTypeInfo.title}
				</span>

				<CloseButton/>
			</header>

				<form className={"my-4 w-full"}>
					<textarea
						className={"min-w-[304px] w-full min-h-[112px] text-sm placeholder-zinc-400 text-zinc-100 border-zinc-600 bg-transparent rounded-md focus:border-brand-500 focus:ring-brand-500 focus:ring-1 focus:outline resize-none scrollbar scrollbar-thumb-zinc-700 scrollbar-track-transparent scrollbar-thin"}
						placeholder={"Conte com detalhes o que esta acontecendo..."}
					/>
					<footer className={"flex gap-2 mt-2"}>
						<ScreenshotButton
							onScreenshotTook={setScreenshot}
							screenshot={screenshot}
						/>

						<button
							type={"submit"}
							className={"p-2 bg-brand-500 rounded-md border-transparent flex-1 justify-center items-center flex text-sm hover:bg-brand-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-zinc-900 focus:ring-brand-500 transition-colors"}
						>
							Enviar feedback
						</button>
					</footer>
				</form>
		</>
	);
}

export default FeedbackContentStep;