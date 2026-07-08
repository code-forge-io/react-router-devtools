import bosnian from "../../resources/locales/bs/common.json"
import english from "../../resources/locales/en/common.json"
import korean from "../../resources/locales/ko/common.json"

const languages = ["en", "bs", "ko"] as const
export const supportedLanguages = [...languages]
export type Language = (typeof languages)[number]

type Resource = {
	common: typeof english
}

export type Namespace = keyof Resource

export const resources: Record<Language, Resource> = {
	en: {
		common: english,
	},
	bs: {
		common: bosnian,
	},
	ko: {
		common: korean,
	},
}

declare module "i18next" {
	export interface CustomTypeOptions {
		defaultNS: "common"
		fallbackNS: "common"
		// custom resources type
		resources: Resource
	}
}
