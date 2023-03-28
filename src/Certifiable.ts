import ICertification from "./ICertification.js"

import { Semanticable } from "@virtual-assembly/semantizer"

export default interface Certifiable {

	addCertification(certification: ICertification): void;
	getCertifications(): Promise<Array<ICertification>>
	;
	removeCertification(certification: ICertification): void;

}
