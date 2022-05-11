import bugImageUrl from "../../assets/bug.svg";
import ideaImageUrl from "../../assets/idea.svg";
import thoughtImageUrl from "../../assets/thought.svg";

export type FeedbackType = keyof typeof feedbackTypes

export const feedbackTypes = {
	BUG:{
		title: "Problema",
		image:{
			source: bugImageUrl,
			alt: 'Imagem de um inseto',
		}
	},
	IDEA:{
		title: "Ideia",
		image:{
			source: ideaImageUrl,
			alt: 'imagem de uma lampada',
		} ,
	},
	OTHER:{
		title: "Outro",
		image:{
			source: thoughtImageUrl,
			alt: 'imagem de um balao de pensamento',
		} ,
	},
}